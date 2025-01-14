import express from 'express';
import router from './router';
import {connectDB} from './db';

const app = express();

connectDB();

app.use(express.json());

app.use('/', router)



export default app;