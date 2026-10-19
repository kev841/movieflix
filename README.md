🎬 Movie Discovery Web Application

A modern, responsive movie discovery web application built with React, Tailwind CSS v4, and Vite. The application integrates directly with The Movie Database (TMDB) API to let users search through thousands of movies, discover popular titles, and view key details like ratings and release dates in real time.

✨ Features

🔍 Live Search with Debouncing: Real-time movie search with an optimized 500ms debounce to prevent unnecessary API calls while typing.

📈 Trending Movies Grid: Automatically fetches and displays popular movies upon loading.

🎨 Sleek Dark UI: Styled using Tailwind CSS v4 featuring modern linear gradients, subtle blur backdrops (backdrop-blur), and hover transitions.

📱 Fully Responsive Layout: Built with CSS Grid (grid-cols-1 to lg:grid-cols-4) to adapt seamlessly across mobile, tablet, and desktop screens.

🖼️ Fallback Handling: Graceful fallbacks for missing movie poster images and missing metadata.

🛠️ Tech Stack

Frontend Library: React

Styling: Tailwind CSS v4

Build Tool: Vite

Data Source: TMDB API

🚀 Getting Started

Follow these instructions to get a local copy up and running on your machine.

Prerequisites

Ensure you have Node.js installed on your system.

Installation

Clone the repository:

git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name


Install dependencies:

npm install


Set up TMDB API Key:
Open src/App.jsx and replace the placeholder API key variable with your own TMDB API key:

const API_KEY = 'YOUR_TMDB_API_KEY';


Run the development server:

npm run dev


Open in Browser:
Navigate to http://localhost:5173 to view the application in action.

📁 Project Structure

my-react-app/
├── src/
│   ├── App.jsx         # Main application component with fetch logic & state
│   ├── index.css       # Tailwind CSS v4 setup (@import "tailwindcss";)
│   └── main.jsx        # React root entry point
├── package.json
├── vite.config.js
└── README.md


💡 Key Learnings & Concepts

This project was created to practice and master fundamental web development skills:

React State & Effects: Managing state with useState and executing asynchronous side-effects using useEffect.

API Integration: Fetching real-world movie data asynchronously using JavaScript fetch and async/await.

Performance Optimization: Implementing a debounce timer inside useEffect to optimize network requests.

Tailwind v4 Styling: Utilizing utility classes for dynamic gradients, responsive grids, and dark mode design patterns.

📄 License

This project is open source and available under the MIT License.
