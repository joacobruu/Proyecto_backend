const express = require('express')
const app = express()
const productRoute = require('./routes/productos')
const PORT = 8080

app.listen(PORT, console.log(`Server running on port: ${PORT}`))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.set('views', './views')
app.set('view engine', 'ejs')
app.use('/api', productRoute, express.static('public'))

app.get('/', (req, res) => {
  res.render('home')
})
