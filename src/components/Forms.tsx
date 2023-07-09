'use client'
import { dataProps } from "@/types"
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
      <form >
        <input value={form} onChange={(e) => setForm(e.target.value)} type="text" />
        <button onClick={handleClick}>Enviar</button>
      </form>
      <div>
        <Card location={location} current={current} forecast={forecast} />
      </div>
    </>
  )
}
