import express from 'express';
import dotenv from 'dotenv';
import './config/env';
import routes  from './routes/index'
import { connect } from './server/mongoose';

dotenv.config();

const app = express();

app.use(express.json());

connect();

const port = process.env.PORT || 3000;

app.use('/', routes);

app.listen(port, () => {
    console.log(`Servidor rodando na pota http://localhost:${port}`);
});
