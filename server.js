const express = require("express")
const app = express()
const path = require("path")
const PORT = 8000


// app.get("/", (req, res) => {
//     res.send("server")
// })

app.use(express.static(path.join(__dirname, "client", "build")))
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})