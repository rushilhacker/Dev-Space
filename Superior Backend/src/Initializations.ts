import { Hono, Database} from './imports';

const app = new Hono()

const db = new Database("./db/mydb.sqlite", { create: true });
db.exec("PRAGMA journal_mode = WAL;");

export {db, app}