const express = require('express');
const pug = require('pug');
const path = require('path');
const app = express();

const homeRouter = require('./routers/home');
const aboutRouter = require('./routers/about');

const port = process.env.PORT || 3000;

app.set('views','./views');
app.set('view engine','pug');

app.use('/static', express.static(path.join(__dirname, './styles')))

//console.log ( process.env);

app.use('/',homeRouter);
app.use('/',aboutRouter);
app.use('/api',aboutRouter); // loads the same about page but use http://localhost:3000/api/about/


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

module.exports.app = app;