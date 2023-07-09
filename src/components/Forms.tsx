'use client'
import { dataProps } from "@/types"
import { PiMagnifyingGlass } from 'react-icons/pi'
import getData from "@/utils/api"
import { useState } from "react"
import Card from "./Card"

export default function Forms() {
  const [form, setForm] = useState('')
  const [location, setLocation] = useState<any>([]);
  const [current, setCurrent] = useState<any>([])
  const [forecast, setForecast] = useState<any>([])

  const dataFunction = async (parametro: string) => {
    const data: dataProps = await getData(parametro)
    setLocation(data.location)
    setCurrent(data.current)
    setForecast(data.forecast)
    return data;
  }

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    dataFunction(form)
  }

  return (
    <>
      <form className="flex gap-2">
        <input className="bg-transparent border-white border rounded-lg h-7 text-white" value={form} onChange={(e) => setForm(e.target.value)} type="text" />
        <button onClick={handleClick}><PiMagnifyingGlass className="text-white" size={20} /></button>
      </form>
      <div>
        {/* <Card location={location} current={current} forecast={forecast} /> */}
      </div>
    </>
  )
}
