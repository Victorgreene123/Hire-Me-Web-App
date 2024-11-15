// routes/auth.js
import { Router } from 'express';
import { login } from '../controllers/authController.js';

const authrouter = Router();

authrouter.post('/login', login); // Route for logging in

export default authrouter;
