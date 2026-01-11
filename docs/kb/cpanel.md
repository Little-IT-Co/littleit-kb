# cPanel

cPanel is a web-based control panel that simplifies website and server management.

## Overview

cPanel provides a graphical interface for managing web hosting accounts, making it easy to perform tasks like managing files, databases, email accounts, and domains without needing command-line knowledge.

## Key Features

- **File Management** - Upload, edit, and organize files
- **Database Management** - Create and manage MySQL/MariaDB databases
- **Email Accounts** - Create and manage email accounts
- **Domain Management** - Add domains and subdomains
- **Backup Management** - Create and restore backups
- **SSL Certificates** - Install and manage SSL certificates
- **Software Installation** - One-click installers for popular applications
- **Security Tools** - IP blockers, password protection, and more

## Accessing cPanel

### How to Access
1. Navigate to your cPanel URL (usually `https://yourdomain.com/cpanel` or `https://yourdomain.com:2083`)
2. Enter your username and password
3. You'll see the cPanel dashboard

### First Time Setup
- Change your password
- Set up email accounts
- Configure security settings
- Review available features

## Common Tasks

### File Management

#### File Manager
- Navigate to **Files** → **File Manager**
- Upload files via drag-and-drop or upload button
- Create, edit, and delete files and folders
- Set file permissions
- Extract and compress archives

#### FTP Accounts
- Create FTP accounts for file access
- Set home directory for each account
- Manage FTP access independently

### Email Management

#### Creating Email Accounts
1. Go to **Email** → **Email Accounts**
2. Click **Create**
3. Enter email address and password
4. Set mailbox quota
5. Click **Create**

#### Email Features
- **Webmail** - Access email via web interface
- **Email Forwarders** - Forward emails to other addresses
- **Auto-Responders** - Set up automatic replies
- **Email Filters** - Organize incoming emails

### Database Management

#### Creating Databases
1. Go to **Databases** → **MySQL Databases**
2. Enter database name
3. Click **Create Database**
4. Create database user
5. Add user to database with appropriate privileges

#### phpMyAdmin
- Access via **Databases** → **phpMyAdmin**
- Manage database tables and data
- Run SQL queries
- Import and export databases

### Domain Management

#### Addon Domains
- Add additional domains to your account
- Each domain can have its own document root
- Manage multiple websites from one cPanel

#### Subdomains
- Create subdomains (e.g., blog.yourdomain.com)
- Set document root for each subdomain
- Manage DNS records

### SSL Certificates

#### Installing SSL
1. Go to **Security** → **SSL/TLS Status**
2. Select domains to secure
3. Click **Run AutoSSL** or install manually
4. Force HTTPS redirect if needed

## Software Installation

### Softaculous
- One-click installation of popular applications
- WordPress, Joomla, Drupal, and more
- Automatic updates available
- Easy application management

### Other Installers
- Installatron
- QuickInstall
- Custom installation scripts

## Backup Management

### Creating Backups
1. Go to **Files** → **Backup**
2. Choose backup type:
   - **Full Backup** - Complete account backup
   - **Partial Backup** - Select specific components
3. Click **Generate Backup**
4. Download backup file

### Restoring Backups
- Upload backup file
- Select restore options
- Restore full account or specific components

## Security Features

### IP Blocker
- Block specific IP addresses
- Protect against attacks
- Manage blocked IPs

### Password Protected Directories
- Protect directories with passwords
- Create user accounts for access
- Secure sensitive areas

### SSL/TLS
- Install SSL certificates
- Force HTTPS connections
- Secure data transmission

## Performance Tools

### Cache Management
- Enable various caching options
- Clear cache when needed
- Optimize website performance

### Optimize Website
- Compress files
- Optimize databases
- Improve loading speeds

## Advanced Features

### Cron Jobs
- Schedule automated tasks
- Run scripts at specific times
- Automate maintenance tasks

### Redirects
- Set up URL redirects
- 301 and 302 redirects
- Manage redirect rules

### Error Pages
- Customize error pages
- 404, 403, and other error pages
- Improve user experience

## Best Practices

- **Regular Backups** - Schedule automatic backups
- **Update Passwords** - Change passwords regularly
- **Monitor Usage** - Check disk space and bandwidth
- **Security Updates** - Keep software updated
- **Document Changes** - Keep notes of configuration changes

## Support

For assistance with cPanel configuration, troubleshooting, or advanced features, contact our support team.

---

*Need help? Contact our [support team](https://littleitco.com.au/contact)*

