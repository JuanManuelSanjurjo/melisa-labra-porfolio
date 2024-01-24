"use client"
import Link from "next/link"
import { usePathname } from 'next/navigation'


function SubNav({ navLinks}) {
  const pathname = usePathname()

  return (
    <nav className='navFadeIn hidden md:flex justify-center items-center gap-8 bg-rose-50 h-[5vh] px-10 font-semibold lowercase tracking-widest w-full rounded-b-xl shadow-sm'>

    <div className='flex w-full justify-start'>
        <ul className='flex flex-col md:flex-row  gap-6 w-full justify-start font-thin text-sm '>
          {
            navLinks.map((tab,i) => (
              <div key={i} className='relative group'>
                <Link className='hover:text-rose-500 transition-all' href={tab.href}>
                  <span className={pathname == tab.href ? "text-rose-500": ""}>
                    {tab.name}
                  </span>
                </Link>
                <div className="absolute inset-x-0 bottom-0 h-[2px] bg-red-600 transform scale-x-0 origin-left transition-all duration-300 ease-out group-hover:scale-x-100 "></div>
              </div>
            ))
          }
        </ul>
    </div>

</nav>
  )
}

export default SubNav
