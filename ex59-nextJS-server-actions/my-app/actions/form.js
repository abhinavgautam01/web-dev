"use server"
import fs from "fs/promises"

export const submitAction = async (e) => {
    console.log(e.get("name"), e.get("add"))
    let a =fs.appendFile("golu.txt",`Name : ${e.get("name")}\nAddress : ${e.get("add")}\n`)
  }
