# WP Mail Options

WP Mail Options (or WP Mail SMTP) is a plugin that configures WordPress to send emails through a proper SMTP server instead of the default PHP mail function.

## Overview

WordPress uses PHP's mail() function by default, which often results in emails being marked as spam or not being delivered. WP Mail SMTP fixes this by routing emails through proper SMTP servers like Gmail, SendGrid, or your hosting provider's SMTP service.

## Key Features

- **SMTP Configuration** - Send emails via SMTP servers
- **Multiple Providers** - Support for Gmail, Outlook, SendGrid, etc.
- **Email Logging** - Track sent emails
- **Email Testing** - Test email delivery
- **Security** - Secure email authentication
- **Delivery Reports** - Monitor email delivery status

## Installation

### Step 1: Install Plugin
1. Go to **Plugins** → **Add New**
2. Search for "WP Mail SMTP"
3. Click **Install Now**
4. Click **Activate**

### Step 2: Run Setup Wizard
1. Click **Launch Setup Wizard**
2. Choose your mailer
3. Enter SMTP credentials
4. Complete setup

## Configuration

### Gmail Setup

#### Using Gmail SMTP
1. Go to **WP Mail SMTP** → **Settings**
2. Select **Gmail** as mailer
3. Click **Connect Gmail**
4. Authorize with Google account
5. Complete setup

#### App Password Method
1. Enable 2FA on Google account
2. Generate app password
3. Use app password in plugin
4. Configure settings

### Outlook/Office 365 Setup

#### Using Microsoft 365
1. Select **Microsoft 365** as mailer
2. Enter email address
3. Enter app password
4. Configure server settings
5. Test connection

### SendGrid Setup

#### Using SendGrid
1. Select **SendGrid** as mailer
2. Enter API key
3. Configure sender information
4. Test delivery

### Generic SMTP Setup

#### Using Custom SMTP
1. Select **Other SMTP** as mailer
2. Enter SMTP host
3. Enter port (usually 587 or 465)
4. Enter username and password
5. Enable encryption (TLS/SSL)
6. Test connection

## Common SMTP Settings

### Ports
- **587** - TLS/STARTTLS (recommended)
- **465** - SSL
- **25** - Unencrypted (not recommended)

### Encryption
- **TLS** - Transport Layer Security
- **SSL** - Secure Sockets Layer
- **None** - Not recommended

### Authentication
- Always enable authentication
- Use app passwords when available
- Store credentials securely

## Email Testing

### Test Email Function
1. Go to **WP Mail SMTP** → **Tools**
2. Enter test email address
3. Click **Send Email**
4. Check delivery status

### Troubleshooting Failed Emails
- Check email logs
- Verify SMTP credentials
- Check server firewall
- Review error messages

## Email Logging

### Enabling Logs
1. Go to **WP Mail SMTP** → **Settings** → **General**
2. Enable **Email Log**
3. Configure log retention
4. Save settings

### Viewing Logs
- Go to **WP Mail SMTP** → **Email Log**
- View sent emails
- Check delivery status
- Review error messages

## Best Practices

### Security
- Use app passwords when available
- Enable SSL/TLS encryption
- Store credentials securely
- Regular password updates

### Delivery
- Use reputable SMTP provider
- Configure SPF records
- Set up DKIM
- Monitor delivery rates

### Performance
- Enable email queueing
- Optimize email sending
- Monitor server resources
- Limit email frequency

## Common Issues

### Emails Not Sending
- Verify SMTP credentials
- Check server firewall
- Review error logs
- Test SMTP connection

### Emails Going to Spam
- Configure SPF records
- Set up DKIM
- Use proper sender address
- Avoid spam trigger words

### Authentication Errors
- Verify credentials
- Check app passwords
- Review OAuth settings
- Test connection

## Advanced Configuration

### From Email Address
- Set default sender email
- Match domain with SMTP
- Configure display name
- Set reply-to address

### Email Headers
- Customize email headers
- Set proper content type
- Configure encoding
- Add custom headers

## Support

For assistance with WP Mail SMTP configuration or troubleshooting, contact our support team.

---

*Need help? Contact our [24/7 support team](https://little.cloud/contact)*

