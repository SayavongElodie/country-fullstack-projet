const express = require('express');
const cors = require('cors');
const countriesData = require('./countriesData.json');
const port = 3000;
const app = express ();

app.use(cors());

app.get('/all', (req, res) => {

    res.json({
        status: "ok",
        data: countriesData,
    })
})

app.get('/country/:name', (req, res) => {
    const countryName = req.params.name
    const countryData = countriesData.filter(
        country => {
            return country.name.toLowerCase() === countryName.toLowerCase();
        })

    res.json({
        status: "ok",
        data: countryData,
    })
})

app.get('/capital/:name', (req, res) => {
    const capitalName = req.params.name
    const capitalData = countriesData.filter(
        capital => {
            return capital.capital.toLowerCase() === capitalName.toLowerCase();
        })

    res.json({
        status:"ok",
        data: capitalData,
    })
})

app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
});