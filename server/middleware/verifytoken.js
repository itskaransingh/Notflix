const jwt = require("jsonwebtoken");

const verify = (req,res,next) =>{
    if(req.headers.key){
    const key = req.headers.key.split(' ')[1]
    jwt.verify(key,'kal',(err,user)=>{
        if(err){
            res.status(403).json('token not valid')
        }else{
    // res.status(200).json(user)
            req.users = user
            next()
        }
    })
}else{
    res.status(401).json('you are not authenticated')
}
}

module.exports= verify