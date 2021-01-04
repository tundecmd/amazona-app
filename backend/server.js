import express from 'express';
import {data} from './data.js';
import mongoose from "mongoose";
import userRouter from "./routers/userRouter.js";
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
dotenv.config();

let uri = 'mongodb+srv://ademustexcel:judiciary@cluster0.g5s4z.mongodb.net/fcc?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGODB_URL || uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
 })

// app.get('/api/products', (req, res) => {
//     res.send(data.products)
// })

app.use('/api/users', userRouter)
app.use('/api/products', productRouter)

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find(x => x._id === req.params.id)
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
})

app.get('/', (req, res) => {
    res.send('server is ready');
})

app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
    next()
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`serve at localhost:${port}`)
})