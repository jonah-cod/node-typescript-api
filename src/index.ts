import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();
import taskrouter from './routes/taskRoutes';
import userRouter from './routes/userRoutes';


const app = express();
app.use(express.json())

app.use('/tasks', taskrouter)
app.use('/users', userRouter)

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log(`App running on port: ${port}`));