# Installing on Docker

Docker provides a containerized approach to running WordPress, making it easy to deploy, scale, and manage WordPress installations.

## Overview

Docker allows you to run WordPress in isolated containers, separating the application, database, and web server. This makes WordPress portable, scalable, and easier to manage.

## Prerequisites

- Docker installed
- Docker Compose (recommended)
- Basic command line knowledge
- Domain or IP address

## Quick Start with Docker Compose

### Step 1: Create Project Directory
```bash
mkdir wordpress-docker
cd wordpress-docker
```

### Step 2: Create docker-compose.yml
Create a file named `docker-compose.yml`:

```yaml
version: '3.8'

services:
  db:
    image: mysql:8.0
    container_name: wordpress_db
    restart: unless-stopped
    environment:
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wordpress
      MYSQL_PASSWORD: your_password_here
      MYSQL_ROOT_PASSWORD: root_password_here
    volumes:
      - db_data:/var/lib/mysql

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    container_name: wordpress_app
    restart: unless-stopped
    ports:
      - "8080:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: wordpress
      WORDPRESS_DB_PASSWORD: your_password_here
      WORDPRESS_DB_NAME: wordpress
    volumes:
      - wordpress_data:/var/www/html

volumes:
  db_data:
  wordpress_data:
```

### Step 3: Start Containers
```bash
docker-compose up -d
```

### Step 4: Access WordPress
1. Visit `http://localhost:8080` (or your server IP)
2. Complete WordPress installation wizard
3. Create admin account
4. Finish setup

## Manual Docker Installation

### Step 1: Create Network
```bash
docker network create wordpress-network
```

### Step 2: Create MySQL Container
```bash
docker run -d \
  --name wordpress_db \
  --network wordpress-network \
  -e MYSQL_DATABASE=wordpress \
  -e MYSQL_USER=wordpress \
  -e MYSQL_PASSWORD=your_password \
  -e MYSQL_ROOT_PASSWORD=root_password \
  -v db_data:/var/lib/mysql \
  mysql:8.0
```

### Step 3: Create WordPress Container
```bash
docker run -d \
  --name wordpress_app \
  --network wordpress-network \
  -p 8080:80 \
  -e WORDPRESS_DB_HOST=wordpress_db \
  -e WORDPRESS_DB_USER=wordpress \
  -e WORDPRESS_DB_PASSWORD=your_password \
  -e WORDPRESS_DB_NAME=wordpress \
  -v wordpress_data:/var/www/html \
  wordpress:latest
```

## Advanced Configuration

### Using Custom wp-config.php
Create a custom wp-config.php and mount it:

```yaml
volumes:
  - ./wp-config.php:/var/www/html/wp-config.php
  - wordpress_data:/var/www/html
```

### Adding Nginx Reverse Proxy
```yaml
services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - wordpress
```

### SSL/HTTPS Setup
Use Let's Encrypt with certbot:

```yaml
services:
  certbot:
    image: certbot/certbot
    volumes:
      - ./certbot/conf:/etc/letsencrypt
      - ./certbot/www:/var/www/certbot
```

## Data Persistence

### Volumes
- Data persists in Docker volumes
- Survives container restarts
- Easy backup and restore
- Can be shared between containers

### Backup Volumes
```bash
# Backup WordPress files
docker run --rm \
  -v wordpress_data:/data \
  -v $(pwd):/backup \
  alpine tar czf /backup/wordpress-backup.tar.gz /data

# Backup database
docker exec wordpress_db mysqldump -u wordpress -p wordpress > backup.sql
```

### Restore Volumes
```bash
# Restore WordPress files
docker run --rm \
  -v wordpress_data:/data \
  -v $(pwd):/backup \
  alpine tar xzf /backup/wordpress-backup.tar.gz -C /

# Restore database
docker exec -i wordpress_db mysql -u wordpress -p wordpress < backup.sql
```

## Environment Variables

### WordPress Variables
- `WORDPRESS_DB_HOST`: Database host
- `WORDPRESS_DB_USER`: Database user
- `WORDPRESS_DB_PASSWORD`: Database password
- `WORDPRESS_DB_NAME`: Database name
- `WORDPRESS_TABLE_PREFIX`: Table prefix

### Security Variables
- `WORDPRESS_AUTH_KEY`: Authentication key
- `WORDPRESS_SECURE_AUTH_KEY`: Secure auth key
- `WORDPRESS_LOGGED_IN_KEY`: Logged in key
- `WORDPRESS_NONCE_KEY`: Nonce key

## Managing Containers

### View Running Containers
```bash
docker ps
```

### View Logs
```bash
docker logs wordpress_app
docker logs -f wordpress_app  # Follow logs
```

### Stop Containers
```bash
docker-compose stop
# or
docker stop wordpress_app wordpress_db
```

### Start Containers
```bash
docker-compose start
# or
docker start wordpress_app wordpress_db
```

### Remove Containers
```bash
docker-compose down
# or
docker rm wordpress_app wordpress_db
```

## Updating WordPress

### Update via Docker Compose
```bash
docker-compose pull
docker-compose up -d
```

### Update WordPress Core
Access WordPress admin and update normally, or:
```bash
docker exec wordpress_app wp core update
```

## Production Considerations

### Security
- Use strong passwords
- Limit exposed ports
- Use reverse proxy
- Enable SSL/HTTPS
- Regular updates

### Performance
- Use caching plugins
- Optimize images
- Enable OPcache
- Use CDN

### Monitoring
- Monitor container logs
- Set up health checks
- Monitor resource usage
- Alert on failures

## Troubleshooting

### Container Won't Start
- Check logs: `docker logs wordpress_app`
- Verify environment variables
- Check port conflicts
- Review volume permissions

### Database Connection Issues
- Verify database container is running
- Check network connectivity
- Verify credentials
- Review database logs

### Permission Issues
- Check volume permissions
- Fix ownership if needed
- Review container user

## Best Practices

### Use Docker Compose
- Easier management
- Better organization
- Version controlled
- Reproducible deployments

### Regular Backups
- Backup volumes regularly
- Test restore procedures
- Store backups off-site
- Automate backups

### Security
- Use secrets for passwords
- Keep images updated
- Limit container access
- Use non-root users

## Support

For assistance with WordPress Docker installation or configuration, contact our support team.

---

*Need help? Contact our [24/7 support team](https://little.cloud/contact)*

