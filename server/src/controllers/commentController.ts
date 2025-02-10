import { Request, Response } from 'express';
import { db } from '../config/database.ts';

export const getComments = async (req: Request, res: Response) => {
  const { suggestionID } = req.params;
  try {
    const comments = await db.all(
      'SELECT * FROM Comments WHERE suggestion_id = :suggestionID',
      { ':suggestionID': suggestionID },
    );
    res.json({ data: comments });
  } catch (error) {
    res.status(500).json({ error });
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
    res.status(500).json({ error });
  }
};
