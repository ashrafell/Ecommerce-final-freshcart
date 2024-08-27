import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function ShippingAddress() {

    const [loading, setLoading] = useState(false);
    const { cartId } = useParams()



    const initialValues = {
        'city': 'giza',
        'phone': '01065506865',
        'details': '4 tahrer street'
    }

    const validationSchema = yup.object({
        city: yup.string().required('city is Required'),
        phone: yup.string().required('Password is Phone'),
        details: yup.string().required('Details is Phone'),
    });

    function onSubmit() {
        setLoading(true);
        console.log(values)

        axios.post('https://ecommerce.routemisr.com/api/v1/orders/checkout-session/' + cartId, { shippingAdress: values }, {
            headers: {
                token: localStorage.getItem('token')
            },
            params: {
                url: 'http://localhost:3000'
            }


        })
            .then(({ data }) => {
                setLoading(false);
                console.log(data.session.url)
                location.href = data.session.url
            })
            .catch((err) => {
                setLoading(false);
            });
    }

    let { handleSubmit, values, handleChange, errors, touched, handleBlur } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })


    return (
        <div>
            <h2 className='ms-96 fa-2x'>add your shipping address:</h2>

            <form className="max-w-md mx-auto mt-4" onSubmit={handleSubmit}>
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        onBlur={handleBlur}
                        value={values.city}
                        onChange={handleChange}
                        type="text"
                        id="city"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    />
                    <label htmlFor="city" className="peer-focus:font-medium absolute mt-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        city
                    </label>
                </div>
                {errors.city && touched.city && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <span className="font-medium">{errors.city}</span>
                </div>}



                <div className="relative z-0 w-full mb-5 group">
                    <input
                        onBlur={handleBlur}
                        value={values.details}
                        onChange={handleChange}
                        type="text"
                        id="details"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    />
                    <label htmlFor="details" className="peer-focus:font-medium absolute mt-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        details
                    </label>
                </div>
                {errors.details && touched.details && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <span className="font-medium">{errors.details}</span>
                </div>}


                <div className="relative z-0 w-full mb-5 group">
                    <input
                        onBlur={handleBlur}
                        value={values.phone}
                        onChange={handleChange}
                        type="tell"
                        id="phone"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
                    />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute mt-2 text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        phone
                    </label>
                </div>
                {errors.phone && touched.phone && <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                    <span className="font-medium">{errors.phone}</span>
                </div>}


                <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center" disabled={loading}>
                    checkout  {loading && <i className='fas fa-spin fa-spinner text-white'></i>}</button>
            </form>

        </div>
    );
}
