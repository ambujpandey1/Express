function apikey(req, res, next){
    const api_key='1234567';
    console.log(req.query.api_key);

    const userapikey=req.query.api_key;
    if(req.query.api_key && (userapikey===api_key)){
        next();
    }else{
        res.json({message: 'Not allowed!'});
    }
    
}

module.exports=apikey;