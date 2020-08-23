const AuthenticationController = require("./controllers/AuthenticationController")

//url / req ,res =>{}
module.exports = (app) => {
  //set up and check
  // app.get("/status", (req, res) => {
  //   res.send({ message: "Hello world" })
  // })
  // app.post("/register", (req, res) => {
  //   res.send({ message: `Hello, ${req.body.email}` })
  // })
  app.post("/register", AuthenticationController.register)
}
