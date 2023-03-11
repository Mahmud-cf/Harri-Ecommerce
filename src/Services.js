const techProductURL = `https://dummyjson.com/products`

export const getTechProduct = async() => {
    return fetch(`${techProductURL}/`)
    .then(res => res.json())
}

export const getTechProductById = async(id) => {
    const response = await fetch(`${techProductURL}/${id}/`)
    return await response.json()
}

// THERE ARE CLOTH PRODUCT URL 

const clothProductURL = `https://api.escuelajs.co/api/v1/products`

export const getClothProduct = async () => {
    return fetch(`${clothProductURL}/`)
    .then(res => res.json())
}

export const getClothProductById = async (id) => {
    const response = await fetch(`${clothProductURL}/${id}/`)
    return await response.json()
}

const featuredProductURL = `https://api.escuelajs.co/api/v1/products`

export const getFeaturedProduct = async () => {
    return fetch(`${featuredProductURL}/`)
    .then(res => res.json())
}
export const getFeaturedProductById = async (id) => {
    return fetch(`${featuredProductURL}/${id}/`)
    .then(res => res.json())
}











