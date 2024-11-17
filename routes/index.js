

const router = require('express').Router();
// const apikeymiddleware = require('../middleware/apikey');
// router.use(apikeymiddleware);

router.get('/',(req,res)=>{
    res.render('index',{
        title: 'My home page'
    });
  });


  router.get('/about',(req,res)=>{
    res.render('about',{
        title: 'My About page'
    });
  });



  router.get('/download',(req,res,) =>{
    res.download(path.resolve(__dirname + '/about.html'))
  });





  // router.get('/api/products',(req,res)=>{
  //   res.json(
  //   [
  //     {
  //       id:'123',
  //       name:'Chrome'
  //     },
  //     {
  //       id:'124',
  //       name:'firefox'
  //     }
  //   ]

  //   )
  // });


module.exports =router;