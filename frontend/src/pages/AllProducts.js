import React, { useState } from 'react'
import UploadProduct from '../components/UploadProduct'

function AllProducts() {
  const [openUploadProduct, setOpenUploadProduct]=useState(false)
  
  return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'> All Product</h2>
        <button className='border-2 border-red-600 text-red-600 hover:bg-red-600 py-1 px-3 rounded-full transition-all hover:text-white' 
         onClick={()=> setOpenUploadProduct(true)}>Upload Product</button>
      </div>
    
      {
        openUploadProduct && (
            <UploadProduct onClose={()=> setOpenUploadProduct(false)}/>
        )
      }
    </div>
  )
}

export default AllProducts