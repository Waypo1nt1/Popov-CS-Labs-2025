import { useEffect, useState } from 'react'
import PageWrapper from '../page-wrapper'
import axios from 'axios'

interface Shoes {
  id: number
  shoes_id: number
  shoes_sale_amount: number
  proceed: number
  seller_id: number
  date_created: string
}

const ButtonExcel = () =>
  window.sessionStorage.getItem('is_admin') === 'true' ? (
    <a className="h-8" target="_blank" href="http://localhost:3000/excel">
      <button className="w-8 h-8 bg-blue-500 items-center justify-center rounded-full border border-white">
        <svg
          className="block mx-auto my-auto"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          fill="#ffffff"
          version="1.1"
          id="Layer_1"
          viewBox="-120 -100 750 750"
          xmlSpace="preserve">
          <g>
            <g>
              <g>
                <rect x="170.667" y="234.667" width="64" height="64" />
                <rect x="277.333" y="341.333" width="64" height="64" />
                <rect x="170.667" y="341.333" width="64" height="64" />
                <rect x="170.667" y="149.333" width="170.667" height="42.667" />
                <rect x="277.333" y="234.667" width="64" height="64" />
                <path d="M348.821,0H42.667v512h426.667V96.427L348.821,0z M384,192v42.667V448H128V234.667V192v-85.333h256V192z" />
              </g>
            </g>
          </g>
        </svg>
      </button>
    </a>
  ) : (
    <></>
  )

const ButtonAdd = () => (
  <a target="_blank" href="http://localhost:5173/form">
    <button className="w-8 h-8 bg-blue-500 items-center justify-center rounded-full border border-white">
      <svg className="mx-auto my-auto" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12H20M12 4V20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  </a>
)

const Orders = () => {
  const [shoes, setShoes] = useState<Shoes[]>([])

  useEffect(() => {
    const url = 'http://localhost:3000/data?table=sale_of_shoes'
    axios.get(url).then(response => {
      setShoes(response.data)
    })
  }, [])

  return (
    <PageWrapper
      header="Заказы"
      buttons={
        <>
          <ButtonExcel />
          <ButtonAdd />
        </>
      }>
      <>
        {window.sessionStorage.getItem('is_admin') === 'true' ? (
          <div className={`${shoes.length ? 'opacity-100 viisble' : 'opacity-0 invisible'} transition-opacity duration-500`}>
            <article className="grid grid-cols-6  px-10 py-5 text-white text-center">
              <div className="underline text-xl">Id</div>
              <div className="underline text-xl">Id модели обуви</div>
              <div className="underline text-xl">Общая сумма</div>
              <div className="underline text-xl">Id продавца</div>
              <div className="underline text-xl">Количество</div>
              <div className="underline text-xl">Дата создания</div>
            </article>
            {shoes.map(shoe => (
              <article key={shoe.id} className={`grid grid-cols-6 bg-[#333333] px-10 py-5 border mb-3 text-center`}>
                <div>{shoe.id}</div>
                <div>{shoe.shoes_id}</div>
                <div>{shoe.proceed}</div>
                <div>{shoe.seller_id}</div>
                <div>{shoe.shoes_sale_amount}</div>
                <div>
                  {shoe.date_created.split(/[-T]/)[0] + '.'}
                  {shoe.date_created.split(/[-T]/)[1] + '.'}
                  {shoe.date_created.split(/[-T]/)[2] + ' '}
                  {shoe.date_created.split(/[-T.]/)[3] + ''}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <article className="px-10 py-5 text-white">
            <div className=" text-xl">У вас нет доступа к этим данным: необходим аккаунт администратора</div>
          </article>
        )}
      </>
    </PageWrapper>
  )
}

export default Orders
