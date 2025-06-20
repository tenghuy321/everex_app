import React, { useState } from 'react';

const TELEGRAM_BOT_TOKEN = '7488110118:AAF1yYnZwMivBG4iaNE-KkLm_o1BlDKbDcQ';
const TELEGRAM_CHAT_ID = '768856332';

const BottonSubmit = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        address: ''
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

            alert('Message sent successfully!');
            setIsOpenModal(false);
            setFormData({
                name: '',
                email: '',
                phone_number: '',
                address: ''
            });
        } catch (error) {
            alert('Error sending message, please try again.');
            console.error(error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpenModal(true)}
                className="inline-block mt-4 bg-gradient-to-l from-[#652D90] to-[#9000FF] hover:bg-gradient-to-l hover:from-[#9000FF] hover:to-[#652D90] transition-all duration-300 text-white px-6 lg:px-10 py-2 lg:py-4 rounded-full"
            >
                ចុះឈ្មោះឥឡូវនេះ
            </button>

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
        </>
    );
};

export default BottonSubmit;
