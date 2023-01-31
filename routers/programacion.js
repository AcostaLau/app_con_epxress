const express = require('express')


const { programacion } = require('../cursos/cursos').infoCursos

const routerProgramacion = express.Router()

//middleware
routerProgramacion.use(express.json())



routerProgramacion.get('/', (req, res) => {
    res.send(JSON.stringify(programacion))
})


routerProgramacion.get('/:lenguaje', (req, res) => {
    // capturo el valor de la url
   const lenguaje = req.params.lenguaje;
   const resultado = programacion.filter(curso => curso.lenguaje === lenguaje)

   if (resultado.length === 0) {
       return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
   }


   // filtro por vistas
   if (req.query.ordenar === 'vistas') {
       return res.send(JSON.stringify(resultado.sort((a, b) => {
           b.vistas - a.vistas
       })))
   }
   
   res.send(JSON.stringify(resultado))
})

// mas de un filtro

routerProgramacion.get('/:lenguaje/:nivel', (req, res) => {
   const lenguaje = req.params.lenguaje
   const nivel = req.params.lenguaje

   const resultado = programacion.filter(tema => tema.lenguaje === lenguaje && tema.nivel === nivel)


   if (resultado.length === 0) {
       res.status(404).send(`No tenemos ese tipo de curso`)
   }


   res.send(JSON.stringify(resultado))
})




// post
routerProgramacion.post('/', (req, res) => {
    let cursoNuevo = req.body;
    programacion.push(cursoNuevo);
    req.send(JSON.stringify(programacion))
})


// put
routerProgramacion.put('/:id', (req, res) => {
    const cursoActualizado = req.body;
    const id = req.params.id

    // busco el id
    const indice = programacion.findIndex(curso => curso.id == id)


    if(indice >= 0){
        programacion[indice] = cursoActualizado;
    }
    res.send(JSON.stringify(programacion))

})

// patch
routerProgramacion.patch('/:id', (req, res) => {
    const infoActualizada = req.body;

    const id = req.params.id

    const indice = programacion.findIndex(curso => curso.id == id)

    if(indice >= 0){
        const cursoModificar = programacion[indice]
        
        // modifico los datos
        Object.assign(cursoModificar, infoActualizada)
        
    }

    res.send(JSON.stringify(programacion))
})

// delete
routerProgramacion.delete('/:id', (req, res) => {
    const id = req.params.id

    const indice = programacion.findIndex(curso => curso.id == id)


    if(indice >= 0){
        programacion.splice(indice, 1)
    }
    res.send(JSON.stringify(programacion))
})


module.exports = routerProgramacion