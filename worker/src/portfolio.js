// Everything the chatbot knows about CJ. Keep this in sync with index.html:
// if a fact isn't written here, the assistant is told not to claim it.
export const PORTFOLIO = `
# Christian Joshua "CJ" Alberto

Computer Science graduate (BS Computer Science, specialization in Machine Learning) from National University – Manila, based in Metro Manila, Philippines. Graduated Magna Cum Laude and was a Consistent First Honor Dean's Lister.
Tagline: "I build systems that turn mess into signal." ML models, automation pipelines, and full-stack tools, with attention to the unglamorous part: the retries, the validation, the test that stays green.
Focus: ML / automation / full-stack. Currently a freelance full-stack developer. Open to AI, ML, backend, and full-stack roles.

About, in CJ's words: "I'm CJ — a computer science graduate from Metro Manila who likes building the parts of software that other people find tedious. Data pipelines that run on a schedule. Models that make it to production instead of staying in a notebook. Internal tools that quietly delete hours of manual work. Lately that's meant an automated market brief that reports after every trading close, a spatial-temporal forecasting model deployed behind a live API, and QA automation I trusted enough to gate every pull request. My favourite kind of problem is turning something unreliable — an LLM, a flaky test, a manual approval chain — into something you can depend on. Reliability is a feature, so I treat it like one."

## Contact
- Email: albertochristianjoshua@gmail.com (best for roles and project enquiries)
- Phone: 0949 365 5314
- GitHub: https://github.com/albertocj1
- Based in Metro Manila, Philippines

## Projects (nine builds)

### PSE Daily Market Brief (2026) — automation agent
Stack: n8n, Gemini, Yahoo Finance, Telegram, Supabase.
An n8n pipeline that wakes up after every Philippine Stock Exchange close, pulls the index, a 13-stock watchlist and five macro series from Yahoo Finance, reads three news feeds, and sends a Gemini-written brief to Telegram: session summary, top movers, and sentiment tagged per headline. The hard part was keeping the model honest: links are stitched back from the source feeds in code so it can't invent URLs, output is validated, and a failed call falls back to a second model. Every run logs prices and sentiment to Postgres, with SQL views tying each day's sentiment to the next day's return so CJ can backtest whether the signal is real.
Numbers: 13 stocks + 5 macro series tracked daily; 0 model-generated links (all sourced in code).

### TaskFlow-QA (2026) — QA automation platform
Stack: FastAPI, React, TypeScript, Playwright, GitHub Actions.
A full-stack task tracker built specifically as the system-under-test for a Playwright framework: E2E and API suites on a Page Object Model. Working with Claude Code, CJ hunted down two reliability bugs: an async race in a page-object helper and a shared-state leak across parallel workers. Fixing them took the suite from intermittent failures to a clean, repeatable pass across Chromium and Firefox. CI type-checks the frontend, runs backend tests, and executes the full cross-browser suite with an uploaded HTML report on every PR.
Numbers: 18 → 0 flaky failures eliminated; 30/30 consistent pass across two browsers.

### Exclusives PH — Manila Yacht Club event (2026) — freelance production event platform
Stack: FastAPI, Supabase, Three.js, PayMongo, Gmail API.
A full-stack RSVP and ticketing platform for a Manila Yacht Club event, built from scratch and run against real crowd traffic. PayMongo handles GCash and Maya payments, the Gmail API sends QR e-tickets the moment someone pays, and a reception dashboard scans those codes at the door and assigns table seating automatically. CJ also built the on-site point-of-sale and bar management systems.
Numbers: 100% of manual booking work removed; handled event-night traffic end to end.

### Dengue Early-Warning System (2025–26) — deep learning thesis
Stack: TensorFlow, GCP, Render, Vercel.
CJ's undergraduate thesis: a spatial-temporal deep learning model that forecasts dengue outbreaks across Metro Manila (NCR) from clinical and weather data. Beyond the modelling (preprocessing, feature engineering, hyperparameter tuning), it is deployed to production behind a live REST API with a public dashboard.
Live dashboard: https://dengue-watch-website.vercel.app

### AI Resume-Fit Analysis (2026) — LLM service
Stack: FastAPI, AWS Bedrock, Claude, structured JSON.
A FastAPI service on Amazon Bedrock (Anthropic Claude) that scores a resume against a job description and returns matching skills, gaps, and a recruiter-style summary as structured JSON. Built to mirror an OpenAI/n8n tool already running in production, to compare the two clouds' LLM integration head to head: latency, output reliability, and how much prompt work each needed.

### Signtinel (2025) — deep learning
Stack: TensorFlow, Siamese neural network.
Signature forgery detection: a Siamese neural network that verifies signatures and flags high-precision forgeries, validated with Euclidean distance metrics and a full confusion-matrix analysis rather than a single accuracy number.

### XORBIN — Smart Waste System (2024) — IoT + computer vision
Stack: Arduino, OpenCV, GSM.
An IoT waste-classification system that sorts material (metal, paper, plastic) with computer vision, driven by Arduino and ultrasonic sensors, with a GSM module for real-time alerts. CJ was developer lead and took the team to a 4th-overall finish (finalist) at the packetHACKS 2024 NCR leg.

### Heart-Failure Risk Prediction (2024) — classical ML
Stack: scikit-learn, SVM.
A Support Vector Machine that predicts heart-failure risk from clinical data, with the full pipeline handled end to end: cleaning, feature scaling, and tuning.

### Autonomous Taxi Navigation (2024) — reinforcement learning
Stack: Deep Q-Learning, OpenAI Gym.
A reinforcement-learning agent trained on OpenAI Gym's Taxi-v3 that learns pick-up and drop-off routing on its own, with no predefined map.

## Experience & education

### Freelance Full-Stack Developer — Exclusives PH, Manila Yacht Club event (Jul – Aug 2026)
- Architected the RSVP and ticketing platform end to end with FastAPI, Supabase, and an interactive Three.js frontend that held up under live event traffic.
- Automated payments (PayMongo / GCash / Maya) and instant QR e-ticket dispatch via the Gmail API, removing manual booking entirely.
- Built the door-side reception dashboard, seat assignment, and an on-site POS and bar management system.

### Automation Engineer Intern — Crowdsource Innovative Solutions Inc. (Mar – May 2026)
- Cut manual HR processing time by 80% with n8n workflows over Google Workspace APIs, PostgreSQL, and Supabase.
- Automated a 3-tier approval pipeline, timesheet updates, and document generation for a 16-person organisation.
- Shipped a production HR portal with real-time dashboards and webhook integrations, plus an AI resume-fit analyzer using the OpenAI API and structured JSON outputs.

### BS Computer Science, Machine Learning — National University – Manila (Aug 2022 – Sep 2026)
- Graduated Magna Cum Laude; Consistent First Honor Dean's Lister.
- Thesis: a deep learning early-warning system for dengue in NCR, deployed with a live dashboard and REST API.

### Internal Vice President — Google Developer Student Clubs (GDSC), National University (Aug 2024 – May 2026)
- Led operations across three committees and raised member engagement by 20% through technical workshops.
- Cut event prep time by 25% by streamlining the club's internal workflows.
- Spoke at GDSC "Google Talks 2: Intro to AI".

## Skills
- Machine learning & data: TensorFlow, Keras, scikit-learn, Pandas, NumPy, regression, classification, time-series, computer vision, reinforcement learning.
- Backend & web: Python, FastAPI, REST APIs, React, TypeScript, Tailwind CSS, Three.js, HTML5, CSS3.
- Automation & LLMs: n8n, OpenAI API, Gemini API, prompt engineering, structured JSON, Telegram Bot API, Claude Code.
- Cloud, data & testing: PostgreSQL, Supabase, MongoDB Atlas, GCP, AWS Bedrock, Vercel, Render, Docker, Playwright, GitHub Actions.
- Languages: Python, Java, JavaScript, SQL, C++.

## Recognition
- 2024 — 1st Runner-Up, Google Solution Challenge Ideathon. Pitcher and system-logic lead (DiabetEase, a diabetes-care app concept); targeted SDGs 3, 9, 17.
- 2024 — Finalist (4th overall), packetHACKS NCR. Developer lead, XORBIN smart-waste system.
- 2023 — Finalist (Top 8), DLSU Hacker Cup. Sustainable-tech prototype designer.
- Magna Cum Laude and Consistent First Honor Dean's Lister, National University – Manila.

## Certifications & results
- 2025 — TOPCIT PH Level 3, 576/1000: top 10% nationwide (12th sitting).
- Google Data Analytics Certificate: data cleaning, analysis, visualisation.
- TOEIC: Reading 460, Listening 495.
`.trim();
