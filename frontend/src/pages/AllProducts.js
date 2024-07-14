import React, { useEffect, useState } from 'react'
import UploadProduct from '../components/UploadProduct'
import SummaryApi from '../common'
import AdminProductCard from '../components/AdminProductCard'


function AllProducts() {
  const [openUploadProduct, setOpenUploadProduct] = useState(false)
  const [allProduct, setAllProduct] = useState([])

  const fetchAllProduct = async () => {
    const response = await fetch(SummaryApi.allProduct.url,{
      method:'get',
      Credentials:'include'
    });
  
    const dataResponse = await response.json()

    console.log("product data",dataResponse)

    setAllProduct(dataResponse?.data || [])
  }

  useEffect(() => {
    fetchAllProduct()
  }, [])

  return (
    <div>
      <div className='bg-white py-2 px-4 flex justify-between items-center'>
        <h2 className='font-bold text-lg'> All Product</h2>

        <button className='border-2 border-red-600 text-red-600 hover:bg-red-600 py-1 px-3 rounded-full transition-all hover:text-white' 
         onClick={() => setOpenUploadProduct(true)}>Upload Product</button>
      </div>

      {/* all product */}
      <div className='flex items-center gap-5 py-4'>
        {allProduct.map((product, index) => {
          return (
            <AdminProductCard data={product} key={index+"allproduct"} fetchData={fetchAllProduct}/>
          )
        })}
      </div>

      {openUploadProduct && (
        <UploadProduct onClose={() => setOpenUploadProduct(false)} />
      )}
    </div>
  )
}

export default AllProducts