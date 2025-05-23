import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Product = () => {
    const {productId} = useParams() // extracts ID from the url
    const {products, currency} = useContext(ShopContext)
    const [productData, setProductData] = useState(false);
    const [image, setImages] = useState('')
    const [size, setSize] = useState('')
    const fetchProductData = async () => {
        const product = products.filter(item => item._id === productId)
       console.log("HELLO", product, product.length)
        setProductData(product[0])
        setImages(product[0].image[0])
    }
    useEffect(() => {
        fetchProductData()
    }, [productId, products])
  return (productData) ? (
    
    <div className=' border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
        <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row '>
            <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                    {
                        productData.image.map((img, index)=>(
                            <img onClick={() => setImages(img)} src={img} key={index}  className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer '/>
                        ))
                    }
                </div>
                <div className='w-full sm:w-[80%]' >
                    <img className='w-full h-auto' src={image}/>
                </div>

            </div>
            {/* Product Info */}
            <div className='flex-1'>
                <h1 className='font-medium text-2x1 mt-2 '>
                    {productData.name}
                </h1>
                <div className='flex items-center gap-1 mt-2'>
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_icon} alt="" className="w-3 5" />
                    <img src={assets.star_dull_icon} alt="" className="w-3 5" />
                    <p className='p1-2'>(122)</p>
                </div>
                <p className='mt-5 text-3x1 font-medium'>{currency}{productData.price}</p>
                <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
                <div className='flex flex-col gap-4 my-8'>
                    <p>Select Size</p>
                    <div className='flex gap-2'>
                        {
                            productData.sizes.map((item, index)=> {
                                return (
                                    <button onClick={()=> setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                                )
                            })
                        }
                    </div>

                </div>
                <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
                <hr className='mt-8 sm:w-4/5'/>
                <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                        <p>100% Original Product</p>
                        <p>Cash on delivery is available on this product</p>
                        <p>Easy return and exchange policy within 7 days</p>
                </div>
            </div>
        </div>
        {/* ---------- Description and Review Section -------- */}
        <div className='mt-20'>
            <div className='flex'>
                <b className='border px-5 py-3 text-sm'>Description</b>
                <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
            </div>
            <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, dolore? Exercitationem illo ratione facere voluptate dignissimos! Unde, aut, dolore temporibus dolores eligendi accusantium enim laudantium illo accusamus molestiae, suscipit corporis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur architecto asperiores accusamus voluptatum possimus perspiciatis natus velit impedit error accusantium dolor quia voluptatem quis necessitatibus, officiis fugit voluptatibus quas ipsum.</p>
            </div>
        </div>
        {/* ------- Display Related Products --------- */}
        
    </div>
  ) : (<div className='opacity-0'>

  </div>)
}

export default Product