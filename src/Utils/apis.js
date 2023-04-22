const BASEAPI = 'http://localhost:1337/api/Products?populate=Image'

function getAllProducts(){
    return fetch(`${BASEAPI}`).then(res => res.json())
}

export{
    getAllProducts
}