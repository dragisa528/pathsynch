import Connection from "../../.config/connection/db.js";
import { _dbreviews } from "../../.config/var/connection.js";

export async function isreviewexist() {
  let connection = Connection;
  try {
    await connection.connect();
    const db = connection.pipeline(_dbreviews);
    const query = {};
    const options = {};
    const docs = await db.find(query, options).toArray();

    if (docs.length > 0) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    throw err;
  } finally {
    if (connection) connection.close();
  }
}

export async function fetchreview() {
  let connection = Connection;
  try {
    await connection.connect();
    const db = connection.pipeline(_dbreviews);
    const query = {};
    const options = { projection: { underReview: 1, _id: 0 } };
    const review = await db.findOne(query, options);
    return review;
  } catch (err) {
    throw err;
  } finally {
    if (connection) connection.close();
  }
}
