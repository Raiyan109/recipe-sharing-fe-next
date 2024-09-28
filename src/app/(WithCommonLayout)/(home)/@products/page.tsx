import nexiosInstance from '@/config/nexios.config'
import React from 'react'

const Products = async () => {
    const { data: products } = await nexiosInstance.get('/facility', {
        cache: 'no-store'
    })


    console.log(products);

    return (
        <div>Products</div>
    )
}

export default Products