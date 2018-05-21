const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

// ***************************************************************

var calendar = [
    {
        day: 'Jueves 14 junio',
        matchs: [
            {
                img_local: 'imagen',
                local: 'Rusia',
                img_visitor: 'imagen',
                visitor: 'Arabia',
                hour: '10:00'
            }
        ]
    },
    {
        day: 'Viernes 15 junio',
        matchs: [
            {
                img_local: 'imagen',
                local: 'Egipto',
                img_visitor: 'imagen',
                visitor: 'Uruguay',
                hour: '07:00'
            },
            {
                img_local: 'imagen',
                local: 'Marruecos',
                img_visitor: 'imagen',
                visitor: 'RI de Irán',
                hour: '10:00'
            },
            {
                img_local: 'imagen',
                local: 'Portugal',
                img_visitor: 'imagen',
                visitor: 'España',
                hour: '13:00'
            }
        ]
    },
    {
        day: 'Viernes 15 junio',
        matchs: [
            {
                img_local: 'imagen',
                local: 'Egipto',
                img_visitor: 'imagen',
                visitor: 'Uruguay',
                hour: '07:00'
            },
            {
                img_local: 'imagen',
                local: 'Marruecos',
                img_visitor: 'imagen',
                visitor: 'RI de Irán',
                hour: '10:00'
            },
            {
                img_local: 'imagen',
                local: 'Portugal',
                img_visitor: 'imagen',
                visitor: 'España',
                hour: '13:00'
            }
        ]
    }
];

// ***************************************************************

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

// ***************************************************************

// Listar todos los partidos
app.get('/matchs', (req, res) => {
    res.send(calendar.reverse())
})

/*
// Listar usuarios
app.get('/users', (req, res) => {
    res.send(users.reverse())
})
// Crear usuarios
app.post('/users', (req, res) => {
    let data = req.body;
    let itemUser = {name: data.Name};
    users.push(itemUser)
    res.send("New user add")
})
// Actualizar usuarios
app.patch('/users/:id',(req, res) => {
    let params = req.params;
    let data = req.query;
    users[params.id] = {name: data.user_name};
    res.send("User update")
})
// Eliminar usuarios
app.delete('/users/:id',(req, res) => {
    let params = req.params;
    users.splice(params.id, 1);
    res.send('User delete')
})
*/

// ***************************************************************
 
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})