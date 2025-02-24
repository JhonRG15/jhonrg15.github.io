const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'b5dnmzscdrufgk3o6oc4-mysql.services.clever-cloud.com',
    user:'us57jkoavgcjf3x4',
    password:'0JbNdEBIVvguy6IDJpAq',
    database:'b5dnmzscdrufgk3o6oc4'
});

connection.connect((err) => {
    if(err) throw err
    console.log('la conexion funciona')
});

connection.query('SELECT * from productos', (err, rows) => {
    if(err) throw err
    console.log('Lo datos de la tabla son estos:')
    console.log(rows)
})

connection.end();
}


setInterval(animatePixelArt, 100); // ajusta el intervalo según la velocidad deseada
