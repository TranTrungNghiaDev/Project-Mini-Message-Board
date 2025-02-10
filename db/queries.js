const pool = require("./pool");

async function getAllMessages() {
    const {rows} = await pool.query("SELECT username,text,added::TEXT FROM messages");
    return rows;
}

async function insertMessage(username, text) {
    await pool.query("INSERT INTO messages(username, text, added) VALUES($1, $2,CURRENT_DATE)",[username, text]);
}

module.exports = {
    getAllMessages,
    insertMessage
}