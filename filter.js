const precios = []

let precio = ''

const filtrar = () => {
  const filtered = []
  for (const zapatilla of arrayZapatillas) {
    if (zapatilla.precio === precio) {
      filtered.push(zapatilla)
    }
  }

  printArrayZapatillas(filtered)
}

const fillprecios = () => {
  precios.splice(0)
  for (const zapatilla of arrayZapatillas) {
    if (!precios.includes(zapatilla.precio)) {
      precios.push(zapatilla.precio)
    }
  }
}
fillprecios()

const createSelectprecio = () => {
  const divFiltros = document.querySelector('#filter')
  const selectprecio = document.createElement('select')
  const cleanSelect = document.createElement('button')

  const defaultOption = document.createElement('option')
  defaultOption.value = ''
  defaultOption.textContent = 'precio'
  selectprecio.appendChild(defaultOption)

  for (const precio of precios) {
    const option = document.createElement('option')

    option.value = precio
    option.textContent = precio

    selectprecio.appendChild(option)
  }

  cleanSelect.textContent = 'Limpiar'
  cleanSelect.className = 'button_filter'

  divFiltros.appendChild(selectprecio)
  divFiltros.appendChild(cleanSelect)

  selectprecio.addEventListener('change', (event) => {
    precio = event.target.value

    filtrar()
  })

  cleanSelect.addEventListener('click', () => {
    limpiarFiltros(selectprecio)
  })
}

const limpiarFiltros = (selectprecio) => {
  precio = ''
  selectprecio.value = ''
  printArrayZapatillas(arrayZapatillas)
}
