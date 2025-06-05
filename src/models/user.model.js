const { pool } = require('../config/db.config');
const queries = require('../queries/user.query.js');
const { executeDbQuery } = require('../config/deafult.config.js');

async function findAll() {
  try {
    const rows = await executeDbQuery(queries.users);
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  findAll
};