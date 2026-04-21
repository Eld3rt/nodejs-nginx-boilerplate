# Node.js + Nginx Boilerplate

---

## Running

```bash
# Start services
docker-compose up -d

# Check status
docker-compose ps

# Build services
docker-compose build

# Stop services
docker-compose down
```

---

## Testing

```bash
# Test request
curl http://localhost

# Expected output:
# Hello from Effective Mobile!
```

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                             Client                          │
└───────────────────────────────┬─────────────────────────────┘
                                │
                           HTTP Request
                           :80 (localhost)
                                │
                                ▼
                ┌─────────────────────────────────┐
                │       Nginx Reverse Proxy       │
                │    (nginx-proxy container)      │
                └───────────────┬─────────────────┘
                                │
                  Docker Network (app_network)
                                │
                                ▼
                ┌─────────────────────────────────┐
                │   Node.js Backend Application   │
                │    (backend-app container)      │
                └─────────────────────────────────┘
```

## Stack

| Service              | Technology     |
| -------------------- | -------------- |
| **Backend App**      | Node.js        |
| **Reverse Proxy**    | Nginx          |
| **Containerization** | Docker         |
| **Orchestration**    | Docker Compose |

---

## Environment Configuration

Use this envs:

- `BACKEND_PORT`: Port for the backend service (default: 8080)
- `HTTP_PORT`: Port exposed for HTTP traffic (default: 80)
