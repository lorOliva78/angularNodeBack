const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());


let graphicCards = [
    {
        name: 'Asus ROG Strix GeForce RTX 3090 Gaming', 
        manufacturer:'aaa', 
        model:'xji', 
        price:'1000',
        img: 'imagen1'
    },
    {
        name: 'MSI GeForce RTX 3090 Suprim X', 
        manufacturer:'bbb', 
        model:'345', 
        price:'1200',
        img: 'imagen2'
    }
    ,
    {
        name: 'Gigabyte Aorus GeForce RTX 3080 Ti Xtreme', 
        manufacturer:'cccc', 
        model:'897', 
        price:'2500',
        img: 'imagen3'
    }
];

app.get('/',function(req,res){
    res.send("peticion OK");
});

// graphics cards list
app.get('/graphics-cards',function(req,res){
    res.send(graphicCards);
    console.log('leleel ')
});


//graphic card details
app.get('/graphics-cards/:id',function(req,res){
    res.send(graphicCards[req.params.id]);
    console.log(req.params)
});



app.listen(3000,function(){
    console.log ("servidor levantado");
})