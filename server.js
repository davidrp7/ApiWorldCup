const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

// ***************************************************************

var calendar = [
    {
        wType: '1',
        day: 'Jueves 14 junio',
        img_local: '',
        local: '',
        img_visitor: '',
        visitor: '',
        hour: ''
    },
    {
        wType: '0',
        day: '',
        img_local: 'imagen',
        local: 'Rusia',
        img_visitor: 'imagen',
        visitor: 'Arabia',
        hour: '10:00'
    },
    {
        wType: '1',
        day: 'Viernes 15 junio',
        img_local: '',
        local: '',
        img_visitor: '',
        visitor: '',
        hour: ''
    },
    {
        wType: '0',
        day: '',
        img_local: 'imagen',
        local: 'Egipto',
        img_visitor: 'imagen',
        visitor: 'Uruguay',
        hour: '07:00'
    },
    {
        wType: '0',
        day: '',
        img_local: 'imagen',
        local: 'Marruecos',
        img_visitor: 'imagen',
        visitor: 'RI de Irán',
        hour: '10:00'
    },
    {
        wType: '0',
        day: '',
        img_local: 'imagen',
        local: 'Portugal',
        img_visitor: 'imagen',
        visitor: 'España',
        hour: '13:00'
    }
];

var groups = [
    {
        group: 'GRUPO A',
        team1: 'Rusia',
        team2: 'Arabia Saudí',
        team3: 'Egipto',
        team4: 'Uruguay',
        team_img1: 'http://flags.fmcdn.net/data/flags/w1160/ru.png',
        team_img2: 'http://flags.fmcdn.net/data/flags/w1160/sa.png',
        team_img3: 'http://flags.fmcdn.net/data/flags/w1160/eg.png',
        team_img4: 'http://flags.fmcdn.net/data/flags/w1160/uy.png'
    },
    {
        group: 'GRUPO B',
        team1: 'Portugal',
        team2: 'España',
        team3: 'Marruecos',
        team4: 'RI de Irán',
        team_img1: 'http://flags.fmcdn.net/data/flags/w1160/pt.png',
        team_img2: 'http://flags.fmcdn.net/data/flags/w1160/es.png',
        team_img3: 'http://flags.fmcdn.net/data/flags/w1160/ma.png',
        team_img4: 'http://flags.fmcdn.net/data/flags/w1160/ir.png'
    },
    {
        group: 'GRUPO C',
        team1: 'Francia',
        team2: 'Australia',
        team3: 'Perú',
        team4: 'Dinamarca',
        team_img1: 'http://flags.fmcdn.net/data/flags/w1160/fr.png',
        team_img2: 'http://flags.fmcdn.net/data/flags/w1160/au.png',
        team_img3: 'http://flags.fmcdn.net/data/flags/w1160/pe.png',
        team_img4: 'http://flags.fmcdn.net/data/flags/w1160/dk.png'
    },
    {
        group: 'GRUPO D',
        team1: 'Argentina',
        team2: 'Islandia',
        team3: 'Croacia',
        team4: 'Nigeria',
        team_img1: 'http://flags.fmcdn.net/data/flags/w1160/ar.png',
        team_img2: 'http://flags.fmcdn.net/data/flags/w1160/is.png',
        team_img3: 'http://flags.fmcdn.net/data/flags/w1160/hr.png',
        team_img4: 'http://flags.fmcdn.net/data/flags/w1160/ng.png'
    },
    {
        group: 'GRUPO E',
        team1: 'Brasil',
        team2: 'Suiza',
        team3: 'Costa Rica',
        team4: 'Serbia',
        team_img1: 'http://flags.fmcdn.net/data/flags/w1160/br.png',
        team_img2: 'http://flags.fmcdn.net/data/flags/w1160/ch.png',
        team_img3: 'http://flags.fmcdn.net/data/flags/w1160/cr.png',
        team_img4: 'http://flags.fmcdn.net/data/flags/w1160/rs.png'
    },
    {
        group: 'GRUPO F',
        team1: 'Alemania',
        team2: 'México',
        team3: 'Suecia',
        team4: 'Rep. de Corea',
        team_img1: 'http://flags.fmcdn.net/data/flags/w1160/de.png',
        team_img2: 'http://flags.fmcdn.net/data/flags/w1160/mx.png',
        team_img3: 'http://flags.fmcdn.net/data/flags/w1160/se.png',
        team_img4: 'http://flags.fmcdn.net/data/flags/w1160/kr.png'
    },
    {
        group: 'GRUPO G',
        team1: 'Bélgica',
        team2: 'Panamá',
        team3: 'Túnez',
        team4: 'Inglaterra',
        team_img1: 'http://flags.fmcdn.net/data/flags/w1160/be.png',
        team_img2: 'http://flags.fmcdn.net/data/flags/w1160/pa.png',
        team_img3: 'http://flags.fmcdn.net/data/flags/w1160/tn.png',
        team_img4: 'http://flags.fmcdn.net/data/flags/w1160/gb.png'
    },
    {
        group: 'GRUPO H',
        team1: 'Polonia',
        team2: 'Senegal',
        team3: 'Colombia',
        team4: 'Japón',
        team_img1: 'http://flags.fmcdn.net/data/flags/w1160/pl.png',
        team_img2: 'http://flags.fmcdn.net/data/flags/w1160/sn.png',
        team_img3: 'http://flags.fmcdn.net/data/flags/w1160/co.png',
        team_img4: 'http://flags.fmcdn.net/data/flags/w1160/jp.png'
    },
];

// ***************************************************************

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

// ***************************************************************

// Listar todos los partidos
app.get('/calendar', (req, res) => {
    res.send(calendar)
})

// Listar todos los grupos
app.get('/group', (req, res) => {
    res.send(groups)
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