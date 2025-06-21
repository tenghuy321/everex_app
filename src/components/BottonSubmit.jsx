import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TELEGRAM_BOT_TOKEN = '7488110118:AAF1yYnZwMivBG4iaNE-KkLm_o1BlDKbDcQ';
const TELEGRAM_CHAT_ID = '768856332';

const BottonSubmit = ({ isOpen, onClose }) => {

    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        address: '',
        gender: ''
    });

    const [errors, setErrors] = useState({});
    const [isSending, setIsSending] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error on input change
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }));
    };

    const sendToTelegram = async () => {
        const message = `📩 *New Form Submission:*\n👤 Name: ${formData.name}\n✉️ Email: ${formData.email}\n📱 Phone Number: ${formData.phone_number}\n⚧️ Gender: ${formData.gender}\n🏠 Address: ${formData.address}`;
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: TELEGRAM_CHAT_ID,
                    text: message,
                    parse_mode: 'Markdown'
                }),
            });

            if (!response.ok) throw new Error('Failed to send message');

            toast.success(t('validation.success'), {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            onClose(); // Close modal properly
            setFormData({
                name: '',
                email: '',
                phone_number: '',
                address: '',
                gender: ''
            });
            setErrors({});
        } catch (error) {
            console.error(error);
            toast.error(t('validation.fail'), {
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

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = t('validation.required', { field: t('form.name') });
        if (!formData.email.trim()) {
            newErrors.email = t('validation.required', { field: t('form.email') });
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = t('validation.invalidEmail');
        }
        if (!formData.phone_number.trim()) {
            newErrors.phone_number = t('validation.required', { field: t('form.phone_number') });
        } else if (!/^\d{9,15}$/.test(formData.phone_number)) {
            newErrors.phone_number = t('validation.invalidPhone');
        }
        if (!formData.address.trim()) newErrors.address = t('validation.required', { field: t('form.address') });
        if (!formData.gender) newErrors.gender = t('validation.required', { field: t('form.gender') });


        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) {
            toast.error(t('validation.fixErrors'), {
                position: "top-right",
                autoClose: 3000,
                theme: "colored",
            });
            return;
        }

        // setIsSending(true);
        sendToTelegram();
    };

    if (!isOpen) return null;

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-[999] px-2">
                <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative scale-100 opacity-100 transition-all duration-300 animate-[fadeIn_0.3s_ease-in-out]">
                    <button
                        onClick={onClose}
                        className="absolute top-2 right-4 text-[#652D90] hover:text-[#EC1C24] text-2xl cursor-pointer"
                    >
                        &times;
                    </button>
                    <h1 className='text-[20px] lg:text-[30px] font-[500] text-[#652D90]'>ចុះឈ្មោះឥឡូវនេះ</h1>

                    <form onSubmit={handleSubmit} noValidate>
                        {/* Name */}
                        <div className="mt-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                {t('form.name')}
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={t('form.placeholder_name')}
                                className={`mt-1 w-full border rounded-md px-3 py-2 text-sm ${errors.name ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>

                        {/* Gender radio buttons */}
                        <fieldset className="mt-4">
                            <legend className="block text-sm font-medium text-gray-700">{t('form.gender')}</legend>
                            <div className="mt-1 flex gap-6">
                                {['male', 'female'].map((genderOption) => (
                                    <label key={genderOption} className="inline-flex items-center cursor-pointer">
                                        <input
                                            type="radio"
                                            name="gender"
                                            value={genderOption}
                                            checked={formData.gender === genderOption}
                                            onChange={handleChange}
                                            className="form-radio text-[#652D90]"
                                        />
                                        <span className="ml-2">{t(`form.${genderOption}`)}</span>
                                    </label>
                                ))}
                            </div>
                            {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
                        </fieldset>


                        {/* Email */}
                        <div className="mt-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                {t('form.email')}
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder={t('form.placeholder_email')}
                                className={`mt-1 w-full border rounded-md px-3 py-2 text-sm ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                        </div>

                        {/* Phone Number */}
                        <div className="mt-4">
                            <label htmlFor="phone_number" className="block text-sm font-medium text-gray-700">
                                {t('form.phone_number')}
                            </label>
                            <input
                                type="text"
                                id="phone_number"
                                name="phone_number"
                                placeholder={t('form.placeholder_phone_number')}
                                className={`mt-1 w-full border rounded-md px-3 py-2 text-sm ${errors.phone_number ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                value={formData.phone_number}
                                onChange={handleChange}
                            />
                            {errors.phone_number && <p className="text-red-500 text-xs mt-1">{errors.phone_number}</p>}
                        </div>

                        {/* Address */}
                        <div className="mt-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                                {t('form.address')}
                            </label>
                            <textarea
                                id="address"
                                name="address"
                                placeholder={t('form.placeholder_address')}
                                className={`mt-1 w-full border rounded-md px-3 py-2 text-sm ${errors.address ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                rows="3"
                                value={formData.address}
                                onChange={handleChange}
                            />
                            {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                        </div>

                        <button
                            type="submit"
                            disabled={isSending}
                            className="block font-[600] mt-4 text-[14px] md:text-[16px] px-6 py-2 md:px-8 nd:py-3 float-end text-[#000] border border-[#652D90] hover:bg-[#652D90] hover:text-[#fff] transition-all duration-300 rounded-full"
                        >
                            {isSending ? t('form.sending') : t('form.send')}
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />

        </>
    );
};

export default BottonSubmit;
