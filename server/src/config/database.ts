import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

sqlite3.verbose();

let db: Database<sqlite3.Database, sqlite3.Statement>;

export async function connectDB() {
  // Connect to the SQLite database
  try {
    db = await open({
      filename: path.join(process.cwd(), 'src', 'db', 'development.db'),
      driver: sqlite3.Database,
    });
    console.log('Connected to database');
  } catch (err) {
    console.error('Error connecting to database');
  }

  // Perform migrations if necessary
  try {
    await db.migrate({
      force: true, // In development, force the last migration to run
      migrationsPath: path.join(process.cwd(), 'src', 'migrations'),
    });
    console.log('Database up to date');
  } catch (err) {
    console.error(err);
    console.error('Error applying migrations');
  }

  return db;
}

export { db };
