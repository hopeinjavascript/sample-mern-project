require('dotenv').config({ debug: process.env.DEBUG });
const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./routes/getUser.js');
const { errorHandler } = require('./middlewares/errorHandler');
const { responseHandler } = require('./middlewares/responseHandler');

app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use(responseHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`));
