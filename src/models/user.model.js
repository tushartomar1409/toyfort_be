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

async function getSlider() {
  try {
    const rows = await executeDbQuery(queries.getSliderImages);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getbookImages() {
  try {
    const rows = await executeDbQuery(queries.bookImages);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getblogImages() {
  try {
    const rows = await executeDbQuery(queries.blogImages);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getBlogContent(id, category_slug) {
  try {
    const rows = await executeDbQuery(queries.blogContent, [id, category_slug]);
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getRelatedBlogImages() {
  try {
    const rows = await executeDbQuery(queries.blogRelatedImages);
    return rows;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  findAll,
  getSlider,
  getbookImages,
  getblogImages,
  getBlogContent,
  getRelatedBlogImages
};