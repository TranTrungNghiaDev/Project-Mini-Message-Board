const {Router} = require("express");
const messagesController = require("../controllers/messagesController");
const path = require("path");
const messagesRouter = Router();


messagesRouter.get("/", messagesController.getMessages);

messagesRouter.get("/new", messagesController.createNewMessageGet);

messagesRouter.post("/new", messagesController.createNewMessagePost);

messagesRouter.post("/detail", messagesController.messageDetailGet);

module.exports = messagesRouter;