import express, {Express, Application, Request, Response} from 'express';
import multer, {Multer} from 'multer';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';

import { trackingIpMiddleware } from './middleware/common';
import { errorHandlingMiddleware } from './middleware/error';

dotenv.config();

const app: Application = express();

app.set('port', process.env.PORT || 4000);

// Middleware
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(trackingIpMiddleware);
app.use(errorHandlingMiddleware);



//Router
app.get('/',(req:Request, res: Response)=> {
    res.send('Root Router');
})

app.listen(app.get('port'), ()=>{
    console.log(`start running server: http://localhost:${app.get('port')}`);
})



