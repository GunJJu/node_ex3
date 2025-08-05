const express = require("express")
const app = express()
const PORT = 3000

//user.js 불러오기
const userRouter = require("./routes/user")
const router = require("./routes/user")

app.use(express.json)
app.use("/users", userRouter)



app.get("/", (req, res)=>{
    res.send("hello, world!")
})



app.listen(PORT, ()=>{
    console.log("Server is running...!")
})