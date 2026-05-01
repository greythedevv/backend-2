const express = require("express")
const app = express()
const cors = require("cors")

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.static("public"))
const PORT = process.env.PORT || 3500


// routes
app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

// app listening to the port
app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`)
})