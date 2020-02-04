const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine','hbs');

//Helpers
require('./hbs/helpers');

app.get('/',(req,res)=>{
    res.render('home',{
        nombre:'Zadquiel Ramirez'
    })
}) 

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'Zadquiel'
    })
}) 


app.listen( port, ()=>{
    console.log('escuchando en el puerto ', port);
});