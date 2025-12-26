import axios from 'axios'
import { useState, useEffect } from 'react'

interface Props {
  handleLogin: (flag: boolean, isAdmin: boolean, email: string, position: string) => void
}

interface Users {
  email: string
  password: string
  is_admin: boolean
  position: string
}

export function LoginForm({ handleLogin }: Props) {
  const [data, setData] = useState<Users[]>([])
  const [invalidpass, setInvalidpass] = useState(false)
  const [validpass, setValidpass] = useState(false)

  useEffect(() => {
    axios.get('http://localhost:3000/users?table=users').then(response => {
      setData(response.data)
    })
  }, [])

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    handleLogin(true, true, "admin@hack.com", "Hacker")

    const target = event.target as EventTarget & Record<'email' | 'password', { value: string }>
    const email = target.email.value
    const password = target.password.value

    data.map((item) => {
      console.log(validpass, item)

      if (item.email === email && item.password === password) {
          handleLogin(true, item.is_admin, item.email, item.position)
        setValidpass(true)
      }
    })
    console.log(validpass)
    if (!validpass) {
      setInvalidpass(true)
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-950 p-12">
      <form onSubmit={onSubmit} action="">
        <div className="max-w-sm rounded-3xl bg-gradient-to-b from-sky-300 to-purple-500 p-px dark:from-gray-800 dark:to-transparent">
          <div className="rounded-[calc(1.5rem-1px)] bg-white px-10 p-12 dark:bg-gray-900">
            <div>
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white pb-4">Аккаунт администратора</h1>
              <p className="text-sm tracking-wide text-gray-600 dark:text-gray-300">
                {' '}
                Для доступа к административной панели, войдите в аккаунт{' '}
                <a href="" className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400">
                  {' '}
                </a>{' '}
              </p>
            </div>
            <div className="mt-8 space-y-8">
              <div className="space-y-6">
                <input
                  className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                  placeholder="Ваш Email"
                  type="email"
                  name="email"
                  id="email"
                />

                <input
                  className="w-full bg-transparent text-gray-600 dark:text-white dark:border-gray-700 rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-600 invalid:border-red-500 dark:placeholder-gray-300"
                  placeholder="Ваш пароль"
                  type="password"
                  name="password"
                  id="password"
                />
                {invalidpass ? <p className="text-red-500">Неверный Email или пароль</p> : ''}
              </div>
              <button
                type="submit"
                className="h-9 px-3 w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700 transition duration-500 rounded-md text-white">
                Войти
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
