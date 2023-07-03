import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_9mqszl8', 'template_wmuq55p', form.current, 'RaS2zqy567Av3dWCj')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };


    return (
        <div className='mb-10'>
            <h2 className='p-title'>Contact</h2>

            <div className='grid justify-items-center'>
                <form ref={form} onSubmit={sendEmail} className='w-80 grid grid-cols-1 justify-center gap-y-4'>
                    <label className=''>Name</label>
                    <input type="text" name="user_name" className="input input-bordered input-success w-full max-w-xs" />
                    <label>Email</label>
                    <input type="email" name="user_email" className="input input-bordered input-success w-full max-w-xs" />
                    <label>Message</label>
                    <textarea name="message" className="input input-bordered input-success w-full max-w-xs" />
                    <input type="submit" value="Send" className="font-semibold py-2 px-4 uppercase border border-black rounded shadow bg-white hover:bg-black text-black hover:text-white my-8" />
                </form>
            </div>

        </div>
    );
};

export default Contact;