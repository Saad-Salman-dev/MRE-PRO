# MRE.PRO — Movie Recommendation Engine

MRE.PRO is a client-side movie recommendation web application built with HTML, CSS, and vanilla JavaScript. The project demonstrates how fundamental Computer Science data structures — Stack, Queue, Graph, and Tree — can be implemented and visualized inside a fully functional, real-world web application.

---

## Overview

MRE.PRO allows users to browse, search, and discover movies across multiple genres including Hollywood, Bollywood, Pakistani cinema, Animation, Horror, Thriller, and more. The application includes 100+ movies with real poster images fetched from the TMDB API.

The Data Structures page provides a live, interactive visualization of all four data structures as they operate in real time based on the user's actions inside the app.

---

## Features

- Browse 100+ movies across 15+ genres
- Search movies by title, genre, year, or tags
- Watchlist powered by a Stack data structure
- Smart recommendations powered by a Graph with BFS algorithm
- Genre browsing organized by a Tree structure
- Suggestion queue powered by a Queue data structure
- Live Data Structures visualization page
- Movie of the Day with random daily pick
- 5-star movie rating system
- Watch history tracking
- Stats dashboard with genre breakdown and ratings distribution
- Achievement badges system
- Dark and Light mode toggle
- Real movie posters loaded from TMDB API
- Fully responsive design for mobile and desktop

---

## Data Structures

This is the academic core of MRE.PRO. Each data structure is not just implemented theoretically — it powers a real feature inside the application and can be observed live on the Data Structures page.

### Stack
Powers the Watchlist and Watch History features. When a user adds a movie to their watchlist, it is pushed onto the stack. The most recently added movie always appears at the top. Supports Push, Pop, and Peek operations, all visualized in real time.

### Queue
Powers the Suggestion Queue. Movies are enqueued at the back and suggested from the front, following the First In First Out (FIFO) principle. Enqueue and Dequeue operations are visualized live.

### Graph with BFS
Powers the Recommendation System. Every movie is represented as a node. Two movies share an edge if they have overlapping genres or tags. When a user builds their watchlist, the app runs Breadth-First Search from those movie nodes to discover connected movies the user has not yet seen — these become the personalized recommendations.

### Tree
Powers the Genre Classification system. The root node represents all movies. Each genre is a branch node. Each movie is a leaf node under its corresponding genre. The Tree view allows users to navigate the entire movie catalog hierarchically by genre.

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript — no frameworks or libraries
- TMDB API for real movie poster images

---

## Project Structure

```
mre-pro/
├── index.html      — HTML structure and page layout
├── src.css         — All styles, themes, and responsive design
├── app.js          — All JavaScript, data structures, and logic
└── README.md       — Project documentation
```

---

## Setup

1. Clone this repository
2. Get a free API key from [themoviedb.org](https://www.themoviedb.org/settings/api)
3. Open `app.js` and replace `YOUR_TMDB_API_KEY_HERE` with your actual key
4. Open `index.html` in any modern browser

No build tools, no npm, no server required.

---

## Live Data Structures Page

One of the unique features of MRE.PRO is the dedicated Data Structures page accessible from the navigation bar. As you interact with the app — adding movies to your watchlist, getting recommendations, browsing genres — the page updates in real time to show the current state of the Stack, Queue, Graph, and Tree. This makes the underlying data structures visible and understandable to any visitor.

---

Developed by Saad Salman
