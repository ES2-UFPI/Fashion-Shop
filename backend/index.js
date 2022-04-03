import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import { routes } from './src/view/routes.js';

dotenv.config();
const PORT = process.env.PORT;
const app = express();

app.listen(PORT);
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Role, role');
    res.header('Access-Control-Allow-Methods',
        'PUT, POST, GET, DELETE, OPTIONS');
    next();
});
routes(app);
