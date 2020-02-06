const express = require('express');
const Envio = require('../models/Envio');
const routerApi = express.Router();

routerApi.route('/procesar')
  .get((req, res) => {

  	let nombreEmpresa = req.query.empresa;

    let ubicaciones = new Envio(nombreEmpresa);

    res.json(ubicaciones);
  });


module.exports = routerApi;

