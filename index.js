const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
})   

app.get('/ecommerce', (req, res) => {
    res.send('Welcome to the E-Commerce')
})

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})
