// Import React and any additional dependencies
import React from 'react';

// Import any required CSS or external dependencies
import './output.css'; // Assuming this is your stylesheet

// Import any required images
import manImage from '../assets/images/man.png';
import mapImage from '../assets/images/map.png';
import envelopeImage from '../assets/images/envelope.png';
import phoneImage from '../assets/images/phone.png';
import clockImage from '../assets/images/clock.png';
import locationImage from '../assets/images/location.png';

// Create the React component
const ContactPage = () => {
  return (
    <div>
      {/* Navigation component goes here (if it's a separate component) */}

      {/* Contact section */}
      <section id="contact" className="mt-20">
        <div className="md:relative">
          <h1 className="font-bold text-2xl text-primary px-20 mb-5">Contact Us</h1>
          <div className="w-full bg-primary text-white p-20">
            <div className="w-[30%]">
              <p className="text-2xl">
                We're here to assist you in any way we can. Reach out to us for support, inquiries, or feedback.
              </p>
            </div>
          </div>
          <div className="md:absolute top-[-60px] right-40">
            <img src={'https://ik.imagekit.io/el8bhalzv/Young%20man%20uses%20a%20smartphone%20in%20the%20street.png?updatedAt=1700591395939'} alt="young man uses padipay" className="w-[500px] h-[500px]" />
          </div>
        </div>
      </section>

      {/* Support section */}
      <section id="support" className="mt-40 px-20 mb-10">
        <h2 className="font-bold text-2xl text-primary mb-5">Customer Support:</h2>
        <div className="flex justify-between">
          <div>
            <img src={'https://ik.imagekit.io/el8bhalzv/Colorful%20cities%20and%20countries%20on%20map.png?updatedAt=1700591372823'} alt="map" className="w-[500px]" />
          </div>
          <div>
            {/* Support details go here */}
          </div>
        </div>
      </section>

      {/* Enquiry section */}
      <section id="enquiry" className="px-20 mb-10">
        <div>
          <h3 className="font-bold text-2xl text-primary mb-5">Business Inquiries:</h3>
          <p className="mb-4 font-bold">Email: business@padipay.com</p>
          <p className="w-1/2">
            Your experience matters to us, and we're committed to providing prompt assistance and addressing your needs.
            If you have any questions about our terms, agreements, or anything else, please don't hesitate to get in touch.
          </p>
        </div>
      </section>

      {/* Footer component goes here (if it's a separate component) */}
    </div>
  );
};

// Export the component
export default ContactPage;
