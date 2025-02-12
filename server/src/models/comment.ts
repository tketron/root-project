// Interface representation of rows in Comments table
export interface Comment {
  comment_id: number;
  content: string;
  author: string;
  created_at: string;
  suggestion_id: number;
}
