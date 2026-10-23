/**
 * Neuro LearnAble — "Learning, your way."
 * Accessible, Responsive Educational Web App
 * Pure ES6+ JavaScript (GitHub Pages compatible)
 */

// ============================================================================
// 1. Built-in Comprehensive Educational Curriculum & Fallbacks
// ============================================================================

const CURRICULUM_DATABASE = {
  photosynthesis: {
    topic: "Photosynthesis",
    tagline: "How plants transform sunlight and air into food and fresh oxygen.",
    simpleExplanation: `Photosynthesis is nature's ultimate solar power recipe. Just like how we eat food to get energy to run and play, plants need energy to grow. But instead of going to a grocery store, plants make their own food right inside their leaves!

All a plant needs are three simple ingredients: sunlight from above, water from the soil through its roots, and carbon dioxide (a gas found in the air that humans exhale). Using special green solar catchers called chlorophyll inside leaf cells, the plant mixes these ingredients together.

The result is delicious plant sugar (called glucose) that fuels the plant's growth, plus pure oxygen, which the plant kindly breathes back out into the air for humans and animals to breathe!`,
    stepByStep: [
      {
        step: 1,
        title: "Catching the Sunlight",
        description: "Green microscopic solar panels called chloroplasts (packed with chlorophyll) capture light energy from the sun."
      },
      {
        step: 2,
        title: "Drinking Water from Roots",
        description: "The plant pulls water (H₂O) up from the soil through its stem, splitting it into hydrogen and releasing oxygen gas."
      },
      {
        step: 3,
        title: "Taking in Air (CO₂)",
        description: "Tiny pores on the underside of leaves called stomata open up to drink in carbon dioxide from the surrounding breeze."
      },
      {
        step: 4,
        title: "Cooking Glucose & Oxygen",
        description: "Inside the leaf cells, sunlight fuses carbon and hydrogen together into glucose sugar, releasing fresh oxygen into our atmosphere."
      }
    ],
    everydayExamples: [
      {
        analogy: "The Solar-Powered Bakery",
        description: "Imagine a bakery that runs entirely on sunlight. Sunlight powers the oven, flour is the carbon dioxide from the air, water is the tap water, and the fresh warm loaves of bread are the glucose. As a sweet bonus, the bakery blows clean, fresh oxygen out the chimney!"
      },
      {
        analogy: "Nature's Planet-Wide Air Purifier",
        description: "Every time living creatures breathe out 'used air' (carbon dioxide), green plants and trees absorb it, scrub it clean, and pump back out crisp, breathable oxygen for all living things."
      }
    ],
    keyTakeaways: [
      "Plants need three key ingredients: Sunlight, Water, and Carbon Dioxide.",
      "Chlorophyll is the green pigment in leaves that absorbs sunlight energy.",
      "The outputs of photosynthesis are Glucose (plant food) and Oxygen (which we breathe)."
    ],
    visualTheme: "photosynthesis",
    quiz: [
      {
        question: "What is the green pigment in leaves that absorbs light energy from the sun?",
        options: ["Hemoglobin", "Chlorophyll", "Melanin", "Keratin"],
        correctIndex: 1,
        explanation: "Chlorophyll is the green pigment inside plant chloroplasts that traps light energy to power the photosynthesis reaction."
      },
      {
        question: "Which gas do plants take in from the atmosphere to make their food?",
        options: ["Carbon Dioxide (CO₂)", "Helium", "Pure Nitrogen", "Ozone"],
        correctIndex: 0,
        explanation: "Plants breathe in carbon dioxide through tiny leaf openings called stomata to harvest carbon for building sugars."
      },
      {
        question: "What essential gas is released into the atmosphere as a byproduct of photosynthesis?",
        options: ["Methane", "Argon", "Oxygen (O₂)", "Carbon Monoxide"],
        correctIndex: 2,
        explanation: "When plants split water molecules during photosynthesis, they release oxygen gas, which supports human and animal respiration."
      }
    ]
  },

  "how black holes work": {
    topic: "Black Holes",
    tagline: "Cosmic gravity wells where matter is squeezed so tightly that nothing, not even light, can escape.",
    simpleExplanation: `A black hole is one of the most mysterious and fascinating wonders of the universe. Imagine packing an entire giant star—millions of times heavier than planet Earth—into a tiny space smaller than the tip of a pencil. 

Because so much mass is squished into such an unimaginably small point, its gravitational pull becomes overwhelmingly strong. Just like Earth pulls you back down when you jump, a black hole pulls everything nearby toward its center.

Around every black hole is an invisible boundary line called the Event Horizon. Once anything crosses this cosmic line—a comet, a spacecraft, or even a beam of light traveling at 300,000 kilometers per second—it can never turn around or escape!`,
    stepByStep: [
      {
        step: 1,
        title: "A Giant Star Runs Out of Fuel",
        description: "A supermassive star (many times larger than our sun) burns through its nuclear fuel over billions of years."
      },
      {
        step: 2,
        title: "Catastrophic Supernova Collapse",
        description: "Without outward pressure from fusion, gravity wins. The core collapses inward in seconds while outer layers explode outward."
      },
      {
        step: 3,
        title: "Formation of the Singularity",
        description: "All the star's core matter collapses into an infinitely dense, microscopic center known as a gravitational singularity."
      },
      {
        step: 4,
        title: "The Event Horizon Boundary",
        description: "An invisible sphere of no return forms around the core. Light gets bent and swallowed, casting a distinct dark cosmic shadow."
      }
    ],
    everydayExamples: [
      {
        analogy: "The Cosmic Bathtub Drain",
        description: "Think of water swirling down a whirlpool drain in a giant bathtub. Far away from the drain, a toy duck can paddle away easily. But if the duck gets too close to the whirlpool's edge, the current is too swift to swim back up!"
      },
      {
        analogy: "A Bowling Ball on a Foam Trampoline",
        description: "If you place a super-heavy lead ball in the middle of a trampoline, it makes a deep, steep funnel. Any marble rolled across the fabric will naturally curve and roll down toward the center."
      }
    ],
    keyTakeaways: [
      "A black hole forms when a massive dying star collapses under its own immense gravity.",
      "The Event Horizon is the point of no return where escape velocity exceeds the speed of light.",
      "Black holes do not roam around vacuuming space; they only pull things that wander too close."
    ],
    visualTheme: "blackhole",
    quiz: [
      {
        question: "What is the boundary around a black hole beyond which nothing can escape?",
        options: ["The Asteroid Belt", "The Event Horizon", "The Ozone Layer", "The Solar Crest"],
        correctIndex: 1,
        explanation: "The Event Horizon is the cosmic threshold of a black hole where gravitational pull is so extreme that even light cannot escape."
      },
      {
        question: "Why cannot light escape from inside a black hole?",
        options: [
          "It gets too cold inside",
          "Black holes are painted black",
          "The escape velocity exceeds the speed of light",
          "There is no electricity in space"
        ],
        correctIndex: 2,
        explanation: "Because gravity is so intense, you would need to travel faster than the speed of light (300,000 km/s) to escape, which the laws of physics forbid."
      },
      {
        question: "What kind of astronomical object usually creates a stellar-mass black hole?",
        options: ["A collapsing massive star", "A colliding asteroid", "A frozen comet", "A full moon"],
        correctIndex: 0,
        explanation: "Stellar black holes form when giant stars run out of nuclear fuel and collapse under their own gravity during a supernova."
      }
    ]
  },

  "artificial intelligence": {
    topic: "Artificial Intelligence",
    tagline: "Teaching computers to recognize patterns, learn from examples, and solve problems like humans.",
    simpleExplanation: `Artificial Intelligence (often called AI) is a way of teaching computer programs to learn and make decisions, rather than just following rigid, line-by-line instructions.

Normally, when programmers write software, they give the computer very strict rules: 'If this button is clicked, open this window.' But imagine trying to write rules for how to recognize a cat in a photo! A cat can be sitting, jumping, fluffy, short-haired, orange, black, or hiding behind a pillow. Writing rules for every possible cat would be impossible!

Instead, AI works by showing the computer millions of pictures labeled 'cat' and 'not cat'. Over time, the computer figures out its own patterns—whiskers, pointy ears, paw shapes—and learns to recognize cats on its own!`,
    stepByStep: [
      {
        step: 1,
        title: "Collecting Training Data",
        description: "The AI is fed vast collections of examples, such as photos, sentences, audio clips, or medical scans."
      },
      {
        step: 2,
        title: "Finding Patterns (Neural Networks)",
        description: "Layered digital calculations test guesses and gradually discover recurring patterns across the data."
      },
      {
        step: 3,
        title: "Tuning and Correcting Mistakes",
        description: "Every time the AI makes an incorrect prediction, algorithms tweak internal settings (called weights) to improve accuracy."
      },
      {
        step: 4,
        title: "Applying Knowledge to New Situations",
        description: "Once trained, the AI can analyze brand new images or text it has never seen before and make accurate predictions."
      }
    ],
    everydayExamples: [
      {
        analogy: "Learning to Ride a Bicycle",
        description: "Nobody learns to ride a bicycle by reading an instruction booklet with 500 rules. You get on, wobble, lean too far, correct your balance, and try again. Your brain learns through repeated practice and feedback—exactly how AI algorithms train!"
      },
      {
        analogy: "A Musical Ear Training Game",
        description: "At first, all violin notes might sound similar. But after listening to thousands of songs, your ear naturally identifies chords and melodies without having to measure sound frequencies with a ruler."
      }
    ],
    keyTakeaways: [
      "AI learns from vast amounts of data and examples instead of fixed, hard-coded rules.",
      "Machine learning improves its predictions through continuous trial, error, and adjustment.",
      "AI is great at pattern recognition, assisting humans in medicine, translation, science, and creativity."
    ],
    visualTheme: "ai",
    quiz: [
      {
        question: "How does modern Machine Learning primarily learn to recognize objects?",
        options: [
          "By following hard-coded if/then rules for every pixel",
          "By analyzing millions of examples and identifying recurring patterns",
          "By memorizing the dictionary word for word",
          "By taking physical photos with a digital camera"
        ],
        correctIndex: 1,
        explanation: "Machine learning algorithms discover mathematical patterns across huge datasets rather than relying on human programmers to write every rule."
      },
      {
        question: "What is the process called where an AI model adjusts its internal connections after making an error?",
        options: ["Defragmenting", "Training / Optimization", "Formatting", "Rebooting"],
        correctIndex: 1,
        explanation: "Training involves iteratively updating weights and parameters so the model gets closer to the correct answer with each attempt."
      },
      {
        question: "What is an artificial neural network loosely inspired by?",
        options: [
          "The electrical wiring in a car engine",
          "Interconnected neurons and synapses in biological brains",
          "The layout of postal mail sorting centers",
          "Telephone poles along a highway"
        ],
        correctIndex: 1,
        explanation: "Artificial neural networks are computational structures inspired by interconnected neurons in the animal and human brain."
      }
    ]
  },

  "the human heart": {
    topic: "The Human Heart",
    tagline: "The tireless muscular pump that circulates life-giving oxygen and nutrients to every cell in your body.",
    simpleExplanation: `Your heart is an extraordinary muscular pump about the size of your clenched fist. Located slightly to the left of the center of your chest, it beats approximately 100,000 times every single day—never pausing to take a vacation!

The heart's mission is simple but vital: keep blood moving continuously through your blood vessels. Your blood acts like a delivery fleet. It carries oxygen (from your lungs) and nutrients (from your food) to your brain, muscles, and organs, while carrying away waste products like carbon dioxide.

Your heart is cleverly divided into two halves: the right side collects oxygen-depleted blood from your body and sends it to your lungs for a fresh refill; the left side takes that fresh oxygenated blood and pumps it forcefully through your aorta to your entire body!`,
    stepByStep: [
      {
        step: 1,
        title: "Used Blood Arrives at the Right Atrium",
        description: "Blood that has delivered its oxygen returns through veins into the top right chamber of the heart."
      },
      {
        step: 2,
        title: "Pumping to the Lungs for Oxygen",
        description: "The right ventricle squeezes blood out through the pulmonary artery straight into the lungs to pick up fresh oxygen."
      },
      {
        step: 3,
        title: "Oxygen-Rich Blood Returns",
        description: "Refreshed bright red blood enters the left atrium and flows through the mitral valve into the powerful left ventricle."
      },
      {
        step: 4,
        title: "Powerful Push to the Whole Body",
        description: "The muscular left ventricle contracts, launching oxygen-rich blood through the aorta into an extensive highway of arteries."
      }
    ],
    everydayExamples: [
      {
        analogy: "A City's Central Water & Delivery Station",
        description: "Imagine a city water plant connected to two closed pipe loops. One loop sends cloudy water to a filtration plant (your lungs) to get purified, and the second loop pumps fresh clean water through high-pressure pipes to every home in the city (your muscles and organs)."
      },
      {
        analogy: "Squeezing a Kitchen Squeeze-Bottle",
        description: "Each heartbeat is like squeezing a flexible condiment bottle with a one-way valve: when you squeeze, liquid sprays forward; when you let go, it refills without spilling backward."
      }
    ],
    keyTakeaways: [
      "The heart has four chambers: right and left atria (top), right and left ventricles (bottom).",
      "One-way heart valves prevent blood from flowing backward during each beat.",
      "The left side pumps oxygen-rich blood to the body, while the right side sends blood to the lungs."
    ],
    visualTheme: "heart",
    quiz: [
      {
        question: "How many main chambers does a human heart have?",
        options: ["Two", "Four", "Six", "Eight"],
        correctIndex: 1,
        explanation: "The human heart has four chambers: two upper atria and two lower ventricles."
      },
      {
        question: "Where does the right side of the heart pump blood to receive fresh oxygen?",
        options: ["To the stomach", "To the kidneys", "To the lungs", "To the legs"],
        correctIndex: 2,
        explanation: "The right ventricle pumps oxygen-poor blood to the lungs, where it exchanges carbon dioxide for fresh oxygen."
      },
      {
        question: "What is the primary function of the one-way heart valves?",
        options: [
          "To cool down the blood",
          "To keep blood flowing forward and prevent backward leaks",
          "To filter out sugar",
          "To regulate body temperature"
        ],
        correctIndex: 1,
        explanation: "Heart valves act as one-way doors that open and close tightly with each beat to keep blood flowing in one direction."
      }
    ]
  },

  "plate tectonics": {
    topic: "Plate Tectonics",
    tagline: "The colossal puzzle pieces of Earth’s crust that drift, collide, and reshape continents and oceans.",
    simpleExplanation: `Earth might look like a solid, motionless ball of rock, but the outer crust we live on is actually cracked into enormous interlocking slabs called tectonic plates. Think of it like the cracked shell of a hardboiled egg!

These massive plates float atop a hot, semi-liquid layer of molten rock in Earth's mantle called the asthenosphere. Heat rising from deep inside Earth creates slow convection currents, moving the plates at about the same speed your fingernails grow—a few centimeters each year.

Over millions of years, as these plates bump into each other, pull apart, or grind past one another, they create Earth's most dramatic landscapes: towering mountain ranges like the Himalayas, deep ocean trenches, explosive volcanoes, and earthquakes!`,
    stepByStep: [
      {
        step: 1,
        title: "Deep Mantle Heat Convection",
        description: "Heat from Earth's core creates slow circular churning currents in the hot, plastic-like mantle rock."
      },
      {
        step: 2,
        title: "Plates Drifting on the Mantle",
        description: "Dozens of rigid crustal plates float atop these currents, creeping slowly across the planet's surface."
      },
      {
        step: 3,
        title: "Plate Boundaries Interaction",
        description: "Plates meet at boundaries: colliding (convergent), pulling apart (divergent), or sliding sideways (transform)."
      },
      {
        step: 4,
        title: "Geological Events and Landforms",
        description: "Collisions push up mountains, divergent rifts create new oceans, and sliding plates release energy as earthquakes."
      }
    ],
    everydayExamples: [
      {
        analogy: "Cracked Ice on a Heated Pond",
        description: "Imagine a frozen pond where the ice has cracked into giant sheets. If warm springs boil underneath, the current causes the ice sheets to slowly jostle, bump together (forming ridges), or separate (exposing open water)."
      },
      {
        analogy: "Bumper Cars in Super Slow Motion",
        description: "If bumper cars moved at one inch per year, you wouldn't notice the collision in an afternoon, but after 50 million years, crumpled metal would stack up into a giant mountain!"
      }
    ],
    keyTakeaways: [
      "Earth's crust is divided into tectonic plates that float on the warmer, ductile mantle beneath.",
      "Heat convection currents deep within the Earth drive the slow movement of tectonic plates.",
      "Earthquakes, volcanoes, and mountain ranges occur predominantly along plate boundaries."
    ],
    visualTheme: "tectonics",
    quiz: [
      {
        question: "What driving force causes Earth's tectonic plates to move slowly over millions of years?",
        options: [
          "Ocean waves and tides",
          "Convection currents of hot rock in the mantle",
          "Strong atmospheric hurricane winds",
          "Gravitational pull of Jupiter"
        ],
        correctIndex: 1,
        explanation: "Heat from Earth's deep interior drives convection currents in the mantle, carrying the tectonic plates on top."
      },
      {
        question: "What geological feature typically forms when two continental plates collide head-on?",
        options: ["Deep underwater trenches", "Mountain ranges", "Coral reefs", "Desert sand dunes"],
        correctIndex: 1,
        explanation: "When continental plates collide, the crust buckles and folds upward, creating towering mountain chains like the Himalayas."
      },
      {
        question: "What happens along a 'transform' plate boundary when plates grind past each other and slip?",
        options: ["Earthquakes", "Ice ages", "Solar flares", "Tornadoes"],
        correctIndex: 0,
        explanation: "When locked tectonic plates suddenly slip past each other at transform faults (like the San Andreas Fault), the energy released causes earthquakes."
      }
    ]
  },

  "how airplanes fly": {
    topic: "How Airplanes Fly",
    tagline: "Balancing four fundamental aerodynamic forces to lift tons of metal effortlessly into the clouds.",
    simpleExplanation: `How does an airplane weighing hundreds of tons float smoothly through thin air? It all comes down to a harmonious balance between four invisible physical forces: Lift, Weight, Thrust, and Drag.

To fly forward, powerful jet engines or propellers produce Thrust, overcoming the resistance of air (Drag). As the airplane zooms forward, air rushes over the specially curved wings (called airfoils). 

Because the top of the wing is curved and the bottom is flatter, air flows faster over the top. According to Bernoulli's principle, faster-moving air creates lower pressure above the wing, while higher pressure air pushes up from below. This pressure difference creates Lift—the magical upward force that hoists the entire airplane into the sky!`,
    stepByStep: [
      {
        step: 1,
        title: "Generating Engine Thrust",
        description: "Engines push backward on the air, accelerating the plane forward down the runway at high speed."
      },
      {
        step: 2,
        title: "Air Splits Around the Wing Airfoil",
        description: "The wing's curved shape splits rushing air, sending it flowing rapidly over the curved upper surface."
      },
      {
        step: 3,
        title: "Creating Pressure Difference (Lift)",
        description: "Lower air pressure forms above the wing while higher pressure pushes underneath, producing upward lift."
      },
      {
        step: 4,
        title: "Achieving Balanced Flight",
        description: "When Lift equals Weight (Gravity) and Thrust equals Drag, the plane cruises smoothly and steadily at altitude."
      }
    ],
    everydayExamples: [
      {
        analogy: "Holding Your Hand Out a Car Window",
        description: "When riding in a car, if you hold your flat hand out the window and tilt it slightly upward, the rushing wind immediately pushes your hand up toward the sky. That upward push is aerodynamic lift in action!"
      },
      {
        analogy: "A Curved Spoon Near a Water Tap",
        description: "If you dangle a light metal spoon close to running tap water, the curving water sticks to the rounded back of the spoon and pulls the spoon directly into the stream—just like air sticks to curved wings."
      }
    ],
    keyTakeaways: [
      "Flight relies on four balanced forces: Lift (up), Weight (down), Thrust (forward), and Drag (backward).",
      "Airfoil wings are curved to make air move faster over the top, reducing pressure above.",
      "When lift exceeds the plane's weight, the aircraft ascends into the sky."
    ],
    visualTheme: "flight",
    quiz: [
      {
        question: "What is the aerodynamic force that pushes an airplane upward to oppose gravity?",
        options: ["Thrust", "Drag", "Lift", "Friction"],
        correctIndex: 2,
        explanation: "Lift is the aerodynamic force generated by air flowing over the wings that pushes the aircraft upward."
      },
      {
        question: "What special cross-sectional curved shape do airplane wings have?",
        options: ["Airfoil", "Cylinder", "Cube", "Spiral"],
        correctIndex: 0,
        explanation: "An airfoil shape features a curved upper surface and flatter bottom to manipulate airflow and air pressure."
      },
      {
        question: "Which force generated by the airplane's engines propels it forward through the air?",
        options: ["Gravity", "Thrust", "Inertia", "Buoyancy"],
        correctIndex: 1,
        explanation: "Engines produce thrust to overcome drag and propel the aircraft forward at high velocity."
      }
    ]
  },

  "the water cycle": {
    topic: "The Water Cycle",
    tagline: "Earth's eternal recycling system that continuously moves water from oceans to clouds and back again.",
    simpleExplanation: `Did you know that every drop of water you drink today might have once been drunk by a dinosaur millions of years ago? Earth doesn't get new water from outer space; it endlessly recycles the exact same water through the Water Cycle!

Powered by the warm heat of the sun, water in oceans, lakes, and puddles warms up and turns into an invisible gas called water vapor. This process is called Evaporation.

As the vapor floats high into the chilly atmosphere, it cools down and clumps together into tiny water droplets—creating clouds! This is Condensation. When the clouds become too heavy with moisture, the water falls back down to Earth as rain, snow, or hail (Precipitation), flowing into rivers and back to the ocean to start the adventure all over again!`,
    stepByStep: [
      {
        step: 1,
        title: "Evaporation from Solar Heat",
        description: "Sunlight warms oceans and rivers, transforming liquid water into light, rising water vapor gas."
      },
      {
        step: 2,
        title: "Condensation into Clouds",
        description: "High in the cold sky, vapor chills and clings to microscopic dust particles, forming clouds and mist."
      },
      {
        step: 3,
        title: "Precipitation (Rain and Snow)",
        description: "As droplets collide and grow too heavy to stay airborne, gravity pulls them down as rain, sleet, or snow."
      },
      {
        step: 4,
        title: "Collection and Runoff",
        description: "Water flows across soils, seeps into underground aquifers, fills rivers, and returns to the great oceans."
      }
    ],
    everydayExamples: [
      {
        analogy: "Steam on a Bathroom Mirror",
        description: "When you take a hot shower, invisible warm steam rises from the water. As soon as it touches the cold glass mirror, it condenses back into liquid water drops that trickle down!"
      },
      {
        analogy: "A Lid on a Boiling Soup Pot",
        description: "When soup simmers with the lid on, steam evaporates upward, condenses on the cold metal lid, and drops back into the soup as purified water."
      }
    ],
    keyTakeaways: [
      "The water cycle has four main phases: Evaporation, Condensation, Precipitation, and Collection.",
      "The sun's solar energy is the engine that drives evaporation across the planet.",
      "All water on Earth is continuously recycled, keeping ecosystems, rivers, and agriculture alive."
    ],
    visualTheme: "watercycle",
    quiz: [
      {
        question: "What is the process called when liquid water heats up and turns into invisible gas?",
        options: ["Freezing", "Evaporation", "Sublimation", "Filtration"],
        correctIndex: 1,
        explanation: "Evaporation occurs when heat energy excites liquid water molecules so they turn into rising water vapor gas."
      },
      {
        question: "What causes water vapor high in the atmosphere to condense into visible clouds?",
        options: ["Warm temperatures", "Cold temperatures in the upper sky", "Magnetic poles", "Moonlight"],
        correctIndex: 1,
        explanation: "As warm vapor rises into the cold upper atmosphere, it cools down and condenses into tiny liquid droplets that form clouds."
      },
      {
        question: "What is the collective scientific term for rain, snow, sleet, and hail falling to Earth?",
        options: ["Precipitation", "Transpiration", "Sedimentation", "Saturation"],
        correctIndex: 0,
        explanation: "Precipitation is any form of water that condenses in the atmosphere and falls to the Earth's surface."
      }
    ]
  }
};

// ============================================================================
// 2. Intelligent Dynamic Educational Fallback Generator
// ============================================================================

/**
 * Creates high-quality structured educational content for ANY topic
 * when offline or when AI endpoints are unreachable.
 */
function generateStructuredTopicContent(rawTopic) {
  const cleanTopic = rawTopic.trim();
  const normalized = cleanTopic.toLowerCase();

  // Check built-in curated dictionary first
  for (const [key, data] of Object.entries(CURRICULUM_DATABASE)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return { ...data, source: 'curriculum' };
    }
  }

  // Adaptive smart synthesis
  const capitalizedTopic = cleanTopic.charAt(0).toUpperCase() + cleanTopic.slice(1);

  return {
    topic: capitalizedTopic,
    tagline: `Exploring the fundamentals, key mechanisms, and real-world impacts of ${capitalizedTopic}.`,
    simpleExplanation: `${capitalizedTopic} is an important and fascinating subject that influences how we understand the world. At its heart, ${capitalizedTopic} can be broken down into clear, fundamental principles that anyone can grasp.

Instead of getting bogged down in complex technical jargon, think of ${capitalizedTopic} as an organized system of ideas, cause-and-effect relationships, and practical uses. When you observe how the different parts interact, the bigger picture becomes remarkably clear and intuitive.

By examining its core rules, how it develops step-by-step, and how it connects to everyday objects in our lives, you build lasting knowledge that you can explain comfortably to anyone!`,
    stepByStep: [
      {
        step: 1,
        title: `Foundations of ${capitalizedTopic}`,
        description: `Every concept starts with initial conditions or basic building blocks that set the foundation for how it operates.`
      },
      {
        step: 2,
        title: "Active Interaction & Energy",
        description: `Key elements interact, exchange energy or information, and trigger reactions that drive the process forward.`
      },
      {
        step: 3,
        title: "Transformation & Development",
        description: `The system adapts, refines, or transforms raw inputs into meaningful outcomes or observable phenomena.`
      },
      {
        step: 4,
        title: "Real-World Impact & Application",
        description: `The end result manifests in technology, nature, human society, or scientific understanding.`
      }
    ],
    everydayExamples: [
      {
        analogy: "An Organized Symphony Orchestra",
        description: `Like musicians playing different instruments under a conductor to create a harmonious song, all the elements of ${capitalizedTopic} work together in sync to produce a unified result.`
      },
      {
        analogy: "A Well-Designed Smartphone App",
        description: `You don't need to see every line of code to use a smartphone app smoothly; once you understand the simple buttons and inputs, you can accomplish powerful tasks effortlessly.`
      }
    ],
    keyTakeaways: [
      `${capitalizedTopic} is governed by consistent, observable principles that make sense once you understand the core drivers.`,
      `Breaking down ${capitalizedTopic} into chronological stages clarifies how each component supports the whole.`,
      `Real-world analogies help anchor abstract concepts into intuitive daily experiences.`
    ],
    visualTheme: "generic",
    quiz: [
      {
        question: `What is the most effective way to understand ${capitalizedTopic}?`,
        options: [
          "Memorizing words without understanding their meaning",
          "Breaking down core components and understanding how they interact",
          "Ignoring the basic foundations and guessing",
          "Assuming it cannot be explained simply"
        ],
        correctIndex: 1,
        explanation: `Breaking any complex subject into its core principles and visual steps is the proven path to deep, accessible mastery.`
      },
      {
        question: `Why are real-world analogies useful when learning about ${capitalizedTopic}?`,
        options: [
          "They replace actual facts with fictional stories",
          "They connect new or abstract concepts to familiar everyday experiences",
          "They make the lesson take longer to finish",
          "They are only for young children"
        ],
        correctIndex: 1,
        explanation: `Analogies build neural bridges between what you already know from daily life and new, unfamiliar concepts.`
      },
      {
        question: `In a sequential process for ${capitalizedTopic}, what role do foundational steps play?`,
        options: [
          "They can be skipped without affecting the outcome",
          "They provide the necessary conditions and inputs for subsequent stages",
          "They reverse the entire system",
          "They are only decorative"
        ],
        correctIndex: 1,
        explanation: `Foundational stages establish the key inputs and conditions required for every later stage to function correctly.`
      }
    ],
    source: 'heuristic'
  };
}

// ============================================================================
// 3. Visual SVG Diagram Generators
// ============================================================================

function renderVisualDiagram(theme, topicData) {
  const container = document.getElementById('visual-illustration-container');
  const descContainer = document.getElementById('visual-description');
  const tagBadge = document.getElementById('visual-type-tag');

  if (!container) return;

  tagBadge.textContent = "Interactive Educational SVG";

  // Pre-built tailored SVG diagrams
  if (theme === 'photosynthesis') {
    descContainer.innerHTML = "<strong>Diagram Breakdown:</strong> Sunlight and Carbon Dioxide (CO₂) enter the green leaf chloroplasts alongside water (H₂O) absorbed from the roots. The reaction produces plant-fueling Glucose and releases fresh Oxygen (O₂) into the atmosphere.";
    container.innerHTML = `
      <svg viewBox="0 0 760 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Photosynthesis diagram">
        <defs>
          <linearGradient id="sunGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#fef08a"/>
            <stop offset="100%" stop-color="#f59e0b"/>
          </linearGradient>
          <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#34d399"/>
            <stop offset="100%" stop-color="#059669"/>
          </linearGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="3" result="glow"/>
            <feComposite in="SourceGraphic" in2="glow" operator="over"/>
          </filter>
        </defs>

        <!-- Sun Element -->
        <g transform="translate(80, 70)">
          <circle cx="0" cy="0" r="42" fill="url(#sunGrad)" filter="url(#softGlow)"/>
          <path d="M0 -55 L0 -48 M0 55 L0 48 M-55 0 L-48 0 M55 0 L48 0 M-38 -38 L-32 -32 M38 38 L32 32 M-38 38 L-32 32 M38 -38 L32 -32" stroke="#f59e0b" stroke-width="4" stroke-linecap="round"/>
          <text x="0" y="70" text-anchor="middle" font-weight="700" font-size="14" fill="#92400e">Sunlight Energy</text>
        </g>

        <!-- Light Rays -->
        <path d="M125 95 Q 220 130 320 180" stroke="#fbbf24" stroke-width="4" stroke-dasharray="6,6" fill="none"/>
        <polygon points="325,182 312,175 316,187" fill="#fbbf24"/>

        <!-- Carbon Dioxide Input -->
        <g transform="translate(180, 240)">
          <rect x="-60" y="-22" width="120" height="44" rx="22" fill="#e0e7ff" stroke="#6366f1" stroke-width="2"/>
          <text x="0" y="5" text-anchor="middle" font-weight="700" font-size="14" fill="#3730a3">CO₂ from Air</text>
          <path d="M60 0 L 120 0" stroke="#6366f1" stroke-width="3" stroke-linecap="round"/>
          <polygon points="125,0 115,-5 115,5" fill="#6366f1"/>
        </g>

        <!-- Central Leaf / Chloroplast Factory -->
        <g transform="translate(380, 190)">
          <path d="M -80 0 C -80 -80, 40 -80, 80 0 C 80 80, -40 80, -80 0 Z" fill="url(#leafGrad)" stroke="#047857" stroke-width="3"/>
          <path d="M -70 0 Q 0 0 70 0" stroke="#a7f3d0" stroke-width="3" stroke-linecap="round"/>
          <path d="M -20 0 L 10 -30 M 10 0 L 40 -20 M -20 0 L 10 30 M 10 0 L 40 20" stroke="#a7f3d0" stroke-width="2" stroke-linecap="round"/>
          <text x="0" y="-12" text-anchor="middle" font-weight="800" font-size="15" fill="#ffffff">Chloroplast</text>
          <text x="0" y="16" text-anchor="middle" font-weight="600" font-size="12" fill="#ecfdf5">Plant Cell Factory</text>
        </g>

        <!-- Water Input from roots -->
        <g transform="translate(380, 335)">
          <rect x="-70" y="-18" width="140" height="36" rx="18" fill="#dbeafe" stroke="#3b82f6" stroke-width="2"/>
          <text x="0" y="5" text-anchor="middle" font-weight="700" font-size="13" fill="#1e40af">H₂O from Roots</text>
          <path d="M 0 -18 L 0 -55" stroke="#3b82f6" stroke-width="3" stroke-linecap="round"/>
          <polygon points="0,-60 -5,-50 5,-50" fill="#3b82f6"/>
        </g>

        <!-- Outputs: Glucose & Oxygen -->
        <g transform="translate(590, 130)">
          <rect x="-65" y="-22" width="130" height="44" rx="22" fill="#fef3c7" stroke="#f59e0b" stroke-width="2"/>
          <text x="0" y="5" text-anchor="middle" font-weight="700" font-size="14" fill="#b45309">Glucose (Sugar)</text>
          <path d="M -130 50 Q -70 20 -65 0" stroke="#f59e0b" stroke-width="3" fill="none"/>
          <polygon points="-60,0 -70,-5 -70,5" fill="#f59e0b"/>
          <text x="0" y="32" text-anchor="middle" font-size="11" fill="#78350f">Plant Food & Growth</text>
        </g>

        <g transform="translate(590, 240)">
          <rect x="-65" y="-22" width="130" height="44" rx="22" fill="#d1fae5" stroke="#10b981" stroke-width="2"/>
          <text x="0" y="5" text-anchor="middle" font-weight="700" font-size="14" fill="#065f46">Oxygen (O₂)</text>
          <path d="M -130 -30 Q -70 0 -65 0" stroke="#10b981" stroke-width="3" fill="none"/>
          <polygon points="-60,0 -70,-5 -70,5" fill="#10b981"/>
          <text x="0" y="32" text-anchor="middle" font-size="11" fill="#064e3b">Released for Breath</text>
        </g>
      </svg>
    `;
    return;
  }

  if (theme === 'blackhole') {
    descContainer.innerHTML = "<strong>Diagram Breakdown:</strong> A glowing Accretion Disk of superheated gas spirals inward. Beyond the Event Horizon, gravity is so extreme that light cannot escape, surrounding the central Singularity.";
    container.innerHTML = `
      <svg viewBox="0 0 760 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Black hole anatomy">
        <defs>
          <radialGradient id="holeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#000000"/>
            <stop offset="65%" stop-color="#020617"/>
            <stop offset="85%" stop-color="#4f46e5"/>
            <stop offset="100%" stop-color="transparent"/>
          </radialGradient>
          <linearGradient id="diskGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#f97316"/>
            <stop offset="50%" stop-color="#fbbf24"/>
            <stop offset="100%" stop-color="#ec4899"/>
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="#090d16" rx="12"/>

        <!-- Accretion disk ellipse -->
        <ellipse cx="380" cy="190" rx="260" ry="60" fill="none" stroke="url(#diskGrad)" stroke-width="26" opacity="0.85"/>
        <ellipse cx="380" cy="190" rx="210" ry="46" fill="none" stroke="#fef08a" stroke-width="6" opacity="0.9"/>

        <!-- Shadow & Event Horizon -->
        <circle cx="380" cy="190" r="95" fill="url(#holeGlow)"/>
        <circle cx="380" cy="190" r="68" fill="#000000" stroke="#6366f1" stroke-width="2"/>

        <!-- Singularity core center -->
        <circle cx="380" cy="190" r="4" fill="#ffffff"/>

        <!-- Labels -->
        <g transform="translate(130, 80)">
          <rect x="-80" y="-16" width="160" height="32" rx="16" fill="#1e1b4b" stroke="#818cf8" stroke-width="1.5"/>
          <text x="0" y="5" text-anchor="middle" font-weight="700" font-size="12" fill="#c7d2fe">Accretion Disk (Gas)</text>
          <line x1="80" y1="0" x2="170" y2="70" stroke="#818cf8" stroke-width="2" stroke-dasharray="3,3"/>
        </g>

        <g transform="translate(630, 90)">
          <rect x="-85" y="-16" width="170" height="32" rx="16" fill="#1e1b4b" stroke="#f43f5e" stroke-width="1.5"/>
          <text x="0" y="5" text-anchor="middle" font-weight="700" font-size="12" fill="#fecdd3">Event Horizon Boundary</text>
          <line x1="-85" y1="0" x2="-180" y2="60" stroke="#f43f5e" stroke-width="2" stroke-dasharray="3,3"/>
        </g>

        <g transform="translate(380, 325)">
          <rect x="-80" y="-16" width="160" height="32" rx="16" fill="#1e1b4b" stroke="#a78bfa" stroke-width="1.5"/>
          <text x="0" y="5" text-anchor="middle" font-weight="700" font-size="12" fill="#ddd6fe">Central Singularity</text>
          <line x1="0" y1="-16" x2="0" y2="-60" stroke="#a78bfa" stroke-width="2" stroke-dasharray="3,3"/>
        </g>
      </svg>
    `;
    return;
  }

  if (theme === 'ai') {
    descContainer.innerHTML = "<strong>Diagram Breakdown:</strong> Training examples feed into artificial neural layers. The network calculates feature weights, identifies patterns, and produces accurate predictions.";
    container.innerHTML = `
      <svg viewBox="0 0 760 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Neural Network Diagram">
        <defs>
          <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#3b82f6"/>
            <stop offset="100%" stop-color="#8b5cf6"/>
          </linearGradient>
        </defs>

        <!-- Connecting synaptic lines -->
        <g stroke="#cbd5e1" stroke-width="1.5" opacity="0.65">
          <!-- Input to Hidden 1 -->
          <line x1="150" y1="110" x2="310" y2="80"/><line x1="150" y1="110" x2="310" y2="150"/><line x1="150" y1="110" x2="310" y2="230"/><line x1="150" y1="110" x2="310" y2="300"/>
          <line x1="150" y1="190" x2="310" y2="80"/><line x1="150" y1="190" x2="310" y2="150"/><line x1="150" y1="190" x2="310" y2="230"/><line x1="150" y1="190" x2="310" y2="300"/>
          <line x1="150" y1="270" x2="310" y2="80"/><line x1="150" y1="270" x2="310" y2="150"/><line x1="150" y1="270" x2="310" y2="230"/><line x1="150" y1="270" x2="310" y2="300"/>
          <!-- Hidden 1 to Hidden 2 -->
          <line x1="310" y1="80" x2="470" y2="110"/><line x1="310" y1="80" x2="470" y2="190"/><line x1="310" y1="80" x2="470" y2="270"/>
          <line x1="310" y1="150" x2="470" y2="110"/><line x1="310" y1="150" x2="470" y2="190"/><line x1="310" y1="150" x2="470" y2="270"/>
          <line x1="310" y1="230" x2="470" y2="110"/><line x1="310" y1="230" x2="470" y2="190"/><line x1="310" y1="230" x2="470" y2="270"/>
          <line x1="310" y1="300" x2="470" y2="110"/><line x1="310" y1="300" x2="470" y2="190"/><line x1="310" y1="300" x2="470" y2="270"/>
          <!-- Hidden 2 to Output -->
          <line x1="470" y1="110" x2="620" y2="150"/><line x1="470" y1="110" x2="620" y2="230"/>
          <line x1="470" y1="190" x2="620" y2="150"/><line x1="470" y1="190" x2="620" y2="230"/>
          <line x1="470" y1="270" x2="620" y2="150"/><line x1="470" y1="270" x2="620" y2="230"/>
        </g>

        <!-- Column 1: Input Layer -->
        <g fill="#3b82f6">
          <circle cx="150" cy="110" r="18"/>
          <circle cx="150" cy="190" r="18"/>
          <circle cx="150" cy="270" r="18"/>
          <text x="150" y="330" text-anchor="middle" font-weight="700" font-size="13" fill="#1e40af">Input Data</text>
        </g>

        <!-- Column 2 & 3: Hidden Layers -->
        <g fill="#6366f1">
          <circle cx="310" cy="80" r="18"/>
          <circle cx="310" cy="150" r="18"/>
          <circle cx="310" cy="230" r="18"/>
          <circle cx="310" cy="300" r="18"/>
          <circle cx="470" cy="110" r="18"/>
          <circle cx="470" cy="190" r="18"/>
          <circle cx="470" cy="270" r="18"/>
          <text x="390" y="350" text-anchor="middle" font-weight="700" font-size="13" fill="#4338ca">Hidden Layers (Feature Weights)</text>
        </g>

        <!-- Column 4: Output Layer -->
        <g fill="#10b981">
          <circle cx="620" cy="150" r="22"/>
          <circle cx="620" cy="230" r="22"/>
          <text x="620" y="155" text-anchor="middle" font-weight="800" font-size="12" fill="#ffffff">98%</text>
          <text x="620" y="235" text-anchor="middle" font-weight="800" font-size="12" fill="#ffffff">2%</text>
          <text x="620" y="330" text-anchor="middle" font-weight="700" font-size="13" fill="#065f46">Prediction</text>
        </g>
      </svg>
    `;
    return;
  }

  // Universal Dynamic Concept Diagram for any other topic!
  descContainer.innerHTML = `<strong>Concept Diagram:</strong> How the fundamental components, process flows, and key takeaways of <em>${topicData.topic}</em> connect seamlessly to build comprehensive understanding.`;
  
  const title = topicData.topic;
  const steps = topicData.stepByStep || [];
  const step1 = steps[0] ? steps[0].title : "Foundations";
  const step2 = steps[1] ? steps[1].title : "Core Action";
  const step3 = steps[2] ? steps[2].title : "Transformation";
  const step4 = steps[3] ? steps[3].title : "Application";

  container.innerHTML = `
    <svg viewBox="0 0 760 380" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${title} Concept Map">
      <defs>
        <linearGradient id="univCenterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#4f46e5"/>
          <stop offset="100%" stop-color="#7c3aed"/>
        </linearGradient>
        <linearGradient id="boxGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#dbeafe"/>
          <stop offset="100%" stop-color="#bfdbfe"/>
        </linearGradient>
        <linearGradient id="boxGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ede9fe"/>
          <stop offset="100%" stop-color="#ddd6fe"/>
        </linearGradient>
        <linearGradient id="boxGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#d1fae5"/>
          <stop offset="100%" stop-color="#a7f3d0"/>
        </linearGradient>
        <linearGradient id="boxGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef3c7"/>
          <stop offset="100%" stop-color="#fde68a"/>
        </linearGradient>
        <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#0f172a" flood-opacity="0.08"/>
        </filter>
      </defs>

      <!-- Connecting Flow Rays -->
      <path d="M 380 190 L 170 100" stroke="#818cf8" stroke-width="3" stroke-dasharray="6,4"/>
      <path d="M 380 190 L 590 100" stroke="#a78bfa" stroke-width="3" stroke-dasharray="6,4"/>
      <path d="M 380 190 L 170 280" stroke="#34d399" stroke-width="3" stroke-dasharray="6,4"/>
      <path d="M 380 190 L 590 280" stroke="#fbbf24" stroke-width="3" stroke-dasharray="6,4"/>

      <!-- Center Concept Circle -->
      <g transform="translate(380, 190)" filter="url(#cardShadow)">
        <circle cx="0" cy="0" r="70" fill="url(#univCenterGrad)"/>
        <circle cx="0" cy="0" r="76" fill="none" stroke="#a5b4fc" stroke-width="2" stroke-dasharray="8,6"/>
        <text x="0" y="-8" text-anchor="middle" font-weight="800" font-size="16" fill="#ffffff">${title.length > 16 ? title.substring(0, 14) + '...' : title}</text>
        <text x="0" y="16" text-anchor="middle" font-weight="600" font-size="12" fill="#e0e7ff">Core Concept</text>
      </g>

      <!-- Node 1: Top Left -->
      <g transform="translate(170, 100)" filter="url(#cardShadow)">
        <rect x="-95" y="-36" width="190" height="72" rx="14" fill="url(#boxGrad1)" stroke="#3b82f6" stroke-width="2"/>
        <circle cx="-65" cy="0" r="16" fill="#3b82f6"/>
        <text x="-65" y="5" text-anchor="middle" font-weight="800" font-size="12" fill="#ffffff">1</text>
        <text x="12" y="-4" text-anchor="middle" font-weight="700" font-size="13" fill="#1e3a8a">${step1.length > 18 ? step1.substring(0, 16) + '..' : step1}</text>
        <text x="12" y="16" text-anchor="middle" font-size="11" fill="#1d4ed8">Initial Foundation</text>
      </g>

      <!-- Node 2: Top Right -->
      <g transform="translate(590, 100)" filter="url(#cardShadow)">
        <rect x="-95" y="-36" width="190" height="72" rx="14" fill="url(#boxGrad2)" stroke="#7c3aed" stroke-width="2"/>
        <circle cx="-65" cy="0" r="16" fill="#7c3aed"/>
        <text x="-65" y="5" text-anchor="middle" font-weight="800" font-size="12" fill="#ffffff">2</text>
        <text x="12" y="-4" text-anchor="middle" font-weight="700" font-size="13" fill="#4c1d95">${step2.length > 18 ? step2.substring(0, 16) + '..' : step2}</text>
        <text x="12" y="16" text-anchor="middle" font-size="11" fill="#6d28d9">Active Drivers</text>
      </g>

      <!-- Node 3: Bottom Left -->
      <g transform="translate(170, 280)" filter="url(#cardShadow)">
        <rect x="-95" y="-36" width="190" height="72" rx="14" fill="url(#boxGrad3)" stroke="#10b981" stroke-width="2"/>
        <circle cx="-65" cy="0" r="16" fill="#10b981"/>
        <text x="-65" y="5" text-anchor="middle" font-weight="800" font-size="12" fill="#ffffff">3</text>
        <text x="12" y="-4" text-anchor="middle" font-weight="700" font-size="13" fill="#064e3b">${step3.length > 18 ? step3.substring(0, 16) + '..' : step3}</text>
        <text x="12" y="16" text-anchor="middle" font-size="11" fill="#047857">Transformation</text>
      </g>

      <!-- Node 4: Bottom Right -->
      <g transform="translate(590, 280)" filter="url(#cardShadow)">
        <rect x="-95" y="-36" width="190" height="72" rx="14" fill="url(#boxGrad4)" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="-65" cy="0" r="16" fill="#f59e0b"/>
        <text x="-65" y="5" text-anchor="middle" font-weight="800" font-size="12" fill="#ffffff">4</text>
        <text x="12" y="-4" text-anchor="middle" font-weight="700" font-size="13" fill="#78350f">${step4.length > 18 ? step4.substring(0, 16) + '..' : step4}</text>
        <text x="12" y="16" text-anchor="middle" font-size="11" fill="#b45309">Outcomes & Uses</text>
      </g>
    </svg>
  `;
}

// ============================================================================
// 4. Application State & Controllers
// ============================================================================

const AppState = {
  currentTopic: '',
  topicData: null,
  activeMode: 'simple',
  quiz: {
    currentIndex: 0,
    answers: [],
    score: 0,
    isCurrentAnswered: false,
  },
  speech: {
    synth: window.speechSynthesis || null,
    utterance: null,
    isPlaying: false,
  },
  fontSize: 'normal',
  highContrast: false,
};

// ============================================================================
// 5. DOM Elements
// ============================================================================

const DOM = {
  // Views
  homeView: document.getElementById('home-view'),
  loadingView: document.getElementById('loading-view'),
  learningView: document.getElementById('learning-view'),

  // Search & Topic Form
  topicForm: document.getElementById('topic-form'),
  topicInput: document.getElementById('topic-input'),
  btnClearInput: document.getElementById('btn-clear-input'),
  formFeedback: document.getElementById('form-feedback'),
  topicChips: document.querySelectorAll('.topic-chip'),
  btnSurprise: document.getElementById('btn-surprise-me'),

  // Navigation & Actions
  brandLogoBtn: document.getElementById('brand-logo-btn'),
  btnTryAnother: document.getElementById('btn-try-another'),
  btnBannerAnother: document.getElementById('btn-banner-another'),
  btnQuizTryAnother: document.getElementById('btn-quiz-try-another'),

  // Accessibility Controls
  btnFontNormal: document.getElementById('btn-font-normal'),
  btnFontLarge: document.getElementById('btn-font-large'),
  btnFontXLarge: document.getElementById('btn-font-xlarge'),
  btnContrastToggle: document.getElementById('btn-contrast-toggle'),
  btnReadAloud: document.getElementById('btn-read-aloud'),
  speechBtnText: document.getElementById('speech-btn-text'),
  btnCopySummary: document.getElementById('btn-copy-summary'),

  // Topic Header
  currentTopicHeading: document.getElementById('current-topic-heading'),
  currentTopicTagline: document.getElementById('current-topic-tagline'),
  topicSourceBadge: document.getElementById('topic-source-badge'),

  // Mode Tabs
  tabSimple: document.getElementById('tab-simple'),
  tabSteps: document.getElementById('tab-steps'),
  tabExamples: document.getElementById('tab-examples'),
  panelSimple: document.getElementById('panel-simple'),
  panelSteps: document.getElementById('panel-steps'),
  panelExamples: document.getElementById('panel-examples'),

  // Mode Contents
  simpleExplanationContent: document.getElementById('simple-explanation-content'),
  stepByStepContent: document.getElementById('step-by-step-content'),
  everydayExamplesContent: document.getElementById('everyday-examples-content'),
  keyTakeawaysList: document.getElementById('key-takeaways-list'),

  // Quiz
  quizQuestionCounter: document.getElementById('quiz-question-counter'),
  currentQNum: document.getElementById('current-q-num'),
  liveScoreVal: document.getElementById('live-score-val'),
  quizScoreLiveBadge: document.getElementById('quiz-score-live-badge'),
  quizProgressBar: document.getElementById('quiz-progress-bar'),
  quizQuestionView: document.getElementById('quiz-question-view'),
  quizQuestionText: document.getElementById('quiz-question-text'),
  quizOptionsContainer: document.getElementById('quiz-options-container'),
  quizFeedbackBox: document.getElementById('quiz-feedback-box'),
  feedbackTitle: document.getElementById('feedback-title'),
  feedbackExplanation: document.getElementById('feedback-explanation'),
  btnNextQuestion: document.getElementById('btn-next-question'),
  nextQText: document.getElementById('next-q-text'),

  // Quiz Results
  quizResultsView: document.getElementById('quiz-results-view'),
  scoreDisplay: document.getElementById('score-display'),
  percentDisplay: document.getElementById('percent-display'),
  resultsTitle: document.getElementById('results-title'),
  resultsMessage: document.getElementById('results-message'),
  btnToggleAnswers: document.getElementById('btn-toggle-answers'),
  answersReviewList: document.getElementById('answers-review-list'),
  btnRetakeQuiz: document.getElementById('btn-retake-quiz'),

  // Toast
  toastMessage: document.getElementById('toast-message'),
};

// ============================================================================
// 6. View Routing & Switching
// ============================================================================

function showView(viewId) {
  // Stop ongoing speech when switching views
  stopSpeech();

  [DOM.homeView, DOM.loadingView, DOM.learningView].forEach(v => {
    if (v) v.classList.remove('active');
  });

  if (viewId === 'home') {
    DOM.homeView.classList.add('active');
    DOM.topicInput.focus();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewId === 'loading') {
    DOM.loadingView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else if (viewId === 'learning') {
    DOM.learningView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// ============================================================================
// 7. Topic Loading & Generation Pipeline
// ============================================================================

async function startLearning(topicName) {
  const cleanTopic = topicName.trim();
  if (!cleanTopic) {
    DOM.formFeedback.textContent = "Please enter a topic to start learning.";
    DOM.topicInput.focus();
    return;
  }

  DOM.formFeedback.textContent = "";
  AppState.currentTopic = cleanTopic;

  // Update loading texts
  const loadingTitle = document.getElementById('loading-topic-title');
  if (loadingTitle) {
    loadingTitle.textContent = `Preparing your lesson on "${cleanTopic}"...`;
  }

  showView('loading');

  let topicData = null;

  // Try server AI API if available
  const userApiKey = sessionStorage.getItem('learnable_gemini_key') || '';
  try {
    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ topic: cleanTopic, userApiKey }),
    });

    if (res.ok) {
      const json = await res.json();
      if (json && json.success && json.data) {
        topicData = json.data;
        topicData.source = 'ai';
      }
    }
  } catch (err) {
    console.log("Server generation not available, utilizing built-in educational engine.");
  }

  // Fallback to rich built-in curriculum & smart generator
  if (!topicData) {
    // Artificial small delay for polished feel
    await new Promise(r => setTimeout(r, 600));
    topicData = generateStructuredTopicContent(cleanTopic);
  }

  AppState.topicData = topicData;
  renderTopicContent(topicData);
  initQuiz(topicData.quiz || []);
  showView('learning');
}

// ============================================================================
// 8. Render Learning Content & Tabs
// ============================================================================

function renderTopicContent(data) {
  DOM.currentTopicHeading.textContent = data.topic;
  DOM.currentTopicTagline.textContent = data.tagline || `Everything you need to know about ${data.topic}.`;

  // Source Badge
  if (data.source === 'ai') {
    DOM.topicSourceBadge.textContent = "✨ AI-Enhanced Lesson";
  } else if (data.source === 'curriculum') {
    DOM.topicSourceBadge.textContent = "📚 Core Curriculum";
  } else {
    DOM.topicSourceBadge.textContent = "🎯 Adaptive Lesson";
  }

  // 1. Simple Explanation
  const paragraphs = (data.simpleExplanation || '').split('\n\n').filter(p => p.trim());
  DOM.simpleExplanationContent.innerHTML = paragraphs.map(p => {
    return `<p>${escapeHTML(p)}</p>`;
  }).join('');

  // 2. Step-by-Step
  const steps = data.stepByStep || [];
  DOM.stepByStepContent.innerHTML = steps.map((s, idx) => `
    <div class="step-card">
      <div class="step-badge" aria-hidden="true">${s.step || idx + 1}</div>
      <div class="step-content">
        <h3 class="step-title">${escapeHTML(s.title || `Stage ${idx + 1}`)}</h3>
        <p class="step-desc">${escapeHTML(s.description || '')}</p>
      </div>
    </div>
  `).join('');

  // 3. Everyday Examples
  const examples = data.everydayExamples || [];
  DOM.everydayExamplesContent.innerHTML = examples.map((ex, idx) => `
    <div class="example-card">
      <div class="example-header">
        <span class="example-icon" aria-hidden="true">${idx === 0 ? '💡' : '🌍'}</span>
        <h3 class="example-analogy-title">${escapeHTML(ex.analogy || `Real-World Analogy ${idx + 1}`)}</h3>
      </div>
      <p class="example-body">${escapeHTML(ex.description || '')}</p>
    </div>
  `).join('');

  // 4. Key Takeaways
  const takeaways = data.keyTakeaways || [];
  DOM.keyTakeawaysList.innerHTML = takeaways.map(t => `
    <li><span>${escapeHTML(t)}</span></li>
  `).join('');

  // 5. Visual Diagram
  renderVisualDiagram(data.visualTheme || 'generic', data);

  // Set default mode tab
  switchLearningMode('simple');
}

function switchLearningMode(mode) {
  AppState.activeMode = mode;

  // Tabs UI
  DOM.tabSimple.classList.toggle('active', mode === 'simple');
  DOM.tabSteps.classList.toggle('active', mode === 'steps');
  DOM.tabExamples.classList.toggle('active', mode === 'examples');

  DOM.tabSimple.setAttribute('aria-selected', mode === 'simple');
  DOM.tabSteps.setAttribute('aria-selected', mode === 'steps');
  DOM.tabExamples.setAttribute('aria-selected', mode === 'examples');

  // Panels UI
  DOM.panelSimple.classList.toggle('active', mode === 'simple');
  DOM.panelSimple.classList.toggle('hidden', mode !== 'simple');

  DOM.panelSteps.classList.toggle('active', mode === 'steps');
  DOM.panelSteps.classList.toggle('hidden', mode !== 'steps');

  DOM.panelExamples.classList.toggle('active', mode === 'examples');
  DOM.panelExamples.classList.toggle('hidden', mode !== 'examples');
}

// ============================================================================
// 9. Interactive Mini-Quiz System
// ============================================================================

function initQuiz(quizQuestions) {
  AppState.quiz.currentIndex = 0;
  AppState.quiz.answers = [];
  AppState.quiz.score = 0;
  AppState.quiz.isCurrentAnswered = false;

  DOM.quizQuestionView.classList.remove('hidden');
  DOM.quizResultsView.classList.add('hidden');
  DOM.answersReviewList.classList.add('hidden');
  DOM.btnToggleAnswers.setAttribute('aria-expanded', 'false');

  updateLiveScoreCounter();
  renderQuizQuestion();
}

function updateLiveScoreCounter() {
  const total = (AppState.topicData && AppState.topicData.quiz) ? AppState.topicData.quiz.length : 3;
  const currentScore = AppState.quiz.score || 0;
  if (DOM.liveScoreVal) {
    DOM.liveScoreVal.textContent = currentScore.toString();
  }
  if (DOM.scoreDisplay) {
    DOM.scoreDisplay.textContent = `${currentScore}/${total}`;
  }
}

function renderQuizQuestion() {
  const questions = AppState.topicData.quiz || [];
  const currentIdx = AppState.quiz.currentIndex;
  const qData = questions[currentIdx];

  if (!qData) {
    finishQuiz();
    return;
  }

  AppState.quiz.isCurrentAnswered = false;

  // Counter & Progress bar
  DOM.currentQNum.textContent = (currentIdx + 1).toString();
  const progressPercent = ((currentIdx + 1) / questions.length) * 100;
  DOM.quizProgressBar.style.width = `${progressPercent}%`;

  // Question text
  DOM.quizQuestionText.textContent = qData.question;

  // Hide feedback & Next button
  DOM.quizFeedbackBox.classList.add('hidden');
  DOM.btnNextQuestion.classList.add('hidden');

  // Options buttons (A, B, C, D)
  const letters = ['A', 'B', 'C', 'D'];
  DOM.quizOptionsContainer.innerHTML = qData.options.map((opt, i) => `
    <button
      type="button"
      class="quiz-option-btn"
      data-index="${i}"
      aria-label="Option ${letters[i]}: ${escapeHTML(opt)}"
    >
      <span class="option-badge">${letters[i]}</span>
      <span class="option-label">${escapeHTML(opt)}</span>
    </button>
  `).join('');

  // Attach option clicks
  const optionButtons = DOM.quizOptionsContainer.querySelectorAll('.quiz-option-btn');
  optionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const chosenIdx = parseInt(btn.getAttribute('data-index'), 10);
      handleAnswerSelected(chosenIdx);
    });
  });
}

function handleAnswerSelected(chosenIndex) {
  if (AppState.quiz.isCurrentAnswered) return;
  AppState.quiz.isCurrentAnswered = true;

  const currentIdx = AppState.quiz.currentIndex;
  const qData = AppState.topicData.quiz[currentIdx];
  const isCorrect = chosenIndex === qData.correctIndex;

  if (isCorrect) {
    AppState.quiz.score += 1;
    updateLiveScoreCounter();
  }

  AppState.quiz.answers.push({
    questionIndex: currentIdx,
    questionText: qData.question,
    chosenIndex: chosenIndex,
    correctIndex: qData.correctIndex,
    options: qData.options,
    explanation: qData.explanation,
    isCorrect: isCorrect,
  });

  // Highlight options
  const optionButtons = DOM.quizOptionsContainer.querySelectorAll('.quiz-option-btn');
  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === chosenIndex) {
      btn.classList.add(isCorrect ? 'selected-correct' : 'selected-incorrect');
    }
    if (!isCorrect && idx === qData.correctIndex) {
      btn.classList.add('reveal-correct');
    }
  });

  // Render immediate feedback
  DOM.quizFeedbackBox.className = `quiz-feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;
  const icon = document.getElementById('feedback-icon');
  if (icon) {
    icon.textContent = isCorrect ? '✓' : '✕';
  }
  DOM.feedbackTitle.textContent = isCorrect ? '🎉 Correct!' : '💡 Good Try!';
  DOM.feedbackExplanation.textContent = qData.explanation;
  DOM.quizFeedbackBox.classList.remove('hidden');

  // Next Question Button
  const totalQuestions = AppState.topicData.quiz.length;
  DOM.nextQText.textContent = (currentIdx + 1 < totalQuestions) ? 'Next Question' : 'See Your Results';
  DOM.btnNextQuestion.classList.remove('hidden');
  DOM.btnNextQuestion.focus();
}

function handleNextQuestion() {
  const totalQuestions = AppState.topicData.quiz.length;
  if (AppState.quiz.currentIndex + 1 < totalQuestions) {
    AppState.quiz.currentIndex += 1;
    renderQuizQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  DOM.quizQuestionView.classList.add('hidden');
  DOM.quizResultsView.classList.remove('hidden');

  const total = AppState.topicData.quiz.length || 3;
  const score = AppState.quiz.score;
  const percent = Math.round((score / total) * 100);

  DOM.scoreDisplay.textContent = `${score}/${total}`;
  DOM.percentDisplay.textContent = `${percent}%`;

  if (score === total) {
    DOM.resultsTitle.textContent = "Mastery Achieved! 🎉";
    DOM.resultsMessage.textContent = `Sensational job! You scored a perfect ${score} out of ${total}. You have a rock-solid grasp of ${AppState.topicData.topic}!`;
  } else if (score >= 2) {
    DOM.resultsTitle.textContent = "Great Progress! 👏";
    DOM.resultsMessage.textContent = `Well done! You got ${score} out of ${total} right. You understand the key foundations of ${AppState.topicData.topic}.`;
  } else {
    DOM.resultsTitle.textContent = "A Valuable First Step! 🌱";
    DOM.resultsMessage.textContent = `You scored ${score} out of ${total}. Learning takes practice! Review the explanations below and try retaking the quiz to level up.`;
  }

  // Populate answers review accordion
  DOM.answersReviewList.innerHTML = AppState.quiz.answers.map((item, idx) => `
    <div class="review-item">
      <div class="review-q-text">${idx + 1}. ${escapeHTML(item.questionText)}</div>
      <div class="review-user-ans" style="color: ${item.isCorrect ? 'var(--success-text)' : 'var(--error-text)'}">
        <strong>Your Answer:</strong> ${escapeHTML(item.options[item.chosenIndex])} ${item.isCorrect ? '✓' : '✕'}
      </div>
      ${!item.isCorrect ? `
        <div class="review-user-ans" style="color: var(--success-text)">
          <strong>Correct Answer:</strong> ${escapeHTML(item.options[item.correctIndex])}
        </div>
      ` : ''}
      <div class="review-exp">${escapeHTML(item.explanation)}</div>
    </div>
  `).join('');

  DOM.quizResultsView.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ============================================================================
// 10. Accessibility Features: Text-to-Speech & Typography
// ============================================================================

function toggleSpeech() {
  if (!AppState.speech.synth) {
    showToast("Text-to-speech is not supported by your browser.");
    return;
  }

  if (AppState.speech.isPlaying) {
    stopSpeech();
    return;
  }

  const topic = AppState.topicData;
  if (!topic) return;

  // Assemble natural lesson script
  const textToRead = `${topic.topic}. ${topic.tagline}. Simple explanation: ${topic.simpleExplanation}`;

  AppState.speech.synth.cancel();

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.rate = 0.95; // comfortable reading pace
  utterance.pitch = 1.0;

  utterance.onend = () => {
    AppState.speech.isPlaying = false;
    DOM.btnReadAloud.classList.remove('active-speech');
    DOM.speechBtnText.textContent = "Read Aloud";
  };

  utterance.onerror = () => {
    AppState.speech.isPlaying = false;
    DOM.btnReadAloud.classList.remove('active-speech');
    DOM.speechBtnText.textContent = "Read Aloud";
  };

  AppState.speech.isPlaying = true;
  DOM.btnReadAloud.classList.add('active-speech');
  DOM.speechBtnText.textContent = "Stop Audio";

  AppState.speech.synth.speak(utterance);
}

function stopSpeech() {
  if (AppState.speech.synth && AppState.speech.isPlaying) {
    AppState.speech.synth.cancel();
    AppState.speech.isPlaying = false;
    DOM.btnReadAloud.classList.remove('active-speech');
    DOM.speechBtnText.textContent = "Read Aloud";
  }
}

function setFontSize(size) {
  AppState.fontSize = size;
  document.body.setAttribute('data-font-size', size);

  DOM.btnFontNormal.setAttribute('aria-pressed', size === 'normal');
  DOM.btnFontLarge.setAttribute('aria-pressed', size === 'large');
  DOM.btnFontXLarge.setAttribute('aria-pressed', size === 'xlarge');

  localStorage.setItem('learnable_font_size', size);
}

function toggleContrast() {
  AppState.highContrast = !AppState.highContrast;
  document.body.setAttribute('data-contrast', AppState.highContrast ? 'high' : 'normal');
  localStorage.setItem('learnable_contrast', AppState.highContrast ? 'high' : 'normal');
  showToast(AppState.highContrast ? "High contrast enabled" : "Standard contrast restored");
}

function copyNotesToClipboard() {
  if (!AppState.topicData) return;
  const d = AppState.topicData;

  const notes = `NEURO LEARNABLE NOTES: ${d.topic.toUpperCase()}
Tagline: ${d.tagline}

--- SIMPLE EXPLANATION ---
${d.simpleExplanation}

--- STEP-BY-STEP ---
${(d.stepByStep || []).map(s => `${s.step}. ${s.title}: ${s.description}`).join('\n')}

--- REAL-WORLD ANALOGIES ---
${(d.everydayExamples || []).map(e => `• ${e.analogy}: ${e.description}`).join('\n')}

--- KEY TAKEAWAYS ---
${(d.keyTakeaways || []).map(t => `✓ ${t}`).join('\n')}

Learned with Neuro LearnAble — "Learning, your way."`;

  navigator.clipboard.writeText(notes)
    .then(() => showToast("Lesson notes copied to clipboard!"))
    .catch(() => showToast("Could not copy notes to clipboard."));
}

function showToast(message) {
  DOM.toastMessage.textContent = message;
  DOM.toastMessage.classList.remove('hidden');
  setTimeout(() => {
    DOM.toastMessage.classList.add('hidden');
  }, 3200);
}

// ============================================================================
// 11. Helper Utilities & Event Listeners
// ============================================================================

function escapeHTML(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function initEventListeners() {
  // Topic search form
  DOM.topicForm.addEventListener('submit', (e) => {
    e.preventDefault();
    startLearning(DOM.topicInput.value);
  });

  // Input clear button
  DOM.topicInput.addEventListener('input', () => {
    DOM.btnClearInput.classList.toggle('hidden', !DOM.topicInput.value.trim());
  });

  DOM.btnClearInput.addEventListener('click', () => {
    DOM.topicInput.value = '';
    DOM.btnClearInput.classList.add('hidden');
    DOM.topicInput.focus();
  });

  // Topic discovery chips
  DOM.topicChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const topic = chip.getAttribute('data-topic');
      DOM.topicInput.value = topic;
      startLearning(topic);
    });
  });

  // Surprise Me! button
  DOM.btnSurprise.addEventListener('click', () => {
    const topics = [
      "Photosynthesis",
      "How Black Holes Work",
      "Artificial Intelligence",
      "The Human Heart",
      "Plate Tectonics",
      "How Airplanes Fly",
      "Quantum Computing",
      "The Water Cycle",
      "Renewable Energy",
      "Democracy & Voting",
      "Bioluminescence",
      "How DNA Stores Information",
      "The James Webb Space Telescope"
    ];
    const randomTopic = topics[Math.floor(Math.random() * topics.length)];
    DOM.topicInput.value = randomTopic;
    startLearning(randomTopic);
  });

  // "Try Another Topic" buttons & brand reset
  [DOM.brandLogoBtn, DOM.btnTryAnother, DOM.btnBannerAnother, DOM.btnQuizTryAnother].forEach(btn => {
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        showView('home');
      });
    }
  });

  // Mode Tabs
  DOM.tabSimple.addEventListener('click', () => switchLearningMode('simple'));
  DOM.tabSteps.addEventListener('click', () => switchLearningMode('steps'));
  DOM.tabExamples.addEventListener('click', () => switchLearningMode('examples'));

  // Quiz Next & Retake
  DOM.btnNextQuestion.addEventListener('click', handleNextQuestion);
  DOM.btnRetakeQuiz.addEventListener('click', () => {
    if (AppState.topicData) {
      initQuiz(AppState.topicData.quiz);
    }
  });

  // Toggle Quiz Review Answers Accordion
  DOM.btnToggleAnswers.addEventListener('click', () => {
    const isExpanded = DOM.btnToggleAnswers.getAttribute('aria-expanded') === 'true';
    DOM.btnToggleAnswers.setAttribute('aria-expanded', !isExpanded);
    DOM.answersReviewList.classList.toggle('hidden', isExpanded);
  });

  // Accessibility Controls
  DOM.btnFontNormal.addEventListener('click', () => setFontSize('normal'));
  DOM.btnFontLarge.addEventListener('click', () => setFontSize('large'));
  DOM.btnFontXLarge.addEventListener('click', () => setFontSize('xlarge'));
  DOM.btnContrastToggle.addEventListener('click', toggleContrast);
  DOM.btnReadAloud.addEventListener('click', toggleSpeech);
  DOM.btnCopySummary.addEventListener('click', copyNotesToClipboard);

  // Load saved preferences
  const savedFontSize = localStorage.getItem('learnable_font_size');
  if (savedFontSize) setFontSize(savedFontSize);

  const savedContrast = localStorage.getItem('learnable_contrast');
  if (savedContrast === 'high') {
    AppState.highContrast = true;
    document.body.setAttribute('data-contrast', 'high');
  }
}

// ============================================================================
// 12. App Initialization
// ============================================================================

window.addEventListener('DOMContentLoaded', () => {
  initEventListeners();
  showView('home');
});
