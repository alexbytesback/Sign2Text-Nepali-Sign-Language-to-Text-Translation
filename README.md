# Sign2Text - Nepali Sign Language to Text Translator

Sign2Text is a project aimed at translating Nepali Sign Language (NSL) into text. This project is developed as part of a hackathon challenge and leverages a combination of machine learning, computer vision, and web technologies to achieve accurate translation of sign language gestures into textual representation.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Team](#team)

## Introduction

Sign2Text bridges the communication gap between deaf individuals and the wider community by converting NSL gestures into readable text. This project utilizes machine learning models trained on a dataset of NSL gestures and is integrated with a user-friendly web interface for easy interaction.

## Features

- **Real-time Sign Language Recognition:** Translate NSL gestures to text in real-time using your webcam.
- **User-friendly Interface:** A responsive web interface built with React and Tailwind CSS.
- **Scalable Backend:** A robust backend powered by Flask for model inference and data handling.
- **Custom Dataset Support:** Easily extend the model with additional gestures by updating the dataset.

## Tech Stack

### Frontend

- **React**
- **TypeScript**
- **Next.js**
- **Tailwind CSS**

### Backend

- **Python**
- **Flask**
- **TensorFlow**
- **OpenCV**

## Project Structure

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
5. Run the Flask server:
   ```sh
   python flask_server.py
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

## Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Use the interface to interact with the sign language translator.
3. The application will display the recognized text from your NSL gestures in real-time.

## Contributing

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

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Team

- Prashant - Project Lead, Backend Developer, Web Developer
- Prastuti - Data Collection and Dataset Management
- Aananta - AI/ML Specialist
- Anupam - Data Science Specialist
- Chadani - Frontend Developer
