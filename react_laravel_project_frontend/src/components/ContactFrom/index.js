import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import Swal from "sweetalert2";


const ContactForm = () => {

    const [contactData, setContactData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleContactInfo = (e) => {
        e.preventDefault();

        console.log(contactData);

        axios
            .post(`http://127.0.0.1:8000/api/addNewContactMessage`, contactData)
            .then((response) => {

                console.log('Contact Message Saved successfully');
            })
            .catch((error) => {
                console.error('Error sending Contact Message:', error);
            });

        setContactData({
            name: '',
            email: '',
            // subject: '',
            message: '',
        });


    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setContactData({
            ...contactData,
            [name]: value,
        });
    };

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0hedfhl', 'template_msf916d', form.current, '6idwdnqqDlay3xEHQ')
            .then((result) => {
                console.log(result.text);
                // alert('Message Sent Successfully');
            }, (error) => {
                console.log('error:');
                console.log(error.text);
            });

        Swal.fire({
            icon: "success",
            title: "Your Contact Message Send Successfully !",
            showConfirmButton: false,
            timer: 2500,
        }).then((result) => {
            // history.push('/');
        });

    };
    return (
        <form ref={form} onSubmit={(e) => { sendEmail(e); handleContactInfo(e); }} className="contact-validation-active" >
            <div className="row">
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input type="text" name="name" placeholder="Your Name" onChange={handleInputChange} value={contactData.name} />
                    </div>
                </div>
                <div className="col col-lg-6 col-12">
                    <div className="form-field">
                        <input type="email" name="email" placeholder="Your Email" onChange={handleInputChange} value={contactData.email} />
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <input type="text" name="subject" placeholder="Subject" />
                    </div>
                </div>
                <div className="col col-lg-12 col-12">
                    <div className="form-field">
                        <textarea name="message" placeholder="Message" onChange={handleInputChange} value={contactData.message} />
                    </div>
                </div>
                <div className="submit-area">
                    <button type="submit" className="theme-btn">Submit Now</button>
                </div>
            </div>
        </form >
    )
}

export default ContactForm;