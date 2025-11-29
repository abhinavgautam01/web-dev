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

    const city = req.body.city
    const country = req.body.country
    const street = req.body.street
    const pincode = req.body.pincode

    const query = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`
    const address_query = `INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1, $2, $3, $4, $5);`

    try {
        const response = await client.query(query, [username, email, password]);
        const user_id = response.rows[0].id
        await client.query(address_query, [user_id, city, country, street, pincode])
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