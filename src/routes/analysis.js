/** src/routes/analysis.js */
const express = require('express')
const controller = require('../controllers/analysis.js')
const router = express.Router();


router.get('/analysis/:name/:sign', controller.getNameAnalysis);
// error handling for other API requests
router.all('*', (req, res) => {
    console.log(`API route not found: ${req.method} ${req.url}`)
    res.status(404).send({message: "API route not found"})
})

module.exports = router






