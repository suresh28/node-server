const express = require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.render('index',{title:'Home Page',url:'/about'});
})


router.get('/about', (req,res) => {
    res.render('about',{title:'About Express Page',url:'/'});
})

module.exports=router;