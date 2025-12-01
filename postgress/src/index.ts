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
        await client.query("BEGIN;");
        const response = await client.query(query, [username, email, password]);
        const user_id = response.rows[0].id
        await client.query(address_query, [user_id, city, country, street, pincode])
        await client.query("COMMIT;");
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

app.get("/metadata", async (req, res)=>{
    const id = req.query.id;
    const query1 = "SELECT id, username, email from users WHERE id=$1;";
    const response1 = await client.query(query1, [id])

    const query2 = "SELECT * FROM addresses WHERE user_id=$1;";
    const response2 = await client.query(query2, [id])

    res.json({
        user: response1.rows[0],
        address: response2.rows[0],
    })
})

app.listen(3000, ()=> {
    console.log("http://localhost:3000")
})
main()