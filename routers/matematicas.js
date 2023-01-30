const express = require('express')
const {matematicas} = require('../cursos/cursos.js').infoCursos

const routerMatematica = express.Router()



routerMatematica.get('/:materia', (req, res) => {
    // capturo el valor de la url
    const input = req.params.materia
    const resultado = matematicas.filter(materia => materia.titulo === input)

    if (resultado.length === 0){
        return res.status(404).send('No tenemos esa materia')
    }
    res.send(JSON.stringify(resultado))
})



module.exports = routerMatematica
