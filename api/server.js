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

app.get('/:countryName', (req, res) => {
    const countryName = req.params.countryName
    const countryData = countriesData.filter(
        (country) => country.name === countryName
    )

    res.json({
        status: "ok",
        data: countryData,
    })
})

app.get('/:capitalName', (req, res) => {
    const capitalName = req.params.capitalName
    const capitalData = countriesData.filter(
        (capital) => capital.capital === capitalName
    )

    res.json({
        status:"ok",
        data: capitalData,
    })
})

app.listen(port, () => {
    console.log(`Server started on port : ${port}`)
});