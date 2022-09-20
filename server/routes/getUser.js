const express = require('express');
const userRouter = express.Router();

const getUserController = require('../controllers/getUser.js');

userRouter.get('/getUser', getUserController.getUser);

module.exports = userRouter;
