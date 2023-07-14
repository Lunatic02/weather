import { dataProps } from "@/types";
import Image from "next/image";

export default function LeftCard({data}: dataProps) {
  return (
    <main >
      <div className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      <div className="flex items-end gap-5 items-start mb-3">
        {data.forecast.forecastday[0].hour.map((hourData:any, index :number) => {
          return (
            <div key={index} className="flex flex-col text-center w-full bg-gray-50 p-3 rounded-lg shadow">
              <h1 className="text-lg">{index}:00</h1>
              <Image src={`https://${hourData.condition.icon}`} height={300} width={300} alt=""/>
              <p>{hourData.temp_c.toFixed()}°C</p>
            </div>
          );
        })}
      </div>
      </div>
      <div>
        <div></div>
      </div>
    </main>
  )
}
