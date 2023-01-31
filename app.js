const express = require('express')
const app = express();

// simulando la base de datos
const {infoCursos} = require('./cursos/cursos')


// routers

const routerMatematica = require('./routers/matematicas')
app.use('/api/cursos/matematica/', routerMatematica)

const routerProgramacion = require('./routers/programacion')
app.use('/api/cursos/programacion', routerProgramacion)


//routing

app.get('/', (req, res) => {
    res.send('Mi primer servidor. Cursos.')
});

app.get('/api/cursos', (req,res) => {
    res.send(JSON.stringify(infoCursos))
s})






const PUERTO = process.env.PORT || 3000


app.listen(PUERTO, () => {
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}..`)
})
