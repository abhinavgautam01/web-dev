// console.log(getName)
fetchApi()
fetchDetails()
async function fetchDetails() {
    try{

        const p = document.getElementById("pid").value.toLowerCase()
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${p}`)
        const textData = await fetch (`https://pokeapi.co/api/v2/pokemon/${p}`)
        if(!response.ok){
            throw new Error("Could not fetch..!")
        }
        const d = await textData.text()
        const data = await response.json()
        console.log(data)
        console.log(d)
        
        document.getElementById("div1").innerText = (data.name)    
        const display = document.getElementById("div1")
        display.style.display="block"

        const imag = data.sprites.front_default
        const imgElement = document.getElementById("i")

        imgElement.src = imag
        imgElement.style.display ="none"
    }
        catch(error){
        console.log(error)
        }
    }
async function fetchApi() {
    try{
        
        const p = document.getElementById("pid").value.toLowerCase()
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${p}`)
        const textData = await fetch (`https://pokeapi.co/api/v2/pokemon/${p}`)
        if(!response.ok){
            throw new Error("Could not fetch..!")
        }
        const d = await textData.text()
        const data = await response.json()
        console.log(data)
        console.log(d)

        // const div = document.getElementById("div1").innerText = (d)

        const imag = data.sprites.front_shiny
        const imgElement = document.getElementById("i")

        imgElement.src = imag
        imgElement.style.display ="block"

        const div = document.getElementById("div1").innerText = ""    
        // div.style.display ="none"
    }

    catch(error){
        console.log(error)
    }

}
