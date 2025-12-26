import { useEffect, useState } from 'react'
import PageWrapper from '../page-wrapper'
import axios from 'axios'

interface Shoes {
  id: number
  shoes_name: string
  shoes_color: string
  shoes_size: number
}

const Orders = () => {
  const [shoes, setShoes] = useState<Shoes[]>([])

  useEffect(() => {
    const url = 'http://localhost:3000/data?table=shoes'
    axios.get(url).then(response => {
      setShoes(response.data)
    })
  }, [])

  return (
    <PageWrapper header="Модели обуви">
      <div className={`${shoes.length ? 'opacity-100 viisble' : 'opacity-0 invisible'} transition-opacity duration-500`}>
        <article className="grid grid-cols-4 px-10 py-5 text-white text-center">
          <div className="underline text-xl">Id</div>
          <div className="underline text-xl">Модель обуви</div>
          <div className="underline text-xl">Цвет обуви</div>
          <div className="underline text-xl">Размер обуви</div>
        </article>
        {shoes.map(shoe => (
          <article key={shoe.id} className={`grid grid-cols-4 bg-[#333333] px-10 py-5 border mb-3 text-center`}>
            <div>{shoe.id}</div>
            <div>{shoe.shoes_name}</div>
            <div>{shoe.shoes_color}</div>
            <div>{shoe.shoes_size}</div>
          </article>
        ))}
      </div>
    </PageWrapper>
  )
}

export default Orders
