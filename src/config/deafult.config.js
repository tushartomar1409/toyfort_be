const { pool } = require('../config/db.config');

function getCurrentDateTime() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0'); // months are 0-indexed
  const day = String(now.getDate()).padStart(2, '0');

  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

async function executeDbQuery(query, params = []) {
  let connection;
  try {
    connection = await pool.getConnection();
    const results = await connection.query(query, params);
    return results[0];
  } catch (error) {
    console.error("Query Error:", error.code || error.message);
    throw error;
  } finally {
    if (connection) connection.release();
  }
}

async function beginTransaction() {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.beginTransaction();
    return;
  } catch (error) {
    console.error("Query Error:", error.code || error.message);
    throw error;
  } finally {
    if (connection) connection.release();
  }
}

async function commitTransaction() {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.commitTransaction();
    return;
  } catch (error) {
    console.error("Query Error:", error.code || error.message);
    throw error;
  } finally {
    if (connection) connection.release();
  }
}
async function rollbackTransaction() {
  let connection;
  try {
    connection = await pool.getConnection();
    await connection.rollbackTransaction();
    return;
  } catch (error) {
    console.error("Query Error:", error.code || error.message);
    throw error;
  } finally {
    if (connection) connection.release();
  }
}

module.exports = {
  getCurrentDateTime,
  ensureDirExists,
  executeDbQuery,
  beginTransaction,
  commitTransaction,
  rollbackTransaction
};