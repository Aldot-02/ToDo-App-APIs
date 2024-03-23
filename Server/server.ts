import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/tasksRoute';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT || '9000');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const CONNECTION: string | undefined = process.env.MONGODB_URL;
if (!CONNECTION) {
  console.error('MongoDB connection string is not provided.');
  process.exit(1);
}

mongoose.connect(CONNECTION)
  .then(() => console.log("Connected to Database"))
  .catch((error: any) => console.error(error));

app.use(routes);
app.listen(PORT, () => console.log(`Listening on: ${PORT}`));