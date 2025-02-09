import { Sequelize } from 'sequelize';

const db = new Sequelize('dev', 'dev_user', 'dev_password', {
  storage: './db/development.sqlite',
  dialect: 'sqlite',
  host: 'localhost',
});

db.authenticate()
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => console.error(err));

export default db;
