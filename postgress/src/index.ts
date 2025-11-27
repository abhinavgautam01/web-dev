import express from "express"
import { Client } from "pg";
import dotenv from  "dotenv"
dotenv.config()
const app = express()

app.use(express.json())

const client = new Client(process.env.POSTGRESS_URL)


async function main(){
    await client.connect()
    console.log("Db Connected")
}

app.post("/signup", async (req, res)=>{
    let username = req.body.username
    let email = req.body.email
    let password = req.body.password

    const query = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3);`
    console.log("query: ", query)
    try {
        await client.query(query, [username, email, password]);
        console.log("done")
        res.json({
            message: "signup successful"
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            message: "signup failed"
        })
    }
})

app.listen(3000, ()=> {
    console.log("http://localhost:3000")
})
main()