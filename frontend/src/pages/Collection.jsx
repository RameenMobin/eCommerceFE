import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
    const {products, search, showSearch} = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false)

    const [filterProducts, setFilterProducts] = useState([])
    const [categories, setCategory] = useState([])
    const [subCategories, setSubCategory] = useState([])

    useEffect(()=> {
        setFilterProducts(products)
    }, [])


    const handleCategory = (category) => {
        // categories.push(category)
        // const filteredProds = filterProducts.filter(prod => prod.category === category)
        // setCategory(prev => prev.filter(item => item !== category))
        if(categories.includes(category)){
            setCategory(prev => prev.filter(cat => cat!==category))
        }else
        setCategory(prev => [...prev, category])

    }

    const handleSubCategory = (subCategory) => {
        // categories.push(category)
        // const filteredProds = filterProducts.filter(prod => prod.category === category)
        // setCategory(prev => prev.filter(item => item !== category))
        if(subCategories.includes(subCategory)){
            setSubCategory(prev => prev.filter(cat => cat!==subCategory))
        }else
        setSubCategory(prev => [...prev, subCategory])

    }
    useEffect(() => {
        let productsCopy = products.slice()
        if (showSearch && search){
            productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            // setFilterProducts(productsCopy)

        }
        if(categories.length>0){
            const filteredProds = productsCopy.filter(prod => categories.includes(prod.category))
            if (subCategories.length >0){
                const subFilteredProds = filteredProds.filter(prod => subCategories.includes(prod.subCategory))
                setFilterProducts(subFilteredProds)

            }else
            setFilterProducts(filteredProds)
        }else{
            if (subCategories.length >0){
                const subFilteredProds = productsCopy.filter(prod => subCategories.includes(prod.subCategory))
                setFilterProducts(subFilteredProds)

            }else
            setFilterProducts(productsCopy)
        }
  
    }, [categories, subCategories, search, showSearch])

    const handleSort = (sort) => {
        const fpCopy = filterProducts.slice()
        if (sort === 'low-high'){        
            setFilterProducts(fpCopy.sort((a,b) => (a.price - b.price)))
        } else if( sort === 'high-low'){
            setFilterProducts(fpCopy.sort((a,b) => (b.price - a.price)))
        }
        else{
            setFilterProducts(fpCopy.sort((a,b) => (b.date - a.date)))
        }
    }

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
        {/* Filter Options */}
        <div className='min-w-60'>
            <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-x1 flex items-center cursor-pointer gap-2'>FILTERS
                <img  src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}/>
            </p>
            {/* Category Filter */}
            <div className={`border border-gray-300 p1-5 py-3 mt-6 px-3 ${showFilter ? '' :'hidden'} sm:block`}>
                <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                        <input onClick={() => handleCategory('Men')} type='checkbox' className='w-3' value={'Men'}/> Men
                    </p>
                    <p className='flex gap-2'>
                        <input onClick={() => handleCategory('Women')} type='checkbox' className='w-3' value={'Women'}/> Women
                    </p>
                    <p className='flex gap-2'>
                        <input onClick={() => handleCategory('Kids')} type='checkbox' className='w-3' value={'Kids'}/> Kids
                    </p>
                </div>
            </div>
            {/* Sub category Filter  */}
            <div className={`border border-gray-300 p1-5 py-3 my-5 mt-6 px-3 ${showFilter ? '' :'hidden'} sm:block`}>
                <p className='mb-3 text-sm font-medium'>TYPE</p>
                <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                    <p className='flex gap-2'>
                        <input onClick={() => handleSubCategory('Topwear')} type='checkbox' className='w-3' value={'Topwear'}/> Top
                    </p>
                    <p className='flex gap-2'>
                        <input onClick={() => handleSubCategory('Bottomwear')} type='checkbox' className='w-3' value={'Bottomwear'}/> Bottom
                    </p>
                    <p className='flex gap-2'>
                        <input onClick={() => handleSubCategory('Winterwear')} type='checkbox' className='w-3' value={'Winterwear'}/> Winterwear
                    </p>
                </div>
            </div>

        </div>
        {/* right side of the screen */}
        <div className='flex-1'>
            <div className='flex justify-between text-base sm:text-2x1 mb-4 '>
                <Title text1={'ALL'} text2={'COLLECTIONS'} />
                {/* Product Sorting */}
                <select onChange={(e) => handleSort(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                    <option  value="relevant">Sort by: Relevant</option>
                    <option value="low-high">Sort by: Low to High</option>
                    <option value="high-low">Sort by: High to Low</option>
                </select>
            </div>
            {/* Map Products */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
                {
                    filterProducts.map((prod, index)=> {
                        return (
                            <ProductItem key={index} name={prod.name} id={prod._id} price={prod.price} image={prod.image} />
                        )
                    })
                }
            </div>

        </div>
    </div>
  )
}

export default Collection