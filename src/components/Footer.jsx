import React from 'react'
import LogoWhite from '../assets/images/logo-white.png'
import { useTranslation } from 'react-i18next'
import '../components/footer.css'
const Footer = () => {

    const { t } = useTranslation()

    return (
        <div className='w-full'>
            <div className='w-full bg-gradient-to-r from-[#652D90] to-[#9000FF]'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-5 gap-4 text-white text-[13px] md:text-[14px] xl:text-[16px] py-10 md:py-20'>
                    <div className='flex flex-col gap-4'>
                        <img src={LogoWhite} alt="" className='w-32 h-auto' />
                        <p>អេវើរេក អិចប្រេស យើងខ្ញុំជាក្រុមហ៊ុនសេវាកម្មដឹកជញ្ជូន លឿន និងសុវត្ថិភាព ដើម្បីជំរុញការរីកចម្រើនអាជីវកម្មរបស់អ្នក! ជាមួយនិងជម្រើសដឹកជញ្ជូនទំនិញដ៏ឆ្លាតវៃសម្រាប់ម្ចាស់អាជីវកម្មនៅរាជធានីភ្នំពេញ ដឹកជញ្ជូនជាមួយ អេវើរេក អិចប្រេស</p>
                    </div>

                    <ul className="w-full flex flex-col items-start sm:items-center gap-4 font-[500]">
                        <li className="w-full max-w-1/2">
                            <a href="/" className="text-left nav_link">
                                {t("home")}
                            </a>
                        </li>
                        <li className="w-full max-w-1/2">
                            <a href="/about-us" className="text-left nav_link">
                                {t("about")}
                            </a>
                        </li>
                        <li className="w-full max-w-1/2">
                            <a href="/service" className="text-left nav_link">
                                {t("service")}
                            </a>
                        </li>
                        <li className="w-full max-w-1/2">
                            <a href="/professional" className="text-left nav_link">
                                {t("price")}
                            </a>
                        </li>
                        <li className="w-full max-w-1/2">
                            <a href="/contact" className="text-left nav_link">
                                {t("contact")}
                            </a>
                        </li>
                    </ul>

                    <div className='flex flex-col gap-4 md:gap-6'>
                        <h1 className='font-[600]'>011 900 618</h1>
                        <div>
                            <h2 className='font-[600]'>{t("footer_title1")}</h2>
                            <p>{t("footer_des1")}</p>
                        </div>
                        <div>
                            <h2 className='font-[600]'>{t("footer_title2")}</h2>
                            <p>{t("footer_des2")}</p>
                        </div>
                    </div>

                </div>
            </div>

            <p className='bg-[#fff] py-4 text-center text-[14px] lg:text-[16px]'>រក្សារសិទ្ធគ្រប់យ៉ាងដោយ © 2025 </p>
        </div>
    )
}

export default Footer