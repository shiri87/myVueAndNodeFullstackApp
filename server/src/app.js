const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const morgan = require("morgan")
const { sequelize } = require("./models")
const config = require("./config/config")

const app = express()

// use middleware
app.use(bodyParser.json())
app.use(cors())
app.use(morgan("combined"))

require("./routes")(app)

sequelize.sync().then(() => {
  app.listen(process.env.PORT || config.port)
  console.log(`server started on port ${config.port}`)
})
// app.listen(process.env.PORT || 8050)
