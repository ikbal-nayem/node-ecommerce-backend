import dotenv from 'dotenv';
import express from 'express';
import { connectToDatabase } from '../src/config/db-connect';
import appRoutes from '../src/routes/app.route';

dotenv.config();

const HOST = process.env.HOST || 'http://localhost';
const PORT = parseInt(process.env.PORT || '4500');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World!' });
});
app.use('/api', appRoutes);

app.listen(PORT, async () => {
  await connectToDatabase();

  console.log(`Application started on URL ${HOST}:${PORT} 🎉`);
});
