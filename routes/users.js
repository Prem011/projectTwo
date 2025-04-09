const userModel = require("../models/user.model");
const express = require("express");
const router = express.Router();
const upload = require("../configuration/multer");

router.post("/addStudent", upload.single("studentDp"), async (req, res) => {
  const { name, rollNo } = req.body; //destructuring the request body
  const studentDp = req.file;
  const user = new userModel({
    name,
    rollNo,
    studentDp: studentDp?.path,
  });
  await user.save(); //save the user to the database
  res.send("User added successfully");
});

router.get("/getStudents", async (req, res) => {
  const users = await userModel.find(); //fetch all users from the database
  res.send(users);
});

router.get("/getStudent/:id", async (req, res) => {
  const { id } = req.params;
  const user = await userModel.findById(id); //fetch user by id
  res.send(user);
});

router.post("/updateStudent/:id", async (req, res) => {
  const { id } = req.params; //getting the id from the request params [from route]
  const { name, rollNo } = req.body; //getting the name and rollNo from the request body (destructuring)
  const updatedUser = await userModel.findByIdAndUpdate(id, {
    name,
    rollNo,
  });
  res.send("User updated successfully");
});

router.post("/deleteStudent/:id", async (req, res) => {
  const { id } = req.params; //getting the id from the request params [from route]
  await userModel.findByIdAndDelete(id); //delete user by id
  res.send("User deleted successfully");
});

module.exports = router;
