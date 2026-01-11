# Docker

Docker is a platform for developing, shipping, and running applications using containerization technology.

## Overview

Docker allows you to package applications and their dependencies into containers, making it easy to deploy and run applications consistently across different environments. Containers are lightweight, portable, and isolated from the host system.

## Key Features

- **Containerization** - Package applications in containers
- **Portability** - Run containers anywhere Docker is installed
- **Isolation** - Containers run independently
- **Efficiency** - Lightweight compared to virtual machines
- **Scalability** - Easy to scale applications
- **Version Control** - Manage container versions
- **Orchestration** - Manage multiple containers

## Core Concepts

### Containers
Containers are lightweight, portable packages that include everything needed to run an application: code, runtime, system tools, libraries, and settings.

### Images
Images are read-only templates used to create containers. They define what goes into a container.

### Dockerfile
A Dockerfile is a text file with instructions for building a Docker image.

### Docker Compose
Docker Compose is a tool for defining and running multi-container Docker applications.

## Getting Started

### Installation
1. Install Docker Engine on your system
2. Verify installation: `docker --version`
3. Start Docker service
4. Test with: `docker run hello-world`

### Basic Commands

#### Running Containers
```bash
docker run <image-name>
docker run -d <image-name>  # Run in background
docker run -p 8080:80 <image-name>  # Map ports
```

#### Managing Containers
```bash
docker ps  # List running containers
docker ps -a  # List all containers
docker stop <container-id>
docker start <container-id>
docker rm <container-id>
```

#### Managing Images
```bash
docker images  # List images
docker pull <image-name>  # Download image
docker build -t <image-name> .  # Build image
docker rmi <image-id>  # Remove image
```

## Creating Dockerfiles

### Basic Dockerfile
```dockerfile
FROM ubuntu:20.04
RUN apt-get update && apt-get install -y nginx
COPY index.html /var/www/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Common Instructions
- **FROM** - Base image
- **RUN** - Execute commands
- **COPY** - Copy files into image
- **ADD** - Copy files (with URL support)
- **WORKDIR** - Set working directory
- **EXPOSE** - Expose ports
- **CMD** - Default command
- **ENTRYPOINT** - Container entry point

## Docker Compose

### docker-compose.yml Example
```yaml
version: '3'
services:
  web:
    image: nginx
    ports:
      - "8080:80"
  db:
    image: mysql
    environment:
      MYSQL_ROOT_PASSWORD: password
```

### Compose Commands
```bash
docker-compose up  # Start services
docker-compose up -d  # Start in background
docker-compose down  # Stop services
docker-compose ps  # List services
docker-compose logs  # View logs
```

## Common Use Cases

### Web Applications
- Run web servers (Nginx, Apache)
- Deploy applications
- Manage microservices
- Load balancing

### Databases
- Run database containers
- Data persistence with volumes
- Database backups
- Multi-database setups

### Development
- Consistent development environments
- Isolated dependencies
- Easy setup for new developers
- Testing environments

### CI/CD
- Build and test applications
- Deploy applications
- Run automated tests
- Container registries

## Volumes and Data Persistence

### Creating Volumes
```bash
docker volume create <volume-name>
docker run -v <volume-name>:/data <image>
```

### Bind Mounts
```bash
docker run -v /host/path:/container/path <image>
```

### Volume Management
```bash
docker volume ls  # List volumes
docker volume inspect <volume-name>
docker volume rm <volume-name>
```

## Networking

### Network Types
- **Bridge** - Default network
- **Host** - Use host network
- **None** - No networking
- **Overlay** - Multi-host networking

### Creating Networks
```bash
docker network create <network-name>
docker run --network <network-name> <image>
```

### Container Communication
- Containers on same network can communicate
- Use container names as hostnames
- Configure DNS resolution

## Best Practices

### Image Optimization
- Use multi-stage builds
- Minimize layers
- Use .dockerignore
- Choose appropriate base images
- Remove unnecessary files

### Security
- Run containers as non-root user
- Scan images for vulnerabilities
- Keep images updated
- Limit container capabilities
- Use secrets management

### Resource Management
- Set resource limits
- Monitor resource usage
- Clean up unused resources
- Use resource quotas

### Maintenance
- Regular updates
- Backup volumes
- Monitor containers
- Clean up unused images
- Review logs regularly

## Docker Hub

### Using Docker Hub
- Pull public images
- Push your own images
- Search for images
- Manage repositories

### Private Registries
- Set up private registries
- Authenticate to registries
- Push and pull private images

## Troubleshooting

### Common Issues
- **Container won't start** - Check logs: `docker logs <container>`
- **Port conflicts** - Check port mappings
- **Permission issues** - Check file permissions
- **Network problems** - Verify network configuration
- **Resource issues** - Check system resources

### Useful Commands
```bash
docker logs <container-id>  # View logs
docker exec -it <container-id> bash  # Enter container
docker inspect <container-id>  # Inspect container
docker stats  # Monitor resources
```

## Support

For assistance with Docker setup, container management, or troubleshooting, contact our support team.

---

*Need help? Contact our [support team](https://littleitco.com.au/contact)*

