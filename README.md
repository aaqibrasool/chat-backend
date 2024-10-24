# Chat Application Backend

This repository contains the backend services for a chat application, built using Node.js, Express, and TypeScript. It follows a microservice architecture with a focus on scalability and performance.

## Services

### 1. Chat Service
- **Purpose:** Manages the real-time communication between users.
- **Endpoints:**  
  - `/send`: Sends a message to a user.
    
### 2. User Service
- **Purpose:** Handles user authentication, and registration.
- **Endpoints:**  
  - `/register`: Registers a new user.
  - `/login`: Logs in a user.

### 3. Notification Service
- **Purpose:** Sends notifications to users for new messages or other updates.

## Architecture Overview

- **Microservices:** The application is split into three independent services: Chat, User, and Notification.
- **Database:** Each service connects to a separate MongoDB instance.
- **Message Broker:** RabbitMQ facilitates communication between the services.
- **API Gateway:**  
  - **NGINX** is used as the reverse proxy to route incoming traffic to the appropriate microservice.
  - A **custom API gateway** has been added for local development and testing purposes.
- **Containerization:** All services are containerized using **Docker**.
- **Docker Compose:** A `docker-compose.yml` file at the project's root simplifies running the entire application stack locally.

## Local Setup

### Prerequisites
- Docker
- Docker Compose

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aaqibrasool/chat-backend.git
   cd chat-backend

2. Add environment variables:
   - Each service has a .env.example file. You need to create .env files in the respective service directories and add your configuration values (MongoDB URI, RabbitMQ credentials, etc.).  
3. Start the application using Docker Compose:
   ```bash
   docker-compose up --build
This will automatically build and run each service (Chat, User, and Notification).
4. Accessing Services
- Once Docker Compose has started the services, you can access the API via NGINX at http://localhost:85/{your_end_point}
