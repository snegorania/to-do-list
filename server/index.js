const express = require('express');
const userRouter = require('./routers/userRouts');
const listRouter = require('./routers/listRouts');
const taskRouter = require('./routers/taskRouts');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', listRouter);
app.use('/api', taskRouter);

app.listen(PORT, () => console.log(`server started on port: ${PORT}`));