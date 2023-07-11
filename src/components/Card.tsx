import { dataProps } from "@/types";

export default function Card({ data }: dataProps) {
  return (
    <div>
      {data.location.name}
    </div>
  )
}
