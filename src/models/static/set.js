import Connection from "../../.config/connection/db.js";
import { _dbreviews } from "../../.config/var/connection.js";

export async function addreview(schema) {
  let connection = Connection;
  try {
    await connection.connect();
    const db = connection.pipeline(_dbreviews);
    await db.insertOne(schema);
    return true;
  } catch (err) {
    throw err;
  } finally {
    if (connection) connection.close();
  }
}
