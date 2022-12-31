const express=require('express');
const app=express();
var cors = require('cors');
const port=5000;

app.use(cors());

const categories=require('./data/categories');
app.get('/',(req,res)=>{
    res.send('News API Running');
});
app.get('/hotel-category',(req,res)=>{
   res.send(categories);
});

app.listen(port,()=>{
    console.log('Dragon News Server',port);
})