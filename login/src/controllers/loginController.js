const Login = require("../models/login");
const bcrypt = require("bcrypt");
const crypto = require('crypto');

exports.logingetForm = async (req, res) => {
    try{
        const allloginforms = await Login.find()
        const response = { 
            message : "Login Form successfully created",
            login : allloginforms
        }
        res.send(response);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
      }
}

exports.loginuploadForm = async (req, res) => {
    const reqBody = req.body;
    const reqFile = req.file;

    const hP = process.env.SALT;
    console.log(`hp =========`, hP);
    const hashed = await bcrypt.hash(reqBody.password, 10)

    const varification = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!varification.test(reqBody.email)){
        return res.status(400).send({ message:"Invalid Email"});
    }

      const user = await User.findOne({ email: reqBody.email });
  if (!user) {
    return res.status(404).send({ message: "User not found" });
  }


  

const algorithm = 'aes-256-cbc'; //  encryption algorithm
const key = 'myencryptionkey'; //  encryption key or passphrase
const encryptedPassword = '...'; //  encrypted password to decrypt

const decipher = crypto.createDecipher(algorithm, key);
let decryptedPassword = decipher.update(encryptedPassword, 'hex', 'utf8');
decryptedPassword += decipher.final('utf8');

console.log('Decrypted password:', decryptedPassword);    




    
    const obj = {
        firstName: reqBody.firstName,
        lastName: reqBody.lastName, 
        email: reqBody.email,
        password: hashed,
        address: reqBody.address,
        age: reqBody.age,
        imagePath: reqFile.path,
      };
    
      const allloginforms = new Allloginforms(obj);
      await allloginforms.save();
    
      return res.send({
        message: "Login Form successfully created",
        allloginforms: allloginforms,
      });
}

