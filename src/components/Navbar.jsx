import Logo from '../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import '../components/navbar.css' 
const Navbar = () => {

  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='mx-2 relative'>
      <nav className='flex items-center justify-between w-full max-w-7xl mx-auto absolute border border-white top-[20px] z-[50] rounded-full left-1/2 -translate-x-1/2 py-1 xl:py-3 px-4 sm:px-6 bg-linear-to-t from-[#fff] to-[#F5DEFF]/50'>
        <img src={Logo} alt="" className='w-16 md:w-20 h-auto' />
        <ul className='hidden lg:flex items-center justify-center gap-4 text-[16px] font-[500]'>
          <li>
            <NavLink to='/' className={({ isActive }) => `w-full px-6 xl:px-8 py-3 xl:py-4 rounded-full hover:bg-linear-to-r hover:from-[#652D90] hover:to-[#9000FF] hover:text-[#fff] transition-all duration-300 ${isActive ? 'bg-linear-to-r from-[#652D90] to-[#9000FF] text-[#fff]' : 'text-[#652D90]'}`}>{t("home")}</NavLink>
          </li>
          <li>
            <NavLink to='/about-us' className={({ isActive }) => `w-full px-6 xl:px-8 py-3 xl:py-4 rounded-full hover:bg-linear-to-r hover:from-[#652D90] hover:to-[#9000FF] hover:text-[#fff] transition-all duration-300 ${isActive ? 'bg-linear-to-r from-[#652D90] to-[#9000FF] text-[#fff]' : 'text-[#652D90]'}`}>{t("about")}</NavLink>
          </li>
          <li>
            <NavLink to='/service' className={({ isActive }) => `w-full px-6 xl:px-8 py-3 xl:py-4 rounded-full hover:bg-linear-to-r hover:from-[#652D90] hover:to-[#9000FF] hover:text-[#fff] transition-all duration-300 ${isActive ? 'bg-linear-to-r from-[#652D90] to-[#9000FF] text-[#fff]' : 'text-[#652D90]'}`}>{t("service")}</NavLink>
          </li>
          <li>
            <NavLink to='/price' className={({ isActive }) => `w-full px-6 xl:px-8 py-3 xl:py-4 rounded-full hover:bg-linear-to-r hover:from-[#652D90] hover:to-[#9000FF] hover:text-[#fff] transition-all duration-300 ${isActive ? 'bg-linear-to-r from-[#652D90] to-[#9000FF] text-[#fff]' : 'text-[#652D90]'}`}>{t("price")}</NavLink>
          </li>
          <li>
            <NavLink to='/contact' className={({ isActive }) => `w-full px-6 xl:px-8 py-3 xl:py-4 rounded-full hover:bg-linear-to-r hover:from-[#652D90] hover:to-[#9000FF] hover:text-[#fff] transition-all duration-300 ${isActive ? 'bg-linear-to-r from-[#652D90] to-[#9000FF] text-[#fff]' : 'text-[#652D90]'}`}>{t("contact")}</NavLink>
          </li>
        </ul>
        <div className='flex items-center gap-4'>
          <LanguageToggle />
          <div className='lg:hidden flex items-center justify-center'>
            <button className='cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
              {isOpen ?
                (<svg className='w-5 h-5' viewBox="0 0 334 334" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M300.667 300.667L167.333 167.333M167.333 167.333L34 34M167.333 167.333L300.667 34M167.333 167.333L34 300.667" stroke="#EC1C24" strokeWidth="66.6667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                ) :
                (<svg className='w-5 h-5' viewBox="0 0 534 401" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M34 367.333H300.667M34 200.667H500.667M234 34H500.667" stroke="#EC1C24" strokeWidth="66.6667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>)}
            </button>

          </div>

          <div className={`absolute top-[50px] right-0 w-full bg-white/50 backdrop-blur-[50px] rounded-[30px] shadow-lg transition-all duration-500 ease-in-out ${isOpen ? 'max-h-fit opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <ul className='flex flex-col items-center justify-center space-y-2 md:space-y-10 p-4 text-[16px] font-[500] my-2 md:my-10'>
              <li className='w-full h-full'>
                <NavLink to='/' className={({ isActive }) => `block px-4 py-4 rounded-full ${isActive ? 'bg-linear-to-r from-[#652D90] to-[#9000FF] text-[#fff]' : 'text-[#652D90]'}`}>{t("home")}</NavLink>
              </li>
              <li className='w-full h-full'>
                <NavLink to='/about-us' className={({ isActive }) => `block px-4 py-4 rounded-full ${isActive ? 'bg-linear-to-r from-[#652D90] to-[#9000FF] text-[#fff]' : 'text-[#652D90]'}`}>{t("about")}</NavLink>
              </li>
              <li className='w-full h-full'>
                <NavLink to='/service' className={({ isActive }) => `block px-4 py-4 rounded-full ${isActive ? 'bg-linear-to-r from-[#652D90] to-[#9000FF] text-[#fff]' : 'text-[#652D90]'}`}>{t("service")}</NavLink>
              </li>
              <li className='w-full h-full'>
                <NavLink to='/price' className={({ isActive }) => `block px-4 py-4 rounded-full ${isActive ? 'bg-linear-to-r from-[#652D90] to-[#9000FF] text-[#fff]' : 'text-[#652D90]'}`}>{t("price")}</NavLink>
              </li>
              <li className='w-full h-full'>
                <NavLink to='/contact' className={({ isActive }) => `block px-4 py-4 rounded-full ${isActive ? 'bg-linear-to-r from-[#652D90] to-[#9000FF] text-[#fff]' : 'text-[#652D90]'}`}>{t("contact")}</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar