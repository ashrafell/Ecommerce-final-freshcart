import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

export default function brands() {

    function getCBrands() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/brands');
    }


    const { data, error, isLoading } = useQuery({
        queryKey: ['brands'],
        queryFn: getCBrands,
        select: (response) => response.data.data,
    });


    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            <div className='text-center text-green-600 text-4l pt-5'>
                <h1>All Brands</h1>
            </div>
            <div className='grid grid-cols-4 gap-6 pt-10'>

                {data.map((brand) => (
                    <div key={brand._id} className='max-w-sm mx-auto'>
                        <div className='bg-white shadow-md rounded-lg max-w-sm border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:shadow-md hover:shadow-green-700 hover:transition-none transition-shadow duration-1000 '>
                            <img src={brand.image} alt={brand.name} className="h-55 w-70 object-cover" />
                            <h3 className="text-center text-black-700 font-semibold text-xl tracking-tight dark:text-white p-4">{brand.name}</h3>
                        </div>
                    </div>
                ))}
            </div>

        </>
    );
}