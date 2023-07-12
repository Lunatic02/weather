import Card from "@/components/Card";
import Forms from "@/components/Forms";
import { dataProps } from "@/types";
import getData, { getDatabyIp, getIp } from "@/utils/api";
import { data } from "autoprefixer";

export default async function Home({ searchParams }) {
  const cidade = searchParams.city
  const data: dataProps = await getData(cidade)
  const ip = await getIp()
  const ipData: dataProps['data'] = await getDatabyIp(ip)

  let Content
  if (cidade) {
    Content = <Card data={data} />
  } else {
    Content = <Card data={ipData} />
  }

  return (
    <main className="container h-screen flex justify-center items-center">
      <div className="h-fit flex">
        <div className="bg-gray-50 rounded-l-2xl p-4">
          <Forms />
          {Content}
        </div>
        <div className="bg-gray-200 p-4">
        </div>
      </div>
    </main>
  )
}
