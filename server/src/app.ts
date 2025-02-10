import express from 'express';
import { connectDB, db } from './config/database.ts';
import suggestionRoutes from './routes/suggestionRoutes.ts';
import commentRoutes from './routes/commentRoutes.ts';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;

// Attache middleware
app.use(express.json());
app.use(cors());

// Mount routes
app.use('/suggestions', suggestionRoutes);
app.use('/', commentRoutes);

async function start() {
  await connectDB();

  app.listen(port, async () => {
    console.log(`Server listening on port ${port}`);
  });
}

start();
