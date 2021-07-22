import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import AppRouter from './router'
// Connect to db
import mongoose from './database'

const PORT = 3000;
const app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));

app.use(cors({
    exposedHeaders: "*"
}));

// For getting json data from the request
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json({ limit: '50mb' }))


app.set('root', __dirname);

// Initialize router
const router = new AppRouter(app)

app.server.listen(process.env.PORT || PORT, () => {
    console.log(`App is running on port ${app.server.address().port}`);
});

export default app;