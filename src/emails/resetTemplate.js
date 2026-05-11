export const resetPasswordTemplate = (resetURL, fullName) => {
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px;">
      <h2>Password Reset Request</h2>

      <p>Hello ${fullName},</p>

      <p>You requested a password reset.</p>

      <a
        href="${resetURL}"
        style="display:inline-block;padding:12px 20px;background:#2563eb;color:white;text-decoration:none;border-radius:8px;"
      >
        Reset Password
      </a>

      <p>This link expires in 1 hour.</p>

      <p>If you didn't request this, ignore this email.</p>
    </div>
  `;
};
