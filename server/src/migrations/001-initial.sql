-- Up
CREATE TABLE Suggestions (
    -- In production should use AUTOINCREMENT instead of ROWID to prevent duplicates
    suggestion_id INTEGER PRIMARY KEY DEFAULT ROWID NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE Comments (
    -- In production should use AUTOINCREMENT instead of ROWID to prevent duplicates
    comment_id INTEGER PRIMARY KEY DEFAULT ROWID NOT NULL,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    suggestion_id INTEGER NOT NULL REFERENCES Suggestions(suggestion_id) ON DELETE CASCADE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Down
DROP TABLE Suggestions;
DROP TABLE Comments;