# Installing on Coolify

Coolify is a self-hosted, open-source platform that simplifies deploying applications, including WordPress, with automated setup and management.

## Overview

Coolify provides a user-friendly interface for deploying WordPress and other applications with minimal configuration. It handles Docker containers, SSL certificates, and server management automatically.

## Prerequisites

- Coolify installed and running
- Server with Docker support
- Domain name configured
- Coolify admin access

## Installation via Coolify

### Step 1: Access Coolify Dashboard
1. Log into Coolify dashboard
2. Navigate to your server/project
3. Click **New Resource** or **+** button

### Step 2: Select WordPress Template
1. Choose **WordPress** from templates
2. Or select **Custom Docker Compose**
3. Configure installation settings

### Step 3: Configure Application

#### Basic Settings
- **Application Name**: Enter name for your WordPress site
- **Domain**: Enter your domain name
- **Port**: Leave default or specify
- **Description**: Optional description

#### Database Configuration
- **Database**: Create new MySQL/MariaDB database
- **Database Name**: Enter database name
- **Database User**: Enter database username
- **Database Password**: Set strong password
- **Database Root Password**: Set root password

#### WordPress Configuration
- **Site Title**: Your site name
- **Admin Email**: Admin email address
- **Admin Username**: Admin username (avoid "admin")
- **Admin Password**: Set strong admin password

### Step 4: Environment Variables
Configure WordPress environment variables:
- `WORDPRESS_DB_HOST`: Database host
- `WORDPRESS_DB_USER`: Database user
- `WORDPRESS_DB_PASSWORD`: Database password
- `WORDPRESS_DB_NAME`: Database name

### Step 5: Storage Volumes
Set up persistent storage:
- WordPress files: `/var/www/html`
- Database data: `/var/lib/mysql`
- Configure volume paths

### Step 6: Deploy
1. Review all settings
2. Click **Deploy** or **Create**
3. Wait for deployment to complete
4. Monitor deployment logs

### Step 7: SSL Certificate
1. Coolify can auto-configure SSL
2. Or manually configure Let's Encrypt
3. Verify SSL certificate
4. Enable HTTPS redirect

### Step 8: Access WordPress
1. Visit your domain
2. WordPress should be accessible
3. Complete initial setup if needed
4. Access admin at `/wp-admin`

## Using Docker Compose Template

### Custom Docker Compose
If using custom Docker Compose:

```yaml
version: '3.8'

services:
  db:
    image: mysql:8.0
    environment:
      MYSQL_DATABASE: ${DB_NAME}
      MYSQL_USER: ${DB_USER}
      MYSQL_PASSWORD: ${DB_PASSWORD}
      MYSQL_ROOT_PASSWORD: ${DB_ROOT_PASSWORD}
    volumes:
      - db_data:/var/lib/mysql
    restart: unless-stopped

  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "${PORT:-80}:80"
    environment:
      WORDPRESS_DB_HOST: db
      WORDPRESS_DB_USER: ${DB_USER}
      WORDPRESS_DB_PASSWORD: ${DB_PASSWORD}
      WORDPRESS_DB_NAME: ${DB_NAME}
    volumes:
      - wordpress_data:/var/www/html
    restart: unless-stopped

volumes:
  db_data:
  wordpress_data:
```

## Post-Installation Configuration

### Initial WordPress Setup
1. Visit your domain
2. Complete WordPress installation wizard
3. Configure site settings
4. Create admin account

### Essential Plugins
Install via Coolify or WordPress admin:
- Security plugin
- Backup plugin
- SEO plugin
- Caching plugin

### SSL Configuration
1. Coolify handles SSL automatically
2. Verify certificate installation
3. Enable HTTPS redirect
4. Test SSL configuration

## Managing WordPress in Coolify

### Viewing Logs
1. Go to your WordPress application
2. Click **Logs** tab
3. View container logs
4. Monitor application status

### Updating WordPress
1. Go to application settings
2. Update WordPress image
3. Redeploy application
4. Or update via WordPress admin

### Backup Management
1. Configure backups in Coolify
2. Set backup schedule
3. Store backups securely
4. Test restoration

### Scaling
1. Adjust resource limits
2. Add additional containers
3. Configure load balancing
4. Monitor performance

## Environment Variables

### WordPress Variables
Configure in Coolify:
- `WORDPRESS_DB_HOST`: Database hostname
- `WORDPRESS_DB_USER`: Database username
- `WORDPRESS_DB_PASSWORD`: Database password
- `WORDPRESS_DB_NAME`: Database name
- `WORDPRESS_TABLE_PREFIX`: Table prefix (wp_)

### Optional Variables
- `WORDPRESS_DEBUG`: Enable debug mode
- `WORDPRESS_CONFIG_EXTRA`: Additional config
- `PHP_MEMORY_LIMIT`: PHP memory limit
- `UPLOAD_MAX_SIZE`: Upload size limit

## Storage Management

### Persistent Volumes
- WordPress files: `/var/www/html`
- Database: `/var/lib/mysql`
- Configure volumes in Coolify
- Backup volumes regularly

### Volume Backups
1. Configure backup schedule
2. Store backups off-site
3. Test restore procedures
4. Monitor backup status

## Security Configuration

### Application Security
- Use strong passwords
- Enable two-factor authentication
- Install security plugins
- Regular updates

### Server Security
- Configure firewall rules
- Limit SSH access
- Enable fail2ban
- Regular security updates

### SSL/TLS
- Use Let's Encrypt certificates
- Enable HTTPS redirect
- Configure security headers
- Monitor certificate expiration

## Troubleshooting

### Deployment Issues
- Check Coolify logs
- Verify Docker is running
- Review container logs
- Check resource limits

### Database Connection
- Verify database container running
- Check environment variables
- Review database logs
- Test connection

### SSL Issues
- Check certificate status
- Verify domain DNS
- Review SSL configuration
- Check certificate renewal

## Best Practices

### Regular Maintenance
- Update WordPress regularly
- Update plugins and themes
- Monitor application logs
- Review security settings

### Backup Strategy
- Automated daily backups
- Store backups off-site
- Test restore procedures
- Keep multiple backup copies

### Performance
- Use caching plugins
- Optimize images
- Enable CDN if needed
- Monitor resource usage

## Monitoring

### Application Monitoring
- Monitor container status
- Check resource usage
- Review application logs
- Set up alerts

### Performance Monitoring
- Track response times
- Monitor database performance
- Review error rates
- Optimize as needed

## Support

For assistance with WordPress installation on Coolify or troubleshooting, contact our support team.

---

*Need help? Contact our [support team](https://littleitco.com.au/contact)*

