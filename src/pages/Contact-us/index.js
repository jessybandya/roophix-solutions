import React, { useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Swal from 'sweetalert2'
import { toast } from 'react-toastify'

function ContactUs() {
  const [fullName, setFullName] = useState('')
  const [senderEmail, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')
  const [loading, setLoading] = useState(false)

  const submitToAdmin = () => {
    setLoading(true);
    if (fullName === '' || senderEmail === '' || phone === '' || subject === '' || message === '') {
      toast.error('Please fill all fields!', {
        position: toast.POSITION.TOP_CENTER
      });
      setLoading(false);
      return;
    } else {
      const confirmDetails = async () => {
        const result = await Swal.fire({
          title: 'Confirm your details',
          html: `Name: ${fullName}<br/>
                 Phone Number: ${phone}<br/>
                 Email: ${senderEmail}<br/>
                  Subject: ${subject}
                 `,
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Confirm',
          cancelButtonText: 'Cancel',
          reverseButtons: true,
          customClass: {
            container: 'my-swal-container', // Add a custom CSS class name
          },
        });

        if (result.isConfirmed) {
              setLoading(true);
              sendEmail()
                Swal.fire({
                  icon: 'success',
                  title: 'Message sent successfully!',
                  text: 'We will get back to you shortly either via phone or email. Thank you!',
                })
                  setLoading(false);
                  setFullName('');
                  setEmail('');
                  setPhone('');
                  setMessage('');
        } else {
          setLoading(false);
        }
      };

      confirmDetails();
    }
  };


  const sendEmail = () => {
    const email = 'jessy.bandya5@gmail.com '; // Replace with the email address you want to send the email to
    const body = `Dear Roophix Admin,\n\n${message}\n\nBest regards,\n${fullName}\n${senderEmail}\n${phone}`;

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank');
  };
  return (
    <div>
    <Header />
    <div>
        {/* Start Page Title Area */}
        <div className="page-title-area bg-3">
          <div className="container">
            <div className="page-title-content">
              <h2>Contact</h2>
              <ul>
                <li>
                  <a href="index.html">
                    Home 
                  </a>
                </li>
                <li className="active">Contact</li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Page Title Area */}
        {/* Start Contact Area */}
        <section className="contact-area pt-100 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-form">
                  <h2>Send us a message</h2>
                  <div id="contactForm">
                    <div className="row">
                      <div className="col-lg-12 col-sm-6">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                          value={fullName}
                          onChange={e => setFullName(e.target.value)}
                          type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                          value={senderEmail}
                          onChange={e => setEmail(e.target.value)}
                          type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6">
                        <div className="form-group">
                          <label>Phone</label>
                          <input 
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          type="text" name="phone_number" id="phone_number" required data-error="Please enter your number" className="form-control" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-sm-6">
                        <div className="form-group">
                          <label>Subject</label>
                          <input
                          value={subject}
                          onChange={e => setSubject(e.target.value)}
                          type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                          value={message}
                          onChange={e => setMessage(e.target.value)}
                          name="message" className="form-control" id="message" cols={30} rows={6} required data-error="Write your message" defaultValue={""} />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="col-lg-12 col-md-12">
                        <button onClick={submitToAdmin} className="default-btn">
                          <span>Send message</span>
                        </button>
                        <div id="msgSubmit" className="h3 text-center hidden" />
                        <div className="clearfix" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-info">
                  <h2>Get in touch</h2>
                  <ul className="address">
                    <li className="location">
                      <i className="ri-map-pin-2-fill" />
                      <span>Address</span>
                      University Way, Nairobi Kenya
                    </li>
                    <li>
                      <i className="ri-mail-line" />
                      <span>Email</span>
                      <a href="mailto: jessy.bandya5@gmail.com"><span>jessy.bandya5@gmail.com</span></a>
                    </li>
                    <li>
                      <i className="ri-phone-fill" />
                      <span>Phone</span>
                      <a href="tel:+254746749307">+254746749307</a>
                    </li>
                  </ul>
                </div>
                <div className="map-area">
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Contact Area */}
      </div>
    <Footer />
    </div>
  )
}

export default ContactUs