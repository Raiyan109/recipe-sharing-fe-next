import Product from '@/components/home/products/Product';
import nexiosInstance from '@/config/nexios.config';


const ProductsPage = async () => {
    const { data: products } = await nexiosInstance.get('/facility', {
        cache: 'no-store'
    })
    console.log(products);


    return (
        <div>
            {
                products?.data?.map((product) => (
                    <Product key={product?._id} product={product} />
                ))
            }
        </div>
    )
}

export default ProductsPage