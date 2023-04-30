"use client"
import React, { useEffect, useState } from 'react'
import {MdLightMode} from 'react-icons/md'
import {BsFillMoonFill} from 'react-icons/bs'
import { useTheme } from 'next-themes'
const DarkMode = () => {
    const {systemTheme, theme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(()=>{
        setMounted(true)
    },[])

    const currentThem = theme === 'system'? systemTheme : theme;
  return (
    <>
    {mounted&& (currentThem==='dark' ?(<MdLightMode className='text-xl cursor-pointer hover:text-amber-500' onClick={()=>setTheme("light")}/>):( <BsFillMoonFill className='text-xl cursor-pointer hover:text-amber-500' onClick={()=>setTheme('dark')}/>))}
      
     
    </>
  )
}

export default DarkMode

