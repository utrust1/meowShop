const jwt = require('jsonwebtoken');

const authentication  = (req,res,next)=>{
try{
    if(!req.headers.authorization){
        return res.status(403).json({
            success: false,  
            message: `Forbidden`, 
        })
    }






}
}

