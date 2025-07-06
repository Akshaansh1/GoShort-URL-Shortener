# GoShorty

A lightweight URL shortener microservice built with Go (Gin) and a React + Vite frontend. Runs entirely in Docker, and stores shortened URLs in memory (no database).

## 🧱 Tech Stack

- Backend: Go + Gin
- Frontend: React + Vite + Tailwind CSS
- Containerization: Docker + Docker Compose

## 🚀 Features

- Shortens long URLs using a 6-character code
- In-memory storage (stateless)
- Clean, responsive UI
- Runs locally via Docker Compose

## ⚙️ Running the Project

### 1. Clone the Repo
    ```bash
    git clone https://github.com/your-username/goshorty.git
    cd goshorty

### 2. Run with Docker Compose
    ```bash
    docker-compose up --build

### 3. Access the Services
    ```bash
    Frontend: http://localhost:5173
    Backend: http://localhost:8080

## 📦 API Endpoints

- POST /api/shorten
- Shorten a long URL.
  ```json
  Request Body:
  {
    "url": "https://example.com"
  }

- Returns:
    ```json
      {
        "original": "https://example.com",
        "short": "AbC123"
      }

GET /:short
Redirects to the original URL.
Example: http://localhost:8080/AbC123 → Redirects to https://example.com

## 📄 Environment Notes
- Frontend uses Vite dev server on port 5173
- Backend runs on port 8080
- URLs are stored in memory (restarts will reset)

## 💡 Future Improvements

- Add Redis for persistent storage
- QR code generation
- Custom short URL aliases
- User auth and analytics
