"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
const SearchBox = () => {
    const [search, setSearch] = useState("")
    
    const router = useRouter()


    const handelSubmit = (e)=>{
        e.preventDefault();
        if(!search)return;
        router.push(`/search/${search}`)
    }
  return (
    <form onSubmit={handelSubmit} className='flex max-w-6xl mx-auto justify-between items-center px-5'>
      <input value={search} onChange={(e)=>setSearch(e.target.value)} type='flex-1 text' placeholder='Search keywords...' className='w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent'/>
      <button disabled={!search} className='text-amber-700 disabled:text-gray-400' type='submit'>Search</button>
    </form>
  )
}

export default SearchBox
