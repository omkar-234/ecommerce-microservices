# E-Commerce Microservices App

A microservices-based e-commerce application built with Docker.

## Architecture
- **Product Service** - Python/Flask (Port 5001)
- **Order Service** - Node.js/Express (Port 3000)
- **Database** - MySQL 8.0
- **Frontend** - HTML/CSS/JS (Port 8080)

## Tech Stack
- Python 3.11 + Flask
- Node.js 20 + Express
- MySQL 8.0
- Docker + Docker Compose

## How to Run
git clone https://github.com/omkar-234/ecommerce-microservices.git
cd ecommerce-microservices
docker compose up -d --build
cd frontend && python3 -m http.server 8080
Open: http://localhost:8080

## API Endpoints
GET  /products - Get all products
GET  /health   - Health check
GET  /orders   - Get all orders
POST /orders   - Place new order

## What I Learned
- Docker containerization
- Microservices architecture
- Docker Compose
- Persistent storage with volumes
- REST APIs with Flask and Node.js
# trigger
