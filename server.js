const app = require("./app");
const db = require("./modals/signinSchema");

const Database = require("./config/mongoose");
port = 3000;
app.listen(port, () => {
  console.log(`the port is running ${port}`);
});
