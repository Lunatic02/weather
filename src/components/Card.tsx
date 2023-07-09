import { dataProps } from "@/types";

export default function Card({ location, current, forecast }: dataProps) {
  return (
    <div>
      {location.name}
      {current.temp_c}
    </div>
  )
}
