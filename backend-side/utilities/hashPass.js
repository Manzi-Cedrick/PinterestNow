const bcrypt = require('bcryptjs');
const HashPassword = async (password) =>{
    const gen_salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password,gen_salt);
    return hashed;
}
module.exports = HashPassword;