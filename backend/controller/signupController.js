const signupModel = require("../modals/signUpschema");
module.exports.signup = async (req, res) => {
  try {
    const { Name, email, password, confirm_password } = req.body;
    if (password != confirm_password) {
      res.json({ message: "invalid email or password" });
    } else {
      const data = await signupModel.create({
        Name: Name,
        email: email,
        password: password,
        confirm_password: confirm_password,
      });
      res.json({ data });
    }
  } catch (err) {
    console.log(err);
  }
};
