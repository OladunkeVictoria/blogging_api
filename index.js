const express= require("express")
const cors = require("cors")


const app = express();

app.use(express.json());
app.use(cors())

const PORT = 8000

app.get("/", (req, res)=> {
    res.send("welcome to blogging Api")
})

app.listen(PORT, () =>{
    console.log(`Server is running on port: ${PORT}`)
})
