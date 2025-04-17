import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} = useContext(ShopContext)
    const [bestSeller, setBestSeller] = useState([]);

    useEffect(()=> {
        const bestProducts = products.map(prod => {
            if (prod.bestseller){
                return prod
            }
        })
        setBestSeller(bestProducts.slice(0,5))
    },[])

    console.log("FEFW", bestSeller)
  return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            LOREN IPUSM, dummy data. IPUSM, dummy data.
            </p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    bestSeller.map((product, index)=>
                         (
                            <ProductItem key={index} id={product._id} name={product.name} image={product.image} price={product.price}/>
                        )
                    )
                }
            </div>
    </div>
  )
}

export default BestSeller
