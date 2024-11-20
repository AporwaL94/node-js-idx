import { Request, Response } from 'express';

export const login = (req: Request, res: Response) => {
  res.send('Login');
};

export const signup = (req: Request, res: Response) => {
  res.send('Signup');
};

export const forgotPassword = (req: Request, res: Response) => {
  res.send('Forgot Password');
};

export const profile = (req: Request, res: Response) => {
  res.send('Profile');
};