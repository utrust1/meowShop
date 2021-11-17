const usersModel = require("../../../db/models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client ("707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com")

const login = (req, res) => {
  const { email, password } = req.body;
  usersModel
    .findOne({ email })
    .then(async (result) => {
      if (!result) {
        return res
          .status(404)
          .json({ success: false, message: `The email doesn't exist` });
      }
      try {
        const valid = await bcrypt.compare(password, result.password);
        if (!valid) {
          return res.status(403).json({
            success: false,
            message: `The password you’ve entered is incorrect`,
          });
        } else {
          const payload = { userId: result._id, firstName: result.firstName };
          const options = { expiresIn: "7d" };
          const token = await jwt.sign(payload, process.env.SECRET, options);
          res.status(200).json({
            success: true,
            message: `Email and Password are correct`,
            token: token,
          });
        }
      } catch (error) {
        throw error;
      }
    })
    .catch((error) => {
      throw error;
    });
};

const loginGoogle=async(req,res)=>{
  const tokenId=req.body.tokenId
  client.verifyIdToken({idToken:tokenId,audience:"707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com"})
  .then(response=>{
    console.log(response);
    const {email_verified,given_name,family_name,email}=response.payload
    if(email_verified){
      usersModel.findOne({email})
      .then(async result=>{
        
          if(result){
            try {
              const valid= await bcrypt.compare(email+process.env.SECRET,result.password);
              if(!valid){
                return res.status(403).json({
                  success:false,
                  message:" incorrect password"
                });
              }
              const payload={
                firstName:result.userName,
                userId:result._id
              }
              const options={
                expiresIn:"7d"
              }
              const token=jwt.sign(payload,process.env.SECRET,options);
              return res.status(200).json({
                  success:true,
                  message:"login successfuly",
                  token:token
              })
          } catch (error) {
                console.log("newError");
          }
          }else{
                    let password=email+process.env.SECRET;
                    const newUser= new usersModel({
                      firstName:given_name,
                      lastName: family_name,
                      email: email ,  
                      password:  password
                      });
                      newUser
                      .save()
                      .then(result=>{
                        const payload={
                          firstName:result.firstName,
                          userId:result._id
                      }
                      const options={
                          expiresIn:"7d"
                      }
                      const token=jwt.sign(payload,process.env.SECRET,options);
                      return res.status(200).json({
                          success:true,
                          message:"login successfuly",
                          token:token
                      })
                      })
                      .catch((err) => {
                          res.status(500).json({
                            success: false,
                            message: `Server Error`,
                            err: err,
                          });
                        });
          }
      })
    }
  })
}
module.exports = { login , loginGoogle};