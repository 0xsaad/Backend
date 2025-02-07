const Form = require("../models/user");
const bcrypt = require("bcrypt");

exports.getForm = async (req, res) => {
  try {
    const allforms = await Form.find();
    const response = {
      message: "Form successfully created",
      form: allforms, 
    };
    res.send(response);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.uploadForm = async (req, res) => {
  const reqBody = req.body;
  const reqFile = req.file; // image/file information

  const varification = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Regex - Regular Expression
  if (!varification.test(reqBody.email)) {
    return res.status(400).send({ message: "Invalid email" });
  }

  const hP = process.env.SALT;
  console.log(`hp ========== `, hP);
 
  const hashed = await bcrypt.hash(reqBody.password, 10)
 
  const obj = {
    firstName: reqBody.firstName,
    lastName: reqBody.lastName, 
    email: reqBody.email,
    password: hashed,
    address: reqBody.address,
    age: reqBody.age,
    imagePath: reqFile.path,
  };

  const form = new Form(obj);
  await form.save();

  return res.send({
    message: "Form successfully created",
    form: form,
  });
};

// exports.uploadForm = async (req, res) => {
//     const reqBody = req.body;
//     const reqFile = req.file;   // image/file information
//     const obj = {
//         firstName: reqBody.firstName ,
//         lastName:reqBody.lastName ,
//         email:reqBody.email ,
//         password:reqBody.password ,
//         address:reqBody.address ,
//         age:reqBody.age,
//         imagePath:reqBody.path
//     };
//     const form = new Form(obj);
//     await form.save();
//     return res.send({
//       message: "Form successfully created",
//       form: form,
//     });
//   };
