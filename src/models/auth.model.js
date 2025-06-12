const { pool } = require('../config/db.config');
const queries = require('../queries/auth.query.js');
const { getCurrentDateTime,executeDbQuery } = require('../config/deafult.config.js');
const slugify = require('slugify');
const { token } = require('morgan');

async function findUser(email) {
  try {
    const [user] = await executeDbQuery(queries.findUser,[email]);
    return user;
  } catch (error) {
    throw error;
  }
}

async function createUser(user) {
  try {

    console.log("User insert details:",user);
    
    const gSettings = await getGeneralSettings();

    const name = `${user.fName} ${user.lName}`;
    const slug = await generateUniqueSlug(name);
    let role = 3;
    const userType = 'registered'
    const banned = 0
    const pan = ''
    const lastSeen = getCurrentDateTime()
    const dbToken = generateToken()

    let emailStatus = 1;
    if (!gSettings) {
      throw new Error('General settings not found');
    } else {
      if(gSettings.email_verification == 1){
        emailStatus = 0;
      }
      if(gSettings.vendor_verification_system != 1){
        role_id = 2;
      }
    }

    const params = [
      name, // username
      slug, // slug
      user.email, // email
      emailStatus, // email_status
      dbToken, // token
      // user.hashedPassword, // password
      user.password,
      role, // role_id
      userType, // user_type
      banned, // banned
      user.fName, // first_name
      user.lName, // last_name
      user.phone, // phone_number
      lastSeen, // last_seen
      pan // phone_number
    ]
    
    await executeDbQuery(queries.createUser, params);

    const [createdUser] = await executeDbQuery(queries.findUser, [user.email]);
    return createdUser;

  } catch (error) {
    throw error;
  }
}


async function generateUniqueSlug(username) {
  let slug = slugify(username, { lower: true, strict: true });
  // Check if slug exists
  if (await getUserBySlug(slug)) {
    slug = slugify(`${username}-1`, { lower: true, strict: true });
    if (await getUserBySlug(slug)) {
      slug = slugify(`${username}-2`, { lower: true, strict: true });
      if (await getUserBySlug(slug)) {
        slug = slugify(`${username}-3`, { lower: true, strict: true });
        if (await getUserBySlug(slug)) {
          slug = slugify(`${username}-${Date.now()}`, { lower: true, strict: true });
        }
      }
    }
  }
  return slug;
}

async function getUserBySlug(slug) {
  const [user] = await executeDbQuery( queries.findUserBySlug, [slug]);
  return user;
}

function generateToken() {
  const uniquePart = Date.now().toString(16); // time-based unique string
  const random1 = Math.floor(10000000 + Math.random() * 90000000); // 8-digit number
  const random2 = Math.floor(10000000 + Math.random() * 90000000); // another 8-digit number
  return `${uniquePart}-${random1}-${random2}`;
}

async function getGeneralSettings() {
  const [settings] = await executeDbQuery(queries.getGeneralSettings);
  return settings;
}

module.exports = {
  findUser,
  createUser
};