# CyberPanel

CyberPanel is an open-source web hosting control panel specifically designed for OpenLiteSpeed and LiteSpeed Enterprise web servers.

## Overview

CyberPanel provides a modern, feature-rich control panel for managing websites, email, databases, and server resources. It's built with performance and ease of use in mind, especially for LiteSpeed web servers.

## Key Features

- **Website Management** - Create and manage multiple websites
- **Email Management** - Full email account management
- **Database Management** - MySQL/MariaDB database management
- **SSL Certificates** - Automatic SSL with Let's Encrypt
- **Backup Management** - Automated backup system
- **DNS Management** - DNS zone management
- **File Manager** - Web-based file management
- **Performance Optimization** - Built-in caching and optimization
- **Security Features** - Firewall and security tools

## Accessing CyberPanel

### How to Access
1. Navigate to your CyberPanel URL (usually `https://your-server-ip:8090`)
2. Enter your username and password
3. Access the CyberPanel dashboard

### Default Login
- Username: `admin`
- Password: (set during installation)
- Change default password immediately

## Common Tasks

### Website Management

#### Creating a Website
1. Go to **Websites** → **Create Website**
2. Enter domain name
3. Choose PHP version
4. Select email options
5. Set disk quota
6. Click **Create Website**

#### Website Settings
- Change PHP version
- Manage SSL certificates
- Configure redirects
- Set up caching
- Manage file permissions

### Email Management

#### Creating Email Accounts
1. Go to **Email** → **Create Email Account**
2. Select domain
3. Enter email address and password
4. Set mailbox quota
5. Click **Create**

#### Email Features
- **Webmail** - Access Roundcube webmail
- **Email Forwarders** - Forward emails automatically
- **Auto-Responders** - Set up automatic replies
- **Email Routing** - Configure email routing rules

### Database Management

#### Creating Databases
1. Go to **Databases** → **Create Database**
2. Enter database name
3. Create database user
4. Set user privileges
5. Click **Create**

#### phpMyAdmin
- Access via **Databases** → **phpMyAdmin**
- Manage database content
- Import and export databases
- Run SQL queries

### SSL Certificates

#### Let's Encrypt SSL
1. Go to **SSL** → **Issue SSL**
2. Select website
3. Choose SSL type
4. Click **Issue SSL**
5. SSL installed automatically

#### SSL Features
- Automatic renewal
- Wildcard SSL support
- Force HTTPS redirect
- SSL status monitoring

## Advanced Features

### LiteSpeed Cache
- Built-in caching system
- Page caching
- Object caching
- Browser caching
- Cache management tools

### One-Click Installations
- Install popular applications
- WordPress, Joomla, and more
- Easy application management
- Automatic updates

### Backup Management

#### Creating Backups
1. Go to **Backup** → **Create Backup**
2. Select backup type
3. Choose websites/databases
4. Schedule backups
5. Download backups

#### Backup Features
- Full website backups
- Database backups
- Email backups
- Automated scheduled backups
- Remote backup storage

### DNS Management

#### Managing DNS Zones
1. Go to **DNS** → **Create DNS Zone**
2. Enter domain name
3. Configure DNS records
4. Manage A, CNAME, MX records
5. Set up DNS templates

### File Manager

#### Using File Manager
- Navigate to **Files** → **File Manager**
- Upload and download files
- Edit files directly
- Set file permissions
- Compress and extract archives

## Security Features

### Firewall
- Configure firewall rules
- Block IP addresses
- Allow/deny traffic
- Monitor firewall logs

### Security Settings
- Two-factor authentication
- Password policies
- Login security
- SSL/TLS settings

### ModSecurity
- Web application firewall
- Protect against attacks
- Custom security rules
- Security monitoring

## Performance Optimization

### Caching
- Enable LiteSpeed Cache
- Configure cache settings
- Clear cache when needed
- Monitor cache performance

### Optimization Tools
- Gzip compression
- Image optimization
- Database optimization
- Resource monitoring

## Monitoring and Logs

### Website Statistics
- View website traffic
- Monitor resource usage
- Check error logs
- Review access logs

### Server Monitoring
- CPU and memory usage
- Disk space monitoring
- Network statistics
- Service status

## Best Practices

- **Regular Backups** - Schedule automated backups
- **Update Regularly** - Keep CyberPanel updated
- **SSL Certificates** - Use SSL for all websites
- **Monitor Resources** - Check disk space and usage
- **Security** - Enable firewall and security features
- **Password Security** - Use strong passwords

## Troubleshooting

### Common Issues
- **Can't Access Panel** - Check firewall and port 8090
- **SSL Issues** - Verify DNS records and retry SSL
- **Email Not Working** - Check DNS MX records
- **Performance Issues** - Review cache settings and resources

## Support

For assistance with CyberPanel setup, configuration, or troubleshooting, contact our support team.

---

*Need help? Contact our [support team](https://littleitco.com.au/contact)*

