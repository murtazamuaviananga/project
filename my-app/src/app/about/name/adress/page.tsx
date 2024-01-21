import React from 'react'
import Image from 'next/image'
const page = () => {
  return (
    <div>
      <header className=' flex py-1 px-1 bg-pink-600'>
      <Image className=' w-16 h-20 mx-96' src="/logo.jpg" alt="" width="50" height="120"/>
      </header>
      </div>
    
  )
}

export default page