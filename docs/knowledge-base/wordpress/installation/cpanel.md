# Installing on cPanel

cPanel provides several methods to install WordPress, with one-click installers being the easiest option.

## Overview

cPanel includes Softaculous or other one-click installers that make WordPress installation quick and straightforward. This method handles database creation, file uploads, and initial configuration automatically.

## Prerequisites

- cPanel access
- Domain or subdomain configured
- Database access (usually created automatically)

## Method 1: Softaculous (One-Click Installer)

### Step 1: Access Softaculous
1. Log into cPanel
2. Find **Softaculous Apps Installer** section
3. Click **WordPress** icon
4. Click **Install Now**

### Step 2: Configure Installation
1. Choose installation URL
   - Select domain or subdomain
   - Choose installation directory (root or subdirectory)
2. Set site details
   - Site Name
   - Site Description
   - Admin Username (avoid "admin")
   - Admin Password (use strong password)
   - Admin Email
3. Choose language
4. Select plugins/themes (optional)

### Step 3: Advanced Options
- Database name (auto-generated or custom)
- Table prefix (change from default "wp_")
- Backup location
- Update notifications

### Step 4: Install
1. Review settings
2. Click **Install**
3. Wait for installation to complete
4. Note login credentials

### Step 5: Access WordPress
1. Visit your site URL
2. Access admin at `/wp-admin`
3. Login with admin credentials
4. Complete initial setup

## Method 2: WordPress Toolkit (if available)

### Using WordPress Toolkit
1. Go to **WordPress Toolkit** in cPanel
2. Click **Install WordPress**
3. Follow installation wizard
4. Configure settings
5. Complete installation

## Method 3: Manual Installation

### Step 1: Download WordPress
1. Go to [wordpress.org/download](https://wordpress.org/download)
2. Download latest WordPress
3. Extract ZIP file

### Step 2: Upload Files via File Manager
1. Go to **File Manager** in cPanel
2. Navigate to public_html (or your domain directory)
3. Upload WordPress ZIP file
4. Extract ZIP file
5. Move files to correct location if needed

### Step 3: Create Database
1. Go to **MySQL Databases** in cPanel
2. Create new database
3. Create database user
4. Add user to database
5. Grant all privileges

### Step 4: Configure wp-config.php
1. Find wp-config-sample.php in File Manager
2. Rename to wp-config.php
3. Edit file
4. Add database credentials:
   ```php
   define('DB_NAME', 'database_name');
   define('DB_USER', 'database_user');
   define('DB_PASSWORD', 'database_password');
   define('DB_HOST', 'localhost');
   ```
5. Add security keys (from [wordpress.org/salts](https://api.wordpress.org/secret-key/1.1/salt/))
6. Save file

### Step 5: Run Installation
1. Visit your domain
2. Follow installation wizard
3. Enter site information
4. Create admin account
5. Complete installation

## Post-Installation Steps

### Security Configuration
1. Change default admin username
2. Set strong admin password
3. Install security plugin
4. Configure login limits
5. Set up SSL certificate

### Essential Plugins
- Security plugin (Wordfence, iThemes Security)
- Backup plugin (UpdraftPlus)
- SEO plugin (Yoast SEO)
- Caching plugin (if needed)

### File Permissions
- Files: 644
- Directories: 755
- wp-config.php: 600
- .htaccess: 644

## Troubleshooting

### Installation Errors
- **Database Connection Error**: Verify database credentials
- **White Screen**: Check PHP version and error logs
- **Permission Denied**: Check file permissions
- **Memory Limit**: Increase PHP memory limit

### Common Issues
- **Files Not Uploading**: Check file size limits
- **Database Not Found**: Verify database name
- **403 Forbidden**: Check .htaccess and permissions
- **SSL Errors**: Configure SSL certificate

## Updating WordPress

### Via Softaculous
1. Go to **Softaculous** → **My Apps**
2. Find WordPress installation
3. Click **Upgrade**
4. Follow upgrade wizard

### Manual Update
1. Backup site first
2. Download latest WordPress
3. Upload via File Manager
4. Run update script
5. Clear cache

## Managing Multiple Installations

### Creating Multiple Sites
- Use subdomains
- Use subdirectories
- Create separate databases
- Organize installations

### WordPress Toolkit
- Manage multiple sites
- Bulk updates
- Centralized management
- Backup management

## Best Practices

### Security
- Use unique database prefix
- Change admin username
- Enable two-factor authentication
- Regular updates
- Install security plugins

### Backups
- Set up automated backups
- Store backups off-site
- Test backup restoration
- Keep multiple backup copies

### Performance
- Use caching plugins
- Optimize images
- Enable Gzip compression
- Use CDN if needed

## Support

For assistance with WordPress installation on cPanel, contact our support team.

---

*Need help? Contact our [24/7 support team](https://little.cloud/contact)*

