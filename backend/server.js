import express, {json} from "express"
const app = express()

//secondary imports 
import cors from 'cors'
import { connect } from "mongoose"
import "dotenv/config" 

// middleware 
app.use(express.static('public'))
app.use(cors())