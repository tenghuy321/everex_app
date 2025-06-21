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


const coreItems = [
  {
    title: 'ការជឿទុកចិត្ត',
    description: 'យើងសម្រេចបាននូវការជឿទុកចិត្តពីអតិថិជននិងដៃគូអាជីវកម្មតាមរយៈសេវាកម្ម ដ៏មានស្ថិរភាពត្រឹមត្រូវ និងអាចជឿជាក់បាន។រាល់ការដឹកជញ្ជូនគឺជាសន្យាដែលយើងកាន់តំណឹងជានិច្ច។',
  },
  {
    title: 'ក្រមសីលធម៌',
    description: 'យើងខ្ញុំគោរពនិងអនុវត្តតាមបែបបទនៃក្រមសីលធម៌គ្រប់សកម្មភាពអាជីវកម្មដែលប្រកបដោយភាពស្មោះត្រង់ ការទទួលខុសត្រូវ និងការយកចិត្តទុកដាក់ចំពោះភាគីទាំងអស់។',
  },
  {
    title: 'ការច្នៃប្រឌិតអាជីវកម្ម',
    description: 'យើងខ្ញុំលើសពីក្រុមហ៊ុនដឹកជញ្ជូនធម្មតា។ តាមរយៈកញ្ចប់សេវាសមាជិកភាព ប្រព័ន្ធគ្រប់គ្រងទំនាក់ទំនងអតិថិជន (CRM) និងប្រព័ន្ធបញ្ចូលរបាយការណ៍យ៉ាងមានប្រសិទ្ធភាព យើងខ្ញុំជួយអោយអាជីវកម្មលោកអ្នកអាចបន្ថយចំណាយ បង្កើនប្រាក់ចំណេញ និងរីកចម្រើនបានយ៉ាងមានប្រសិទ្ធភាព។',
  },
  {
    title: 'ដៃគូយុទ្ធសាស្ត្រ',
    description: 'អតិថិជនអាជីវកម្មនិងសមាជិករបស់យើងខ្ញុំមិនត្រឹមតែជាអ្នកប្រើប្រាស់សេវាប៉ុណ្ណេះទេប៉ុន្តែជាដៃគូរយុទ្ធសាស្ត្រដែលមានសមភាពក្នុងការចែករំលែកនូវអត្ថប្រយោជន៍។យើងខ្ញុំបង្កើតសម្ព័ន្ធភាពដែលមានលក្ខណៈឈ្នះ-ឈ្នះ ដើម្បីជំរុញការរីកចម្រើនការកាត់បន្ថយចំណាយ និងការរីកចម្រើនក្នុងរយៈពេលវែង។',
  },
  {
    title: 'ស្វ័យប្រវត្តិកម្ម',
    description: 'យើងខ្ញុំជឿជាក់លើវិធីសាស្ត្រដឹកជញ្ជូនឆ្លាតវៃដែលមានប្រសិទ្ធភាព។ ប្រព័ន្ធបច្ចេកវិទ្យារបស់យើងខ្ញុំត្រូវបានរចនាឡើងសម្រាប់ការតាមដានពេលវេលាពិតប្រាកដការជូនដំណឹងភ្លាមៗនិងដំណើរការដែលមានសមភាពដើម្បីជួយអោយអតិថិជនគ្រប់គ្រងអាជីវកម្មបានប្រកបដោយភាពច្បាស់លាស់ និងទំនើប។',
  }
]

const WhyUsItems = [
  {
    title: "ការដឹកជញ្ជូនទាន់ពេល និងអាចជឿជាក់បាន",
    description: "យើងដឹកជញ្ជូនក្នុងថ្ងៃដដែល ឬថ្ងៃបន្ទាប់ ដើម្បីជួយឱ្យអាជីវកម្មរបស់អ្នកបំពេញការទន្ទឹងរង់ចាំរបស់អតិថិជនបានយ៉ាងមានប្រសិទ្ធភាព។",
    image: icon4,
  },
  {
    title: "ប្រព័ន្ធបច្ចេកវិទ្យាទំនើប",
    description: "ដោយប្រើស្វ័យប្រវត្តិកម្ម និងការតាមដានពេលវេលាពិត អ្នកអាចគ្រប់គ្រងការដឹកជញ្ជូនបានដោយងាយស្រួល និងមានភាពច្បាស់លាស់។",
    image: icon5,
  },
  {
    title: "ការបំពេញប្រាក់ COD ក្នុងថ្ងៃបន្ទាប់ ",
    description: "ធានាចំណូលរបស់អ្នកដោយសេវាទូទាត់ COD ដោយឆាប់រហ័ស និងមានសុវត្ថិភាព។",
    image: icon6,
  },
  {
    title: "របាយការណ៍ប្រចាំថ្ងៃ",
    description: "ជាមួយការបញ្ចូលទិន្នន័យសកម្មភាពប្រចាំថ្ងៃ អ្នកអាចដឹងបានថាកញ្ចប់ណាដែលបានដឹក ជោគជ័យ ឬនៅតែរង់ចាំ។",
    image: icon7,
  },
  {
    title: "ជំនួយផ្នែកលក់",
    description: "ក្រុមការងារដែលមានបទពិសោធន៍របស់យើងជួយលើកទឹកចិត្ត និងជួយអោយការលក់របស់អ្នកកាន់តែរីកចម្រើន។",
    image: icon8,
  },
  {
    title: "CRM និងការគ្រប់គ្រងស្តុកឥតគិតថ្លៃសម្រាប់សមាជិក",
    description: "ជួយអ្នករៀបចំអាជីវកម្មយ៉ាងទាន់សម័យ ដោយកាត់បន្ថយការខកខាន និងអនុវត្តការគ្រប់គ្រងបានប្រសើរឡើង។",
    image: icon9,
  },
  {
    title: "អេវើរេក អិចប្រេស",
    description: "មិនមែនជាក្រុមហ៊ុនដឹកជញ្ជូនធម្មតាទេ យើងជាដៃគូអាជីវកម្មដែលពិតប្រាកដ រួមចំណែកជាមួយអ្នកក្នុងការរីកចម្រើន។",
    image: icon10,
  },

]

const About = () => {

  const [isOpenModal, setIsOpenModal] = useState(false);

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
                  <p>ក្រុមហ៊ុនដឹកជញ្ជូន everex exress ជាក្រុមហ៊ុនបង្កើតឡើងដោយកូនខ្មែរក្នុង ឆ្នាំ 2022 ក្នុងគោលបំណងលើកកម្ពស់វិស័យដឹកជញ្ជូនក្នុងស្រុក ផ្លាស់ប្តូរ បទពិសោធន៍នៃការដឹកជញ្ជូន តាមរយៈការធ្វើស្វ័យប្រវត្តិកម្ម លើប្រព័ន្ឋ ដឹកជញ្ជូន និងប្រព័ន្ធបច្ចេកវិទ្យាថ្មីៗ។</p>

                  <p>យើងខ្ញុំប្រកាន់ខ្ជាប់នូវគោលការក្រមសីលធម៌ ទំនួលខុសត្រូវលើគ្រប់ប្រតិបត្តិការ ដឹកជញ្ជូនទាំងអស់ ផ្តល់នូវទំនុកចិត្តរាល់ដៃគូសហការ ការផ្តល់នូវសេវាកម្មដែល ល្អបំផុតដល់អតិថិជន និងដំណោះស្រាយដឹកជញ្ជូនដ៏ត្រឹមត្រូវសម្រាប់អាជីវកម្ម របស់អ្នក ។</p>
                  <p>យើងខ្ញុំត្រៀមខ្លួនរួចជាស្រេចក្នុងការក្លាយខ្លួនជា ដៃគូយុទ្ធសាស្ត្ររយៈពេលវែង ជាមួយម្ចាស់អាជីវកម្មដ៏អស្ចារ្យដូចរូបអ្នក។</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottonSubmit isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} />

      <div className='w-full min-h-[100vh] sm:h-[80vh] relative' >
        <div className='w-full h-full absolute top-[-60px] sm:top-[-100px] md:top-[-120px] lg:top-[-100px] 2xl:top-[-160px] left-1/2 -translate-x-1/2 pb-10 sm:pb-32' style={{ backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='w-full h-full max-w-3xl mx-auto flex flex-col sm:flex-row items-end justify-end md:justify-center gap-6 sm:gap-10 px-2 overflow-hidden'>
            <div data-aos="fade-right" className='w-full h-[130px] sm:h-[200px] md:h-[210px] p-6 xl:p-10 flex flex-col items-center justify-center text-center bg-linear-to-t from-[#FFFFFF] to-[#F5DEFF]/50 border border-[#fff] rounded-[30px] text-[13px] md:text-[14px] xl:text-[16px] font-[300]'>
              <img src={icon1} alt="" className='w-14 sm:w-20 h-auto' />
              <h2 className='text-[20px] lg:text-[30px] font-[600]'>ចក្ខុវិស័យ</h2>
              <p className='h-[40px]'>ក្លាយជាសេវាកម្មដឹកជញ្ជូនឈានមុខគេ សម្រាប់ប្រជាជាតិខ្មែរ។</p>
            </div>

            <div data-aos="fade-left" className='w-full h-[130px] sm:h-[200px] md:h-[210px] p-6 xl:p-10 flex flex-col items-center justify-center text-center bg-linear-to-t from-[#FFFFFF] to-[#F5DEFF]/50 border border-[#fff] rounded-[30px] text-[13px] md:text-[14px] xl:text-[16px] font-[300]'>
              <img src={icon2} alt="" className='w-14 sm:w-20 h-auto' />
              <h2 className='text-[20px] lg:text-[30px] font-[600]'>បេសកកម្ម</h2>
              <p className='h-[40px]'>ជំរុញការធ្វើទំនើបកម្ម និងស្វ័យប្រវត្តិកម្មលើវិស័យដឹកជញ្ជូនក្នុង ព្រះរាជាណាចក្រកម្ពុជា។</p>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full h-full relative'>
        <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className='relative flex items-center justify-center pb-10 sm:pb-0 sm:absolute top-0 sm:top-[-150px] md:top-[-140px] 2xl:top-[-150px] left-1/2 -translate-x-1/2'>
          <img src={icon3} alt="" className='w-14 sm:w-20 h-auto' />
        </div>
        <div className='relative 2xl:-mt-[4rem] flex flex-col items-center justify-center max-w-6xl mx-auto text-center px-2 text-[13px] md:text-[14px] xl:text-[16px]'>
          <h1 data-aos="fade-up" className='text-[20px] lg:text-[30px] font-[600] text-[#EC1C24]'>គុណតម្លៃស្នូល</h1>
          <p data-aos="fade-up">ទំនុកចិត្ត ក្រមសីលធម៌ ស្វ័យប្រវត្តិកម្ម ដៃគូយុទ្ធសាស្ត្រ អាជីវកម្ម។</p>
          <p data-aos="fade-up" className='mt-4 font-[300]'>ក្រុមហ៊ុន អេវើរេក អិចប្រេស គុណតម្លៃស្នូលគឺជាមូលដ្ឋាននៃរាល់សកម្មភាពដែលយើងអនុវត្ត។ គុណតម្លៃទាំងនេះជាគោលដៅដ៏សំខាន់ក្នុងការប្រតិបត្តិការរបស់យើង បញ្ជាក់ពីការចេះគោរពដល់ដៃគូ និងបញ្ជាក់ពីការប្តេជ្ញាខ្ជាប់ខ្ជួនរបស់យើងចំពោះភាពឯកទេស និងការច្នៃប្រឌិតក្នុងវិស័យដឹកជញ្ជូននៅក្នុងព្រះរាជាណាចក្រកម្ពុជា។</p>


          <div data-aos="fade-up" className='w-full flex flex-wrap items-stretch justify-center gap-6 text-[#fff] text-[13px] md:text-[14px] xl:text-[16px] my-6'>
            {coreItems.map((coreItem, index) => (
              <div key={index} className='w-full sm:w-[48%] lg:w-[30%] h-[200px] lg:h-[240px] hover:translate-y-[-5px] transition-all duration-300 text-start p-6 bg-gradient-to-r from-[#652D90] to-[#9000FF] rounded-[30px]'>
                <h1 className='text-[20px] font-[500]'>{coreItem.title}</h1>
                <p className='mt-2 font-[300]'>{coreItem.description}</p>
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
            <p>គោរពដល់អតិថិជន អ្នកសហការណ៍ និងដៃគូយុទ្ធសាស្ត្ររបស់យើងខ្ញុំ។ ខ្ញុំសូមថ្លែងអំណរគុណយ៉ាងជ្រាលជ្រៅចំពោះការជឿទុកចិត្ត និងការគាំទ្រដែលលោកអ្នកបានផ្ដល់ជូនក្រុមហ៊ុន អេវើរេក អិចប្រេស ជានិច្ចកាល។ ជាក្រុមហ៊ុនដឹកជញ្ជូនទំនិញដែរ យើងខ្ញុំបង្កើតឡើងដោយឆន្ទៈមុតមាំក្នុងការចូលរួមជម្រុញវិស័យដឹកជញ្ជូនឲ្យកាន់តែទំនើប និងមានប្រសិទ្ធភាពក្នុងព្រះរាជាណាចក្រកម្ពុជា។ យើងខ្ញុំយល់ឃើញថា ការដឹកជញ្ជូនគឺជាឈូងសរសៃដ៏សំខាន់មួយសម្រាប់អភិវឌ្ឍន៍អាជីវកម្ម និងសេដ្ឋកិច្ច។ ដូច្នេះហើយ ក្រុមការងាររបស់យើងខ្ញុំបានខិតខំប្រឹងប្រែងអភិវឌ្ឍសេវាកម្មដ៏ឆាប់រហ័ស សុវត្ថិភាព មានភាពច្បាស់លាស់ ដើម្បីឆ្លើយតបទៅនឹងតម្រូវការពិតប្រាកដរបស់អតិថិជនក្នុងយុគសម័យឌីជីថលនេះ។</p>
            <p>យើងខ្ញុំមានគោលបំណងច្បាស់លាស់ក្នុងការបង្កើតចំណូលជូនដៃគូអាជីវកម្មរបស់យើងខ្ញុំ តាមរយៈគម្រោងសមាជិកភាពដែលអាចជួយកាត់បន្ថយចំណាយ និងបង្កើនប្រាក់ចំណេញ។ ជាពិសេស ការបញ្ចូលប្រព័ន្ធគ្រប់គ្រងទំនិញ និងCRMសម្រាប់អ្នកលក់អនឡាញ គឺជាការផ្ដល់ឧបត្ថម្ភផ្នែកបច្ចេកវិទ្យាដ៏មានតម្លៃ។ ក្នុងនាមខ្ញុំជាអគ្គនាយករបស់ អេវើរេក អិចប្រេស ខ្ញុំស្តាប់ និងចេះគោរពដល់សម្លេងរបស់អតិថិជន។ យើងខ្ញុំនឹងបន្តបង្កើនគុណភាពសេវាកម្ម និងបង្កើតនូវឱកាសថ្មីៗ សម្រាប់ដៃគូរ និងអតិថិជនដើម្បីក្លាយជាអ្នកឈ្នះនៅក្នុងទីផ្សារដ៏មានការប្រកួតប្រជែងនេះ។</p>

            <p>សូមអរគុណចំពោះការជឿជាក់លើ អេវើរេក អិចប្រេស។ យើងខ្ញុំសង្ឃឹមថានឹងបានបន្តដំណើរទាំងនេះជាមួយលោកអ្នកយ៉ាងដិតដល់ និងជោគជ័យជាដៃគូរយៈពេលវែង។ ដោយក្ដីគោរពយ៉ាងខ្ពង់ខ្ពស់,</p>
            <p className='my-2 xl:my-4 font-[600]'>គុង សុគង្គ</p>
            <p>អគ្គនាយក អេវើរេក អិចប្រេស</p>
          </div>
        </div>
      </div>

      <div className='w-full min-h-screen relative' >
        <div className='absolute inset-0 w-full h-full'>
          <img src={WhyImage} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='absolute inset-0 w-full h-full bg-[#000]/70'></div>

        <div className='w-full h-full max-w-7xl mx-auto px-2 text-[#fff] text-center relative py-10 text-[13px] md:text-[14px] xl:text-[16px]'>

          <h1 data-aos="fade-up" className='text-[20px] lg:text-[30px] font-[600]'>ហេតុអ្វីជ្រើសរើសយើងខ្ញុំ?</h1>
          <p data-aos="fade-up" className='mt-2 max-w-[600px] mx-auto'>អេវើរេក អិចប្រេស គឺជាជម្រើសដឹកជញ្ជូនឆ្លាតវៃ សុវត្ថិភាព និងទំនុកចិត្តខ្ពស់ សម្រាប់អាជីវកម្មគ្រប់ទំហំ។ យើងខ្ញុំបង្កើតសេវាកម្មដែលផ្ដោតលើការឆ្លើយតបទាន់ពេល តម្លៃសមរម្យ និងការចូលរួមជាដៃគូអាជីវកម្មយ៉ាងជិតស្និទ្ធ ដោយមានអត្ថប្រយោជន៍ដូចខាងក្រោម៖</p>

          <div data-aos="fade-up" className='flex flex-wrap items-stretch justify-center gap-6 px-2 text-[13px] xl:text-[16px] mt-6'>
            {WhyUsItems.map((WhyUsItem, index) => (
              <div key={index} className='p-4 w-full sm:w-[48%] lg:w-[23%] h-[200px] xl:h-[250px] bg-[#fff] text-[#652D90] flex flex-col items-center justify-start text-center rounded-[30px]'>
                <img src={WhyUsItem.image} alt="" className='w-16 h-auto' />
                <h1 className='font-[600] pt-4'>{WhyUsItem.title}</h1>
                <p className='font-[300]'>{WhyUsItem.description}</p>
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