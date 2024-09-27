import React from 'react'

const ProductDetailsPage = ({ params }: { params: { productId: string } }) => {
    console.log(params);

    return (
        <div>ProductDetailsPage</div>
    )
}

export default ProductDetailsPage