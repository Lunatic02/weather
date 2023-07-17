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
    <main className="container mx-auto px-4 md:px-8 md:flex items-center justify-center min-h-screen">
      <div className="md:flex bg-gray-50 rounded-xl shadow-2xl">
        <div className="bg-gray-50 md:flex-1 p-6 md:rounded-l-2xl">
          <Forms />
          {Content}
        </div>

        <div className="bg-gray-200 p-6 md:rounded-r-2xl">
          {LeftContent}
        </div>
      </div>
    </main>
  )
}
