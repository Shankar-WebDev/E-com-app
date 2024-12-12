import express from 'express'
import cors from 'cors'
import 'dotenv/config'


//App Config


const app = express()
const port = process.env.port ||  4000

// MiddleWares

app.use(express.json())
app.use(cors())

//API Endpoints

app.get('/',(req,res) =>{
    res.send("API WORKING")
})

app.listen(port,() => console.log('Server started on PORT : '+port))