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
    uvContent = <div className="text-center text-purple-500">{data.current.uv} <p>Extreme</p> </div>
  }

  let humidty = data.current.humidity
  let humidtyContent
  if(humidty>=70||humidty<25){
    humidtyContent = <div className="text-center text-red-500">{humidty}<p>Poor</p></div>
  }
  else{
    humidtyContent = <div className="text-center text-green-500">{humidty}<p>Normal</p></div>
  }
  let visibility = data.current.vis_km
  let visibilityContent
  if(visibility >= 10){
    visibilityContent = <div className="text-center text-green-500">{visibility}km<p>Clear</p></div>
  }else if(visibility >= 5){
    visibilityContent = <div className="text-center text-yellow-500">{visibility}km<p>Moderate</p></div>
  }
  else if(visibility >= 2){
    visibilityContent = <div className="text-center text-orange-500">{visibility}km<p>Hazy</p></div>
  }
  else if(visibility >= 0.5){
    visibilityContent = <div className="text-center text-red-500">{visibility}km<p>Very Hazy</p></div>
  }
  let airQuality = data.current.air_quality["gb-defra-index"]
  let airQualityContent
  if(airQuality<=3){
    airQualityContent = <div className="text-center text-green-500">{airQuality}<p>Low</p></div>
  }else if(airQuality<=6){
    airQualityContent = <div className="text-center text-yellow-500">{airQuality}<p>Moderate</p></div>
  }else if(airQuality<=9){
    airQualityContent = <div className="text-center text-red-500">{airQuality}<p>High</p></div>
  }else{
    airQualityContent = <div className="text-center text-purple-500">{airQuality}<p>Very High</p></div>

  }

  return (
    <main className="md:px-0">
      <h1 className="font-bold flex justify-center md:block">
        Today{`'`}s Forecast
      </h1>
      <section className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 ">
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
      <h1 className="font-bold my-3 flex justify-center md:block">Today{`'`}s Highlights</h1>
      <section className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex gap-10 flex-wrap justify-center">
        <div className="bg-gray-50 md:w-40 w-32 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            UV index
          </h1>
          <div className="flex justify-center h-full text-xl font-bold">
            {uvContent}
          </div>
        </div>
        <div className="bg-gray-50 md:w-40 w-32 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            Wind Status
          </h1>
          <div className="m-auto text-center h-full text-xl font-bold">
            <div>{data.current.wind_kph}</div>
            <div>
              {data.current.wind_dir}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 md:w-40 w-32 h-28 rounded-xl p-3">
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
        <div className="bg-gray-50 md:w-40 w-32 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            Humidity
          </h1>
          <div className="flex justify-center h-full text-xl font-bold">
            {humidtyContent}
          </div>
        </div>
        <div className="bg-gray-50 md:w-40 w-32 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            Visibility
          </h1>
          <div className="flex justify-center h-full text-xl font-bold">
            {visibilityContent}
          </div>
        </div>
        <div className="bg-gray-50 md:w-40 w-32 h-28 rounded-xl p-3">
          <h1 className="text-gray-300">
            Air Polution
          </h1>
          <div className="flex justify-center h-full text-xl font-bold">
            {airQualityContent}
          </div>
        </div>
      </section>
    </main>
  )
}
