import { Client } from "pg";
import dotenv from  "dotenv"
dotenv.config()

const client = new Client(process.env.POSTGRESS_URL)

async function main(){
    await client.connect();
    const response = await client.query("SELECT * FROM users;")
    console.log("response:", response)
}
main()
