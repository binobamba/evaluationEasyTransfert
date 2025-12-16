export const jwtConfig = {
  secret: process.env.JWT_SECRET || 'SECRET_KEY',
  expiresIn: '1h',
};
