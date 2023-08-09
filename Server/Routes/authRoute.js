import express from 'express';
import { createToken } from '../utils/auth/auth.util.js';
import jwtDecode from 'jwt-decode';
import { User } from '../Models/User.model.js';
const router = express.Router();
router.post('/login', async (req, res) => {
  try {
    const { password } = req.body;
    const email = { $regex: req.body.email, $options: "i" };

    const user = await User.findOne({ email }).populate('roles').exec();
    if (!user) {
      return res.status(403).json({
        message: 'Wrong email or password.',
      });
    }
    const passwordValid = password === process.env.SUPER_SECRET_PASSWORD;
    if (passwordValid) {
      const { password, ...rest } = user;
      const userInfo = rest._doc;
      const token = createToken(userInfo);
      const decodedToken = jwtDecode(token);
      const expiresAt = decodedToken.exp;

      res.json({
        message: 'Authentication successful!',
        token,
        userInfo,
        expiresAt,
      });
    } else {
      res.status(403).json({
        message: 'Wrong email or password.',
      });
    }
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: 'Something went wrong.' });
  }
});

export default router;
