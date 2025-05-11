const express = require('express')
const app = express()
const port = 80



app.get('/', (req, res) => {
  res.send('Welcome to your ASCPC web app....yes!')
})

app.listen(port, () => {
  console.log(Example app listening at http://localhost:${port})
})
