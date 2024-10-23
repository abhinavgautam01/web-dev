const express = require('express')
const app = express()
const port = 3000

//spp.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.get('/about', (req, res) => {
  res.send('About Us')
})



app.get('/contact', (req, res) => {
  res.send('Contact US!')
})



app.get('/blog', (req, res) => {
  res.send('Blog..!')
})



app.get('/blog/:slug', (req, res) => {
  //logic to fetch {slug} from the db
  res.send(`hello ${req.params.slug}`)
})


// app.get('/blog/intro-to-js', (req, res) => {
//   //logic to fetch intro to js from the db
//   res.send('Blog\'s introduction JS..!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   //logic to fetch intro to python from the db
//   res.send('Blog\'s introduction python..!')
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})