import { useEffect, useState } from 'react'
import PageWrapper from '../page-wrapper'
import axios from 'axios'

interface Shoes {
  id: number
  company: string
}

const Orders = () => {
  const [shoes, setShoes] = useState<Shoes[]>([])

  useEffect(() => {
    const url = 'http://localhost:3000/data?table=suppliers'
    axios.get(url).then(response => {
      setShoes(response.data)
    })
  }, [])

  return (
    <PageWrapper header="Поставщики">
      {window.sessionStorage.getItem('is_admin') === 'true' ? (
        <div className={`${shoes.length ? 'opacity-100 viisble' : 'opacity-0 invisible'} transition-opacity duration-500`}>
          <article className="grid grid-cols-10  px-10 py-5 text-white">
            <div className="underline text-xl">Id</div>
            <div className="underline text-xl col-span-9">Поставщик</div>
          </article>
          {shoes.map(shoe => (
            <article key={shoe.id} className={`grid grid-cols-10 bg-[#333333] px-10 py-5 border mb-3`}>
              <div>{shoe.id}</div>
              <div className="col-span-9">{shoe.company}</div>
            </article>
          ))}
        </div>
      ) : (
        <article className="px-10 py-5 text-white">
          <div className=" text-xl">У вас нет доступа к этим данным: необходим аккаунт администратора</div>
        </article>
      )}
    </PageWrapper>
  )
}

export default Orders
