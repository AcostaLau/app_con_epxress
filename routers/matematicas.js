const express = require('express')
const {matematicas} = require('../cursos/cursos.js').infoCursos

const routerMatematica = express.Router()


// middleware

routerMatematica.use(express.json())



routerMatematica.get('/', (req, res) => {
    res.send(JSON.stringify(matematicas))
})

routerMatematica.get('/:materia', (req, res) => {
    // capturo el valor de la url
    const input = req.params.materia
    const resultado = matematicas.filter(materia => materia.titulo === input)

    if (resultado.length === 0){
        return res.status(404).send('No tenemos esa materia')
    }
    res.send(JSON.stringify(resultado))
})


// mas de un filtro

routerMatematica.get('/:materia/:vistas', (req, res) => {
    const materia = req.params.materia
    const vistas = req.params.vistas

    const resultado = matematicas.filter(tema => tema.titulo === materia && tema.vistas === vistas)

    if (resultado.length === 0){
        res.status(404).send(`No tenemos esa materia`)
    }

    res.send(JSON.stringify(resultado))
})




// post
routerMatematica.post('/', (req, res) => {
    let materiaNueva = req.body;

    matematicas.push(materiaNueva)
    req.send(JSON.stringify(matematicas))
})



// put
routerMatematica.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id

    // busco el id
    const indice = matematicas.findIndex(curso => curso.id == id)


    if(indice >= 0){
        matematicas[indice] = cursoActualizado;
    }
    res.send(JSON.stringify(matematicas))

})


// patch
routerMatematica.patch('/:id', (req, res) => {
    const infoActualizada = req.body;

    const id = req.params.id

    const indice = matematicas.findIndex(curso => curso.id == id)

    if(indice >= 0){
        const cursoModificar = matematicas[indice]
        
        // modifico los datos
        Object.assign(cursoModificar, infoActualizada)
        
    }

    res.send(JSON.stringify(matematicas))
})



// delete
routerMatematica.delete('/:id', (req, res) => {
    const id = req.params.id

    const indice = matematicas.findIndex(curso => curso.id == id)


    if(indice >= 0){
        matematicas.splice(indice, 1)
    }
    res.send(JSON.stringify(matematicas))
})

module.exports = routerMatematica
