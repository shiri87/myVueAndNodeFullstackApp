const { User } = require("../models")

module.exports = {
  //     res.send({
  //       message: `Hello ${req.body.email} you have registered in`,
  //     })
  async register(req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        // error: "this email account is already in use",
        error: err,
      })
    }
  },
}
