import axios from 'axios'
import { useEffect, useState } from 'react'

interface Shoes {
  id: number
  shoes_name: string
}

interface Seller {
  id: number
  middle_name: string
  name: string
  phone_number: string
  surname: string
}

export default function ProductForm() {
  const [pressed, setpressed] = useState(false)
  const [shoes, setShoes] = useState<Shoes[]>([])
  const [sellers, setSellers] = useState<Seller[]>([])

  useEffect(() => {
    const sellers = axios.get('http://localhost:3000/sellers')
    const shoes = axios.get('http://localhost:3000/shoes')

    Promise.all([sellers, shoes]).then(values => {
      const [sellers, shoes] = values
      setShoes(shoes.data)
      setSellers(sellers.data)
    })
  }, [])

  const onSubmit = (event: React.FormEvent) => {
    setpressed(true)
    event.preventDefault()

    const target = event.target as EventTarget & Record<'shoes_name' | 'seller' | 'shoes_count' | 'shoes_price', { value: string }>

    console.log(target.shoes_name.value)

    axios
      .post('http://localhost:3000/shoes_sales', {
        shoes_id: Number(target.shoes_name.value),
        quantity: Number(target.shoes_count.value),
        price: Number(target.shoes_price.value),
        seller_id: Number(target.seller.value),
      })
      .then(() => {
        target.shoes_name.value = 'dis'
        target.shoes_count.value = ''
        target.shoes_price.value = ''
        target.seller.value = 'dis'
        console.log('post success')
      })
  }

  // shoes_name, count, price, seller
  return (
    <div className="bg-gray-100 dark:bg-gray-800 transition-colors duration-300 min-h-full">
      <div className="mx-auto">
        <div className="bg-white dark:bg-gray-900 shadow p-6 border-b h-screen flex justify-center items-center">
          <div className="w-full">
            <h1 className="text-center text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Добавление заказа</h1>
            <p className="text-center text-gray-600 dark:text-gray-300 mb-6">Укажите информацию о заказе</p>
            <form onSubmit={onSubmit} className="w-1/3 mx-auto">
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Продавец</label>
                <select name="seller" defaultValue="dis" className="shadow appearance-none border rounded w-full py-2 px-3">
                  <option disabled value="dis">
                    Выберите Продавца
                  </option>
                  {sellers.map(seller => (
                    <option key={seller.id} value={seller.id}>
                      {`${seller.name} ${seller.surname} ${seller.middle_name}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex w-full justify-between">
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="shoes_count">
                    Количество
                  </label>
                  <input name="shoes_count" className="px-3 py-2 rounded w-full" id="shoes_count" type="number" placeholder="0" />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-2" htmlFor="shoes_price">
                    Цена
                  </label>
                  <input name="shoes_price" className="px-3 py-2 rounded w-full" id="shoes_price" type="number" placeholder="0" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold mb-2">Модель обуви</label>
                <select name="shoes_name" defaultValue="dis" className="shadow appearance-none border rounded w-full py-2 px-3">
                  <option disabled value="dis">
                    Выберите модель
                  </option>
                  {shoes.map(shoe => (
                    <option key={shoe.id} value={shoe.id}>
                      {shoe.shoes_name}
                    </option>
                  ))}
                </select>
              </div>
              {pressed ? <p className="text-green-500">Заказ успешно добавлен</p> : ''}
              <button type="submit" className="btn btn-neutral mt-5">
                {' '}
                Добавить{' '}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
