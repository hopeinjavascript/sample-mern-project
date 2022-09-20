const getUser = async (req, res, next) => {
  console.log('getUser');

  const user = {
    name: 'Akshay',
    designation: 'Senior Full stack developer',
    salary: '500',
  };

  try {
    res.statusCode = 200;
    res.msg = 'User data';
    res.data = user;
    // res.json(user);
  } catch (error) {
    const err = new Error();
    err.statusCode = 500;
    err.msg = 'No User data';
    err.data = err.name + ' ' + err.stack;
    throw err;
  }
};

module.exports = {
  getUser,
};
