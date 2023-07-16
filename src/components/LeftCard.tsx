import { dataProps } from "@/types";
import Image from "next/image";

export default function LeftCard({ data }: dataProps) {
  const uvIndex: number = data.current.uv;
  let uvContent
  if (uvIndex <= 2) {
    uvContent = <p className="text-center text-green-500">{data.current.uv} <p>Low</p> </p>
  }
  else if (uvIndex <= 5) {
    uvContent = <p className="text-center text-yellow-500">{data.current.uv} <p>Moderate</p> </p>
  }
  else if (uvIndex <= 7) {
    uvContent = <p className="text-center text-orange-500">{data.current.uv} <p>High</p> </p>
  }
  else if (uvIndex <= 10) {
    uvContent = <p className="text-center text-red-500">{data.current.uv} <p>Very High</p> </p>
  }
  else {
    uvContent = <p className="text-center text-orange-500">{data.current.uv} <p>High</p> </p>
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
      <section className="flex gap-5 flex-wrap">
        <div className="bg-gray-50 w-36 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            UV index
          </h1>
          <p className="flex justify-center h-full text-xl font-bold">
            {uvContent}
          </p>
        </div><div className="bg-gray-50 w-36 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            UV index
          </h1>
          <p className="flex justify-center h-full text-xl font-bold">
            {uvContent}
          </p>
        </div><div className="bg-gray-50 w-36 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            UV index
          </h1>
          <p className="flex justify-center h-full text-xl font-bold">
            {uvContent}
          </p>
        </div>

      </section>
    </main>
  )
}
