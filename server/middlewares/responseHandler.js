const responseHandler = (req, res, next) => {
  res
    .status(res.statusCode || 200)
    .json({
      msg: res.msg,
      data: res.data,
    })
    .end();
};

module.exports = {
  responseHandler,
};
