import React, { useEffect, useState } from "react";
import Navbar from "../Components/navBar/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Button from "../Components/Button";
import MobileStore from "../Components/Sections/MobileStore";
import { Section } from "../Components/common";
import BlogCard from "../Components/BlogCard";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom/dist";

const LandingPage = () => {
  const navigate = useNavigate();
  const [authloading, setAuthloading] = useState(true);
  // AOS
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (token) {
      navigate(
        user?.accountType === 1 ? "/borrowersDashboard" : "/lendersDashboard"
      );
      return;
    }
    setAuthloading(false);
  }, [navigate]);

  if (authloading) return;

  //

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}

      <section className="bg-[#F5F1F1]">
        <div
          id="heroSection"
          className="pt-[66px] lg:max-w-[1400px] mx-auto flex items-center w-full p-10 bg-[#F5F1F1] justify-between"
        >
          <div id="hero-text" className="lg:w-[50%] text-left">
            <h1 className="lg:text-[60px] text-[35px] leading-normal  lg:leading-[70px] font-extrabold">
              Empower Your{" "}
              <span className="text-primary">Financial Growth</span>
            </h1>
            <p className="py-[30px] text-[18px] text-justify lg:w-[80%]">
              The PadiPay Lending Platform aims to provide an online lending
              marketplace that connects borrowers seeking loans with investors
              looking to invest in loan opportunities.
            </p>

            <div className=" hover:text-md">
              <Link to="/signup">
                <Button text="Get Started" size="md" />
              </Link>
            </div>
          </div>

          {/* Hero Right */}
          <div className="hidden lg:w-[50%] lg:flex items-center justify-center  mt-10">
            <img
              src={
                "https://ik.imagekit.io/gru3qfrss/Group%2023936%20(2).png?updatedAt=1700484441946"
              }
              className="w-[60%]"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
              alt="phone"
            />

            {/* downloadIcons */}
            <div id="download-section" className="self-end mb-16 w-[100px]">
              <Link to="http://" target="_blank" rel="noopener noreferrer">
                <img
                  src={"https://ik.imagekit.io/gru3qfrss/appStore.png?"}
                  alt="app store"
                  className="mb-2"
                />
              </Link>
              <Link to="http://" target="_blank" rel="noopener noreferrer">
                <img
                  src={"https://ik.imagekit.io/gru3qfrss/googlePlay.png?"}
                  alt="google play"
                  className=""
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- COMMUNITY SECTION --> */}
      <section
        id="section-one"
        className="w-full lg:max-w-[1400px] mx-auto lg:h-[700px] bg-white flex items-center justify-between"
      >
        {/* left */}
        <div
          id="section-one-text"
          className="flex flex-col justify-center gap-5 lg:h-full bg-white px-10 py-20 text-left max-w-2xl"
          data-aos="fade-right"
        >
          <h2 className="text-4xl font-bold">
            Discover Our Collaborative{" "}
            <span className="text-primary">Community</span>
          </h2>

          <div className="hover:text-md">
            <Link to="/signup">
              <Button text={"Connect and Engage"} />
            </Link>
          </div>

          <p className="lg:text-lg">
            Build a thriving lending community where borrowers and lenders can
            interact, share insights, and foster meaningful connections. Our
            platform's Community Section serves as a hub for engagement and
            support.
          </p>
        </div>
        {/* right */}
        <div className="hidden lg:flex items-center justify-start relative">
          <img
            src={
              "https://cdn.hashnode.com/res/hashnode/image/upload/v1700297603689/20b89194-e953-434c-a635-fe80ce46d112.jpeg"
            }
            alt="man and a girl"
            className="h-full rounded"
          />
        </div>
      </section>

      {/* <!-- NON INTEREST --> */}
      <section id="section-two" className="text-center  bg-[#f0f0f0] pt-[80px]">
        <h3 className="text-primary font-bold lg:text-4xl mb-4 text-2xl">
          Non-Interest Credit Facility
        </h3>
        <p className="lg:text-xl text-center lg:w-2/4 mx-auto">
          We at PadiPay provides a no-interest credit facilities, which
          frequently rely on asset based financing to give lenders assurance. In
          this arrangement, the loan is secured by real property or other forms
          of collateral. Until the borrower pays back the loan, the lender is
          the legal owner of the business.
        </p>
        {/* <!-- girl --> */}
        <div id="section-three" className="w-3/5 mx-auto mt-8">
          <img src={"https://ik.imagekit.io/gru3qfrss/Lady2.png"} alt="girl" />
        </div>
      </section>

      {/* <!-- STEP SECTION --> */}
      <section
        id="step-section"
        className="bg-primary pb-[40px] pt-[80px] text-white font-bold text-center"
      >
        <h3 className="lg:text-4xl text-2xl mb-3">How It Works:</h3>
        <h3 className="lg:text-4xl text-2xl mb-6">
          A Simple Path to Financial Growth
        </h3>
        <img
          src={"https://ik.imagekit.io/gru3qfrss/Group%2023937.png"}
          alt=""
          className="lg:w-3/5 mx-auto lg:my-20"
          data-aos="fade-right"
        />
      </section>

      {/* <!-- CARD SECTION --> */}
      <section className="card-section flex flex-col lg:my-20 pb-6 px-10 pt-[80px] gap-12 lg:max-w-[920px] mx-auto">
        <Link
          to="/"
          className="shadow-sm lg:flex text-white gap-4 rounded-xl p-6 bg-[#323232]"
          data-aos="fade-right"
        >
          <img
            src={
              "https://ik.imagekit.io/gru3qfrss/Vector.png?updatedAt=1700484442611"
            }
            className="w-[30%]"
            alt=""
          />
          <div className="text-left">
            <h3 className="text-4xl font-bold mb-3">Lenders</h3>
            <p className="lg:text-lg">
              Are you ready to explore exciting investment opportunities and
              contribute to borrowers' financial growth? PadiPay's Lending
              Platform opens doors to a world of possibilities.
            </p>
          </div>
        </Link>

        <Link
          to="/BorrowersPage"
          className="shadow-sm lg:flex text-white gap-4 bg-primary rounded-xl p-6"
          data-aos="fade-left"
        >
          <img
            src={"https://ik.imagekit.io/gru3qfrss/unsplash_amX7z6WNQmk.png"}
            className="w-[30%]"
            alt=""
          />
          <div className="text-left ">
            <h3 className="text-4xl font-bold mb-3">Borrowers</h3>
            <p className="lg:text-lg">
              Are you ready to turn your dreams into reality? PadiPay's Lending
              Platform connects you with investors who believe in your vision.
            </p>
          </div>
        </Link>
      </section>

      {/* Friendly interest rate*/}
      <section className="bg-[#f0f0f0]">
        <Section className="flex item-center lg:pt-[80px] w-full">
          <div className="hidden lg:flex w-[50%]">
            <img
              src={"https://ik.imagekit.io/gru3qfrss/LadyImage1.png"}
              alt="woman-logo"
              className=""
            />
          </div>
          <div className=" pt-20 text-right  w-[50%]">
            <h3 className="font-bold text-left text-5xl">
              Friendly <span className="text-primary">Interest Rate</span>{" "}
            </h3>
            <img
              src={"https://ik.imagekit.io/gru3qfrss/image%203.png"}
              alt="interest-logo"
              className="w-[400px]"
            />
          </div>
        </Section>
      </section>

      {/* <!-- Register without any charges.--> */}
      <MobileStore />

      {/* <!-- SECTION SIX --> */}
      <section
        id="section-six"
        className="text-center lg:pt-[80px] font-bold p-14"
      >
        <h3 className="text-4xl mb-3">A Selection of Our Reliable</h3>
        <h3 className="text-4xl text-primary">Business Collaborators</h3>
        <div
          id="partner-logo"
          className="lg:flex gap-20 text-center justify-center item-center my-10"
        >
          <div className="lg:flex text-center items-center">
            <img
              src={"https://ik.imagekit.io/gru3qfrss/logo2.png"}
              alt="Tiidelab"
            />
          </div>
          <div className="lg:flex text-center items-center">
            <img
              src={"https://ik.imagekit.io/gru3qfrss/logo3.png"}
              alt="NECA"
            />
          </div>
          <div className="lg:flex text-center items-center">
            <img src={"https://ik.imagekit.io/gru3qfrss/logo1.png"} alt="ITF" />
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section className="bg-[#f0f0f0] pt-14 pb-32 ">
        <h3 className="text-4xl text-primary mb-16 text-center font-semibold">
          Recent posts
        </h3>

        <div className="blog-section flex lg:flex-row flex-col gap-10 justify-center align-center">
          <BlogCard
            coverImage="https://ik.imagekit.io/gru3qfrss/pretty-young-black-lady-holding-money-celebrating-front-white-background.jpg?"
            title="PadiPay: Benefits of using a loan platform"
            url="blog"
            publishedDate="20/11/2023"
            brief="The lending industry is no
exception. Digital transformation has become a pivotal force, revolutionizing
traditional lending practices and paving the way for innovative approaches that offer
enhanced efficiency, convenience, and customer experiences."
          />
          <BlogCard
            coverImage="https://ik.imagekit.io/gru3qfrss/group-people.png"
            title="Money Lending in Nigeria: A Closer Look at the Financial Landscape"
            brief="In today's rapidly evolving digital landscape, industries across the board are undergoing transformative changes driven by technology."
            url="blog"
            publishedDate="20/11/2023"
          />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default LandingPage;
