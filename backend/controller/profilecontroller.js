const User = require("../modals/user");
module.exports.profile = (req, res) => {
  console.log("reach");
  res.send(`
    <head>
    <style>
    body {
      background-color: #ec8e1d;
    }
    a{
      font-size:20px;
      position: absolute;
      color:red;
      right:20px;
      top:0px;
    }
    
    form {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    label {
      margin-bottom: 10px;
    }
    
    input {
      margin-bottom: 20px;
      padding: 10px;
      border: none;
      border-radius: 5px;
    }
    
    input[type="submit"] {
      background-color: green;
      color: white;
      cursor: pointer;
    }
  </style>
  </head>
  <body>
        <h1>Welcome  !</h1>
        <form action="/profile/update method="POST">
          <label for="age">Age:</label>
          <input type="number" id="age" name="age" value=" ">
          <br>
          <label for="gender">Gender:</label>
          <input type="text" id="gender" name="gender" value= ""
          }">
          <br>
          <label for="dob">Date of Birth:</label>
          <input type="date" id="dob" name="dob" value=""
            user.dob ? user.dob.toISOString().slice(0, 10) : " ">
          <br>
          <label for="mobile">Mobile:</label>
          <input type="text" id="mobile" name="mobile" value=" ">
          <br>
          <input type="submit" value="Update">
        </form>
        <a href="http://localhost:3000/login">LogOut</a>


        <body/>
      `);
};
