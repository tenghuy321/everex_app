import React, { useState } from 'react'
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

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const TELEGRAM_BOT_TOKEN = '7488110118:AAF1yYnZwMivBG4iaNE-KkLm_o1BlDKbDcQ';
const TELEGRAM_CHAT_ID = '768856332';

const Home = () => {
  const { t } = useTranslation()

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    address: '',
    gender: ''  // <-- new field
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);

    const message = `
      New Form Submission:
      Name: ${formData.name}
      Email: ${formData.email}
      Phone Number: ${formData.phone_number}
      Gender: ${formData.gender}
      Address: ${formData.address}
    `;

    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      toast.success('Message sent successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setIsOpenModal(false);
      setFormData({
        name: '',
        email: '',
        phone_number: '',
        address: ''
      });
    } catch (error) {
      console.error(error);
      toast.error('Failed to send message. Please try again later.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } finally {
      setIsSending(false);
    }
  };


  return (
    <>
      <ToastContainer />
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
        <div className='w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6' >
          <div className='text-[13px] md:text-[14px] xl:text-[16px]' data-aos="fade-right">
            <p>{t("home_des2")}</p>

            {/* <a href="#"
              className="inline-block mt-4 bg-gradient-to-l from-[#652D90] to-[#9000FF] hover:bg-gradient-to-l hover:from-[#9000FF] hover:to-[#652D90] transition-all duration-300 text-white px-6 lg:px-10 py-2 lg:py-4 rounded-full">
              ចុះឈ្មោះឥឡូវនេះ
            </a> */}
            <button
              onClick={() => setIsOpenModal(true)}
              className="inline-block mt-4 bg-gradient-to-l from-[#652D90] to-[#9000FF] hover:bg-gradient-to-l hover:from-[#9000FF] hover:to-[#652D90] transition-all duration-300 text-white px-6 lg:px-10 py-2 lg:py-4 rounded-full"
            >
              ចុះឈ្មោះឥឡូវនេះ
            </button>

          </div>

          <div data-aos="fade-left">
            <img src={HomeImage} alt="" />
          </div>
        </div>
      </div>

      {isOpenModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[999]">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative scale-100 opacity-100 transition-all duration-300 animate-[fadeIn_0.3s_ease-in-out]">
            <button
              onClick={() => setIsOpenModal(false)}
              className="absolute top-2 right-4 text-[#EC1C24] text-2xl"
            >
              &times;
            </button>

            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm bg-white"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  placeholder="Your Phone Number"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mt-4">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  placeholder="Your Address"
                  className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  rows="3"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="block font-[600] mt-4 px-8 py-3 float-end text-[#000] border border-[#EC1C24] hover:bg-[#EC1C24] hover:text-[#fff] transition-all duration-300 rounded-full"
              >
                {isSending ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      )}

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