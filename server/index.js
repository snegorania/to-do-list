// add express, and routers for users, lists and tasks
const express = require('express');
const userRouter = require('./routers/userRouts');
const listRouter = require('./routers/listRouts');
const taskRouter = require('./routers/taskRouts');
var cors = require('cors');

// ask for port
const PORT = process.env.PORT || 8080;

// init app
const app = express();

// helps express to understand json
app.use(express.json());

//Enable cors
app.use(cors());
// send routers to /api address
app.use('/api', userRouter);
app.use('/api', listRouter);
app.use('/api', taskRouter);

// listen server
app.listen(PORT, () => console.log(`server started on port: ${PORT}`));
