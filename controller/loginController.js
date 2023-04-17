const signinModal = require("../modals/signinSchema");
module.exports.signin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const data = await signinModal.create({ email: email, password: password });
  res.json({ data });
};
