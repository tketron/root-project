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
    // Insert suggestion into DB
    const result = await db.run(
      'INSERT INTO Suggestions (content, author) VALUES (:content, :author)',
      { ':content': content, ':author': author },
    );

    // Get the suggestion after it was inserted into the table
    const newSuggestion = await db.get(
      'SELECT * FROM Suggestions WHERE suggestion_id = ?',
      [result.lastID],
    );

    res.status(201).json(newSuggestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating suggestion' });
  }
};
