var express = require('express');
var router = express.Router();
const url = require('url')
var services =  require('../services/message')

router.post('/',        (req, res) => services.getSms(req, res))
router.get('/sensores', (req, res) => services.getSensorData(req,res))
router.get('/origens',  (req, res) => services.getSensorsOrigen(req, res))

module.exports = router