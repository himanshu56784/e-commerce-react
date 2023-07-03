import React from 'react'

const Loader = () => {
  return (
      
    <div className='w-full h-full flex justify-center items-center z-[100] mt-4'>            
      <div className='w-[50px] h-[50px]'>
          <div className='w-full h-full  border-[8px] border-gray-600 rounded-[50%] border-t-black animate-spin'>          
          </div>
      </div>
    </div>
  )
}

export default Loader