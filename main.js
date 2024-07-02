import './style.css'

const arrayZapatillas = [
  {
    foto: './assets/nike1.png',
    marca: 'Nike Original',
    modelo: 'Air Max 1',
    precio: 120
  },
  {
    foto: './assets/nike1_1.png',
    marca: 'New Balance',
    modelo: 'NB 9060',
    precio: 80
  },
  {
    foto: './assets/nike1-2.png',
    marca: 'Nike Original',
    modelo: 'Nike Revolution',
    precio: 90
  },
  {
    foto: './assets/nike1-3.png',
    marca: 'Adidas Original',
    modelo: 'Forum Buckle',
    precio: 100
  },
  {
    foto: './assets/nike1-4.png',
    marca: 'Adidas Original',
    modelo: 'Campus',
    precio: 120
  },
  {
    foto: './assets/nike1-5.png',
    marca: 'New Balance',
    modelo: 'NB 327',
    precio: 120
  },
  {
    foto: './assets/nike1-6.png',
    marca: 'Nike Original',
    modelo: 'Dunk Low',
    precio: 100
  },
  {
    foto: './assets/nike1-7.png',
    marca: 'Adidas Original',
    modelo: 'Glazzelle',
    precio: 90
  },
  {
    foto: './assets/nike1-8.png',
    marca: 'Nike Original',
    modelo: 'Air Max SC',
    precio: 150
  },
  {
    foto: './assets/nike1-9.png',
    marca: 'Adidas Original',
    modelo: 'Handball Spezial',
    precio: 120
  },
  {
    foto: './assets/nike1-10.png',
    marca: 'Nike Original',
    modelo: 'Air Force',
    precio: 130
  },
  {
    foto: './assets/nike1-11.png',
    marca: 'New Balance',
    modelo: 'Forum Buckle',
    precio: 100
  },
  {
    foto: './assets/nike1-12.png',
    marca: 'New Balance',
    modelo: 'NB 480',
    precio: 150
  },
  {
    foto: './assets/nike1-13.png',
    marca: 'Nike Original',
    modelo: 'Full Force Low',
    precio: 70
  },
  {
    foto: './assets/nike1-14.png',
    marca: 'Nike Original',
    modelo: 'Air Max SC',
    precio: 160
  },
  {
    foto: './assets/nike1-15.png',
    marca: 'Adidas Original',
    modelo: 'Handball Spezial',
    precio: 140
  }
]

const marcas = []
const precios = ['< 100', '100-150', '> 150']

let marca = ''
let precio = ''

const filtrar = () => {
  const filtered = arrayZapatillas.filter((zapatilla) => {
    const matchMarca = !marca || zapatilla.marca === marca
    const matchPrecio =
      !precio ||
      (precio === '< 100' && zapatilla.precio < 100) ||
      (precio === '100 - 150' &&
        zapatilla.precio >= 100 &&
        zapatilla.precio <= 150) ||
      (precio === '> 150' && zapatilla.precio > 150)
    return matchMarca && matchPrecio
  })

  if (filtered.length === 0) {
    printArrayZapatillas(getRandomZapatillas(3))
  } else {
    printArrayZapatillas(filtered)
  }
}
const getRandomZapatillas = (count) => {
  const shuffled = arrayZapatillas.sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

const fillMarcas = () => {
  marcas.splice(0)
  for (const zapatilla of arrayZapatillas) {
    if (!marcas.includes(zapatilla.marca)) {
      marcas.push(zapatilla.marca)
    }
  }
}
fillMarcas()

const createSelectMarca = () => {
  const divFiltros = document.querySelector('#filter')
  const selectMarca = document.createElement('select')
  const selectPrecio = document.createElement('select')
  const cleanSelect = document.createElement('button')

  const defaultOption = document.createElement('option')
  defaultOption.value = ''
  defaultOption.textContent = 'Marca'
  selectMarca.appendChild(defaultOption)

  for (const marca of marcas) {
    const option = document.createElement('option')

    option.value = marca
    option.textContent = marca

    selectMarca.appendChild(option)
  }

  const defaultOptionPrecio = document.createElement('option')
  defaultOptionPrecio.value = ''
  defaultOptionPrecio.textContent = 'Precio'
  selectPrecio.appendChild(defaultOptionPrecio)

  for (const rango of precios) {
    const option = document.createElement('option')

    option.value = rango
    option.textContent = rango

    selectPrecio.appendChild(option)
  }

  cleanSelect.textContent = 'Limpiar'
  cleanSelect.className = 'button_filter'

  divFiltros.appendChild(selectMarca)
  divFiltros.appendChild(selectPrecio)
  divFiltros.appendChild(cleanSelect)

  selectMarca.addEventListener('change', (event) => {
    marca = event.target.value

    filtrar()
  })

  selectPrecio.addEventListener('change', (event) => {
    precio = event.target.value
    filtrar()
  })

  cleanSelect.addEventListener('click', () => {
    limpiarFiltros(selectMarca, selectPrecio)
  })
}

const limpiarFiltros = (selectMarca, selectPrecio) => {
  marca = ''
  precio = ''
  selectMarca.value = ''
  selectPrecio.value = ''
  printArrayZapatillas(arrayZapatillas)
}

const printArrayZapatillas = (zapatillas) => {
  const mainContainer = document.querySelector('.mainContainer')
  mainContainer.innerHTML = ''

  for (const zapatilla of zapatillas) {
    const divZapatilla = document.createElement('div')
    divZapatilla.className = 'zapatilla'

    const imgzapatilla = document.createElement('img')
    const infoMarca = document.createElement('h3')
    const divp = document.createElement('div')
    const infoModelo = document.createElement('p')
    const infoPrecio = document.createElement('p')
    const divbutton = document.createElement('div')
    const button = document.createElement('button')

    imgzapatilla.src = zapatilla.foto
    imgzapatilla.className = 'product_img'
    infoMarca.textContent = zapatilla.marca
    infoModelo.textContent = zapatilla.modelo
    infoPrecio.textContent = zapatilla.precio + ' €'

    button.textContent = 'Comprar'
    button.className = 'button'

    divp.className = 'divp'
    divbutton.className = 'divbutton'

    divZapatilla.appendChild(imgzapatilla)
    divZapatilla.appendChild(infoMarca)
    divp.appendChild(infoModelo)
    divp.appendChild(infoPrecio)
    divZapatilla.appendChild(divp)
    divZapatilla.appendChild(button)
    divZapatilla.appendChild(divbutton)
    divbutton.appendChild(button)

    mainContainer.appendChild(divZapatilla)
  }
}

const btnFilter = document.querySelector('#btn_filter')
const filterContainer = document.querySelector('#filter')

btnFilter.addEventListener('click', () => {
  filterContainer.classList.toggle('opened_filter')
  filterContainer.classList.toggle('closed_filter')

  btnFilter.classList.toggle('open_filter_button')
  btnFilter.classList.toggle('close_filter_button')
})

printArrayZapatillas(arrayZapatillas)

createSelectMarca()
