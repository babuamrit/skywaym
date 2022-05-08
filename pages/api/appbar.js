import executeQuery from "../../db/mysql.js";
import connect from "../../db/db.js";
export default async function handler(req, res) {
  connect();

  res.status(200).json({ name: "Hello" });
}
