# ftc-superalliance

## Overview
The **FTC SuperAlliance** project is a web application designed for scouting in FTC robotics competitions. It allows users to create and manage scouting forms, utilizing a drag-and-drop interface for customization.

## Features
- Google authentication for secure sign-in.
- Drag-and-drop form builder for creating custom scouting forms.
- Two types of forms: Pit Form and Tracker Form.
- Side-by-side comparison of scouting data entries.
- Dark color scheme with softer yellow accents.

## Project Structure
```
ftc-superalliance
├── client
│   ├── src
│   │   ├── components
│   │   ├── styles
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── package.json
│   └── tsconfig.json
├── server
│   ├── src
│   │   ├── config
│   │   ├── models
│   │   ├── routes
│   │   └── app.ts
│   ├── package.json
│   └── tsconfig.json
├── package.json
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the client directory and install dependencies:
   ```
   cd client
   npm install
   ```
3. Navigate to the server directory and install dependencies:
   ```
   cd ../server
   npm install
   ```

## Usage
1. Start the server:
   ```
   cd server
   npm start
   ```
2. Start the client:
   ```
   cd client
   npm start
   ```

I 100% did not make this readme nor did I do much of the base code structure (github copilot carried me because I have no clue how to actually do this type of coding yet)
