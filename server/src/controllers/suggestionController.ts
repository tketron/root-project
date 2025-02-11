import { Request, Response } from 'express';
import { db } from '../config/database.ts';
import { Suggestion } from '../models/suggestion.ts';

export const getSuggestions = async (req: Request, res: Response) => {
  try {
    const data = (await db.all('SELECT * FROM Suggestions')) as Suggestion[];
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting suggestions' });
  }
};

export const createSuggestion = async (req: Request, res: Response) => {
  const { content, author } = req.body;
  try {
    const result = await db.run(
      'INSERT INTO Suggestions (content, author) VALUES (:content, :author)',
      { ':content': content, ':author': author },
    );
    res.json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating suggestion' });
  }
};
