import { Request, Response } from 'express';
import { db } from '../config/database.ts';

export const getComments = async (req: Request, res: Response) => {
  const { suggestionID } = req.params;
  try {
    const data = await db.all(
      'SELECT * FROM Comments WHERE suggestion_id = :suggestionID',
      { ':suggestionID': suggestionID },
    );
    res.json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getting comments' });
  }
};

export const createComment = async (req: Request, res: Response) => {
  const { suggestionID } = req.params;
  const { content, author } = req.body;
  try {
    const result = await db.run(
      'INSERT INTO Comments (content, author, suggestion_id) VALUES (:content, :author, :suggestionID)',
      {
        ':content': content,
        ':author': author,
        ':suggestionID': suggestionID,
      },
    );
    res.json();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating comment' });
  }
};
