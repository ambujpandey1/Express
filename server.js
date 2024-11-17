const express = require("express");
const app = express();
const path= require('path');
const { title } = require("process");
const mainRouter=require('./routes/index');
//const apikeymiddleware = require('./middleware/apikey');
const productrouter= require('./routes/product');



const PORT =process.env.PORT || 3000;



app.set('view engine','ejs');

//console.log(app.get('view engine'));


// app.set('views',path.resolve(__dirname + '/templets'));
// console.log(app.get('views'));

app.use(express.static('public'))

//app.use(apikeymiddleware);


// app.get('/',(req,res)=>{
//   res.sendFile(path.resolve(__dirname + '/index.html'))
// });


// app.get('/',(req,res)=>{
//     res.render('index',{
//         title: 'My home page'
//     });
//   });

//   app.get('/about',(req,res)=>{
//     res.render('about',{
//         title: 'My About page'
//     });
//   });



// app.get('/about',(req,res)=>{
//     res.sendFile(path.resolve(__dirname + '/about.html'))
//   });




// app.get('/download',(req,res)=>{
//     res.download(path.resolve(__dirname + '/about.html'))
//   });


app.use(productrouter);

app.use('/',mainRouter);

app.listen(PORT, ()=>{
    console.log(`Listing on port ${PORT}`);
});

