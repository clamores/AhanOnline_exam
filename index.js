//express initialize
const express = require('express')
const app = express()
const port = 3000

//fs module for writing json file
const fs = require('fs')

//include recursive functions
const recursive = require('./recursive/functions')

//---app routing---

//homepage
app.get('/', (req, res) => {
    res.send('Ahan Online')
})

//---recursive---

//factorial
app.get('/factorial/:n', (req, res) => {
    //check param n is a number
    if (isNaN(req.params.n))
        return res.status(400).json({ msg: "please send a number!" });
    //convert param n from string to number
    let n = parseInt(req.params.n)
    //check number is greater than -1
    if (n < 0)
        return res.status(400).json({ msg: "your number must be greater than -1" });
    //return response
    return res.json({ answer: recursive.factorial(n) })
})

//fibonacci
app.get('/fibonacci/:n', (req, res) => {
    //check param n is a number
    if (isNaN(req.params.n))
        return res.status(400).json({ msg: "please send a number!" });
    //convert param n from string to number
    let n = parseInt(req.params.n)
    //check number is greater than -1
    if (n < 0)
        return res.status(400).json({ msg: "your number must be greater than -1" });
    //return response
    return res.json({ answer: recursive.fibonacci(n) })
})

//---json---
//create a json of my information and save it to a file
app.get('/json/set', (req, res) => {
    //my information object
    const info = {
        name: "Hossein",
        family: "Safaverdi",
        phone: "+989202026400"
    };
    //save my info to a json file
    fs.writeFileSync('./info.json', JSON.stringify(info));
    //return response
    return res.send('json file is created!')
})

app.get('/json/get', (req, res) => {
    //read json file and parse it
    const info = JSON.parse(fs.readFileSync('./info.json'))
    //print info to console every second until 10 seconds
    let print_info = setInterval(() => console.log(info), 1000)
    setTimeout(() => {
        clearInterval(print_info);
        return res.send('info printed to console for 10 seconds!');
    }, 10000)
})

//run app on a port
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
