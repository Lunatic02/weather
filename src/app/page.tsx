import Card from "@/components/Card";
import Forms from "@/components/Forms"
import { dataProps } from "@/types";
import getData from "@/utils/api";
import { useState } from "react";

export default async function Home({ searchParams }) {
  const cidade = searchParams.city
  console.log(cidade)

  const data: dataProps = await getData(cidade)
  console.log(data)

  if (!cidade) {
    return (
      <h1>Insira sua cidade</h1>
    )
  } else {
    return (
      <Card data={data} />
    )
  }
}