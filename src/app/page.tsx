import Card from "@/components/Card";
import Forms from "@/components/Forms";
import { dataProps } from "@/types";
import getData, { getDatabyIp, getIp } from "@/utils/api";
export default async function Home({ searchParams }) {
  const cidade = searchParams.city
  const data: dataProps = await getData(cidade)
  const ip = await getIp()
  const ipData: dataProps['data'] = await getDatabyIp(ip)

  let Content
  if (data) {
    Content = <Card data={data} />
  }else{
    Content= (
      <div>
        <p className="text-red-500 transition-all">City: {cidade} - Not Found</p>
        <Card data={ipData} />
      </div>
    )
  }
  if(!cidade){
    Content = <Card data={ipData} />
  }

  return (
    <main className="container h-screen flex justify-center items-center">
      <div className="h-fit flex shadow-2xl">
        <div className="bg-gray-50 rounded-l-2xl p-10">
          <Forms />
          {Content}
        </div>
        <div className="bg-gray-200 p-4">
        </div>
      </div>
    </main>
  )
}
