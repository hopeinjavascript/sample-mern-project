const getUserService = require('../services/getUser.js');

const getUser = async (req, res, next) => {
  await getUserService.getUser(req, res, next);
  next();
};

module.exports = {
  getUser,
};
