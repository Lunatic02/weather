import { dataProps } from "@/types";

export default function Card({ location, current, forecast }: dataProps) {
  return (
    <div>
      {location.name}
      {location.region}
      {location.country}
      {current.temp_c}
    </div>
  )
}
