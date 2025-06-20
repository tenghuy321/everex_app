import React, { useState } from 'react'
import bgImage from '../../assets/images/hero.png'
import Navbar from '../../components/Navbar'
import Image from '../../assets/images/home/image-2.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import price1 from '../../assets/images/price-image/image-1.png'
import price2 from '../../assets/images/price-image/image-2.png'
import price3 from '../../assets/images/price-image/image-3.png'
import price4 from '../../assets/images/price-image/image-4.png'
import '../price/price.css'
import Footer from '../../components/Footer'

// const monthly = [
//   {
//     plan: 'Free',
//     price: '$0.00',
//     text: [
//       '3,000៛ - 5,000៛/កញ្ចប់',
//       'ដឹកក្នុងថ្ងៃតែមួយ',
//       'ទទួល 2វេណក្នុងមួយថ្ងៃ',
//       'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
//       'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
//       'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
//       'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
//       'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
//       'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
//       'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
//     ],
//     heading: [
//       'Size',
//       '1 - 10',
//       '10 - 30',
//       '30 +'
//     ],
//     body: {
//       rows: [
//         ['Standard Size (up to 5kg) (25x25x25cm)', '5000៛', '4500៛', '4000៛'],
//         ['Medium Size (up to 10kg) (40x30x30cm)', '7000៛', '6500៛', '6000៛'],
//         ['Large Size (up to 20kg) (60x40x40cm)', '9000៛', '8500៛', '8000៛']
//       ]
//     },
//   },

//   {
//     plan: 'Basic  ',
//     price: '$39.00',
//     text: [
//       '3,000៛/កញ្ចប់',
//       'ដឹកក្នុងថ្ងៃតែមួយ',
//       'ទទួល 2វេណក្នុងមួយថ្ងៃ',
//       'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
//       'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
//       'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
//       'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
//       'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
//       'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
//       'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
//     ],
//     heading: [
//       'Size',
//       '10 - 30',
//       '30 +'
//     ],
//     body: {
//       rows: [
//         ['Standard Size (up to 5kg) (25x25x25cm)', '3000៛', '4000៛'],
//         ['Medium Size (up to 10kg) (40x30x30cm)', '8000៛', '6000៛'],
//         ['Large Size (up to 20kg) (60x40x40cm)', '8000៛', '700៛']
//       ]
//     },
//   },

//   {
//     plan: 'Standard',
//     price: '$69.00',
//     text: [
//       '2,500៛/កញ្ចប់',
//       'ដឹកក្នុងថ្ងៃតែមួយ',
//       'ទទួល 2វេណក្នុងមួយថ្ងៃ',
//       'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
//       'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
//       'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
//       'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
//       'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
//       'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
//       'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
//     ],
//     heading: [
//       'Size',
//       '10 - 30',
//       '30 +'
//     ],
//     body: {
//       rows: [
//         ['Standard Size (up to 5kg) (25x25x25cm)', '2500៛', '4000៛'],
//         ['Medium Size (up to 10kg) (40x30x30cm)', '4500៛', '6000៛'],
//         ['Large Size (up to 20kg) (60x40x40cm)', '6500៛', '8500៛']
//       ]
//     },
//   },

//   {
//     plan: 'Premium',
//     price: '$129.00',
//     text: [
//       '1,900៛/កញ្ចប់',
//       'ដឹកក្នុងថ្ងៃតែមួយ',
//       'ទទួល 2វេណក្នុងមួយថ្ងៃ',
//       'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
//       'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
//       'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
//       'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
//       'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
//       'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
//       'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
//     ],
//     heading: [
//       'Size',
//       '10 - 30',
//       '30 +'
//     ],
//     body: {
//       rows: [
//         ['Standard Size (up to 5kg) (25x25x25cm)', '1900៛', '4000៛'],
//         ['Medium Size (up to 10kg) (40x30x30cm)', '2900៛', '6000៛'],
//         ['Large Size (up to 20kg) (60x40x40cm)', '3900៛', '8000៛']
//       ]
//     },
//   },
// ];

// const yearly = [
//   {
//     plan: 'Free',
//     price: '$0.00',
//     text: [
//       '3,000៛ - 5,000៛/កញ្ចប់',
//       'ដឹកក្នុងថ្ងៃតែមួយ',
//       'ទទួល 2វេណក្នុងមួយថ្ងៃ',
//       'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
//       'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
//       'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
//       'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
//       'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
//       'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
//       'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
//     ],
//     heading: [
//       'Size',
//       '1 - 10',
//       '10 - 30',
//       '30 +'
//     ],
//     body: {
//       rows: [
//         ['Standard Size (up to 5kg) (25x25x25cm)', '5000៛', '4500៛', '4000៛'],
//         ['Medium Size (up to 10kg) (40x30x30cm)', '7000៛', '6500៛', '6000៛'],
//         ['Large Size (up to 20kg) (60x40x40cm)', '9000៛', '8500៛', '8000៛']
//       ]
//     },
//   },

//   {
//     plan: 'Basic  ',
//     price: '$399',
//     text: [
//       '3,000៛/កញ្ចប់',
//       'ដឹកក្នុងថ្ងៃតែមួយ',
//       'ទទួល 2វេណក្នុងមួយថ្ងៃ',
//       'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
//       'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
//       'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
//       'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
//       'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
//       'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
//       'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
//     ],
//     heading: [
//       'Size',
//       '10 - 30',
//       '30 +'
//     ],
//     body: {
//       rows: [
//         ['Standard Size (up to 5kg) (25x25x25cm)', '3000៛', '4000៛'],
//         ['Medium Size (up to 10kg) (40x30x30cm)', '8000៛', '6000៛'],
//         ['Large Size (up to 20kg) (60x40x40cm)', '8000៛', '7000៛']
//       ]
//     },
//   },

//   {
//     plan: 'Standard',
//     price: '$699',
//     text: [
//       '2,500៛/កញ្ចប់',
//       'ដឹកក្នុងថ្ងៃតែមួយ',
//       'ទទួល 2វេណក្នុងមួយថ្ងៃ',
//       'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
//       'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
//       'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
//       'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
//       'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
//       'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
//       'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
//     ],
//     heading: [
//       'Size',
//       '10 - 30',
//       '30 +'
//     ],
//     body: {
//       rows: [
//         ['Standard Size (up to 5kg) (25x25x25cm)', '2500៛', '4000៛'],
//         ['Medium Size (up to 10kg) (40x30x30cm)', '4500៛', '6000៛'],
//         ['Large Size (up to 20kg) (60x40x40cm)', '6500៛', '8000៛']
//       ]
//     },
//   },

//   {
//     plan: 'Premium',
//     price: '$1,299',
//     text: [
//       '1,900៛/កញ្ចប់',
//       'ដឹកក្នុងថ្ងៃតែមួយ',
//       'ទទួល 2វេណក្នុងមួយថ្ងៃ',
//       'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
//       'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
//       'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
//       'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
//       'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
//       'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
//       'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
//     ],
//     heading: [
//       'Size',
//       '10 - 30',
//       '30 +'
//     ],
//     body: {
//       rows: [
//         ['Standard Size (up to 5kg) (25x25x25cm)', '1900៛', '4000៛'],
//         ['Medium Size (up to 10kg) (40x30x30cm)', '2900៛', '6000៛'],
//         ['Large Size (up to 20kg) (60x40x40cm)', '3900៛', '8000៛']
//       ]
//     },
//   },
// ];

// const images = [
//   '../../assets/images/price-image/image-1.png',
//   '../../assets/images/price-image/image-2.png',
//   '../../assets/images/price-image/image-3.png',
//   '../../assets/images/price-image/image-4.png',
// ];


const TELEGRAM_BOT_TOKEN = '7488110118:AAF1yYnZwMivBG4iaNE-KkLm_o1BlDKbDcQ';
const TELEGRAM_CHAT_ID = '768856332';

const Price = () => {

  const [selected, setSelected] = useState('month');
  const [isSending, setIsSending] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone_number, SetPhone_number] = useState('');
  const [address, SetAddress] = useState('');
  const [activeModalIndex, setActiveModalIndex] = useState(null);

  const openModal = (index) => setActiveModalIndex(index);
  const closeModal = () => {
    setActiveModalIndex(null);
    setName('');
    setEmail('');
    SetPhone_number('');
    SetAddress('');
  };


  const sendToTelegram = async (plan, price, name, email,phone_number,address) => {
    const message = `NEW PLAN SELECTED: ${plan}\nPrice: ${price}\nName: ${name}\nEmail: ${email}\nPhone Number: ${phone_number}\nAddress: ${address}`;

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

      const data = await response.json();

      if (!data.ok) {
        throw new Error(data.description || 'Telegram API error');
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
    } catch (error) {
      console.log(error);
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

  const handleSubmit = (e, priceItem) => {
    e.preventDefault();
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }
    if (!email.trim()) {
      alert('Please enter your email');
      return;
    }
    if (!phone_number.trim()) {
      alert('Please enter your email');
      return;
    }
    if (!address.trim()) {
      alert('Please enter your email');
      return;
    }
    sendToTelegram(priceItem.plan, priceItem.price, name, email, phone_number, address);
    closeModal();
  };

  const monthly = [
    {
      plan: 'Free',
      price: '$0.00',
      text: [
        '3,000៛ - 5,000៛/កញ្ចប់',
        'ដឹកក្នុងថ្ងៃតែមួយ',
        'ទទួល 2វេណក្នុងមួយថ្ងៃ',
        'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
        'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
        'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
        'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
        'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
        'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
        'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
      ],
      heading: [
        'Size',
        '1 - 10',
        '10 - 30',
        '30 +'
      ],
      body: {
        rows: [
          ['Standard Size (up to 5kg) (25x25x25cm)', '5000៛', '4500៛', '4000៛'],
          ['Medium Size (up to 10kg) (40x30x30cm)', '7000៛', '6500៛', '6000៛'],
          ['Large Size (up to 20kg) (60x40x40cm)', '9000៛', '8500៛', '8000៛']
        ]
      },
    },

    {
      plan: 'Basic  ',
      price: '$39.00',
      text: [
        '3,000៛/កញ្ចប់',
        'ដឹកក្នុងថ្ងៃតែមួយ',
        'ទទួល 2វេណក្នុងមួយថ្ងៃ',
        'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
        'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
        'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
        'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
        'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
        'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
        'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
      ],
      heading: [
        'Size',
        '10 - 30',
        '30 +'
      ],
      body: {
        rows: [
          ['Standard Size (up to 5kg) (25x25x25cm)', '3000៛', '4000៛'],
          ['Medium Size (up to 10kg) (40x30x30cm)', '8000៛', '6000៛'],
          ['Large Size (up to 20kg) (60x40x40cm)', '8000៛', '700៛']
        ]
      },
    },

    {
      plan: 'Standard',
      price: '$69.00',
      text: [
        '2,500៛/កញ្ចប់',
        'ដឹកក្នុងថ្ងៃតែមួយ',
        'ទទួល 2វេណក្នុងមួយថ្ងៃ',
        'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
        'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
        'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
        'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
        'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
        'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
        'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
      ],
      heading: [
        'Size',
        '10 - 30',
        '30 +'
      ],
      body: {
        rows: [
          ['Standard Size (up to 5kg) (25x25x25cm)', '2500៛', '4000៛'],
          ['Medium Size (up to 10kg) (40x30x30cm)', '4500៛', '6000៛'],
          ['Large Size (up to 20kg) (60x40x40cm)', '6500៛', '8500៛']
        ]
      },
    },

    {
      plan: 'Premium',
      price: '$129.00',
      text: [
        '1,900៛/កញ្ចប់',
        'ដឹកក្នុងថ្ងៃតែមួយ',
        'ទទួល 2វេណក្នុងមួយថ្ងៃ',
        'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
        'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
        'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
        'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
        'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
        'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
        'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
      ],
      heading: [
        'Size',
        '10 - 30',
        '30 +'
      ],
      body: {
        rows: [
          ['Standard Size (up to 5kg) (25x25x25cm)', '1900៛', '4000៛'],
          ['Medium Size (up to 10kg) (40x30x30cm)', '2900៛', '6000៛'],
          ['Large Size (up to 20kg) (60x40x40cm)', '3900៛', '8000៛']
        ]
      },
    },
  ];

  const yearly = [
    {
      plan: 'Free',
      price: '$0.00',
      text: [
        '3,000៛ - 5,000៛/កញ្ចប់',
        'ដឹកក្នុងថ្ងៃតែមួយ',
        'ទទួល 2វេណក្នុងមួយថ្ងៃ',
        'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
        'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
        'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
        'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
        'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
        'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
        'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
      ],
      heading: [
        'Size',
        '1 - 10',
        '10 - 30',
        '30 +'
      ],
      body: {
        rows: [
          ['Standard Size (up to 5kg) (25x25x25cm)', '5000៛', '4500៛', '4000៛'],
          ['Medium Size (up to 10kg) (40x30x30cm)', '7000៛', '6500៛', '6000៛'],
          ['Large Size (up to 20kg) (60x40x40cm)', '9000៛', '8500៛', '8000៛']
        ]
      },
    },

    {
      plan: 'Basic  ',
      price: '$399',
      text: [
        '3,000៛/កញ្ចប់',
        'ដឹកក្នុងថ្ងៃតែមួយ',
        'ទទួល 2វេណក្នុងមួយថ្ងៃ',
        'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
        'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
        'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
        'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
        'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
        'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
        'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
      ],
      heading: [
        'Size',
        '10 - 30',
        '30 +'
      ],
      body: {
        rows: [
          ['Standard Size (up to 5kg) (25x25x25cm)', '3000៛', '4000៛'],
          ['Medium Size (up to 10kg) (40x30x30cm)', '8000៛', '6000៛'],
          ['Large Size (up to 20kg) (60x40x40cm)', '8000៛', '7000៛']
        ]
      },
    },

    {
      plan: 'Standard',
      price: '$699',
      text: [
        '2,500៛/កញ្ចប់',
        'ដឹកក្នុងថ្ងៃតែមួយ',
        'ទទួល 2វេណក្នុងមួយថ្ងៃ',
        'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
        'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
        'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
        'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
        'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
        'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
        'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
      ],
      heading: [
        'Size',
        '10 - 30',
        '30 +'
      ],
      body: {
        rows: [
          ['Standard Size (up to 5kg) (25x25x25cm)', '2500៛', '4000៛'],
          ['Medium Size (up to 10kg) (40x30x30cm)', '4500៛', '6000៛'],
          ['Large Size (up to 20kg) (60x40x40cm)', '6500៛', '8000៛']
        ]
      },
    },

    {
      plan: 'Premium',
      price: '$1,299',
      text: [
        '1,900៛/កញ្ចប់',
        'ដឹកក្នុងថ្ងៃតែមួយ',
        'ទទួល 2វេណក្នុងមួយថ្ងៃ',
        'ត្រលប់អីវ៉ាន់ដោយមិនគិតថ្លៃ',
        'ផ្តល់ឃ្លាំងស្តុកផលិតផលដោយមិនគិតថ្លៃ',
        'ទទួលប្រាក់ជំនួសដោយមិនគិតថ្លៃ',
        'ទទួលបានសារជូនដំណឹងភ្លាមៗតាមតេឡេក្រាម',
        'ក្រុមការងារដោះស្រាយបញ្ហាផ្ទាល់មួយទល់មួយ',
        'របាយការណ៍ និងការទូទាត់ប្រាក់ក្នុងថ្ងៃតែមួយ',
        'ធានាសំណង 100% លើទំនិញដែលបាត់បង់'
      ],
      heading: [
        'Size',
        '10 - 30',
        '30 +'
      ],
      body: {
        rows: [
          ['Standard Size (up to 5kg) (25x25x25cm)', '1900៛', '4000៛'],
          ['Medium Size (up to 10kg) (40x30x30cm)', '2900៛', '6000៛'],
          ['Large Size (up to 20kg) (60x40x40cm)', '3900៛', '8000៛']
        ]
      },
    },
  ];
  const plans = selected === 'month' ? monthly : yearly;



  return (
    <>
      <ToastContainer />
      <div className='m-2 sm:m-5 xl:m-10'>
        <div className='w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] xl:h-[90vh] relative rounded-[20px] z-[50]' style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <Navbar />
          <div className='w-full h-full flex flex-col items-center justify-center text-[#fff]' data-aos="fade-up">
            <h2 className='text-[30px] sm:text-[40px] lg:text-[60px] font-[700] leading-none'>គម្រោងតម្លៃ</h2>
          </div>

          <div className='mx-2 sm:mx-4 relative'  data-aos="fade-up">
            <div className='absolute -bottom-[100px] md:-bottom-[80px] lg:-bottom-[100px] left-1/2 -translate-x-1/2 w-full max-w-7xl p-4 sm:p-10 xl:p-20 rounded-[20px] mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-[#fff] text-[13px] lg:text-[16px]' style={{ background: "radial-gradient(87.03% 87.03% at 39.58% 60.25%, rgba(255, 60, 103, 0.8) 0%, #EC1C24 100%)" }}>
              <div className='w-full md:w-1/3 flex items-center justify-start md:justify-center order-2 md:order-none'>
                <a href="#"
                  className="inline-block bg-gradient-to-l from-[#652D90] to-[#9000FF] hover:bg-gradient-to-l hover:from-[#9000FF] hover:to-[#652D90] transition-all duration-300 text-white px-6 lg:px-10 py-2 lg:py-4 rounded-full">
                  ចុះឈ្មោះឥឡូវនេះ
                </a>
              </div>
              <div className='w-full md:w-2/3 order-1 md:order-none'>
                <p className='max-w-[700px] mx-auto text-start text-[13px] md:text-[14px] xl:text-[16px]'>អេវើរេក អិចប្រេស គឺជាក្រុមហ៊ុនសេវាដឹកជញ្ជូនក្នុងប្រទេសកម្ពុជា ដែលមានបំណងជួយអភិវឌ្ឍអាជីវកម្មក្នុងស្រុក ដោយផ្តល់សេវាដឹកជញ្ជូនដែលលឿន អាចទុកចិត្តបាន និងមានតម្លៃសមរម្យ។ យើងខ្ញុំមានគោលដៅក្លាយជាវេទិកាដឹកជញ្ជូនឈានមុខគេសម្រាប់ប្រជាជនកម្ពុជា ដោយផ្អែកលើការជឿជាក់របស់អតិថិជន ប្រព័ន្ធស្វ័យប្រវត្តិកម្ម និងសម្ព័ន្ធភាពជាដៃគូអាជីវកម្មដ៏រឹងមាំ។</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='w-full min-h-screen relative -mt-[5rem]'>
        <div className='w-full min-h-screen flex flex-col items-center justify-end pt-52 pb-20' style={{ zIndex: -20, backgroundImage: `url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className='w-full h-full max-w-7xl mx-auto px-2 gap-4 text-[#662C93] text-center'  data-aos="fade-up">
            <h2 className='text-[20px] lg:text-[30px] text-[#EC1C24] font-[600] max-w-[440px] mx-auto'>ជ្រើសរើសគម្រោងដែលស្របតាមតម្រូវការអាជីវកម្មអ្នក</h2>
            <p className='text-[13px] md:text-[14px] xl:text-[16px]'>យើងមានគម្រោងសមាជិកមួយចំនួន ដែលជួយអោយអាជីវកម្មអ្នកសន្សំសំចៃលើសេវាដឹកប្រចាំថ្ងៃ និងបង្កើនប្រាក់ចំណេញដល់អាជីវកម្មអ្នក។</p>
          </div>

          <div className='w-full flex flex-col items-center justify-center'>
            <div className="inline-flex items-center justify-center rounded-full bg-white p-1 font-semibold mt-10">
              <button onClick={() => setSelected('month')} className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full cursor-pointer transition-all duration-300 ${selected == 'month' ? 'bg-gradient-to-r from-[#EC1C24] to-[#FF3C67] text-white shadow-md text-[14px] md:text-[16px]' : 'text-[#EC1C24]'}`}>
                ប្រចាំខែ
              </button>
              <button onClick={() => setSelected('year')} className={`px-4 sm:px-8 py-2 sm:py-3 rounded-full cursor-pointer transition-all duration-300 ${selected == 'year' ? 'bg-gradient-to-r from-[#EC1C24] to-[#FF3C67] text-white shadow-md text-[14px] md:text-[16px]' : 'text-[#EC1C24]'}`}>
                ប្រចាំឆ្នាំ
              </button>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 px-2 mt-10 md:px-4 xl:px-10'>
              {plans.map((priceItem, index) => (
                <div key={index} className='gradient-border'>
                  <div className='text-[40px] md:text-[50px] text-[#EC1C24] font-[500] p-6'>
                    <h1 className='text-[20px] lg:text-[30px] font-[500] text-[#EC1C24]/50'>{priceItem.plan}</h1>
                    <h2>
                      {priceItem.price} <span className='text-[20px] md:text-[30px] text-[#000]/50'>/{selected === 'month' ? 'ខែ' : 'ឆ្នាំ'}</span>
                    </h2>
                  </div>
                  <hr className='border-2 border-t-0 border-[#EC1C24]' />
                  <ul className="list-none p-6 flex flex-col gap-4 text-[13px] md:text-[14px] xl:text-[16px]">
                    {priceItem.text.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <svg className='w-6 h-6' viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="15.9795" cy="15" r="15" fill="#EC1C24" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M31.3586 4.47303C32.1196 5.15782 32.1908 6.34247 31.5181 7.12223L17.4013 23.3674C17.2383 23.555 17.04 23.7075 16.8181 23.8158C16.5962 23.9241 16.3552 23.986 16.1094 23.9979C15.8636 24.0098 15.6179 23.9714 15.3869 23.885C15.156 23.7986 14.9443 23.6659 14.7646 23.4948L5.55796 14.7474C5.20379 14.4077 4.99615 13.939 4.98045 13.4438C4.96475 12.9486 5.14226 12.4673 5.47418 12.1049C5.80609 11.7426 6.26542 11.5288 6.75175 11.5102C7.23808 11.4916 7.71186 11.6698 8.06953 12.0058L15.9013 19.4285L28.766 4.63298C28.9264 4.44827 29.121 4.29759 29.3387 4.18955C29.5564 4.08152 29.7928 4.01827 30.0346 4.00341C30.2763 3.98855 30.5186 4.02238 30.7474 4.10297C30.9763 4.18355 31.1873 4.30931 31.3684 4.47303H31.3586Z" fill="white" />
                        </svg>

                        <span>{item}</span>

                        {i === 0 && (
                          <div className="group relative inline-block">
                            <svg
                              className="ml-4 w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 50 50"
                            >
                              <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z" />
                            </svg>

                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-white text-[#662C93] text-xs border border-[#EC1C24] shadow-lg z-50 p-4 rounded-[10px] max-h-80 md:w-[27rem] sm:w-[20rem] xs:w-[18rem]">
                              <table className="table-fixed w-full text-center border-separate border-spacing-y-1 text-[12px]">
                                <thead>
                                  <tr>
                                    {priceItem.heading.map((head, i) => (
                                      <th key={i} className="py-2 px-2 break-words">{head}</th>
                                    ))}
                                  </tr>
                                </thead>
                                <tbody>
                                  {priceItem.body.rows.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                      {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className="px-2 py-1 break-words">{cell}</td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>

                  <div className='px-6 pb-6'>
                    <button
                      onClick={() => openModal(index)}
                      className='custom-btn w-full block py-4 text-[#EC1C24] cursor-pointer font-[600] rounded-full'
                    >
                      <span>Choose Plan</span>
                    </button>
                  </div>

                  {activeModalIndex === index && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[999]">
                      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative scale-100 opacity-100 transition-all duration-300 animate-[fadeIn_0.3s_ease-in-out]">
                        <button
                          onClick={closeModal}
                          className="absolute top-2 right-4 text-[#EC1C24] text-2xl"
                        >
                          &times;
                        </button>

                        <form onSubmit={(e) => handleSubmit(e, priceItem)}>
                          <div className='flex items-center justify-between mt-5 py-2 rounded-md shadow-md'>
                            <h1 className='text-[20px] lg:text-[30px] font-[500] text-[#EC1C24]'>{priceItem.plan}</h1>
                            <h2 className='text-[20px] md:text-[30px] text-[#EC1C24]'>{priceItem.price} <span className='text-[14px] md:text-[20px] text-[#000]/50'>/{selected === 'month' ? 'ខែ' : 'ឆ្នាំ'}</span></h2>
                          </div>

                          <div className="mt-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Your name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                              required
                            />
                          </div>
                          <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Your email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                              required
                            />
                          </div>
                          <div className="mt-4">
                            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                              type="text"
                              id="phone_number"
                              name="phone_number"
                              placeholder="Your Phone Number"
                              value={phone_number}
                              onChange={(e) => SetPhone_number(e.target.value)}
                              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                              required
                            />
                          </div>
                          <div className="mt-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                            <textarea type="text"
                              id="address"
                              name="address"
                              placeholder="Your Address"
                              value={address}
                              onChange={(e) => SetAddress(e.target.value)}
                              className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                              rows='3'
                              required></textarea>
                          </div>

                          <button type="submit" className="block font-[600] mt-4 px-8 py-3 float-end text-[#000] border border-[#EC1C24] hover:bg-[#EC1C24] hover:text-[#fff] transition-all duration-300 rounded-full">
                            {isSending ? 'Sending...' : 'Send'}
                          </button>
                        </form>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="scroller-track gap-2">
          <img src={price1} alt="" className="w-full h-[500px]" />
          <img src={price2} alt="" className="w-full h-[500px]" />
          <img src={price3} alt="" className="w-full h-[500px]" />
          <img src={price4} alt="" className="w-full h-[500px]" />
          <img src={price1} alt="" className="w-full h-[500px]" />
          <img src={price2} alt="" className="w-full h-[500px]" />
          <img src={price3} alt="" className="w-full h-[500px]" />
          <img src={price4} alt="" className="w-full h-[500px]" />
        </div>
      </div>

      <Footer />
    </>
  )
}

export default Price