import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault() // so that when we submit form it wont reload the page
        

    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-700'>Subscribe now & get 20% off!</p>
        <p className='text-gray-400 mt-3'>
        LOREN IPUSM, dummy data. IPUSM, dummy data.
        </p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3  mx-auto my-6 border p1-3'>
            <input required className='w-full px-3 sm:flex-1 outline-none' type="email" placeholder='Enter your email'/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox