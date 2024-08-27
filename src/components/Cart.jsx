import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CartProduct from './cartProduct'
import { Link } from 'react-router-dom'
import Loading from './Loading'





export default function Cart() {

    const [isLoading, setIsLoading] = useState(true)

    const [cart, setCart] = useState(null)
    useEffect(() => {
        getUserCart()
    }, [
    ])





    async function getUserCart() {
        setIsLoading(true)
        const { data } = await axios.get("https://ecommerce.routemisr.com/api/v1/cart",
            {
                headers: {
                    token: localStorage.getItem('token')
                }
            }
        ).finally(() => {
            setIsLoading(false)
        })

        console.log(data)

        setCart(data)
    }


    function removeCart() {
        axios.delete("https://ecommerce.routemisr.com/api/v1/cart", {
            headers: {
                token: localStorage.getItem('token')
            }
        }
        ).finally(() => {
            setCart(null)
        })

    }


    if (isLoading) {
        return <Loading />

    }


    return (
        cart ? (
            <div className="pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {cart.data.products.length > 0 ? (
                            cart.data.products.map((product, index) => (
                                <CartProduct key={index} product={product} setCart={setCart} cart={cart} />
                            ))
                        ) : (
                            <h2 className="text-center text-4xl font-bold">No products in your cart</h2>
                        )}
                    </div>

                    {cart.data.products.length > 0 && (
                        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700">Subtotal</p>
                                <p className="text-gray-700">${cart.data.totalCartPrice}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700">Shipping</p>
                                <p className="text-gray-700">$0</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold">Total</p>
                                <div className="">
                                    <p className="mb-1 text-lg font-bold">${cart.data.totalCartPrice}</p>
                                    <p className="text-sm text-gray-700">including VAT</p>
                                </div>
                            </div>
                            <Link to={'/shippingAddress/' + cart.data._id} className="block text-center mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                                Check out
                            </Link>
                        </div>
                    )}
                </div>
                {cart.data.products.length > 0 && (
                    <button onClick={removeCart} className='text-red-500 border-2 border-red-500 hover:text-white hover:bg-red-500 block mx-auto'>
                        Clear Cart
                    </button>
                )}
            </div>
        ) : (
            <h1 className='text-center text-4xl font-bold'>No products in your cart</h1>
        )
    );
}
