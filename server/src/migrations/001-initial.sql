
-- Up
CREATE TABLE Suggestions (
    suggestion_id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE Comments (
    comment_id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    author TEXT NOT NULL,
    suggestion_id INTEGER NOT NULL REFERENCES Suggestions(suggestion_id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Down
DROP TABLE Suggestions;
DROP TABLE Comments;