import React, { useEffect, useState } from 'react'
import Product from './Product'
import axios from 'axios'


export default function Home() {


    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
    }, [])

    async function getProducts() {
        try {
            let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
            setProducts(data.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    return (
        <div className='grid grid-cols-4 gap-3'>
            {products.map((product, index) => {
                return <Product product={product} key={index} />
            })}
        </div>
    )
}
