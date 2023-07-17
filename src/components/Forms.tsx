'use client'
import { PiMagnifyingGlass } from 'react-icons/pi'
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Forms() {
  const [form, setForm] = useState('')

  const router = useRouter()

  const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form === '') {
      return alert('Please fill in the search bar')
    };
    updateSearchParams(form.toLowerCase())
    setForm('')
  }

  const updateSearchParams = (form: string,) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (form) {
      searchParams.set('city', form)
    } else {
      searchParams.delete('city')
    }


    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    router.push(newPathname)
  }

  return (
    <>
      <form className="flex gap-2">
        <input
          className=" bg-transparent border-transparent rounded-lg  h-7 text-black placeholder:text-black focus:outline outline-1 hover:border-black border transition-all select" value={form} placeholder="Search for places ..." onChange={(e) => setForm(e.target.value)} type="text" />
        <button onClick={handleClick}><PiMagnifyingGlass className="text-black" size={20} /></button>
      </form>
    </>
  )
}
