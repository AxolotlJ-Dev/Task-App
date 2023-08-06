"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'


export const NavBar = () => {

    const route = useRouter()

  return (
    <header className='relative bg-black flex justify-between items-center h-12 px-6'>
     
        <Link href={"/"} >
            <h1 className=' text-white hover:text-[#fbc2cb]'>
                Home
            </h1>
        </Link>
        <div>
            <button className='  text-white hover:text-[#fbc2cb]' onClick={() => route.push("/new")}>
                Crear Nota
            </button>
        </div>
    </header>
  )
}
