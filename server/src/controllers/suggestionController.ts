import { Request, Response } from 'express';
import { db } from '../config/database.ts';
import { Suggestion } from '../models/suggestion.ts';

export const getSuggestions = async (req: Request, res: Response) => {
  try {
    // Return all suggestions sorted in descending order by time (newest first)
    const data = (await db.all(
      'SELECT * FROM Suggestions ORDER BY created_at DESC',
    )) as Suggestion[];
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

    // Get and return the suggestion after it was inserted into the table
    const newSuggestion = (await db.get(
      'SELECT * FROM Suggestions WHERE suggestion_id = ?',
      [result.lastID],
    )) as Suggestion;

    res.status(201).json(newSuggestion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating suggestion' });
  }
};
