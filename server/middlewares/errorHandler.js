const errorHandler = (err, req, res, next) => {
  console.log(err);

  res
    .status(err.statusCode || 500)
    .json({
      msg: err.msg,
      data: err.data,
    })
    .end();
};

module.exports = {
  errorHandler,
};
