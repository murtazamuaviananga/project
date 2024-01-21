import React from 'react'
import Link from 'next/link'
const Nav = () => {
  return (
    <div><header className='flex gap-8 py-10 px-10 text-5xl bg-orange-400 font-bold'>
<Link href="\">home</Link>
<Link href="\about">about</Link>
<Link href="\about\name">name</Link>
<Link href="\about\name\adress">address</Link>
</header>
    </div>
  )
}

export default Nav