import { Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './nav'

interface Props {
  handleLogin: (flag: boolean, isAdmin: boolean, email: string, position: string) => void
}

export function AdminPanel({ handleLogin }: Props) {
  const location = useLocation()

  useEffect(() => {}, [location])

  return (
    <>
      <div className="flex">
        <div className="ml-[-100%] z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-slate-800 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
          <div>
            <div className="-mx-6 px-6 py-4">
              <a href="#" title="home">
                <img src="https://lk-cpr.bmstu.ru/static/logo/main.webp" className="w-40 block mx-auto" alt="bmstu logo" />
              </a>
            </div>
            <div className="mt-8 text-center">
              <img
                src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars.png"
                alt=""
                className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"
              />
              <h5 className="hidden mt-4 text-xl font-semibold text-white-600 lg:block">{window.sessionStorage.getItem('email')}</h5>
              <span className="hidden text-white-400 lg:block">{window.sessionStorage.getItem('is_admin') === 'true' ? 'Админ' : window.sessionStorage.getItem('position')}</span>
            </div>
            <Nav path={location.pathname} />
          </div>
          <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
            <button onClick={() => handleLogin(false, false, '', '')} className="px-4 py-3 flex items-center space-x-4 rounded-md text-white-600 group">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="group-hover:text-white-700">Выйти</span>
            </button>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  )
}
