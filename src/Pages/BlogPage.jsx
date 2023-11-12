import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import bg from '../assets/blogImages/bg.jpeg';
import neems from '../assets/blogImages/neems.jpeg';
import avater from '../assets/blogImages/avater.jpeg';
import blogImage from '../assets/blogImages/blog-image.jpeg';
import money from '../assets/blogImages/money.jpeg';
import ayo from '../assets/blogImages/ayo.jpeg';
import book from '../assets/blogImages/book.jpeg';
import blog3 from '../assets/blogImages/blog3.jpeg';
import blog4 from '../assets/blogImages/blog4.jpeg';

const BlogPage = () => {
  return (
   <div>
    <Navbar/>
       {/* Main Container */}
      <div className="text-center pt-20">
        <h2 className="text-padiHead  text-4xl font-[600] leading-[36px] mb-4">PadiBlog</h2>
        <ul className="flex justify-center gap-12 leading-[24px]">
          <li className="text-[16px] font-[400]  font-Inter text-navColor "><Link to="/postForBlog">Business</Link></li>
          <li className="text-[16px] font-[400]  font-Inter text-navColor "><Link to="/postForBlog">Technology</Link></li>
          <li className="text-[16px] font-[400]  font-Inter text-navColor "><Link to="/postForBlog">Finance</Link></li>
          <li className="text-[16px] font-[400]  font-Inter text-navColor "><Link to="/postForBlog">Policy</Link></li>
          <li className="text-[16px] font-[400]  font-Inter text-navColor "><Link to="/postForBlog">Leaderships</Link></li>
        </ul>
      </div>
      <main className="relative">
        {/* Blog Nav */}
        {/* Blog Banner */}
        <section className="px-10">
            {/* i need to add linear gradient here, this was the onethere before linear-gradient(180deg, rgba(20, 22, 36, 0.00) 2.9%, rgba(23, 26, 42, 0.72) 47.14%)`, */}
          <div style={{backgroundImage: `url(${bg})`}} className="flex w-[1200px] rounded-[12px]  flex-col justify-end bg-cover lg:h-[450px] lg:mt-10 gap-10 p-[40px] container mx-auto ">
            <div className="flex items-start flex-col self-stretch gap-[24px]">
              <button className="rounded-none  py-[4px] px-[10px] 	items-center gap-[4px] bg-[#4B6BFB] text-white">
                Technology
              </button>
              <p className="text-[36px] font-[600] leading-[40px] w-[720px] font-Inter text-white">Digital Transformation: How Technology is Reshaping the Lending Industry</p>
              <div className="flex items-center gap-[20px]">
                <img src={neems} className="w-[36px] h-[36px] rounded-[28px] " />
                <p className="text-[16px] font-[500] leading-[24px] text-white">Chioma Ukoha</p>
                <p className="text-[16px] font-[400] leading-[24px] text-white">August 20, 2023</p>
              </div>
            </div>
          </div>
        </section>
        {/*  Blog columnn row start */}
        <div className=" container mx-auto flex justify-center py-8">
          <div className="flex  flex-col items-start gap-[20px]">
            <div className="flex items-start gap-[20px]">
              {/*  col -1  */}
              <Link to="/postForBlog">
              <div className="flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]">
                <img src={blogImage} className="w-[360px] h-[240pxpx] rounded-[6px]"/>
                <div className="flex p-[8px] flex-col items-start gap-[20px] self-stretch	">
                  <div className="flex flex-col items-start gap-[16px] self-stretch">
                    <button className="rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] " style={{backgroundColor: 'rgba(75, 107, 251, 0.05)'}}>
                      Technology
                    </button>
                    <p className="self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]">Digital Transformation: How Technology is Reshaping the Lending Industry</p>
                    <div className="flex items-center gap-[20px]">
                      <img src={avater} className="flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat" />
                      <p className="font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]">Chioma Ukoha</p>
                      <p className="font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]">August 20, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
              {/*  col -2  */}
              <Link to="/postForBlog">
              <div className="flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]">
                <img src={money} className="w-[360px] h-[240pxpx] rounded-[6px]" />
                <div className="flex p-[8px] flex-col items-start gap-[20px] self-stretch	">
                  <div className="flex flex-col items-start gap-[16px] self-stretch">
                    <button className="rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] " style={{backgroundColor: 'rgba(75, 107, 251, 0.05)'}}>
                      Business
                    </button>
                    <p className="self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]">The Rise of Alternative Lending: Exploring Non-Traditional Loan Options</p>
                    <div className="flex items-center gap-[20px]">
                      <img src={ayo} className="flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat" />
                      <p className="font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]">Abolaji Ayodeji</p>
                      <p className="font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]">July 28, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
              {/*  col -3  */}
              <Link to="/postForBlog">
              <div className="flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]">
                <img src={book} className="w-[360px] h-[240pxpx] rounded-[6px]" />
                <div className="flex p-[8px] flex-col items-start gap-[20px] self-stretch	">
                  <div className="flex flex-col items-start gap-[16px] self-stretch">
                    <button className="rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] " style={{backgroundColor: 'rgba(75, 107, 251, 0.05)'}}>
                      Business
                    </button>
                    <p className="self-stretch text-[#181A2A] font-Inter text-[20px] font-[600] leading-[28px]">Regulatory Landscape: Navigating Compliance Challenges in the Lending Industry</p>
                    <div className="flex items-center gap-[20px]">
                      <img src={neems} className="flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat" />
                      <p className="font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]">Nimota Kajidat</p>
                      <p className="font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]">June 29, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Row end */}
        {/*  Blog columnn row start */}
        <div className=" container mx-auto flex justify-center py-8">
          <div className="flex flex-col items-start gap-[20px]">
            <div className="flex items-start gap-[20px]">
              {/*  col -1  */}
              <Link to="/postForBlog">
              <div className="flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]">
                <img src={blog3} className="w-[360px] h-[240pxpx] rounded-[6px]" />
                <div className="flex p-[8px] flex-col items-start gap-[20px] self-stretch	">
                  <div className="flex flex-col items-start gap-[16px] self-stretch">
                    <button className="rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] " style={{backgroundColor: 'rgba(75, 107, 251, 0.05)'}}>
                      Technology
                    </button>
                    <p className="self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]">Digital Transformation: How Technology is Reshaping the Lending Industry</p>
                    <div className="flex items-center gap-[20px]">
                      <img src={avater}className="flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat" />
                      <p className="font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]">Chioma Ukoha</p>
                      <p className="font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]">August 20, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
              {/*  col -2  */}
              <Link to="/postForBlog">
              <div className="flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]">
                <img src={blog4} className="w-[360px] h-[240pxpx] rounded-[6px]"/>
                <div className="flex p-[8px] flex-col items-start gap-[20px] self-stretch	">
                  <div className="flex flex-col items-start gap-[16px] self-stretch">
                    <button className="rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] " style={{backgroundColor: 'rgba(75, 107, 251, 0.05)'}}>
                      Business
                    </button>
                    <p className="self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]">The Rise of Alternative Lending: Exploring Non-Traditional Loan Options</p>
                    <div className="flex items-center gap-[20px]">
                      <img src={ayo} className="flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat" />
                      <p className="font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]">Abolaji Ayodeji</p>
                      <p className="font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]">July 28, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
              {/*  col -3  */}
              <div className="flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]">
                <img src={book} className="w-[360px] h-[240pxpx] rounded-[6px]"/>
                <div className="flex p-[8px] flex-col items-start gap-[20px] self-stretch	">
                  <div className="flex flex-col items-start gap-[16px] self-stretch">
                    <button className="rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] " style={{backgroundColor: 'rgba(75, 107, 251, 0.05)'}}>
                      Business
                    </button>
                    <p className="self-stretch text-[#181A2A] font-Inter text-[20px] font-[600] leading-[28px]">Regulatory Landscape: Navigating Compliance Challenges in the Lending Industry</p>
                    <div className="flex items-center gap-[20px]">
                      <img src={neems} className="flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat"/>
                      <p className="font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]">Nimota Kajidat</p>
                      <p className="font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]">June 29, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Row end */}
        {/*  Blog columnn row start */}
        <div className=" container mx-auto flex justify-center py-8">
          <div className="flex flex-col items-start gap-[20px]">
            <div className="flex items-start gap-[20px]">
              {/*  col -1  */}
              <Link to="/postForBlog">
              <div className="flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]">
                <img src={blogImage} className="w-[360px] h-[240pxpx] rounded-[6px]"/>
                <div className="flex p-[8px] flex-col items-start gap-[20px] self-stretch	">
                  <div className="flex flex-col items-start gap-[16px] self-stretch">
                    <button className="rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] " style={{backgroundColor: 'rgba(75, 107, 251, 0.05)'}}>
                      Technology
                    </button>
                    <p className="self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]">Digital Transformation: How Technology is Reshaping the Lending Industry</p>
                    <div className="flex items-center gap-[20px]">
                      <img src={avater} className="flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat"/>
                      <p className="font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]">Chioma Ukoha</p>
                      <p className="font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]">August 20, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
              {/*  col -2  */}
              <Link to="/postForBlog">
              <div className="flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]">
                <img src={money} className="w-[360px] h-[240pxpx] rounded-[6px]"/>
                <div className="flex p-[8px] flex-col items-start gap-[20px] self-stretch	">
                  <div className="flex flex-col items-start gap-[16px] self-stretch">
                    <button className="rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] " style={{backgroundColor: 'rgba(75, 107, 251, 0.05)'}}>
                      Business
                    </button>
                    <p className="self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]">The Rise of Alternative Lending: Exploring Non-Traditional Loan Options</p>
                    <div className="flex items-center gap-[20px]">
                      <img src={ayo} className="flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat"/>
                      <p className="font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]">Abolaji Ayodeji</p>
                      <p className="font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]">July 28, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
              {/*  col -3  */}
              <Link to="/postForBlog">
              <div className="flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]">
                <img src={book} className="w-[360px] h-[240pxpx] rounded-[6px]" />
                <div className="flex p-[8px] flex-col items-start gap-[20px] self-stretch	">
                  <div className="flex flex-col items-start gap-[16px] self-stretch">
                    <button className="rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] " style={{backgroundColor: 'rgba(75, 107, 251, 0.05)'}}>
                      Business
                    </button>
                    <p className="self-stretch text-[#181A2A] font-Inter text-[20px] font-[600] leading-[28px]">Regulatory Landscape: Navigating Compliance Challenges in the Lending Industry</p>
                    <div className="flex items-center gap-[20px]">
                      <img src={neems} className="flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat"/>
                      <p className="font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]">Nimota Kajidat</p>
                      <p className="font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]">June 29, 2023</p>
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Row end */}
        {/* button */}
        <div className="px-[36rem]">
          <button className="bg-[#003399] text-white px-4 py-2 rounded-[10px] cursor-pointer"> <Link to="/postForBlog">Load More</Link></button>
        </div>
      </main>
      {/* FOOTER */}
   <Footer/>
      </div>
  )
}
  

  export default BlogPage

