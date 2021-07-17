const express = require('express')
const mongoose = require('mongoose');
const app = express()
const { rootRouter } = require('./routers/rootRouters');

const mongoURI = "mongodb://localhost/projectVexere"
const connectMongooseDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        console.log("connected mongoose successfully");
    } catch (error) {
        console.log(error);
    }
}
connectMongooseDB()
app.use(express.json())
app.use(rootRouter)

const port = process.env.PORT || 9000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})