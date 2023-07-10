import { dataProps } from "@/types";

export default function Card({data}: dataProps) {
  return (
    <div>
      {data.location.name}
      {data.location.region}
      {data.location.country}
      {data.current.temp_c}
    </div>
  )
}
