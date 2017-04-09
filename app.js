const express = require('express');
const pug = require('pug');

const app = express();

const homeRouter = require('./routers/home');

const port = process.env.PORT || 3000;

app.set('view engine','pug');


console.log ( process.env);

app.use('/',homeRouter);

// app.get('*',(req,res) => {
//     //res.send('Hello Express');
//     res.render('index' , {
//         title:'Hello Express',
//         msg:'Its a message to template engine',
//         url:'http://google.com'
//     });
// })

app.listen(port,()=>{
    console.log(` Server is started and listening on port ${port}`);
})