import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';
import path from 'path';

// Print more descriptive logs and error messages
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
    console.error(err);
  }

  // Perform migrations if necessary
  try {
    await db.migrate({
      // In development, uncomment to force the last migration to re-run to keep db clean
      // force: true,
      migrationsPath: path.join(process.cwd(), 'src', 'migrations'),
    });
    console.log('Database up to date');
  } catch (err) {
    console.error('Error syncing database');
    console.error(err);
  }

  return db;
}

export { db };
