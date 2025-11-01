# Microsoft Entra

Microsoft Entra (formerly Azure Active Directory) is Microsoft's cloud-based identity and access management service.

## Overview

Microsoft Entra provides identity and access management for Microsoft 365 and other cloud services, helping secure access to applications and resources.

## Key Features

- **Single Sign-On (SSO)** - Sign in once to access multiple apps
- **Multi-Factor Authentication (MFA)** - Additional security layer
- **User Management** - Manage user identities and access
- **Conditional Access** - Control access based on conditions
- **Application Management** - Manage access to cloud applications
- **Identity Protection** - Detect and respond to identity risks
- **Directory Services** - Cloud directory services

## Identity Types

### User Identities
- **Cloud-only Users** - Users created directly in Microsoft Entra
- **Synchronized Users** - Users synchronized from on-premises Active Directory
- **Guest Users** - External users invited to access resources

### Managed Identities
- **System-assigned** - Tied to a specific resource
- **User-assigned** - Can be assigned to multiple resources

## Single Sign-On (SSO)

### Benefits
- Users sign in once to access multiple applications
- Reduces password fatigue
- Improved security with centralized authentication
- Better user experience

### SSO Methods
- **Password-based SSO** - Apps store credentials securely
- **SAML-based SSO** - Standard authentication protocol
- **OAuth/OIDC** - Modern authentication protocols

## Multi-Factor Authentication (MFA)

### What is MFA?
MFA adds an additional layer of security by requiring two or more verification methods.

### Verification Methods
- **Microsoft Authenticator App** - Push notification or code
- **Phone Call** - Automated phone call
- **Text Message** - SMS code
- **Hardware Token** - Physical security key

### Enabling MFA
1. Go to Microsoft 365 admin center
2. Navigate to **Users** → **Active users**
3. Select user → **Manage security defaults** or **Multi-factor authentication**
4. Enable MFA for user

## Conditional Access

### What is Conditional Access?
Conditional Access policies control who can access resources and under what conditions.

### Common Policies
- **Require MFA** - Require MFA for certain apps or users
- **Block Access** - Block access from certain locations
- **Require Compliant Device** - Require managed devices
- **Risk-based Access** - Adjust access based on risk level

### Creating Policies
1. Go to Microsoft Entra admin center
2. Navigate to **Security** → **Conditional Access**
3. Click **New policy**
4. Configure conditions and access controls
5. Enable and save policy

## Application Management

### Enterprise Applications
- Add cloud applications to Microsoft Entra
- Configure SSO for applications
- Manage user access to applications
- Monitor application usage

### Adding Applications
1. Go to **Enterprise applications**
2. Click **New application**
3. Browse or add custom application
4. Configure SSO and access

## User Management

### User Provisioning
- **Automatic Provisioning** - Automatically create users from HR systems
- **Manual Provisioning** - Create users manually
- **Bulk Import** - Import users in bulk

### User Attributes
- Manage user profile information
- Assign licenses
- Set user roles
- Configure user settings

## Identity Protection

### Risk Detection
- **Sign-in Risk** - Unusual sign-in patterns
- **User Risk** - Compromised credentials
- **Vulnerability Detection** - Security vulnerabilities

### Risk Response
- **Require Password Change** - Force password reset
- **Block Access** - Temporarily block risky sign-ins
- **Require MFA** - Require additional verification

## Directory Synchronization

### Azure AD Connect
- Synchronize on-premises Active Directory with Microsoft Entra
- Hybrid identity deployment
- Password hash synchronization
- Pass-through authentication

### Setup
1. Install Azure AD Connect
2. Configure synchronization settings
3. Run initial sync
4. Monitor synchronization status

## Best Practices

### Security
- **Enable MFA** - Require MFA for all users
- **Use Conditional Access** - Implement access policies
- **Monitor Identity Protection** - Review risk reports regularly
- **Regular Audits** - Review user access regularly

### User Experience
- **Enable SSO** - Reduce sign-in friction
- **Self-Service Password Reset** - Allow users to reset passwords
- **Clear Communication** - Inform users about security changes

### Administration
- **Use Groups** - Manage access via groups
- **Role-Based Access** - Assign appropriate admin roles
- **Documentation** - Document policies and configurations

## Troubleshooting

### Common Issues
- **Can't Sign In** - Check user account status and MFA
- **SSO Not Working** - Verify application configuration
- **Sync Issues** - Check Azure AD Connect status
- **Permission Issues** - Verify user roles and licenses

## Support

For assistance with Microsoft Entra configuration, security policies, or troubleshooting, contact our support team.

---

*Need help? Contact our [24/7 support team](https://little.cloud/contact)*

