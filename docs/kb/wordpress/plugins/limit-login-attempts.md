# Limit Login Attempts

Limit Login Attempts is a security plugin that protects your WordPress site from brute force attacks by limiting the number of login attempts.

## Overview

Limit Login Attempts prevents unauthorized access by blocking IP addresses after a specified number of failed login attempts. This is essential for protecting your WordPress admin area from brute force attacks.

## Key Features

- **Login Attempt Limiting** - Block IPs after failed attempts
- **Lockout Duration** - Configurable lockout periods
- **IP Whitelist/Blacklist** - Manage trusted and blocked IPs
- **Email Notifications** - Get alerts for lockouts
- **Login Logs** - Track login attempts
- **GDPR Compliant** - Privacy-friendly logging

## Installation

### Step 1: Install Plugin
1. Go to **Plugins** → **Add New**
2. Search for "Limit Login Attempts Reloaded"
3. Click **Install Now**
4. Click **Activate**

### Step 2: Basic Configuration
1. Go to **Settings** → **Limit Login Attempts**
2. Configure lockout settings
3. Set attempt limits
4. Configure notifications

## Configuration

### Basic Settings

#### Allowed Retries
- Set number of failed attempts before lockout
- Default: 4 attempts
- Recommended: 3-5 attempts

#### Lockout Duration
- Time before lockout expires
- Default: 20 minutes
- Recommended: 15-30 minutes for normal, 24 hours for extended

#### Lockout Period
- Extended lockout after multiple lockouts
- Default: 24 hours
- Recommended: 24-48 hours

### Advanced Settings

#### Cookies
- Enable cookie-based tracking
- Better for shared IPs
- Recommended: Enabled

#### Lockout Messages
- Customize error messages
- Don't reveal system information
- Keep messages generic

### Email Notifications

#### Enable Notifications
- Get email alerts for lockouts
- Monitor attack attempts
- Recommended: Enabled

#### Email Settings
- Configure notification frequency
- Set email recipients
- Avoid email spam

## IP Management

### Whitelist IPs
1. Go to **Settings** → **Limit Login Attempts**
2. Click **Whitelist** tab
3. Add trusted IP addresses
4. Save changes

### Blacklist IPs
1. Go to **Blacklist** tab
2. Add IP addresses to block
3. Set permanent blocks
4. Monitor blacklist

## Login Logs

### Viewing Logs
- Access login attempt history
- See failed attempts
- Monitor successful logins
- Identify attack patterns

### Log Management
- Clear old logs regularly
- Export logs for analysis
- Review suspicious activity
- Maintain privacy compliance

## Best Practices

### Recommended Settings
- **Allowed Retries**: 3-4 attempts
- **Lockout Duration**: 20-30 minutes
- **Extended Lockout**: 24 hours
- **Enable Notifications**: Yes
- **Cookie Tracking**: Enabled

### Security Tips
- Use strong passwords
- Enable two-factor authentication
- Monitor login logs regularly
- Whitelist your own IPs
- Review blacklist periodically

### Additional Security
- Use security keys in wp-config.php
- Change default admin username
- Limit login to specific IPs
- Use SSL/HTTPS
- Install security plugins

## Troubleshooting

### Locked Out of Admin
- Wait for lockout to expire
- Access from whitelisted IP
- Clear lockout from database
- Contact hosting support

### Too Many False Positives
- Increase allowed retries
- Extend lockout duration
- Whitelist legitimate IPs
- Review login patterns

### Not Receiving Emails
- Check spam folder
- Verify email settings
- Check server email configuration
- Test email delivery

## Integration

### With Other Security Plugins
- Works with Wordfence
- Compatible with iThemes Security
- Can use alongside Sucuri
- Test compatibility

### Two-Factor Authentication
- Use with 2FA plugins
- Additional security layer
- Combine for better protection

## Support

For assistance with Limit Login Attempts configuration or troubleshooting, contact our support team.

---

*Need help? Contact our [24/7 support team](https://little.cloud/contact)*

