/** src/index.js */
const express = require('express')
const router = require('./routes/analysis.js')

const app = express()

app.use(express.json())
app.use('/', router)

// error handling for server errors
app.use((err, req, res, next) => {
    const status = err.status || 500
    if (status === 500) {
        console.log("The server errored when processing a request")
        console.log(err)
    }
    res.status = status
    res.send({
        status: status,
        message: err.message
    })
});

module.exports = app