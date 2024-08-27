import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Bounce, toast } from 'react-toastify';

export default function WishListProduct({ product, setWishList, wishList }) {




    async function removeProductFromWishList(productId) {
        const { data } = await axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist' + productId,
            {
                headers: {
                    token: localStorage.getItem('token')
                }
            })

        console.log(data)

        setWishList(data)

        toast.success('Product has been removed successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }



    return (
        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
            <img src={product.product.imageCover} alt="product-image" className="w-full rounded-lg sm:w-40" />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                    <h2 className="text-lg font-bold text-gray-900">{product.product.title}</h2>
                    <p className="mt-1 text-xs text-gray-700">{product.price}</p>
                </div>
                <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">

                    <div className="flex items-center space-x-4">

                        <svg onClick={() => removeProductFromWishList(product.product._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}


