import express, {Request, Response} from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
import router from './routes/taskRoutes';


const app = express();
app.use(express.json())

app.use(router)

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`App running on port: ${port}`));