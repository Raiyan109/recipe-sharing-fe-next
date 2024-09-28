import nexiosInstance from '@/config/nexios.config'
import React from 'react'

const ProductDetailsPage = async ({ params }: { params: { productId: string } }) => {
    const { data: products } = await nexiosInstance.get(`/facility/${params.productId}`, {
        cache: 'no-store'
    })
    console.log(products);
    return (
        <div>ProductDetailsPage</div>
    )
}

export default ProductDetailsPage