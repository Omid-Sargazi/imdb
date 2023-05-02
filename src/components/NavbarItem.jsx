"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from 'next/navigation' 

const NavbarItem = ({param, title}) => {
  const searchParams = useSearchParams();
  console.log(searchParams,"navbar")
  const genre = searchParams.get('genre');
    return (
    <div className='flex '>
      <Link className={`m-4 hover:text-amber-600 font-semibold p-2 ${
        genre && genre === param && "underline underline-offset-8 decoration-4 underline-amber-500 rounded-lg" 
      }`}
       href={`/?genre=${param}`}>
      <h1>{title}</h1>
      </Link>
      
    </div>
  )
}

export default NavbarItem
