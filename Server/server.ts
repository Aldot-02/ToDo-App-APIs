import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routes from './routes/tasksRoute.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT: number = parseInt(process.env.PORT || '9000');

app.use(express.json());
app.use(cors());

const CONNECTION: string | undefined = process.env.MONGODB_URL;
if (!CONNECTION) {
  console.error('MongoDB connection string is not provided.');
  process.exit(1);
}

mongoose.connect(CONNECTION)
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.error(error));

app.use(routes);
app.listen(PORT, () => console.log(`Listening on: ${PORT}`));