import nodemailer from 'nodemailer';

export const emailConfig = {
  from: process.env.EMAIL_FROM || 'noreply@spotx.app',
  service: process.env.EMAIL_SERVICE || 'gmail',
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  user: process.env.EMAIL_USER,
  pass: process.env.EMAIL_PASS,
};

export const createEmailTransporter = () => {
  if (!emailConfig.user || !emailConfig.pass) {
    throw new Error('Email credentials not configured');
  }

  return nodemailer.createTransport({
    service: emailConfig.service,
    host: emailConfig.host,
    port: emailConfig.port,
    secure: emailConfig.port === 465,
    auth: {
      user: emailConfig.user,
      pass: emailConfig.pass,
    },
  });
};
