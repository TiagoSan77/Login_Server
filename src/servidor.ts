import express from 'express';
import routes  from './routes/index'
import { connect } from './database/mongoose';
import { PORT } from './config';

const app = express();

app.use(express.json());

connect();

app.use('/api/auth', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na pota http://localhost:${PORT}`);
});
