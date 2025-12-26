import { Link } from 'react-router-dom'

interface Props {
  path: string
}

const Nav = ({ path }: Props) => {
  return (
    <ul className="space-y-2 my-4">
      <Link to={`viewdata/shoes`}>
        <li>
          <div
            className={`${
              path.endsWith('viewdata/shoes') ? 'bg-sky-400 text-white' : ''
            } relative px-4 py-3 flex items-center space-x-4 rounded-xl `}>
            <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                className="fill-current text-cyan-400 dark:fill-slate-600"
              />
              <path
                d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                className="fill-current text-cyan-200 group-hover:text-cyan-300"
              />
              <path d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z" className="fill-current group-hover:text-sky-300" />
            </svg>
            <span className="-mr-1 font-medium">Модели обуви</span>
          </div>
        </li>
      </Link>
      <Link to={`viewdata/supplies`}>
        <li>
          <div
            className={`${path.endsWith('viewdata/supplies') ? 'bg-sky-400 text-white' : ''} px-4 py-3 flex items-center space-x-4 rounded-md group`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                className="fill-current text-white-300 group-hover:text-cyan-300"
                fillRule="evenodd"
                d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                clipRule="evenodd"
              />
              <path
                className="fill-current text-white-600 group-hover:text-cyan-600"
                d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
              />
            </svg>
            <span className="group-hover:text-white-700">Поставки</span>
          </div>
        </li>
      </Link>
      <Link to={`viewdata/orders`}>
        <li>
          <div
            className={`${
              path.endsWith('viewdata/orders') ? 'bg-sky-400 text-white' : ''
            } px-4 py-3 flex items-center space-x-4 rounded-md text-white-600 group`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                className="fill-current text-white-600 group-hover:text-cyan-600"
                fillRule="evenodd"
                d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                clipRule="evenodd"
              />
              <path className="fill-current text-white-300 group-hover:text-cyan-300" d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
            </svg>

            <span className="group-hover:text-white-700">Заказы</span>
          </div>
        </li>
      </Link>
      <Link to={`viewdata/suppliers`}>
        <li>
          <div
            className={`${
              path.endsWith('viewdata/suppliers') ? 'bg-sky-400 text-white' : ''
            } px-4 py-3 flex items-center space-x-4 rounded-md text-white-600 group`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path className="fill-current text-white-600 group-hover:text-cyan-600" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
              <path className="fill-current text-white-300 group-hover:text-cyan-300" d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
            </svg>
            <span className="group-hover:text-white-700">Поставщики</span>
          </div>
        </li>
      </Link>
      <Link to={`viewdata/sellers`}>
        <li>
          <div
            className={`${
              path.endsWith('viewdata/sellers') ? 'bg-sky-400 text-white' : ''
            } px-4 py-3 flex items-center space-x-4 rounded-md text-white-600 group`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path className="fill-current text-white-300 group-hover:text-cyan-300" d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
              <path
                className="fill-current text-white-600 group-hover:text-cyan-600"
                fillRule="evenodd"
                d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="group-hover:text-white-700">Продавцы</span>
          </div>
        </li>
      </Link>
    </ul>
  )
}

export default Nav
