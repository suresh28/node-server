const express = require('express');
const router = express.Router();

router.get('/about', (req,res) => {
   console.log(' i m in about router');
    res.render('about',{title:'About Express Page',url:'/'});
   

   
})

module.exports=router;