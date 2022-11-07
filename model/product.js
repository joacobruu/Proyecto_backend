let lista = [
  {
    "id": 1,
    "title": "Remera",
    "price": 3500,
    "thumbnail": "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  }
]

class Producto {
  constructor() {
    this.productos = lista
  }

  save(object) {
    console.log(object);
    object.price = parseInt(object.price)
    if (this.productos.length === 0) {
      this.productos.push({id: 1, ...object})
      console.log(`Peoducto agregado`)
    } else {
      let id = this.productos.length + 1
      this.productos.push({id: id, ...object})
      console.log(this.productos);
      console.log(`Producto agregado con id: ${id}`);
    }
  }

  getAll() {
    return this.productos
  }

  getById(id) {
    let producto = null
    this.productos.forEach(x => {
      if(x.id == id) producto = x
    })
    if(producto != null) return producto
    if(producto = null) return 'Producto no encontrado'
  }

  deleteById(id) {
    const index = this.productos.findIndex(x => x.id == id)
    this.productos.splice(index, 1)
  }

  update(id, object) {
    object.price = parseInt(object.price)
    const index = this.productos.findIndex(x => x.id == id)
    this.productos.splice(index, 1)
    this.productos.push({id: id, ...object})
  }
}

const producto = new Producto()

module.exports = producto