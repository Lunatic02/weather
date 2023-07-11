import axios from "axios";

export default async function getData(city: string) {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=efdb7a1b6ed34f2e872131926230907&lang=pt&q=${city}`)
  const result = await response.json()

  return result
}

export const getDatabyIp = async (ip: string) => {
  const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=efdb7a1b6ed34f2e872131926230907&lang=pt&q=${ip}`)
  const result = await response.json()

  return result
}
export const getIp = async () => {
  const res = await axios.get("https://api.ipify.org/?format=json");
  return res.data.ip
};