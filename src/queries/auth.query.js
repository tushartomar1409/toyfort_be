const findUser = `SELECT * FROM users u WHERE email = ?`

const findUserBySlug = `SELECT * FROM users WHERE slug = ?`

const getGeneralSettings = `SELECT * FROM general_settings`

const createUser = `
  INSERT INTO users 
  (username, slug, email, email_status, token, password, role_id, user_type, banned, first_name, last_name, phone_number, last_seen, pan_number) 
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`

const getUserById = `SELECT * FROM users WHERE id = ?`;

const updateUserPassword = `UPDATE users SET password = ? WHERE id = ?`;

const getUserProfile = `SELECT first_name, last_name, email, phone_number FROM users WHERE id = ?`;

const getUserId = `SELECT * FROM users WHERE id = ?`;

const updateUserProfile = `UPDATE users SET email = ?, first_name = ?, last_name = ?, phone_number = ? WHERE id = ?`;




module.exports = {
    findUser,
    findUserBySlug,
    getGeneralSettings,
    createUser,
    getUserById, 
    updateUserPassword,
    getUserProfile,
    getUserId,
    updateUserProfile,

}