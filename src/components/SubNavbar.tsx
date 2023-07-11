import Image from 'next/image'
import { dataProps } from '@/types'
import getData, { getDatabyIp, getIp } from '@/utils/api'
import { data } from 'autoprefixer'
import React, { useEffect } from 'react'

export default async function SubNavbar() {


  const ip = await getIp()
  console.log(ip)

  const data: dataProps['data'] = await getDatabyIp(ip)

  return (
    <header className='bg-slate-800 text-white'>
      <div className='container m-auto flex justify-end items-center gap-2'>
        <p>
          <Image src={`https://${data.current.condition.icon}`} height={30} width={30} alt={data.current.condition.text} />
        </p>
        <p>{data.location.name} / {data.location.country}</p>
        <p>-</p>
        <p>{data.current.temp_c}°C</p>

      </div>
    </header>
  )
}
