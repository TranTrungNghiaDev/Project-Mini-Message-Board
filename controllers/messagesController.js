const db = require("../db/queries");

async function getMessages(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", {messages: messages});
}

function createNewMessageGet(req, res) {
    res.render("form/form");
}

async function createNewMessagePost(req, res) {
    const {username, text} = req.body;
    console.log(username, text);
    db.insertMessage(username, text);
    res.redirect("/");
}

function messageDetailGet(req, res) {
    const message = {};
    message.username = req.body.username;
    message.text = req.body.message;
    message.added = req.body.added;

    res.render("MessageDetail/messageDetail", {message: message});
}

module.exports = {
    getMessages,
    createNewMessageGet,
    createNewMessagePost,
    messageDetailGet
}