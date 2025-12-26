import { useEffect, useState } from 'react'
import PageWrapper from '../page-wrapper'
import axios from 'axios'

interface Shoes {
  id: number
  surname: string
  name: string
  middle_name: string
  phone_number: string
  position: string
}

interface Users {
  id: number
  email: string
  password: string
  is_admin: boolean
  position: string
}

const Button = () =>
  window.sessionStorage.getItem('is_admin') === 'true' ? (
    <a target="_blank" href="http://localhost:5173/adminform">
      <button className="w-8 h-8 bg-blue-500 items-center justify-center rounded-full border border-white">
        <svg className="mx-auto my-auto" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 12H20M12 4V20" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </a>
  ) : (
    ''
  )

  const setId = (id: any, name: any, surname: any, middle_name: any, phone_number: any, position: any, uid: any) => {
    window.open("http://localhost:5173/editform?id=" + String(id) + "&name=" + String(name) + "&surname=" + String(surname) + "&middlename=" + String(middle_name) + "&phone_number=" + String(phone_number) + "&position=" + String(position) + "&uid=" + String(uid), '_blank')
  }
  const ButtonEdit = (props: any) => (
    <a>
      <button onClick={() => setId(props.id, props.name, props.surname, props.middle_name, props.phone_number, props.position, props.uid)} className="w-8 h-8 bg-blue-500 items-center justify-center rounded-full border border-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="31px" height="20px" viewBox="0 0 24 24" fill="none">
          <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </a>
  )

const Orders = () => {
  const [shoes, setShoes] = useState<Shoes[]>([])
  const [users, setUsers] = useState<Users[]>([])

  useEffect(() => {
    const url_fetch_sellers = 'http://localhost:3000/data?table=sellers'

    const url_fetch_users = 'http://localhost:3000/users?table=users'

    Promise.all([axios.get(url_fetch_sellers), axios.get(url_fetch_users)]).then(responses => {
      const [sellersResponse, usersResponse] = responses
      setShoes(sellersResponse.data)
      setUsers(usersResponse.data)
    })
  }, [])
  return (
    <PageWrapper
      header="Продавцы"
      buttons={
        <>
          <Button />
        </>
      }>
      {window.sessionStorage.getItem('is_admin') === 'true' ? (
        <div className={`${shoes.length ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-opacity duration-500`}>
          <article className="grid grid-cols-6  px-10 py-5 text-white text-center">
            <div className="underline text-xl">Id продавца</div>
            <div className="underline text-xl">Имя</div>
            <div className="underline text-xl">Фамилия</div>
            <div className="underline text-xl">Отчество</div>
            <div className="underline text-xl">Номер телефона</div>
            <div className="underline text-xl">Должность</div>
          </article>
          {shoes.map((shoe, i) => (
            <article key={shoe.id} className={`grid grid-cols-6 bg-[#333333] px-10 py-5 border mb-3 text-center`}>
              <div className="items-center flex justify-center gap-4"><ButtonEdit id={shoe.id} name={shoe.name} surname={shoe.surname} middle_name={shoe.middle_name} phone_number={shoe.phone_number} position={users[i].position} uid={users[i].id}></ButtonEdit>{shoe.id}</div>
              <div>{shoe.name}</div>
              <div>{shoe.surname}</div>
              <div>{shoe.middle_name}</div>
              <div>{shoe.phone_number}</div>
              <div>{users[i].position}</div>
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
