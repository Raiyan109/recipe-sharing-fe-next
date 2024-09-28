import Link from "next/link"

const Product = ({ product }) => {
    return (
        <div>
            <Link href={`/products/${product?._id}`} className='btn btn-primary'>Details</Link>
        </div>
    )
}

export default Product