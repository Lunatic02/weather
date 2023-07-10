import Card from "@/components/Card";
import Forms from "@/components/Forms"
import { dataProps } from "@/types";
import getData from "@/utils/api";
import { useState } from "react";

export default async function Home({searchParams}) {
  const cidade = searchParams.city
  console.log(cidade)

  const data: dataProps = await getData(cidade)

  return (
    <main>
      <Card data={data}/>
    </main>
  )
}
