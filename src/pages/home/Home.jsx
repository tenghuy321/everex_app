import React from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from '../../components/Navbar'
import bgImage from '../../assets/images/hero.png'
import HomeImage from '../../assets/images/home/image-1.png'
import Image from '../../assets/images/home/image-2.png'

import icon1 from '../../assets/images/home/home-icon/icon-1.png'
import icon2 from '../../assets/images/home/home-icon/icon-2.png'
import icon3 from '../../assets/images/home/home-icon/icon-3.png'
import icon4 from '../../assets/images/home/home-icon/icon-4.png'
import icon5 from '../../assets/images/home/home-icon/icon-5.png'
import icon6 from '../../assets/images/home/home-icon/icon-6.png'
import icon7 from '../../assets/images/home/home-icon/icon-7.png'
import Footer from '../../components/Footer'


const items = [
  {
    title: 'home_service1',
    image: icon1,
  },
  {
    title: 'home_service2',
    image: icon2,
  },
  {
    title: 'home_service3',
    image: icon3
  },
  {
    title: 'home_service4',
    image: icon4,
  },
  {
    title: 'home_service5',
    image: icon5,
  },
  {
    title: 'home_service6',
    image: icon6,
  },
  {
    title: 'home_service7',
    image: icon7,
  },
]

const Home = () => {

  const { t } = useTranslation()

  return (
    <>
      <div className='m-2 sm:m-5 xl:m-10'>
        <div className='w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] relative rounded-[20px]' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Navbar />
          <div className='w-full h-full flex flex-col items-center justify-center text-[#fff]' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200">
            <h1 className='text-[20px] lg:text-[30px] text-[#652D90] font-[700] italic'>{t("home_title")}</h1>
            <h2 className='text-[30px] sm:text-[40px] lg:text-[60px] font-[400] leading-none italic'><span className='font-[700]'>{t("home_title1")}</span> {t("home_title2")}</h2>
            {/* <div className="inline-flex items-center rounded-full bg-white p-1 text-sm font-medium mt-6">
              <button className='px-4 sm:px-8 py-2 sm:py-4 rounded-full transition-all duration-300 text-[#EC1C24]'>
                ចូលគណនី
              </button>
              <button
                className='px-4 sm:px-8 py-2 sm:py-4 rounded-full transition-all duration-300 bg-linear-to-r from-[#EC1C24] to-[#FF3C67] text-white shadow-sm'>
                ចុះឈ្មោះគណនី
              </button>
            </div> */}
          </div>

          <div className='mx-2 sm:mx-4 relative' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-duration="1200">
            <div className='absolute -bottom-[50px] lg:-bottom-[100px] left-1/2 -translate-x-1/2 w-full max-w-7xl p-4 sm:p-10 lg:p-20 rounded-[20px] mx-auto flex items-center justify-between text-[#fff]' style={{ background: "radial-gradient(87.03% 87.03% at 39.58% 60.25%, rgba(255, 60, 103, 0.8) 0%, #EC1C24 100%)" }}>
              <p className='max-w-[700px] mx-auto text-center text-[13px] md:text-[14px] xl:text-[16px]'>
                {t("home_des1")}
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className='w-full max-w-7xl mx-auto mt-[6rem] mb-[2rem] md:mt-[6rem] md:mb-[4rem] px-4 sm:px-10 lg:px-20 xl:px-10 overflow-hidden'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-6' >
          <div className='text-[13px] md:text-[14px] xl:text-[16px]' data-aos="fade-right">
            <p>{t("home_des2")}</p>

            <a href="#"
              className="inline-block mt-4 bg-gradient-to-l from-[#652D90] to-[#9000FF] hover:bg-gradient-to-l hover:from-[#9000FF] hover:to-[#652D90] transition-all duration-300 text-white px-6 lg:px-10 py-2 lg:py-4 rounded-full">
              ចុះឈ្មោះឥឡូវនេះ
            </a>
          </div>

          <div data-aos="fade-left">
            <img src={HomeImage} alt="" />
          </div>
        </div>
      </div>

      <div className='w-full min-h-screen' style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className='w-full max-w-7xl mx-auto px-4 py-10 lg:py-20 text-[13px] md:text-[14px] xl:text-[16px]'>
          <h1 className='text-center max-w-[600px] mx-auto' data-aos="fade-up">{t("home_service_title")}</h1>
          <div className='flex flex-wrap items-stretch justify-center mt-8 sm:mt-16 lg:mt-32 gap-6'>
            {items.map((item, index) => (
              <div key={index} data-aos="fade-up" data-aos-anchor-placement="center-bottom" className='w-[90%] sm:w-[48%] md:w-[30%] lg:w-[23%] h-[120px] lg:h-[160px] mt-10 sm:mt-14 lg:mb-20 p-2 bg-white rounded-lg shadow-md relative'>
                <div className='absolute top-[-25px] md:top-[-50px] left-1/2 -translate-x-1/2'>
                  <img src={item.image} alt="" className='w-14 md:w-20 h-auto' />
                </div>
                <p className='p-6 xl:p-10 text-center'>{t(item.title)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Home