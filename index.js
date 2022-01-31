const express = require("express");
const cors = require('cors');
const path = require('path');
const port = 4000;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

//view engine setup
app.set('views', path.join(__dirname, 'src/view'));
app.set('view engine', 'hbs');

//set public path
app.use(express.static(path.join(__dirname, 'static')));



app.get('/',(req, res)=>{
    // res.send("Hello World");
    res.render('demo')
})
app.get('/products', (req, res)=>{
    console.log('products');
    res.send({name:'Nabaraj'})
})

app.listen(port, ()=>{
    console.log(`server listening to ${port}`);
})