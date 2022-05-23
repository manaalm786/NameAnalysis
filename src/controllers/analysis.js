/** src/controllers/analysis.js */
const express = require('express')

const analysisMechanism = require('../../node_modules/numerology/index.js')

// gets a name + sign analysis using module
module.exports = {
    getNameAnalysis:  async (req, res, next) => {
        let name = req.params.name;
        let sign = req.params.sign;
    
        let num = analysisMechanism.getFullNameAnalysis(name, sign);
    
        return res.status(200).json({
            analysis: num
        });
    }
}

