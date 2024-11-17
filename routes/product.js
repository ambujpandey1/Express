const router= require('express').Router();
const products=require('../productData');

router.get('/product',(req,res)=>{
    res.render('product',{
        title: 'My Product page'
    });
  });


  router.get('/api/product',(req,res)=>{
    
    res.json({products});
  })

module.exports=router;