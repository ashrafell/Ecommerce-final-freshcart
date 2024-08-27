import axios from 'axios';
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import Product from './Product';


export default function Products() {

    function getProducts() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/products');
    }

    let { data } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts
    })

    return (
        <div className='grid grid-cols-4 gap-3'>
            {data?.data.data.map((product, i) => {
                return (<Product key={i} product={product}></Product>)
            })}

        </div>

    )
}
