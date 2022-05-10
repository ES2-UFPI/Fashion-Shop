import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
import { routes } from './src/view/routes.js';
import { validTokenAdmin, validToken } from './src/utils/auth/authValidation.js';
import cors from 'cors';
dotenv.config();
const PORT = process.env.PORT;
const app = express();

// mongoose
// .connect(process.env.MONGO_URL)
// .then(() => consoles.log("Conexão com o DB bem sucedida!"))
// .catch((err) => {
//     console.log(err);
// });

app.listen(PORT, () => {
    console.log('Backend server is running on ' + PORT + '!🥰🥰');
});
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization, Role, role');
    res.header('Access-Control-Allow-Methods',
        'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use('/app', (req, res, next) => {
    const validation = validToken(req.headers?.authorization || req.headers?.Authorization);
    if (!validation) {
        res.status(401).send('Access denied');
    } else {
        next();
    }
});

app.use('/admin', (req, res, next) => {
    const validation = validTokenAdmin(req.headers?.authorization);
    if (!validation) {
        res.status(401).send('Access denied');
    } else {
        next();
    }
});

routes(app);
