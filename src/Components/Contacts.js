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
                            {/* Contact info goes here */} </div>

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
