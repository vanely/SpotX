import { createEmailTransporter, emailConfig } from '@/config/email.config';

export class EmailService {
  private transporter;

  constructor() {
    this.transporter = createEmailTransporter();
  }

  async sendMagicLink(email: string, magicLinkUrl: string, displayName?: string): Promise<void> {
    const subject = 'Sign in to SpotX';
    const html = this.generateMagicLinkEmail(magicLinkUrl, displayName);

    await this.transporter.sendMail({
      from: emailConfig.from,
      to: email,
      subject,
      html,
    });
  }

  async sendWelcomeEmail(email: string, displayName?: string): Promise<void> {
    const subject = 'Welcome to SpotX!';
    const html = this.generateWelcomeEmail(displayName);

    await this.transporter.sendMail({
      from: emailConfig.from,
      to: email,
      subject,
      html,
    });
  }

  private generateMagicLinkEmail(magicLinkUrl: string, displayName?: string): string {
    const greeting = displayName ? `Hi ${displayName}` : 'Hi there';
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sign in to SpotX</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8fafc;
            }
            .container {
                background: white;
                border-radius: 12px;
                padding: 40px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
            }
            .logo {
                font-size: 28px;
                font-weight: bold;
                color: #3B82F6;
                margin-bottom: 10px;
            }
            .button {
                display: inline-block;
                background: #3B82F6;
                color: white;
                padding: 16px 32px;
                text-decoration: none;
                border-radius: 8px;
                font-weight: 600;
                margin: 20px 0;
                text-align: center;
            }
            .button:hover {
                background: #2563EB;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
            }
            .link {
                color: #3B82F6;
                word-break: break-all;
                font-size: 12px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">🗺️ SpotX</div>
                <h1>Sign in to your account</h1>
            </div>
            
            <p>${greeting},</p>
            
            <p>Click the button below to sign in to your SpotX account. This link will expire in 15 minutes for security.</p>
            
            <div style="text-align: center;">
                <a href="${magicLinkUrl}" class="button">Sign In to SpotX</a>
            </div>
            
            <p>If the button doesn't work, you can also copy and paste this link into your browser:</p>
            <p class="link">${magicLinkUrl}</p>
            
            <p>If you didn't request this email, you can safely ignore it.</p>
            
            <div class="footer">
                <p>Happy spot hunting! 🛹</p>
                <p>The SpotX Team</p>
            </div>
        </div>
    </body>
    </html>
    `;
  }

  private generateWelcomeEmail(displayName?: string): string {
    const greeting = displayName ? `Hi ${displayName}` : 'Welcome';
    
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to SpotX</title>
        <style>
            body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f8fafc;
            }
            .container {
                background: white;
                border-radius: 12px;
                padding: 40px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .header {
                text-align: center;
                margin-bottom: 30px;
            }
            .logo {
                font-size: 28px;
                font-weight: bold;
                color: #3B82F6;
                margin-bottom: 10px;
            }
            .features {
                background: #f8fafc;
                border-radius: 8px;
                padding: 20px;
                margin: 20px 0;
            }
            .feature {
                margin: 10px 0;
                display: flex;
                align-items: center;
            }
            .feature-icon {
                margin-right: 10px;
                font-size: 18px;
            }
            .footer {
                text-align: center;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                color: #6b7280;
                font-size: 14px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo">🗺️ SpotX</div>
                <h1>Welcome to SpotX!</h1>
            </div>
            
            <p>${greeting},</p>
            
            <p>Welcome to SpotX - the community-driven platform for discovering and sharing amazing spots for skateboarding, rollerblading, parkour, and more!</p>
            
            <div class="features">
                <h3>Get started by:</h3>
                <div class="feature">
                    <span class="feature-icon">🗺️</span>
                    <span>Exploring spots near you on our interactive map</span>
                </div>
                <div class="feature">
                    <span class="feature-icon">📍</span>
                    <span>Adding your favorite spots to help the community</span>
                </div>
                <div class="feature">
                    <span class="feature-icon">⭐</span>
                    <span>Rating and tagging spots with useful information</span>
                </div>
                <div class="feature">
                    <span class="feature-icon">📚</span>
                    <span>Creating collections of your favorite spots</span>
                </div>
            </div>
            
            <p>Join thousands of riders who are already using SpotX to discover their next adventure!</p>
            
            <div class="footer">
                <p>Happy spot hunting! 🛹</p>
                <p>The SpotX Team</p>
            </div>
        </div>
    </body>
    </html>
    `;
  }
}