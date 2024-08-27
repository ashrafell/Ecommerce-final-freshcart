import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RatingStars from './ratingStars'
import Loading from './Loading'
import ProductImageSlider from './productImageSlider'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import { addProductToCart } from './CartServies'
export default function ProductDetails() {

    const { id } = useParams()
    const [productDetails, setProductDetails] = useState(null)
    const [isLoading, setIsLOading] = useState(true)
    const [relatedProducts, setRelatedProducts] = useState([])
    useEffect(() => {
        getProductDetails()
    }, [id])


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
    }

    async function getProductDetails() {
        setIsLOading(true)
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products/' + id)
        setProductDetails(data.data)
        getRelatedProducts(data.data?.category._id)
        setIsLOading(false)
    }

    async function getRelatedProducts(categoryId) {
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products/', {
            params: {

                'category': categoryId
            }
        })
        setRelatedProducts(data.data)
    }

    return (

        <>
            {
                isLoading ? <Loading />
                    :
                    <div className="bg-white">
                        {/* <div class="fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300">
                <div class="flex items-center justify-between">
                    <h3 class="text-2xl font-medium text-gray-700">Your cart</h3>
                    <button class="text-gray-600 focus:outline-none">
                        <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M6 18L18 6M6 6l12 12"></path></svg>
                    </button>
                </div>
                <hr class="my-3" />
                <div class="flex justify-between mt-6">
                    <div class="flex">
                        <img class="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
                        <div class="mx-3">
                            <h3 class="text-sm text-gray-600">Mac Book Pro</h3>
                            <div class="flex items-center mt-2">
                                <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                                <span class="text-gray-700 mx-2">2</span>
                                <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <span class="text-gray-600">20$</span>
                </div>
                <div class="flex justify-between mt-6">
                    <div class="flex">
                        <img class="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
                        <div class="mx-3">
                            <h3 class="text-sm text-gray-600">Mac Book Pro</h3>
                            <div class="flex items-center mt-2">
                                <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                                <span class="text-gray-700 mx-2">2</span>
                                <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <span class="text-gray-600">20$</span>
                </div>
                <div class="flex justify-between mt-6">
                    <div class="flex">
                        <img class="h-20 w-20 object-cover rounded" src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80" alt="" />
                        <div class="mx-3">
                            <h3 class="text-sm text-gray-600">Mac Book Pro</h3>
                            <div class="flex items-center mt-2">
                                <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                                <span class="text-gray-700 mx-2">2</span>
                                <button class="text-gray-500 focus:outline-none focus:text-gray-600">
                                    <svg class="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <span class="text-gray-600">20$</span>
                </div>
                <div class="mt-8">
                    <form class="flex items-center justify-center">
                        <input class="form-input w-48" type="text" placeholder="Add promocode" />
                        <button class="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Apply</span>
                        </button>
                    </form>
                </div>
                <a class="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                    <span>Chechout</span>
                    <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </a>
            </div>*/}
                        <main className="my-8">
                            <div className="container mx-auto px-6">
                                <div className="md:flex md:items-center">
                                    <div className="w-full h-64 md:w-3/12 lg:h-96">
                                        <ProductImageSlider images={productDetails?.images} />
                                    </div>
                                    <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-7/12">
                                        <h3 className="text-gray-700 uppercase text-lg" />{productDetails?.title}
                                        <hr className="my-3" />
                                        <span className="text-gray-500 mt-3">price : ${productDetails?.price}</span>
                                        <hr className="my-3" />
                                        <div className="mt-3">
                                            <label className="text-gray-700 text-sm" htmlFor="count">Ratings:</label>
                                            <RatingStars rating={productDetails?.ratingsAverage ?? 0} />
                                        </div>
                                        <div className="mt-3">
                                            <label className="text-gray-700 text-sm" htmlFor="count">Description:</label>
                                            <h3>{productDetails?.description}</h3>
                                        </div>
                                        <div className="mt-3">
                                            <label className="text-gray-700 text-sm" htmlFor="count">Category:</label>
                                            <h3>{productDetails?.category.name}</h3>
                                        </div>
                                        <div className="mt-3">
                                            <label className="text-gray-700 text-sm" htmlFor="count">subCategory:</label>
                                            <h3>{productDetails?.subcategory[0].name}</h3>
                                        </div>
                                        <div className="mt-3">
                                            <label className="text-gray-700 text-sm" htmlFor="count">Brand:</label>
                                            <h3>{productDetails?.brand.name}</h3>
                                        </div>
                                        <div className="flex items-center mt-6">
                                            <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Order Now</button>
                                            <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                                                <svg onClick={() => addProductToCart(productDetails._id)} className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16">
                                    <h3 className="text-gray-600 text-2xl font-medium">More Products</h3>

                                    <Slider {...settings}>
                                        {relatedProducts.map((product, index) => {
                                            return <div key={index} className="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                                                <div className="flex items-end justify-end h-56 w-full bg-cover bg-center" style={{ 'backgroundImage': `url(${product.imageCover})` }}>
                                                    <button className="p-2 rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                                        <svg onClick={() => addProductToCart(productDetails._id)} className="h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                                    </button>
                                                </div>
                                                <div className="px-5 py-3">
                                                    <Link to={'/productDetails/' + product._id} className="text-gray-700 uppercase line-clamp-1">{product.title}</Link>
                                                    <span className="text-gray-500 mt-2">${product.price}</span>
                                                </div>
                                            </div>
                                        })}
                                    </Slider>


                                </div>
                            </div>
                        </main>


                    </div >
            }
        </>


    )
}
