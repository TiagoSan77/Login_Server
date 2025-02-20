import express from 'express';
import routes  from './routes/index'
import { connect } from './server/mongoose';
import { PORT } from './config';

const app = express();

app.use(express.json());

connect();

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na pota http://localhost:${PORT}`);
});
