import { prisma } from "./lib"

async function main(){
    try {
        const user = await prisma.user.create({
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
        await prisma.$disconnect()
    }
}

main()