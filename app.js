const express = require('express');
const pug = require('pug');

const app = express();

app.set('view engine','pug');

app.get('*',(req,res) => {
    //res.send('Hello Express');
    res.render('index' , {
        title:'Hello Express',
        msg:'Its a message to template engine',
        url:'http://google.com'
    });
})

app.listen('3000',()=>{
    console.log(' Server is started and listening on port 3000');
})