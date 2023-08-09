import jsonwebtoken from 'jsonwebtoken';
import { createLogger } from 'winston';

const verifyToken = (req, res, next) => {
  const bearerHeader = req.headers['auth-token'];

  if (bearerHeader) {
    jsonwebtoken.verify(
      bearerHeader,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Invalid token' });
        } else {
          req.user = decoded;
          next();
        }
      }
    );
  } else {
    return res.status(403).send('Unauthorized');
  }
};

const verifyAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user);
    if (!req.user.roles.some((role) => role.name === 'Guest')) {
      next();
    } else {
      return res.status(403).send({ error: 'Unauthorized' });
    }
  });
};

export { verifyAuth, verifyToken };
