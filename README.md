# Neuro LearnAble — “Learning, your way.”

> **Learn any topic through accessible explanations, visual learning, and interactive mini-quizzes.**

Neuro LearnAble is a lightweight, responsive, and accessible educational web application built with pure vanilla **HTML5**, **CSS3**, and **ES6+ JavaScript**. It requires zero complex build steps or TypeScript compilation and is 100% compatible with **GitHub Pages** static hosting right out of the box.

---

##  Key Features

1. **Welcoming Home Screen**:
   - Clean, accessible topic search bar with instant autocomplete clearing.
   - Quick curiosity discovery chips for popular topics (Photosynthesis, Black Holes, AI, Human Heart, Plate Tectonics, Flight, Water Cycle, and more).
   - "Surprise Me!" random exploration button.

2. **Three Learning Modes**:
   -  **Simple Explanation**: Clear, jargon-free essence in plain English.
   -  **Step-by-Step**: Chronological, numbered breakdown of stages and processes.
   -  **Everyday Examples**: Memorable real-world analogies and everyday connections.

3. **Visual Learning & Concept Diagrams**:
   - Interactive, beautiful educational SVG illustrations and diagrams tailored to the topic.
   - Dynamic concept mapping for custom topics illustrating components and relationships.

4. **Interactive 3-Question Mini-Quizzes**:
   - Self-paced multiple-choice questions.
   - Immediate visual and textual feedback on each answer.
   - Clear explanations explaining why answers are correct or incorrect.
   - Progress bar, score counter, and celebration badge.
   - "Review Answers" accordion to inspect past questions and explanations.
   - "Retake Quiz" and "Try Another Topic" buttons.

5. **Accessibility by Design**:
   - **Text-to-Speech**: Listen to lessons read aloud with pause/resume controls using the Web Speech API.
   - **Adjustable Font Sizes**: Instantly switch between Normal (A), Large (A+), and Extra Large (A++) text sizes.
   - **High Contrast Mode**: Dark mode high-contrast palette for enhanced readability.
   - **Full Keyboard Navigation**: Skip links, accessible focus indicators, and ARIA attributes throughout.

6. **Dual-Mode AI & Offline Fallback**:
   - **In AI Studio / Node environments**: Connects to the server-side Gemini 3.8 Flash model without exposing secret API keys.
   - **On GitHub Pages / Static Hosting**: Automatically operates with the extensive built-in educational curriculum and adaptive generator offline with zero external configuration needed.

---

## Project Structure

```text
├── index.html            # Main semantic HTML5 entry point
├── style.css             # Vanilla CSS3 styles (calm blue & purple palette, responsive)
├── script.js             # Pure ES6+ JavaScript application logic & offline engine
├── manifest.json         # Web App Manifest for PWA compliance
├── README.md             # Documentation and GitHub Pages publishing guide
├── assets/
│   ├── icon-192.svg      # 192x192 SVG application icon
│   └── icon-512.svg      # 512x512 SVG application icon
└── metadata.json         # Environment metadata
```

> **Note**: No TypeScript, TSX, JSX, or complex build configurations are required. All asset paths use relative linking (`./style.css`, `./script.js`, `./assets/...`) to guarantee compatibility with GitHub Pages subpaths.

---

## How to Run Locally

You can run Neuro LearnAble using any local HTTP server or by opening `index.html` directly in your modern web browser.

### Option 1: Using Python's Built-in Server (Recommended)
```bash
# In the project directory:
python3 -m http.server 8000
```
Then open `http://localhost:8000` in your web browser.

### Option 2: Using Node / npx serve
```bash
npx serve .
```

### Option 3: Development Server (AI Studio / Vite)
```bash
npm install
npm run dev
```

---

## How to Publish to GitHub Pages

Because Neuro LearnAble uses plain HTML, CSS, and JavaScript with relative file paths, deploying it to GitHub Pages takes under two minutes:

1. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new public repository (e.g., `neuro-learnable`).

2. **Push the Files to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Neuro LearnAble"
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/neuro-learnable.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - In your GitHub repository, click on **Settings** (top tab).
   - In the left sidebar, click **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Under **Branch**, select `main` and root folder `/ (root)`, then click **Save**.

4. **Visit Your Live Web App**:
   - Within 1–2 minutes, GitHub Pages will deploy your site at:
     `https://<YOUR-USERNAME>.github.io/learnable/`
   - Everything works out of the box with zero server configuration!

---

## Security & Privacy Policy

- **No Secret Keys in Client Code**: Neuro LearnAble never exposes private API keys in client-side source code.
- **Offline & Independent**: When running statically on GitHub Pages, the application runs cleanly using the built-in verified curriculum and client-side educational engine without transmitting personal data.

---

## 📄 License

Apache-2.0. Built with care for learners everywhere.
