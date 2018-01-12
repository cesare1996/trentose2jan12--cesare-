
const express = require('express'),
    bodyParser = require('body-parser');
const astronauts = express.Router()

var uuid = require('uuid-v4');

const deliveredAstronauts = []



astronauts.get('/', function (req, res) {
    res.json(deliveredAstronauts)

})

astronauts.post('/', function (req, res) {
    const newAstronaut = req.body
    newAstronaut.astronautID = uuid()
    deliveredAstronauts.push(newAstronaut)
    res.json(newAstronaut)
})

astronauts.get('/:astronautID', function (req, res) {
    const astronautID = req.params.astronautID
    const i = deliveredAstronauts.findIndex(item => {return item.astronautID === astronautID})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(deliveredAstronauts[i])
    }
})

astronauts.get('/find/:astronautLN', function (req, res) {
    const astronautLN = req.params.astronautLN
    const i = deliveredAstronauts.find(item => {return item.lastName === astronautLN})
    if (i==-1) res.sendStatus(404)
    else {
        res.status=200
        res.json(deliveredAstronauts[i])
    }
})

astronauts.put('/:astronautID', function (req, res) {
    const astronautID = req.params.astronautID
    const i = deliveredAstronauts.findIndex(item => {return item.astronautID === astronautID})
    deliveredAstronauts[i] = req.body
    deliveredAstronauts[i].astronautID = astronautID
    res.json(deliveredAstronaut[i])
})

astronauts.delete('/:astronautID', function (req, res) {
    const astronautID = req.params.astronautID
    if (!astronautID) res.sendStatus(404)
    const i = deliveredAstronaut.findIndex(item => {return item.astronautID === astronautID})
    const deleted = deliveredAstronauts[i]
    deliveredAstronauts.splice(i,1)
    res.sendStatus(204)
})

module.exports = astronauts