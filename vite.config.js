import { defineConfig } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  server: {
    port: 3000,
    host: '0.0.0.0',
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
  plugins: [
    {
      name: 'learnable-ai-api',
      configureServer(server) {
        // Simple body parser & API route
        server.middlewares.use('/api/generate', async (req, res) => {
          if (req.method !== 'POST') {
            res.statusCode = 405;
            res.end(JSON.stringify({ error: 'Method Not Allowed' }));
            return;
          }

          let body = '';
          req.on('data', chunk => {
            body += chunk;
          });

          req.on('end', async () => {
            try {
              const parsed = body ? JSON.parse(body) : {};
              const topic = (parsed.topic || '').trim();
              const apiKey = process.env.GEMINI_API_KEY || parsed.userApiKey;

              if (!topic) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: 'Topic is required' }));
                return;
              }

              if (!apiKey) {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ fallback: true, message: 'No server API key set. Use local generator.' }));
                return;
              }

              const ai = new GoogleGenAI({ apiKey });
              const prompt = `You are Neuro LearnAble, an expert, accessible educator whose motto is "Learning, your way."
Generate a comprehensive, clear, encouraging learning module for the topic: "${topic}".
Output ONLY valid JSON (no markdown formatting, no code fences, no extra text) matching this schema:
{
  "topic": "${topic}",
  "tagline": "A short, memorable 1-sentence essence of the topic",
  "simpleExplanation": "A plain-language, jargon-free explanation that anyone can easily understand. Friendly and engaging, around 2-3 paragraphs.",
  "stepByStep": [
    { "step": 1, "title": "Short title", "description": "Clear explanation of this phase or component" },
    { "step": 2, "title": "Short title", "description": "Clear explanation of this phase or component" },
    { "step": 3, "title": "Short title", "description": "Clear explanation of this phase or component" },
    { "step": 4, "title": "Short title", "description": "Clear explanation of this phase or component" }
  ],
  "everydayExamples": [
    { "analogy": "Memorable Real-World Analogy 1", "description": "Relatable comparison using everyday items or experiences" },
    { "analogy": "Memorable Real-World Analogy 2", "description": "Another relatable real-life connection" }
  ],
  "keyTakeaways": [
    "Key takeaway point 1",
    "Key takeaway point 2",
    "Key takeaway point 3"
  ],
  "visualConcept": {
    "title": "Diagram Title",
    "theme": "science or technology or nature or society or general",
    "nodes": [
      { "id": "1", "label": "Key Concept 1", "sub": "Brief detail", "color": "#3b82f6" },
      { "id": "2", "label": "Key Concept 2", "sub": "Brief detail", "color": "#6366f1" },
      { "id": "3", "label": "Key Concept 3", "sub": "Brief detail", "color": "#8b5cf6" },
      { "id": "4", "label": "Key Concept 4", "sub": "Brief detail", "color": "#10b981" }
    ],
    "flowDescription": "How concept 1 connects to 2, 3, and 4."
  },
  "quiz": [
    {
      "question": "Clear, accessible multiple choice question 1?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 0,
      "explanation": "Helpful explanation why this answer is correct."
    },
    {
      "question": "Clear, accessible multiple choice question 2?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 1,
      "explanation": "Helpful explanation why this answer is correct."
    },
    {
      "question": "Clear, accessible multiple choice question 3?",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctIndex": 2,
      "explanation": "Helpful explanation why this answer is correct."
    }
  ]
}`;

              const response = await ai.models.generateContent({
                model: 'gemini-3.8-flash',
                contents: prompt,
                config: {
                  responseMimeType: 'application/json',
                },
              });

              const text = response.text || '';
              // Sanitize if markdown ticks slipped in
              const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
              const parsedData = JSON.parse(cleanedText);

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, data: parsedData, source: 'ai' }));
            } catch (err) {
              console.error('Gemini generation error:', err);
              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ fallback: true, error: err.message || 'Generation failed' }));
            }
          });
        });
      },
    },
  ],
});
