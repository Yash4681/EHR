const connectToMongo = require("./db.js")
const express = require('express')
var cors = require('cors')

connectToMongo();
const app = express()
const port = 5000

app.use(express.json());
app.use(cors())

//Available routes
app.use("/api/patient", require("./routes/patient"));
app.use("/api/doctor", require("./routes/doctor"));
app.use("/api/appointment", require("./routes/appointment"));

app.get('/', (req, res) => {
  res.send('Hello Yash!')
})

app.listen(port, () => {
  console.log(`ehr backend listening on port ${port}`)
})