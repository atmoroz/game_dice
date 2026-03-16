# Dice Game

A simple dice game built with **Next.js**, **TypeScript**, and **Material UI**.

The player selects a number and predicts whether the dice roll result will be **higher or lower** than the chosen value.  
After pressing **PLAY**, the game rolls a number from **1 to 100**, displays a short rolling animation, and shows the result.

---

## Tech Stack

- **Next.js**
- **TypeScript**
- **Material UI**
- **Zustand** – state management
- **Feature-Sliced Design (FSD)** architecture

---

## Features

- Select a number using a **slider**
- Choose prediction **Over / Under**
- Press **PLAY** to roll the dice
- Dice result generated from **1–100**
- Dice **rolling animation** before the final value appears
- Result notification (**win / lose**)
- Game history (**last 10 games**)
- Scrollable history table
- Responsive layout
- Roboto font via **Next.js font optimization**

---

## Game Rules

- **Over** → player wins if `result > threshold`
- **Under** → player wins if `result < threshold`

Example:

Threshold: 50  
Prediction: Over  
Result: 73 → **You won**

---

## Project Structure

The project follows **Feature-Sliced Design (FSD)**:

```
src
├── app
├── entities
│   └── game
├── features
│   ├── choose-condition
│   └── play-dice
├── widgets
│   ├── dice-game
│   └── game-history
└── shared
```

- **entities** – domain logic
- **features** – user interactions
- **widgets** – composed UI blocks
- **shared** – reusable components and utilities

---

## Getting Started

Clone the repository

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open in browser:
http://localhost:3000
