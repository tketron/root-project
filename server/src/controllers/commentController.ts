import { Request, Response } from 'express';
import { db } from '../config/database.ts';
import { Comment } from '../models/comment.ts';

export const getComments = async (req: Request, res: Response) => {
  const { suggestionID } = req.params;
  try {
    // Get all comments, sorted by ascending order of time (oldest fist)
    const data = (await db.all(
      'SELECT * FROM Comments WHERE suggestion_id = :suggestionID ORDER BY created_at',
      { ':suggestionID': suggestionID },
    )) as Comment[];
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
    // Insert comment into the table
    const result = await db.run(
      'INSERT INTO Comments (content, author, suggestion_id) VALUES (:content, :author, :suggestionID)',
      {
        ':content': content,
        ':author': author,
        ':suggestionID': suggestionID,
      },
    );

    // Get and return the newly inserted comment
    const newComment = (await db.get(
      'SELECT * FROM Comments WHERE comment_id = ?',
      [result.lastID],
    )) as Comment;

    res.status(201).json(newComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating comment' });
  }
};
