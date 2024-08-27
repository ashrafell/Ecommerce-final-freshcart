import axios from 'axios';
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Loading from './Loading';

export default function Categories() {

    function getCategories() {
        return axios.get('https://ecommerce.routemisr.com/api/v1/categories');
    }


    const { data, error, isLoading } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
        select: (response) => response.data.data,
    });


    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='grid grid-cols-3 gap-4 pt-10'>
            {data.map((category) => (
                <div key={category._id} className='max-w-sm mx-auto'>
                    <div className='bg-white shadow-md rounded-lg max-w-sm border-2 border-gray-200 dark:bg-gray-800 dark:border-gray-700 hover:shadow-md hover:shadow-green-700 hover:transition-none transition-shadow duration-1000 '>
                        <img src={category.image} alt={category.name} className="h-72 w-96 object-cover" />
                        <h3 className="text-center text-green-700 font-semibold text-3xl tracking-tight dark:text-white p-4">{category.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
}
