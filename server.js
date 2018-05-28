const express = require('express')
const bodyParser = require('body-parser');
const http = require('http')
const app = express()

const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000

// ***************************************************************
// ***************************************************************

var users = [
    {
        id: '0',
        user: 'admin',
        password: '123456',
        name: 'admin',
        email: 'admin@worldcup.com',
        img_user: 'https://www.littlemiracles.com.au/wp-content/uploads/2015/08/kid-on-ipad.png'
    }
];

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
        img_local: 'http://flags.fmcdn.net/data/flags/w1160/ru.png',
        local: 'Rusia',
        img_visitor: 'http://flags.fmcdn.net/data/flags/w1160/sa.png',
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
        img_local: 'http://flags.fmcdn.net/data/flags/w1160/eg.png',
        local: 'Egipto',
        img_visitor: 'http://flags.fmcdn.net/data/flags/w1160/uy.png',
        visitor: 'Uruguay',
        hour: '07:00'
    },
    {
        wType: '0',
        day: '',
        img_local: 'http://flags.fmcdn.net/data/flags/w1160/ma.png',
        local: 'Marruecos',
        img_visitor: 'http://flags.fmcdn.net/data/flags/w1160/ir.png',
        visitor: 'RI de Irán',
        hour: '10:00'
    },
    {
        wType: '0',
        day: '',
        img_local: 'http://flags.fmcdn.net/data/flags/w1160/pt.png',
        local: 'Portugal',
        img_visitor: 'http://flags.fmcdn.net/data/flags/w1160/es.png',
        visitor: 'España',
        hour: '13:00'
    },
    {
        wType: '1',
        day: 'Sábado 16 junio',
        img_local: '',
        local: '',
        img_visitor: '',
        visitor: '',
        hour: ''
    },
    {
        wType: '0',
        day: '',
        img_local: 'http://flags.fmcdn.net/data/flags/w1160/fr.png',
        local: 'Francia',
        img_visitor: 'http://flags.fmcdn.net/data/flags/w1160/au.png',
        visitor: 'Australia',
        hour: '05:00'
    },
    {
        wType: '0',
        day: '',
        img_local: 'http://flags.fmcdn.net/data/flags/w1160/ar.png',
        local: 'Argentina',
        img_visitor: 'http://flags.fmcdn.net/data/flags/w1160/is.png',
        visitor: 'Islandia',
        hour: '08:00'
    },
    {
        wType: '0',
        day: '',
        img_local: 'http://flags.fmcdn.net/data/flags/w1160/pe.png',
        local: 'Perú',
        img_visitor: 'http://flags.fmcdn.net/data/flags/w1160/dk.png',
        visitor: 'Dinamarca',
        hour: '08:00'
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
    }
];

var stadiums = [
    {
        id: '1',
        name: 'Estadio Kaliningrado',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/zd4xfvozxlbz4ogzvl84.jpg'
    },
    {
        id: '2',
        name: 'Estadio Volgogrado Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/n0i7ecb1dlfjkcevjn68.jpg'
    },
    {
        id: '3',
        name: 'Estadio Ekaterimburgo Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/qwmfhwry65bhnowuu792.jpg'
    },
    {
        id: '4',
        name: 'Estadio Fisht',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/mm/photo/tournament/competition/02/89/93/84/2899384_full-lnd.jpg'
    },
    {
        id: '5',
        name: 'Estadio Kazán Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/iyvktjjff6om7clsussx.jpg'
    },
    {
        id: '6',
        name: 'Estadio Nizhni Nóvgorod',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/iwokfedscpj4defmjxef.jpg'
    },
    {
        id: '7',
        name: 'Estadio Luzhniki',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/p1askyr6af4jekbzujmx.jpg'
    },
    {
        id: '8',
        name: 'Estadio Samara Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/d0mymt1ubl2pypmu3gn3.jpg'
    },
    {
        id: '9',
        name: 'Estadio Rostov Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/e95vbvut3zk2z2kjaqf0.jpg'
    },
    {
        id: '10',
        name: 'Estadio Spartak',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/ju6b9ulfzqdxsliopfef.jpg'
    },
    {
        id: '11',
        name: 'Estadio San Petersburgo',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/zvisds7bd2u4nzayjat8.jpg'
    },
    {
        id: '12',
        name: 'Estadio Mordovia Arena',
        description: 'xxx',
        star: '3',
        url_img: 'https://img.fifa.com/image/upload/t_l4/pe6ww45wda53kaj226y0.jpg'
    }
];

var news = [
    {
        id: '1',
        title: 'Rusia da la bienvenida al mundo',
        subtitle: 'Tras años de duro trabajo, el país anfitrión se prepara para recibir a todos los aficionados que vengan a Rusia y a los combinados en liza.',
        url_news: 'https://img.fifa.com/image/upload/t_tc1/fncpsqsxjsujcgqryl8p.jpg'
    },
    {
        id: '2',
        title: 'Live It Up, la canción oficial de Rusia 2018',
        subtitle: 'Descubre ahora la música que nos acompañará durante la Copa Mundial de la FIFA Rusia 2018. Interpretada por Nicky Jam, con Will Smith y Era Isterefi.',
        url_news: 'https://img.fifa.com/image/upload/t_tc1/ax7h2zljgevmmv8povax.jpg'
    },
    {
        id: '3',
        title: '356.700 entradas asignadas en solo 24 horas',
        subtitle: 'Dado el gran interés que despierta el torneo, la FIFA recuerda a los aficionados que FIFA.com/tickets es la única página web oficial para la compra de entradas.',
        url_news: 'https://img.fifa.com/image/upload/t_tc1/vobrzd4d2veojlldjqim.jpg'
    }
];

// ***************************************************************
// ***************************************************************

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.get('/', (req, res) => {
    res.status(200).send("Welcome to API REST")
})

// ***************************************************************
// ***************************************************************

// Listar todos los partidos
app.get('/calendar', (req, res) => {
    res.send(calendar)
})

// Listar todos los grupos
app.get('/group', (req, res) => {
    res.send(groups)
})

// Listar todas las noticias
app.get('/news', (req, res) => {
    res.send(news)
})

// Listar todos los estadios
app.get('/stadium', (req, res) => {
    res.send(stadiums)
})

// Validar user and pass 
app.post('/login', (req, res) => {
    let data = req.body;
    let login = [{searchUser: false,id: '0',user: '',password: '',name: '',email: '',img_user:''}];

    users.some(function (value, index, _arr) {
        if( (value.user == data.user) && (value.password == data.pass) ){
            login[0]['searchUser'] = true;
            login[0]['id'] = value.id;
            login[0]['user'] = value.user;
            login[0]['password'] = value.password;
            login[0]['name'] = value.name;
            login[0]['email'] = value.email;
            login[0]['img_user'] = value.img_user;
            return true;
        }else{
            return false;
        }
    });

    res.send(login)
})

// Metodo para crear una cuenta de usuario
app.post('/signup', (req, res) => {
    let data = req.body;
    let consecutive = users.length;
    // let itemUser = {
    //     id: consecutive,
    //     user: data.user,
    //     password: data.pass,
    //     name: data.name,
    //     email: data.email,
    //     img_user: 'https://www.littlemiracles.com.au/wp-content/uploads/2015/08/kid-on-ipad.png'
    // };
    let itemUser = {
        user: data.user,
        password: data.pass,
        name: data.name,
        email: data.email,
        repassword: '123'
    };
    // users.push(itemUser)
    res.send(itemUser)
    // res.send("usuario creado correctamente")
})

// ***************************************************************
// ***************************************************************
 
http.createServer(app).listen(PORT, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})