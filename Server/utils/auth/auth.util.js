import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const createToken = (user) => {
  return jwt.sign(
    {
      ...user,
    },
    process.env.JWT_SECRET,
    { algorithm: 'HS256', expiresIn: '4d' }
  );
};

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(12, (err, salt) => {
      if (err) {
        reject(err);
      }
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err);
        }
        resolve(hash);
      });
    });
  });
};

const verifyPassword = (passwordAttempt, hashedPassword) => {
  return bcrypt.compare(passwordAttempt, hashedPassword);
};

const requireAdmin = (req, res, next) => {
  if (!req.user) {
    return res.status(401).json({
      message: 'There was a problem authorizing the request',
    });
  }
  if (req.user.role !== 'admin') {
    return res.status(401).json({ message: 'Insufficient role' });
  }
  next();
};

export { createToken, hashPassword, verifyPassword, requireAdmin };
