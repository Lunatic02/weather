import { dataProps } from "@/types";
import { getHours, getWeekDay } from "@/utils/api";
import { BsFillCloudLightningRainFill } from 'react-icons/bs'
import Image from 'next/image'

export default async function Card({ data }: dataProps) {

  const nomeDiaDaSemana = await getWeekDay(data.location.localtime)
  const horas = await getHours(data.location.localtime)

  return (
    <div className="my-10">
      <div className="flex">
        <p className="text-7xl font-light">{data.current.temp_c.toFixed()}</p>
        <p className="text-3xl">°C</p>
      </div>
      <div className="">
      </div>
      <div className="my-4 text-xl flex gap-2">
        {nomeDiaDaSemana},
        <div className="text-gray-300">
          {horas}
        </div>

      </div>
      <div className="bg-gray-400 my-5">
        <hr />
      </div>

      <div className="my-2">
        <div>
          {data.current.condition.text}
        </div>
        <div className="flex gap-2">
          <div>
            H:{data.forecast.forecastday[0].day.maxtemp_c.toFixed()}°
          </div>
          <div>
            L:{data.forecast.forecastday[0].day.mintemp_c.toFixed()}°
          </div>
        </div>
        <p className="text-3xl">{`${data.location.name}`}</p>
      </div>
    </div >
  )
}
