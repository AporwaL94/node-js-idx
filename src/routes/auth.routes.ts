import express from 'express';
import * as authController from '../controllers/auth.controller'

const router = express.Router();

router.post('/login', authController.login);
router.post('/signup', authController.signup);
router.post('/forgot-password', authController.forgotPassword);
router.get('/profile', authController.profile);

export default router;