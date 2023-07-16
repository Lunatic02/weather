import Card from "@/components/Card";
import Forms from "@/components/Forms";
import LeftCard from "@/components/LeftCard";
import { dataProps } from "@/types";
import getData, { getDatabyIp, getIp } from "@/utils/api";
export default async function Home({ searchParams }: any) {
  const cidade = searchParams.city
  const data: dataProps['data'] = await getData(cidade)
  const ip = await getIp()
  const ipData: dataProps['data'] = await getDatabyIp(ip)

  let Content
  let LeftContent
  if (data) {
    Content = <Card data={data} />
    LeftContent = <LeftCard data={data} />
  } else {
    Content = (
      <div>
        <p className="text-red-500 transition-all">City: {cidade} - Not Found</p>
        <Card data={ipData} />
      </div>
    )
    LeftContent = (
      <LeftCard data={ipData} />
    )
  }
  if (!cidade) {
    Content = <Card data={ipData} />
    LeftContent = (
      <LeftCard data={ipData} />
    )
  }

  return (
    <main className="container h-screen flex justify-center items-center mx-auto">
      <div className="h-fit shadow-2xl md:flex sm:block">
        <div className="bg-gray-50 rounded-l-2xl p-10 mt-48 sm:mt-0">
          <Forms />
          {Content}
        </div>
        <div className="bg-gray-200 rounded-r-2xl p-10">
          {LeftContent}
        </div>
      </div>
    </main>
  )
}
