let addForm = document.getElementById('addForm')
let updateForm = document.getElementById('updateForm')

const handleAddSubmit = (e, form, route) => {
  e.preventDefault()
  let formData = new FormData(form)
  let producto = {}
  formData.forEach((value, key) => producto[key]= value)
  fetch(route, {
    method: "POST",
    body: JSON.stringify(producto),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
    .then(res => console.log(res))

  form.reset()
}

const handleUpdateSubmit = (e, form, route) => {
  e.preventDefault()
  let formData = new FormData(form)
  let producto = {}
  formData.forEach((value, key) => producto[key]= value)
  fetch(route, {
    method: "PUT",
    body: JSON.stringify(producto),
    headers: {
      "content-type": "application/json"
    }
  }).then(res => res.json())
    .then(res => console.log(res))

  form.reset()
}

addForm.addEventListener('submit', (e) => handleAddSubmit(e, e.target, '/api/productos'))
updateForm.addEventListener('submit', (e) => handleUpdateSubmit(e, e.target, '/api/productos/:id'))