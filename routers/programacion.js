const express = require('express')


const { programacion } = require('../cursos/cursos').infoCursos

const routerProgramacion = express.Router()



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



module.exports = routerProgramacion