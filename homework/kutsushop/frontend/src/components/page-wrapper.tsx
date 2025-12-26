interface Props {
  header: string
  children: React.ReactNode
  buttons?: React.ReactNode
}

const PageWrapper = ({ header, children, buttons }: Props) => {
  return (
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className=" bg-slate-800 z-10 top-0 h-16 border-b lg:py-2.5">
        <div className="px-6 flex items-center justify-between">
          <div className="flex items-center gap-x-8">
            <h4 hidden className="text-xl text-white font-medium lg:block">
              {header}
            </h4>
            {buttons ?? <></>}
          </div>
          <button className="w-12 h-16 -mr-2 border-r lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className="">{children}</div>
    </div>
  )
}

export default PageWrapper
