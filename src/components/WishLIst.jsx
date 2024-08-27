import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import WishListProduct from './WishListProduct'





export default function WishList() {

    const [isLoading, setIsLoading] = useState(true)

    const [wishList, setWishList] = useState(null)
    useEffect(() => {
        getUserWishList()
    }, [
    ])





    async function getUserWishList() {
        setIsLoading(true)
        const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/wishlist",
            {
                headers: {
                    token: localStorage.getItem('token')
                }
            }
        ).finally(() => {
            setIsLoading(false)
        })

        console.log(data)

        setWishList(data)
    }


    function removeWishList() {
        axios.delete("https://ecommerce.routemisr.com/api/v1/wishlist", {
            headers: {
                token: localStorage.getItem('token')
            }
        }
        ).finally(() => {
            setWishList(null)
        })

    }


    if (isLoading) {
        return <Loading />

    }


    return (
        wishList ? (
            <div className="pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Whish List Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {data.length > 0 ? (
                            wishList.data.products.map((product, index) => (
                                <WishListProduct key={index} product={product} setWishList={setWishList} wishList={wishList} />
                            ))
                        ) : (
                            <h2 className="text-center text-4xl font-bold">No products in your Wish List</h2>
                        )}
                    </div>

                    {wishList.data.products.length > 0 && (
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">${wishList.data.price}</p>
                            </div>

                            <Link to={'/shippingAddress/' + wishList.data._id} className="block text-center mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                                add to cart
                            </Link>
                        </div>
                    )}
                </div>
                {wishList.data.products.length > 0 && (
                    <button onClick={removeWishList} className='text-red-500 border-2 border-red-500 hover:text-white hover:bg-red-500 block mx-auto'>
                        Clear Wish List
                    </button>
                )}
            </div>
        ) : (
            <h1 className='text-center text-4xl font-bold'>No products in your wish list</h1>
        )
    );
}
