import { dataProps } from "@/types";
import Image from "next/image";

export default function LeftCard({ data }: dataProps) {
  const uvIndex: number = data.current.uv;
  let uvContent
  if (uvIndex <= 2) {
    uvContent = <div className="text-center text-green-500">{data.current.uv} <p>Low</p> </div>
  }
  else if (uvIndex <= 5) {
    uvContent = <div className="text-center text-yellow-500">{data.current.uv} <p>Moderate</p> </div>
  }
  else if (uvIndex <= 7) {
    uvContent = <div className="text-center text-orange-500">{data.current.uv} <p>High</p> </div>
  }
  else if (uvIndex <= 10) {
    uvContent = <div className="text-center text-red-500">{data.current.uv} <p>Very High</p> </div>
  }
  else {
    uvContent = <div className="text-center text-orange-500">{data.current.uv} <p>High</p> </div>
  }

  return (
    <main>
      <h1 className="font-bold">
        Today{`'`}s Forecast
      </h1>
      <section className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ">
        <div className="flex  items-end gap-2  mb-3">
          {data.forecast.forecastday[0].hour.map((hourData: any, index: number) => {
            return (
              <div key={index} className="flex flex-col text-center w-full bg-gray-50 p-3 rounded-lg shadow">
                <h1 className="text-lg">{index}:00</h1>
                <Image src={`https://${hourData.condition.icon}`} height={300} width={300} alt="" />
                <p>{hourData.temp_c.toFixed()}°C</p>
              </div>
            );
          })}
        </div>
      </section>
      <h1 className="font-bold mt-3">Today{`'`}s Highlights</h1>
      <section className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex gap-10 flex-wrap">
        <div className="bg-gray-50 w-40 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            UV index
          </h1>
          <div className="flex justify-center h-full text-xl font-bold">
            {uvContent}
          </div>
        </div>
        <div className="bg-gray-50 w-40 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            Wind Status
          </h1>
          <div className="m-auto text-center h-full text-xl font-bold">
            <p>{data.current.wind_kph}</p>
            <p>
              {data.current.wind_dir}
            </p>
          </div>
        </div>
        <div className="bg-gray-50 w-40 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            Sunrise & Sunset
          </h1>
          <div className="m-auto text-center  h-full text-md font-bold">
            <div>
              {data.forecast.forecastday[0].astro.sunrise}
            </div>
            <div>
              {data.forecast.forecastday[0].astro.sunset}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 w-40 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            UV index
          </h1>
          <div className="flex justify-center h-full text-xl font-bold">
            {uvContent}
          </div>
        </div>
        <div className="bg-gray-50 w-40 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            UV index
          </h1>
          <div className="flex justify-center h-full text-xl font-bold">
            {uvContent}
          </div>
        </div>
        <div className="bg-gray-50 w-40 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            UV index
          </h1>
          <div className="flex justify-center h-full text-xl font-bold">
            {uvContent}
          </div>
        </div>
      </section>
    </main>
  )
}
