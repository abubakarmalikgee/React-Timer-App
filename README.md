<<<<<<< HEAD
# React Timer App

A countdown timer app built with React, offering personalized countdowns for birthdays and New Year's, along with a custom greeting based on user details. This project leverages TypeScript, Context API, and local storage for state management and persistence.

## Features

- **Personalized User Registration**  
  Users can register with their full name and date of birth, with information stored in local storage.

- **Custom Countdown Timers**  
  Countdown components for the New Year and user's next birthday, dynamically updated every second.

- **Greeting Customization**  
  Displays a personalized greeting message that updates based on the current day, recognizing special events like birthdays and New Year's.

- **Dynamic Backgrounds**  
  Background images change based on special dates (birthday or New Year's).

## Tech Stack

- **React** with TypeScript
- **Tailwind CSS** and **DaisyUI** for styling
- **Context API** for global user data management
- **Local Storage** for data persistence

## Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/your-username/react-timer-app.git
   cd react-timer-app
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
>>>>>>> 099ce3d (Initial commit)
