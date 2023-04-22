import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
// import '../SendMail';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && email && message) {
            if (!validateEmail(email)) {
                setErrorMessage('Please enter a valid email address.');
                return;
            }

            // Send form data to the backend for processing, e.g. using an API or server-side code
            // Replace "send_email.php" with the appropriate endpoint or function for your backend
            // Send form data to the backend for processing
            fetch('../SendMail', { // Replace with the appropriate endpoint for your backend
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    {name: name, email: email, message: message}
                )
            }).then((response) => {
                if (response.ok) {
                    setSuccessMessage('Your message has been sent successfully!');
                } else {
                    setErrorMessage('An error occurred. Please try again later.');
                }
            }).catch((error) => {
                setErrorMessage('An error occurred. Please try again later.');
            });
        } else {
            setErrorMessage('Please fill in all required fields.');
        }
    };

    const validateEmail = (email) => {
        // Email validation using regex
        // This is a basic example and may not cover all possible email formats
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <Container fluid className="contact--us  overflow-hidden mt-3">
            <section className="csection container w-100">
                <div className="section-header ">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <p className="text-center">For Prayer, Counselling or suggetion, Kindly use the form to send us a message.</p>
                    </div>
                </div>

                <Container className="ccontainer">
                    <div className="row">
                        <div className="contact-info">
                        <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="bi bi-geo-fill"></i>
                </div>

                <div className="contact-info-content">
                  <h4 className="text-start">Address</h4>
                  <p>78, Muyiwa Opaleye Street, <br />
                    Off Sanya Street KM. 4
                    <br /> Apapa Oshodi Expressway, <br />Sanya
                    Bus-stop, Surulere, Lagos.
                  </p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="bi bi-phone-vibrate-fill"></i>
                </div>

                <div className="contact-info-content">
                  <h4>Phone</h4>
                  <p>08060755553, &nbsp; 07087476700</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <i className="bi bi-envelope-check"></i>
                </div>

                <div className="contact-info-content">
                  <h4>Email</h4>
                  <p>info@escsurulereayonio.org</p>
                </div>
              </div>
            </div>
             </div>

                        <div className="contact-form">
                            <form onSubmit={handleSubmit}
                                id="contact-form">
                                <h2>Send Message</h2>
                                {
                                successMessage && <p className="text-success">
                                    {successMessage}</p>
                            }
                                {
                                errorMessage && <p className="text-danger">
                                    {errorMessage}</p>
                            }
                                <div className="input-box">
                                    <input type="text" name="name" id="name"
                                        value={name}
                                        onChange={
                                            (e) => setName(e.target.value)
                                        }/>
                                    <span>Full Name</span>
                                </div>

                                <div className="input-box">
                                    <input type="email" name="email" id="email"
                                        value={email}
                                        onChange={
                                            (e) => setEmail(e.target.value)
                                        }/>
                                    <span>Email</span>
                                </div>

                                <div className="input-box">
                                    <textarea name="message" id="message"
                                        value={message}
                                        onChange={
                                            (e) => setMessage(e.target.value)
                                    }></textarea>
                                    <span>Type your Message...</span>
                                </div>

                                <div className="input-box">
                                    <input type="submit" value="Send" name="submit" id="submit"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
        </Container>
    );
};

export default ContactUs;
