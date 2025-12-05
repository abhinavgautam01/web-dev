import { PrismaClient } from "./generated/prisma/client.js";

// @ts-ignore
const client = new PrismaClient()

async function main(){
    try {
        const user = await client.user.create({
            data: {
                username: "new_client",
                password: "test",
                age: 21
            }
        })
        console.log("User created:", user)
    } catch (error) {
        console.error("Error:", error)
    } finally {
        await client.$disconnect()
    }
}

main()