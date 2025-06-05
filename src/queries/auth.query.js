const findUser = `SELECT * FROM users u WHERE email = ?`

const findUserBySlug = `SELECT * FROM users WHERE slug = ?`

const getGeneralSettings = `SELECT * FROM general_settings`

const createUser = `
  INSERT INTO users 
  (username, slug, email, email_status, token, password, role_id, user_type, banned, first_name, last_name, phone_number, last_seen, pan_number) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
`

module.exports = {
    findUser,
    findUserBySlug,
    getGeneralSettings,
    createUser
}