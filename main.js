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
    marca: 'New Blance',
    modelo: 'Forum Buckle',
    precio: 100
  },
  {
    foto: './assets/nike1-12.png',
    marca: 'New Blance',
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

const borrarfiltro

const marcas = []

let marca = ''

const filtrar = () => {
  const filtered = []
  for (const zapatilla of arrayZapatillas) {
    if (zapatilla.marca === marca) {
      filtered.push(zapatilla)
    }
  }

  printArrayZapatillas(filtered)
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

  for (const marca of marcas) {
    const option = document.createElement('option')

    option.value = marca
    option.textContent = marca

    selectMarca.appendChild(option)
  }

  divFiltros.appendChild(selectMarca)

  selectMarca.addEventListener('change', (event) => {
    marca = event.target.value

    filtrar()
  })
}

const printArrayZapatillas = (zapatillas) => {
  const mainContainer = document.querySelector('.mainContainer')
  mainContainer.innerHTML = '' // Limpiar el contenedor antes de agregar nuevas zapatillas

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

printArrayZapatillas(arrayZapatillas)

createSelectMarca()
