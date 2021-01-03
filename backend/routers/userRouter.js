import express from 'express';

const userRouter = express.Router();

userRouter.get('/seed', async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send(createdUsers);
})