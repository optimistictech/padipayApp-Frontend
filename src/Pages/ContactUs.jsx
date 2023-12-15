import React from "react";
import Navbar from '../Components/navBar/Navbar';
import Footer from '../Components/Footer';
const ContactPage = () => {
  return (
    <div>
      {/* Navigation */}
      <Navbar/>

      {/* Contact Section */}
      <section id="contact" className="mb-20 pt-16 md:pt-32 ">
        <div className="md:relative mt-10">
          <h1 className="font-bold text-2xl md:text-2xl text-primary px-20 px-40 mb-2 md: mb-5  ">
            Contact Us
          </h1>
          <div className="w-full bg-primary text-white p-4 md:p-20">
            <div className="w-full md:3/5">
              <p className="text-lg md:text-2xl">
                We're here to assist you <br /> in any way we can. Reach <br />out to us for
                support, <br />inquiries, or feedback.
              </p>
            </div>
          </div>
          <div className="md:absolute top-[-60px] right-4 md:right-40">
            <img
              src="https://ik.imagekit.io/el8bhalzv/Young%20man%20uses%20a%20smartphone%20in%20the%20street.png?updatedAt=1700591395939"
              alt="young man uses padipay"
              className="w-full md:w-[500px] h-[300px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="mt-10 md:mt-20 px-4 md:px-20 mb-2 md:mb-10">
        <h2 className="font-bold text-xl mt-40 md:text-2xl text-primary mb-2 md:mb-5">
          Customer Support:
        </h2>
        <div className="flex justify-between">
          <div>
            <img
              src={
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d253647.86375219026!2d3.3153624!3d6.6160965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b916beb0a74f5%3A0x626f91181ddbaeb5!2sAgege%20Pen%20Cinema!5e0!3m2!1sen!2sng!4v1702587964298!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              
              }

              alt='map'
              className='w-full h-48 md:h-auto'
            />
          </div>
          <div>
            <div className="flex justify-between w-[300px] m-10">
              <p>Support@padipay.com</p>
              <img
                src="https://ik.imagekit.io/el8bhalzv/_%20icon%20_Envelope_.png?updatedAt=1702586163889"
                alt="contact"
                className="self-center w-5 ml-3"
              />
            </div>
            <div className="flex justify-between w-[300px] m-10">
              <p>[Phone Number]</p>
              <img
                src="https://ik.imagekit.io/el8bhalzv/_%20icon%20_Alternate%20Phone_.png?updatedAt=1702586163891"
                alt="phone"
                className="w-5 self-center ml-3"
              />
            </div>
            <div className="flex justify-between w-[300px] m-10">
              <p>[Working Hours]</p>
              <img
                src="https://ik.imagekit.io/el8bhalzv/_%20icon%20_Clock_.png?updatedAt=1702586163768"
                alt="working hours"
                className="w-5 self-center ml-3"
              />
            </div>
            <div className="flex justify-between w-[300px] m-10">
              <p>[Office Address]</p>
              <img
                src="https://ik.imagekit.io/el8bhalzv/_%20icon%20_Alternate%20Map%20Marker_.png?updatedAt=1702586163780"
                alt="location"
                className="w-5 self-center ml-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Section */}
      <section className="px-4 md:px-20 mb-2 md:mb-10">
        <div>
          <h3 className="font-bold text-xl md:text-2xl text-primary mb-2 md:mb-5">
            Business Inquiries:
          </h3>
          <p className="mb-2 md:mb-4 font-bold">Email: business@padipay.com</p>
          <p className="text-sm md:text-base">
            Your experience matters to us, and we're committed to providing
            prompt <br />assistance and addressing your needs. If you have any questions
            about our <br />terms, agreements, or anything else, please don't hesitate
            to get in touch.
          </p>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
