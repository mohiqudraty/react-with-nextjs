import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <nav className='bg-green-700 flex justify-between items-center px-5 py-5'>
    <h2 className='font-bold text-xl'>MOHIUDDIN</h2>
    <div className='flex gap-10'>
    <Link href='/About'>About</Link>
   <Link href='/Blog'>Blog</Link>
   <Link href='/Career'>Career</Link>

    </div>
    
    </nav>
  )
}

export default Header