import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import bgImage from '../../assets/images/hero.png'
import Image from '../../assets/images/home/image-2.png'
import WhyImage from '../../assets/images/about/image-1.png'

import icon1 from '../../assets/images/about-icon/icon-1.png'
import icon2 from '../../assets/images/about-icon/icon-2.png'
import icon3 from '../../assets/images/about-icon/icon-3.png'
import icon4 from '../../assets/images/about-icon/icon-4.png'
import icon5 from '../../assets/images/about-icon/icon-5.png'
import icon6 from '../../assets/images/about-icon/icon-6.png'
import icon7 from '../../assets/images/about-icon/icon-7.png'
import icon8 from '../../assets/images/about-icon/icon-8.png'
import icon9 from '../../assets/images/about-icon/icon-9.png'
import icon10 from '../../assets/images/about-icon/icon-10.png'

import CEO from '../../assets/images/about/ceo.png'
import BottonSubmit from '../../components/BottonSubmit'

import Footer from '../../components/Footer'
import { useTranslation } from 'react-i18next'


const coreItems = [
  {
    title: 'core_title1',
    description: 'core_des1',
  },
  {
    title: 'core_title2',
    description: 'core_des2',
  },
  {
    title: 'core_title3',
    description: 'core_des3',
  },
  {
    title: 'core_title4',
    description: 'core_des4',
  },
  {
    title: 'core_title5',
    description: 'core_des5',
  }
]

const WhyUsItems = [
  {
    title: "why_us_title1",
    description: "why_us_des1",
    image: icon4,
  },
  {
    title: "why_us_title2",
    description: "why_us_des2",
    image: icon5,
  },
  {
    title: "why_us_title3",
    description: "why_us_des3",
    image: icon6,
  },
  {
    title: "why_us_title4",
    description: "why_us_des4",
    image: icon7,
  },
  {
    title: "why_us_title5",
    description: "why_us_des5",
    image: icon8,
  },
  {
    title: "why_us_title6",
    description: "why_us_des6",
    image: icon9,
  },
  {
    title: "why_us_title7",
    description: "why_us_des7",
    image: icon10,
  },

]

const About = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);
  const {t} = useTranslation();

  return (
    <>
      <div className='m-2 sm:m-5 xl:m-10'>
        <div className='w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] relative rounded-[20px] z-[50]' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Navbar />
          <div className='w-full h-full flex flex-col items-center justify-center text-[#fff]' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <h2 className='text-[30px] sm:text-[40px] lg:text-[60px] font-[700] leading-none'>អំពីក្រុមហ៊ុន</h2>
          </div>

          <div className='mx-2 sm:mx-4 relative' data-aos="fade-up" data-aos-anchor-placement="bottom-bottom">
            <div className='absolute -bottom-[200px] sm:-bottom-[140px] md:-bottom-[150px] lg:-bottom-[140px] left-1/2 -translate-x-1/2 w-full max-w-7xl p-4 sm:p-10 xl:p-20 rounded-[20px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-[#fff] text-[14px] lg:text-[16px] bg-[#652D90]'>
              <div className='w-full md:w-1/3 flex items-center justify-start md:justify-center order-2 md:order-none'>
                <button
                  onClick={() => setIsOpenModal(true)}
                  className="inline-block mt-4 bg-gradient-to-l from-[#EC1C24] to-[#e48c8f] hover:bg-gradient-to-l hover:from-[#e48c8f] hover:to-[#EC1C24] transition-all duration-300 text-white px-6 lg:px-10 py-2 lg:py-4 rounded-full"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </button>
              </div>
              <div className='w-full md:w-2/3 order-1 md:order-none'>
                <div className='max-w-[700px] mx-auto text-start text-[13px] md:text-[14px] xl:text-[16px] font-[300] flex flex-col space-y-2'>
                  <p>{t("about_header")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottonSubmit isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />

      <div className='w-full h-[90vh] relative' >
        <div className='w-full h-full absolute top-[-60px] sm:top-[-100px] md:top-[-100px] lg:top-[-100px] 2xl:top-[-160px] left-1/2 -translate-x-1/2 pb-10 sm:pb-20 lg:pb-32' style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='w-full h-full max-w-3xl mx-auto flex flex-col sm:flex-row items-end justify-end md:justify-center gap-6 sm:gap-10 px-2 overflow-hidden'>
            <div data-aos="fade-right" className='w-full h-[140px] sm:h-[200px] md:h-[210px] p-6 xl:p-10 flex flex-col items-center justify-center text-center bg-linear-to-t from-[#FFFFFF] to-[#F5DEFF]/50 border border-[#fff] rounded-[30px] text-[13px] md:text-[14px] xl:text-[16px] font-[300]'>
              <img src={icon1} alt="" className='w-14 sm:w-20 h-auto' />
              <h2 className='text-[20px] lg:text-[30px] font-[600]'>{t("vision")}</h2>
              <p className='h-[40px]'>{t("vision_des")}</p>
            </div>

            <div data-aos="fade-left" className='w-full h-[140px] sm:h-[200px] md:h-[210px] p-6 xl:p-10 flex flex-col items-center justify-center text-center bg-linear-to-t from-[#FFFFFF] to-[#F5DEFF]/50 border border-[#fff] rounded-[30px] text-[13px] md:text-[14px] xl:text-[16px] font-[300]'>
              <img src={icon2} alt="" className='w-14 sm:w-20 h-auto' />
              <h2 className='text-[20px] lg:text-[30px] font-[600]'>{t("mission")}</h2>
              <p className='h-[40px]'>{t("mission_des")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-full relative'>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className='relative flex items-center justify-center pb-10 sm:pb-0 sm:absolute top-0 sm:top-[-150px] md:top-[-140px] 2xl:top-[-150px] left-1/2 -translate-x-1/2'>
          <img src={icon3} alt="" className='w-14 sm:w-20 h-auto' />
        </div>
        <div className='relative 2xl:-mt-[4rem] flex flex-col items-center justify-center max-w-6xl mx-auto text-center px-2 text-[13px] md:text-[14px] xl:text-[16px]'>
          <h1 data-aos="fade-up" className='text-[20px] lg:text-[30px] font-[600] text-[#EC1C24]'>{t("core_header")}</h1>
          <p data-aos="fade-up">{t("core_header_des1")}</p>
          <p data-aos="fade-up" className='mt-4 font-[300]'>{t("core_header_des2")}</p>


          <div data-aos="fade-up" className='w-full flex flex-wrap items-stretch justify-center gap-6 text-[#fff] text-[13px] md:text-[14px] xl:text-[16px] my-6'>
            {coreItems.map((coreItem, index) => (
              <div key={index} className='w-full sm:w-[48%] lg:w-[30%] h-[200px] lg:h-[240px] hover:translate-y-[-5px] transition-all duration-300 text-start p-6 bg-gradient-to-r from-[#652D90] to-[#9000FF] rounded-[30px]'>
                <h1 className='text-[20px] font-[500]'>{t(coreItem.title)}</h1>
                <p className='mt-2 font-[300]'>{t(coreItem.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='w-full bg-gradient-to-r from-[#EC1C24] to-[#FF3C67] my-10 md:my-20'>
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row items-end gap-4 sm:gap-6 md:gap-10 px-2 text-[#fff] text-[13px] md:text-[14px] xl:text-[16px] overflow-hidden'>
          <div data-aos="fade-right" className='w-full lg:w-[28%] flex items-center justify-center order-2 lg:order-none'>
            <img src={CEO} alt="" className='w-1/2 lg:w-full h-auto' />
          </div>
          <div data-aos="fade-left" className='w-full lg:w-[70%] pb-0 pt-10 lg:py-6 order-1 lg:order-none'>
            <p>{t("msc")}</p>
            <p className='my-2 xl:my-4 font-[600]'>{t("msc_name")}</p>
            <p>{t("msc_company")}</p>
          </div>
        </div>
      </div>

      <div className='w-full min-h-screen relative' >
        <div className='absolute inset-0 w-full h-full'>
          <img src={WhyImage} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='absolute inset-0 w-full h-full bg-[#000]/70'></div>

        <div className='w-full h-full max-w-7xl mx-auto px-2 text-[#fff] text-center relative py-10 text-[13px] md:text-[14px] xl:text-[16px]'>

          <h1 data-aos="fade-up" className='text-[20px] lg:text-[30px] font-[600]'>{t("why_us_header")}</h1>
          <p data-aos="fade-up" className='mt-2 max-w-[600px] mx-auto'>{t("why_us_des")}</p>

          <div data-aos="fade-up" className='flex flex-wrap items-stretch justify-center gap-6 px-2 text-[13px] xl:text-[16px] mt-6'>
            {WhyUsItems.map((WhyUsItem, index) => (
              <div key={index} className='p-4 w-full sm:w-[48%] lg:w-[23%] h-[200px] xl:h-[250px] bg-[#fff] text-[#652D90] flex flex-col items-center justify-start text-center rounded-[30px]'>
                <img src={WhyUsItem.image} alt="" className='w-16 h-auto' />
                <h1 className='font-[600] pt-4'>{t(WhyUsItem.title)}</h1>
                <p className='font-[300]'>{t(WhyUsItem.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About