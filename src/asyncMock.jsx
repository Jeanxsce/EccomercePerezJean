const products = [
    {
        id: '1',
        name: 'Mesa generica',
        price: 1500,
        category: 'mesas',
        img: 'https://www.blenom.com/comedor-y-cocina-a11/',
        stock: 20,
        description: 'Descripcion de Mesa Generica'
    },
    { id: '2', name: 'Silla Generica', price: 1000, category: 'sillas', img: '/assets.chair.jpg', stock: '15', description: 'Descripcion de Silla Generica'},
    { id: '3', name: 'Lampara Generica', price: 1200, category: 'Lampara', img: '/assets.lamp.jpg', stock: '12', description: 'Descripcion de Lampara Generica'},
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}

