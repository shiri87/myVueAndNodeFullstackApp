const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

// use middleware
app.use(bodyParser.json())
app.use(cors())
app.use(morgan("combined"))

//url / req ,res =>{}
app.get("/status", (req, res) => {
  res.send({ message: "Hello world" })
})
app.post("/register", (req, res) => {
  res.send({ message: `Hello, ${req.body.email}` })
})

app.listen(process.env.PORT || 8050)
