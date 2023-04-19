const { sign } = require("jsonwebtoken");
const signupModel = require("../modals/signUpschema");
const secrectCode = "this is secrect";
const jwt = require("jsonwebtoken");
module.exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await signupModel.findOne({ email });
    if (!user) {
      res.json("user not found");
    }
    if (user.password != password) {
      res.json("enter valid credentils");
    }
    const payload = { id: user._id };
    const jwt_token = jwt.sign(payload, secrectCode);
    res.redirect("/usersignin/profile");
  } catch (err) {
    console.log(err);
  }
};
