import {db} from './Initializations'

db.exec(`CREATE TABLE IF NOT EXISTS users (
    user_id INTEGER PRIMARY KEY,
    image TEXT,
    username TEXT UNIQUE,
    first_name TEXT,
    last_name TEXT,
    subscription BOOLEAN
);
`)


const findTaskListByUserId = db.query(`
select * from tasks where user_id = ?
`)

const findAllUsers = db.query(`
select username from users
`)

const addUserQuery = db.query(`
insert into users (image, username, first_name, last_name) values (?,?,?,?)
`)

export { findTaskListByUserId, addUserQuery, findAllUsers}