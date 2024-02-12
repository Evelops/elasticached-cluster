import express, { Express, Request, Response, NextFunction, Router } from 'express';
import * as MainController from '../controllers/main.controller';

const router: Router = express.Router();

// test
router.get('/', MainController.mainController);

export default router;
