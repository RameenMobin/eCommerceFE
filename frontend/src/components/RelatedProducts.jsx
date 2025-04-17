import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const RelatedProducts = ({category, subCategory}) => {
    const {products} = useContext(ShopContext)
    const [related, setRelated] = useState([])

    useEffect(()=> {
        if (products.length > 0) {
            let productsCopy = products.slice()
            const relatedProd = productsCopy.filter((item) => item.category === category && item.subCategory === subCategory)
            pro
        }
    }, [products])
  return (
    <div>
        
    </div>
  )
}

export default RelatedProducts