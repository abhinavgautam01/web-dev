const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
//using ejs , (template engine);  template engines are used to set up variables/data or fit them with the template respectively
// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchText = "Search Now"
    let arr = ["Hey", 54, 65]
    res.render("index", { siteName: siteName, searchText: searchText, arr })    //render is used to render ejs file()...
})

app.get('/blog/:slug', (req, res) => {
    let siteName = "Adidas why and when?"
    let searchText = "Its a very good brand"
    let arr = ["Blog", 54, 65]
    res.render("blogpost", {siteName,searchText, arr})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})