import express, {json} from "express"
const app = express()

//secondary imports 
import cors from 'cors'
import mongoose from "mongoose"
import "dotenv/config" 
const PORT = 3000

// middleware 
app.use(express.static('public'))
app.options('*', cors());
app.use(cors())
app.use(json)


mongoose.connect(process.env.CONNECTION_STRING)
.then(()=> console.log('connected to db'))
.catch((err)=> console.log(err))


app.listen(PORT, ()=> console.log( `listening on port ${PORT}`))