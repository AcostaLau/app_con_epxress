const { info } = require("console")

let infoCursos = {
    'programacion':[
        {
            id: 1,
            titulo: 'Aprende python',
            lenguaje: 'python',
            vistas: 15000,
            nivel: 'Basico'
        },
        {
            id: 2,
            titulo: 'Aprende js',
            lenguaje: 'javascript',
            vistas: 150000,
            nivel: 'Avanzado'
        },
        {
            id: 3,
            titulo: 'Aprende html',
            lenguaje: 'html',
            vistas: 150000,
            nivel: 'Basico'
        }
    ],
    'matematicas': [
        {
            id: 1,
            titulo: 'suma',
            vistas: 15000,
            nivel: 'Basico'
        },
        {
            id: 2,
            titulo: 'resta',
            vistas: 150000,
            nivel: 'Avanzado'
        }
    ]
}


module.exports.infoCursos = infoCursos