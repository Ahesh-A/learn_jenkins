import express from "express";

const app = express();

const PORT = 3000;

app.get('/', (_, res) => {
    res.send('This is the front page')
})

app.listen(PORT, () => {
    console.log(`server running at port: ${PORT}`)
})