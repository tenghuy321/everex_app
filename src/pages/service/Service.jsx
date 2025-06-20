import React, { useState } from 'react'
import bgImage from '../../assets/images/hero.png'
import Navbar from '../../components/Navbar'
import Image from '../../assets/images/home/image-2.png'

import icon1 from '../../assets/images/service-icon/icon-1.png'
import icon2 from '../../assets/images/service-icon/icon-2.png'
import icon3 from '../../assets/images/service-icon/icon-3.png'
import icon4 from '../../assets/images/service-icon/icon-4.png'
import icon5 from '../../assets/images/service-icon/icon-5.png'
import icon6 from '../../assets/images/service-icon/icon-6.png'
import icon7 from '../../assets/images/service-icon/icon-7.png'
import icon8 from '../../assets/images/service-icon/icon-8.png'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useTranslation } from 'react-i18next'
import '../service/service.css'
import Footer from '../../components/Footer'
const serviceItems = [
  {
    title: "service_title1"
  },
  {
    title: "service_title2"
  },
  {
    title: "service_title3"
  },
  {
    title: "service_title4"
  },
  {
    title: "service_title5"
  },
  {
    title: "service_title6"
  },

  {
    title: "service_title7"
  },
  {
    title: "service_title8"
  },
]

const spacialItems = [
  {
    id: '01',
    title: 'តម្លៃចាប់ពី 1,900៛/កញ្ចប់',
    desc: 'ជួយម្ចាស់អោយសន្សំសំចៃរហូតដល់ 60% លើ សេវាដឹកជញ្ជូនជាមួយគម្រោងតម្លៃដែលមានភាពបត់បែន'
  },
  {
    id: '02',
    title: 'រហ័ស និងសុវត្ថិភាព',
    desc: 'កញ្ចប់អីវ៉ាន់របស់អ្នក នឹងទៅដល់អតិថិជនរបស់ អ្នកយ៉ាងឆាប់រហ័ស និងសុវត្ថិភាព ជាមួយដៃគូ ដឹកដ៏មានបទពិសោធន៍ និងរួសរាយរាក់ទាក់របស់យើង'
  },
  {
    id: '03',
    title: 'ក្រុមការងារសម្របសម្រួល',
    desc: 'ក្រុមការងារសម្របសម្រួលដ៏ជំនាញ ចាំជួយដោះស្រាយបញ្ហារបស់លោកអ្នកយ៉ាងមានប្រសិទ្ធភាព'
  },
  {
    id: '04',
    title: 'ភាពជាដៃគូ ដែលគួរអោយទុកចិត្តបាន',
    desc: 'កិច្ចសហការ និងភាពបត់បែន ដែលជួយអោយ លោកអ្នកងាយស្រួល បង្កើនការលក់បន្ថែម'
  },
  {
    id: '05',
    title: 'បច្ចេកវិទ្យា និងប្រព័ន្ធស្វ័យប្រវត្តិ',
    desc: 'យើងតែងតែស្វែងរក និងបំពាក់នូវប្រព័ន្ធបច្ចេកវិទ្យាថ្មី និងច្នៃប្រឌិត ដើម្បីជម្រុញការងារអោយកាន់តែប្រសិទ្ធិភាព'
  }
]

const Items = [
  {
    title: 'item1',
    image: icon1
  },
  {
    title: 'item2',
    image: icon2
  },
  {
    title: 'item3',
    image: icon3
  },
  {
    title: 'item4',
    image: icon4
  },
  {
    title: 'item5',
    image: icon5
  },
  {
    title: 'item6',
    image: icon6
  },
  {
    title: 'item7',
    image: icon7
  },
  {
    title: 'item8',
    image: icon8
  },
]

const TELEGRAM_BOT_TOKEN = '7488110118:AAF1yYnZwMivBG4iaNE-KkLm_o1BlDKbDcQ';
const TELEGRAM_CHAT_ID = '768856332';


const Service = () => {
  const { t } = useTranslation();

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
        <div className='w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] relative rounded-[20px] z-[50]' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Navbar />
          <div className='w-full h-full flex flex-col items-center justify-center text-[#fff]' data-aos="fade-up">
            <h2 className='text-[30px] sm:text-[40px] lg:text-[60px] font-[700] leading-none'>សេវាកម្មដឹកជញ្ជូន</h2>
          </div>

          <div className='mx-2 sm:mx-4 relative' data-aos="fade-up">
            <div className='absolute -bottom-[100px] md:-bottom-[80px] lg:-bottom-[100px] left-1/2 -translate-x-1/2 w-full max-w-7xl p-4 sm:p-10 xl:p-20 rounded-[20px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-[#fff] text-[13px] lg:text-[16px]' style={{ background: "radial-gradient(87.03% 87.03% at 39.58% 60.25%, rgba(255, 60, 103, 0.8) 0%, #EC1C24 100%)" }}>
              <div className='w-full md:w-1/3 flex items-center justify-start md:justify-center order-2 md:order-none'>
                <button
                  onClick={() => setIsOpenModal(true)}
                  className="inline-block mt-4 bg-gradient-to-l from-[#652D90] to-[#9000FF] hover:bg-gradient-to-l hover:from-[#9000FF] hover:to-[#652D90] transition-all duration-300 text-white px-6 lg:px-10 py-2 lg:py-4 rounded-full"
                >
                  ចុះឈ្មោះឥឡូវនេះ
                </button>
              </div>
              <div className='w-full md:w-2/3 order-1 md:order-none'>
                <p className='max-w-[700px] mx-auto text-start text-[13px] md:text-[14px] xl:text-[16px]'>អេវើរេក អិចប្រេស គឺជាក្រុមហ៊ុនសេវាដឹកជញ្ជូនក្នុងប្រទេសកម្ពុជា ដែលមានបំណងជួយអភិវឌ្ឍអាជីវកម្មក្នុងស្រុក ដោយផ្តល់សេវាដឹកជញ្ជូនដែលលឿន អាចទុកចិត្តបាន និងមានតម្លៃសមរម្យ។ យើងខ្ញុំមានគោលដៅក្លាយជាវេទិកាដឹកជញ្ជូនឈានមុខគេសម្រាប់ប្រជាជនកម្ពុជា ដោយផ្អែកលើការជឿជាក់របស់អតិថិជន ប្រព័ន្ធស្វ័យប្រវត្តិកម្ម និងសម្ព័ន្ធភាពជាដៃគូអាជីវកម្មដ៏រឹងមាំ។</p>
              </div>
            </div>
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


      <div className='w-full min-h-screen relative -mt-[5rem]'>
        <div className='w-full min-h-screen' style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='w-full h-full max-w-7xl mx-auto px-2 flex flex-wrap items-stretch justify-center gap-4 pt-52 pb-20 lg:pb-0 xl:pb-20 text-[#662C93]'>
            {serviceItems.map((serviceItem, index) => (
              <div data-aos="fade-up" data-aos-duration="2000" key={index} className='flex items-center justify-center w-[90%] sm:w-[30%] lg:w-[23%] h-[100px] sm:h-[150px] xl:h-[200px] p-6 lg:p-10 rounded-[30px] border-2 border-[#fff]' style={{ background: `radial-gradient(88.46% 88.46% at 46.02% 11.54%, #FFFFFF 39.18%, rgba(245, 222, 255, 0.5) 100%)` }}>
                <h2 className='text-[16px] xl:text-[20px] font-[600] text-center flex items-center justify-center'>{t(serviceItem.title)}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  */}
      <div className="w-full font-[700] text-[#fff] relative" data-aos="fade-up">
        <div className="z-50 relative text-[16px] md:text-[20px] overflow-hidden whitespace-nowrap w-full shadow-lg bg-[linear-gradient(-90deg,_#F1D1FF_0%,_#9000FF_44.45%)] border-2 border-l-0 border-r-0 border-[#F5DEFF]/50 py-4">
          <div className="marquee flex gap-10 md:gap-20">
            <div className="flex gap-10 md:gap-20">
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
            </div>
            <div className="flex gap-10 md:gap-20">
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
            </div>
            <div className="flex gap-10 md:gap-20">
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
              <span>ដំណើរការនៃការដឹកជញ្ជូន</span>
            </div>
          </div>
        </div>

        <div className='px-2'>
          <div className='relative px-2 rounded-[30px] -top-[70px] md:-top-[100px] w-full min-h-[100vh] md:min-h-[75vh] z-10 border-2 border-[#FFC3E0] max-w-7xl mx-auto flex flex-col items-end justify-end pb-10 bg-linear-to-tr from-[#EC1C24] to-[#F0668C]/50'>
            <div className='w-full pt-24 md:pt-32 px-2 md:px-10 xl:px-20 flex flex-wrap gap-4 items-stretch justify-center'>
              <div className='w-full md:w-[48%] flex flex-col items-start text-[16px] font-[500]'>
                <h1 className='font-[600]'>ទទួលដល់ទីតាំង 2 ជើង/ថ្ងៃ</h1>
                <ul className='list-disc text-[14px] xl:text-[16px] ml-6'>
                  <li>វេនព្រឹក: ម៉ោង 8:00 – 8:30</li>
                  <li>វេនរសៀល: ម៉ោង 1:00 – 2:30</li>
                </ul>
              </div>
              <div className='w-full md:w-[48%] flex flex-col items-start text-[16px] font-[500]'>
                <h1 className='font-[600]'>ឃ្លាំងស្តុកទំនិញ</h1>
                <ul className='list-disc text-[14px] xl:text-[16px] ml-6'>
                  <li>ផ្តល់ជូនទីតាំងស្តុកទំនិញដោយមិនគិតថ្លៃ សម្រាប់អតិថិជនផ្ញើស្តុក ឬនៅតាមបណ្តាខេត</li>
                  <li>មានក្រុមការងារវេចខ្ចប់ បន្ទាប់ទទួលបានការបញ្ជាកម្ម៉ង់ពីអតិថិជន</li>
                  <li>ប្រព័ន្ធផ្ញើរបាយការណ៍ស្តុកប្រចាំថ្ងៃ</li>
                </ul>
              </div>
              <div className='w-full md:w-[48%] flex flex-col items-start text-[16px] font-[500]'>
                <h1 className='font-[600]'>ការប្រមូលប្រាក់ជំនួស</h1>
                <ul className='list-disc text-[14px] xl:text-[16px] ml-6'>
                  <li>ប្រមូលប្រាក់ជំនួសដោយមិនគិតថ្លៃ</li>
                  <li>ទូទាត់ត្រឡប់រហ័សនៅថ្ងៃបន្ទាប់</li>
                </ul>
              </div>
              <div className='w-full md:w-[48%] flex flex-col items-start text-[16px] font-[500]'>
                <h1 className='font-[600]'>របាយការណ៍ និងអេបទូរស័ព្ទដៃ</h1>
                <ul className='list-disc text-[14px] xl:text-[16px] ml-6'>
                  <li>ប្រព័ន្ធរៀបចំ និងផ្ញើររបាយការណ៍ជូនអតិថិជនប្រចាំថ្ងៃ/ប្រចាំអាទិត្យ/ប្រចាំខែ</li>
                  <li>អេបទូរស័ព្ទដៃសម្រាប់តាមដានកញ្ចប់អីវ៉ាន</li>
                  <li>ប្រព័ន្ធថែរក្សាអតិថិជន CRM សម្រាប់វិភាគនិងពង្រឹងអាជីវកម្មរបស់អតិថិជន</li>
                </ul>
              </div>
              <div className='w-full md:w-[97%] flex flex-col items-start text-[16px] font-[500]'>
                <h1 className='font-[600]'>ដំណើរការដឹកជញ្ជូន</h1>
                <ul className='list-disc text-[14px] xl:text-[16px] ml-6'>
                  <li>ពេលកញ្ចប់ដឹកបានជោគជ័យ ប្រព័ន្ធផ្ញើរសារជូនដំណឹងក្នុងគ្រុបតេឡេក្រាម</li>
                  <li>ពេលកញ្ចប់មានបញ្ហា មិនអាចទាក់ទងបាន ឬមានបញ្ហាណាមួយ ប្រព័ន្ធផ្ញើរសារជូនដំណឹង និងមានក្រុមការងារចាំសម្របសម្រួល 1-2-1</li>
                  <li>បើកញ្ចប់ទំនិញមិនទាន់ទៅដល់ដៃភ្ញៀវ ហាង ឬភ្ញៀវលុបចោលការដឹក នឹងបញ្ជូនត្រឡប់ទៅហាងវិញដោយមិនគិតថ្លៃសេវា</li>
                  <li>បើកញ្ចប់ទំនិញទៅដល់ដៃភ្ញៀវ តែភ្ញៀវមិនទទួលយកដោយបញ្ហាណាមួយ នឹងត្រូវគិតសេវា ហើយសេវាដែលគិតពីភ្ញៀវបាន នឹងប្រគល់ជូនទៅហាង</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* special */}
      <div className='w-full max-w-7xl mx-auto px-2'>
        <h2 data-aos="fade-up" className='text-[20px] lg:text-[30px] text-[#662C93] font-[600] text-center max-w-[440px] mx-auto'>លក្ខណៈពិសេសនៃសេវាកម្មដឹកជញ្ជូនរបស់ក្រុមហ៊ុន Everex Express</h2>
        <div data-aos="fade-up" className='flex flex-wrap items-stretch justify-center gap-6 py-10 md:py-20'>
          {spacialItems.map((spacialItem, index) => (
            <div key={index} className='flex flex-col items-stretch justify-center w-full sm:w-[48%] lg:w-[30%] min-h-[200px] text-[30px] xl:text-[40px] p-6 rounded-[30px] text-[#fff] bg-[linear-gradient(-200deg,_#FFFFFF_-17.86%,_#F17AA9_30.46%,_#F0668C_41.69%,_#EE3E54_66.42%,_#EC2531_84.4%,_#EC1C24_94.51%)]'>
              <h1 className='font-[600]'>{spacialItem.id}</h1>
              <h2 className='text-[16px] xl:text-[20px] font-[600]'>{spacialItem.title}</h2>
              <p className='text-[13px] md:text-[14px] xl:text-[16px]'>{spacialItem.desc}</p>
            </div>
          ))}

        </div>
      </div>

      {/* prohabit */}
      <div className='w-full min-h-screen relative py-10' style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2 className='text-[20px] lg:text-[30px] text-[#662C93] font-[600] text-center max-w-[440px] mx-auto' data-aos="fade-up">ប្រភេទឥវ៉ាន់ទទួល និងមិនទទួល</h2>
        <div className='w-full max-w-7xl mx-auto px-2 pt-10'>
          <h1 data-aos="fade-right" className='text-[20px] lg:text-[30px] font-[600] text-[#662C93] bg-linear-to-r from-[#CD8BFF] to-[#EED8FF] inline-block px-10 py-1 rounded-[30px]'>ទទួល</h1>
          <div className='flex flex-wrap items-stretch justify-center gap-4 py-10'>
            {Items.slice(0, 4).map((Item, index) => (
              <div data-aos="fade-right" key={index} className='flex flex-col items-center justify-start w-[90%] sm:w-[48%] lg:w-[23%] h-[170px] sm:h-[180px] p-4 md:p-6 rounded-[30px] border-2 border-[#fff]' style={{ background: `radial-gradient(88.46% 88.46% at 46.02% 11.54%, #FFFFFF 39.18%, rgba(245, 222, 255, 0.5) 100%)` }}>
                <div className='flex items-center justify-center h-[90px] lg:h-[70px]'>
                  <img src={Item.image} alt="" className='w-16 h-auto' />
                </div>
                <h2 className='text-[16px] xl:text-[20px] font-[600] text-[#662C93] flex items-center justify-center text-center'>{t(Item.title)}</h2>
              </div>
            ))}
          </div>
        </div>

        <div className='w-full max-w-7xl mx-auto px-2 pt-0 md:pt-10'>
          <h1 data-aos="fade-right" className='text-[20px] lg:text-[30px] font-[600] text-[#EC1C24] bg-linear-to-l from-[#EED8FF] to-[#EC1C24]/70 inline-block px-10 py-1 rounded-[30px]'>មិនទទួល</h1>
          <div className='flex flex-wrap items-stretch justify-center gap-4 py-10'>
            {Items.slice(4, 8).map((Item, index) => (
              <div data-aos="fade-right" key={index} className='flex flex-col items-center justify-start w-[90%] sm:w-[48%] lg:w-[23%] h-[170px] sm:h-[180px] p-4 md:p-6 rounded-[30px] border-2 border-[#fff]' style={{ background: `radial-gradient(88.46% 88.46% at 46.02% 11.54%, #FFFFFF 39.18%, rgba(245, 222, 255, 0.5) 100%)` }}>
                <div className='flex items-center justify-center h-[90px] lg:h-[70px]'>
                  <img src={Item.image} alt="" className='w-16 h-auto' />
                </div>
                <h2 className='text-[16px] xl:text-[20px] font-[600] text-[#EC1C24] flex items-center justify-center text-center'>{t(Item.title)}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Service