import express from 'express';
import { connectDB, db } from './config/database.ts';
const app = express();
const port = process.env.PORT || 3000;

async function start() {
  await connectDB();

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, async () => {
    console.log(`Example app listening on port ${port}`);
  });
}

start();
