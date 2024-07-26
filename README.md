# 🖐️ **Sign2Text** - Nepali Sign Language to Text Translator

Welcome to **Sign2Text**! 🎉 This innovative project translates Nepali Sign Language (NSL) into text. Developed for a hackathon challenge, this solution combines machine learning, computer vision, and web technologies to deliver Nepali sign language translations.

## 📚 Table of Contents

- [Introduction](##🚀Introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](##project-structure)
- [Installation](##installation)
- [Usage](##usage)
- [Contributing](##contributing)
- [License](##license)
- [Team](##team)

## 🚀 Introduction

**Sign2Text** bridges the communication gap between the deaf community and the wider public by converting NSL gestures into readable text. Using advanced machine learning models trained on NSL gestures, our project features a user-friendly web interface for seamless interaction.

## 🌟 Features

- **🔍 Real-time Sign Language Recognition:** Translate NSL gestures to text instantly using your webcam.
- **💻 User-friendly Interface:** A sleek and responsive web interface built with React and Tailwind CSS.
- **⚙️ Scalable Backend:** Robust backend powered by OpenCV and TensorFlow for efficient model inference and data handling.
- **🔧 Custom Dataset Support:** Easily extend the model with new gestures by updating the dataset.

## 🛠️ Tech Stack

### Frontend

- **React** 🌐
- **TypeScript** ✍️
- **Next.js** 🚀
- **Tailwind CSS** 🎨

### Backend

- **Python** 🐍
- **TensorFlow** 🧠
- **OpenCV** 📷

## 🗂️ Project Structure

```
.
├── Backend
│   ├── NotoSansDevanagari-Regular.ttf
│   ├── data_collection.py
│   ├── flask_server.py
│   ├── main.py
│   ├── model.py
│   ├── my_functions.py
│   └── requirements.txt
├── Frontend
│   ├── apps
│   │   └── web
│   │       ├── @
│   │       │   └── components
│   │       │       └── magicui
│   │       │           ├── blur-fade.tsx
│   │       │           ├── cool-mode.tsx
│   │       │           ├── dock.tsx
│   │       │           ├── shimmer-button.tsx
│   │       │           ├── shine-border.tsx
│   │       │           ├── shiny-button.tsx
│   │       │           ├── sparkles-text.tsx
│   │       │           └── text-reveal.tsx
│   │       ├── app
│   │       │   ├── common
│   │       │   │   ├── Background.tsx
│   │       │   │   ├── CTA.tsx
│   │       │   │   ├── Collapse.tsx
│   │       │   │   ├── Dropdown.tsx
│   │       │   │   ├── Form.tsx
│   │       │   │   ├── Headline.tsx
│   │       │   │   ├── ItemGrid.tsx
│   │       │   │   ├── ItemTeam.tsx
│   │       │   │   ├── Timeline.tsx
│   │       │   │   ├── WidgetWrapper.tsx
│   │       │   │   └── types.d.ts
│   │       │   ├── components
│   │       │   │   ├── Banner.tsx
│   │       │   │   ├── BlurFade.tsx
│   │       │   │   ├── CallToAction.tsx
│   │       │   │   ├── CallToAction2.tsx
│   │       │   │   ├── Contact.tsx
│   │       │   │   ├── Content.tsx
│   │       │   │   ├── FAQBox.tsx
│   │       │   │   ├── FeaturesSection.tsx
│   │       │   │   ├── Footer.tsx
│   │       │   │   ├── Howitworks.tsx
│   │       │   │   ├── Logo.tsx
│   │       │   │   ├── NavBar.tsx
│   │       │   │   ├── Sign2TextHeader.tsx
│   │       │   │   ├── SparklesText.jsx
│   │       │   │   ├── Steps.tsx
│   │       │   │   ├── Team.tsx
│   │       │   │   ├── TeamSection.tsx
│   │       │   │   ├── TechUsed.tsx
│   │       │   │   ├── TextReveal.tsx
│   │       │   │   ├── document.tsx
│   │       │   │   ├── logo.svg
│   │       │   │   ├── logo1.svg
│   │       │   │   └── sendPredictionRequest.tsx
│   │       ├── config.ts
│   │       ├── favicon.ico
│   │       ├── globals.css
│   │       ├── hooks
│   │       │   ├── UseOnClickOutside.tsx
│   │       │   ├── axiosInstance.js
│   │       │   ├── useCollapse.tsx
│   │       │   └── useWindowSize.tsx
│   │       ├── layout.jsx
│   │       ├── page.tsx
│   │       └── svgs
│   │           └── logo.svg
│   ├── components.json
│   ├── next-env.d.ts
│   ├── next.config.js
│   ├── package-lock.json
│   ├── package.json
│   ├── pnpm-lock.yaml
│   ├── pnpm-workspace.yaml
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   ├── theme.config.tsx
│   ├── tsconfig.json
│   ├── turbo.json
│   └── yarn.lock
└── README.md
```

## Installation

### Backend

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/Sign2Text.git
   ```
2. Navigate to the `Backend` directory:
   ```sh
   cd Sign2Text/Backend
   ```
3. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate   # On Windows use `venv\Scripts\activate`
   ```
4. Install the required dependencies:
   ```sh
   pip install -r requirements.txt
   ```
5. Run the Data Collection Program:
   ```sh
   python data_collection.py
   ```
5. Run the Model Program:
   ```sh
   python model.py
   ```
7. Finally, run the main Program:
 ```sh
   python main.py
   ```

### Frontend

1. Navigate to the `Frontend` directory:
   ```sh
   cd Sign2Text/Frontend/apps/web
   ```
2. Install the required dependencies:
   ```sh
   yarn install
   ```
3. Start the development server:
   ```sh
   yarn dev
   ```

## 💻 Usage

1. Run the `main.py` and `flask_server.py` from the backend directory.
2. Navigate to frontend directory and then run `npm run dev or yarn dev`.
3. Open your browser and navigate to `http://localhost:3000`.
4. Use the interface to interact with the sign language translator by clicking 'Get Started' button.
5. The application will display the recognized text from your NSL gestures in real-time.

## 🤝 Contributing

We welcome contributions to improve Sign2Text. To contribute:

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```sh
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```sh
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- Prashant - Project Lead, Backend Developer, Web Developer
- Prastuti - Data Collection and Dataset Management
- Aananta - AI/ML Specialist
- Anupam - Data Science Specialist
- Chadani - Frontend Developer
