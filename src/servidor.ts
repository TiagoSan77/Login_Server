import express from 'express';
import UserRoutes  from './routes/UserRoutes'
import AuthRoutes  from './routes/AuthRoutes'
import { connect } from './database/mongoose';
import { PORT } from './config';
import cors from 'cors';
const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));
app.use(express.json());

connect();

app.use('/api/auth', AuthRoutes);
app.use('/api/auth', UserRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na pota http://localhost:${PORT}`);
});
