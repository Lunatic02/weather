'use client'
import { dataProps } from "@/types"
import { PiMagnifyingGlass } from 'react-icons/pi'
import getData from "@/utils/api"
import { useState } from "react"
import Card from "./Card"
import { useRouter } from "next/navigation"

export default function Forms() {
  const [form, setForm] = useState('')
  
  const router = useRouter()

  const handleClick = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    if(form === ''){
      return alert('Please fill in the search bar')
    };

    updateSearchParams(form.toLowerCase())
  }
  
  const updateSearchParams = (form:string,)=>{
    const searchParams = new URLSearchParams(window.location.search);

    if(form){
      searchParams.set('city', form)
    } else{
      searchParams.delete('city')
    }


    const newPathname=`${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }


  



  return (
    <>
      <form className="flex gap-2">
        <input className="bg-transparent border-white border rounded-lg h-7 text-white" value={form} onChange={(e) => setForm(e.target.value)} type="text" />
        <button onClick={handleClick}><PiMagnifyingGlass className="text-white" size={20} /></button>
      </form>
    </>
  )
}
