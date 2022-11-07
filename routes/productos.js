const express = require('express')
const productModel = require('../model/product')
const router = express.Router()

router.get('/productos', async (req, res) => {
  res.render('home', {
    productos: await productModel.getAll()
  })
})

router.get('/productos/:id', async (req, res) => {
  let id  = req.params.id
  res.send(await productModel.getById(id))
})

router.post('/productos', async (req, res) => {
  console.log(req.body);
  await productModel.save(req.body)
  res.redirect('/api/productos')
})

router.put('/productos/:id', async (req, res) => {
  let producto = req.body
  let id = req.params.id
  res.send(await productModel.update(id, producto))
})

router.delete('/productos/:id', async (req, res) => {
  let id = req.params.id
  res.send(await productModel.deleteById(id))
})

module.exports = router