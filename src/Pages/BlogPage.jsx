import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/navBar/Navbar';
import Footer from '../Components/Footer';

const BlogPage = () => {
  return (
    <div className='font-primaryFont'>
      <Navbar />
      {/* Main Container */}
      <div className='text-center pt-20'>
        <h2 className='text-padiHead  text-4xl font-[600] leading-[36px] mb-4'>
          PadiBlog
        </h2>
        <ul className='flex justify-center gap-12 leading-[24px]'>
          <li className='text-[16px] font-[400]  font-Inter text-navColor '>
            <Link to='/post-for-blog'>Business</Link>
          </li>
          <li className='text-[16px] font-[400]  font-Inter text-navColor '>
            <Link to='/post-for-blog'>Technology</Link>
          </li>
          <li className='text-[16px] font-[400]  font-Inter text-navColor '>
            <Link to='/post-for-blog'>Finance</Link>
          </li>
          <li className='text-[16px] font-[400]  font-Inter text-navColor '>
            <Link to='/post-for-blog'>Policy</Link>
          </li>
          <li className='text-[16px] font-[400]  font-Inter text-navColor '>
            <Link to='/post-for-blog'>Leaderships</Link>
          </li>
        </ul>
      </div>
      <main className='relative'>
        {/* Blog Nav */}
        {/* Blog Banner */}
        <section className='px-10'>
          {/* i need to add linear gradient here, this was the onethere before linear-gradient(180deg, rgba(20, 22, 36, 0.00) 2.9%, rgba(23, 26, 42, 0.72) 47.14%)`, */}
          <div
            style={{
              backgroundImage: `url(${'https://ik.imagekit.io/9tezgt6wp/post-for-blog1.png?updatedAt=1700151326496'})`,
            }}
            className='flex w-[1200px] rounded-[12px]  flex-col justify-end bg-cover lg:h-[450px] lg:mt-10 gap-10 p-[40px] container mx-auto '
          >
            <div className='flex items-start flex-col self-stretch gap-[24px]'>
              <button className='rounded-none  py-[4px] px-[10px] 	items-center gap-[4px] bg-[#4B6BFB] text-white'>
                Technology
              </button>
              <p className='text-[36px] font-[600] leading-[40px] w-[720px] font-Inter text-white'>
                Digital Transformation: How Technology is Reshaping the Lending
                Industry
              </p>
              <div className='flex items-center gap-[20px]'>
                <img src={''} className='w-[36px] h-[36px] rounded-[28px] ' />

                <p className='text-[16px] font-[500] leading-[24px] text-white'>
                  Chioma Ukoha
                </p>
                <p className='text-[16px] font-[400] leading-[24px] text-white'>
                  August 20, 2023
                </p>
              </div>
            </div>
          </div>
        </section>
        {/*  Blog columnn row start */}
        <div className=' container mx-auto flex justify-center py-8'>
          <div className='flex  flex-col items-start gap-[20px]'>
            <div className='flex items-start gap-[20px]'>
              {/*  col -1  */}

              <Link to='/post-for-blog'>
                <div className='flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]'>
                  <img
                    src={
                      'https://ik.imagekit.io/9tezgt6wp/post-for-blog1.png?updatedAt=1700151326496'
                    }
                    className='w-[360px] h-[240pxpx] rounded-[6px]'
                  />
                  <div className='flex p-[8px] flex-col items-start gap-[20px] self-stretch	'>
                    <div className='flex flex-col items-start gap-[16px] self-stretch'>
                      <button
                        className='rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] '
                        style={{ backgroundColor: 'rgba(75, 107, 251, 0.05)' }}
                      >
                        Technology
                      </button>
                      <p className='self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]'>
                        Digital Transformation: How Technology is Reshaping the
                        Lending Industry
                      </p>
                      <div className='flex items-center gap-[20px]'>
                        <img
                          src={
                            'https://ik.imagekit.io/9tezgt6wp/avater.jpeg?updatedAt=1700152909415'
                          }
                          className='flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat'
                        />
                        <p className='font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]'>
                          Chioma Ukoha
                        </p>
                        <p className='font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]'>
                          August 20, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/*  col -2  */}

              <Link to='/post-for-blog'>
                <div className='flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]'>
                  <img
                    src={
                      'https://ik.imagekit.io/9tezgt6wp/money.jpeg?updatedAt=1700153289546'
                    }
                    className='w-[360px] h-[240pxpx] rounded-[6px]'
                  />
                  <div className='flex p-[8px] flex-col items-start gap-[20px] self-stretch	'>
                    <div className='flex flex-col items-start gap-[16px] self-stretch'>
                      <button
                        className='rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] '
                        style={{ backgroundColor: 'rgba(75, 107, 251, 0.05)' }}
                      >
                        Business
                      </button>
                      <p className='self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]'>
                        The Rise of Alternative Lending: Exploring
                        Non-Traditional Loan Options
                      </p>
                      <div className='flex items-center gap-[20px]'>
                        <img
                          src={
                            'https://ik.imagekit.io/9tezgt6wp/ayo.jpeg?updatedAt=1700152952770'
                          }
                          className='flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat'
                        />
                        <p className='font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]'>
                          Abolaji Ayodeji
                        </p>
                        <p className='font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]'>
                          July 28, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/*  col -3  */}

              <Link to='/post-for-blog'>
                <div className='flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]'>
                  <img
                    src={
                      'https://ik.imagekit.io/9tezgt6wp/book.jpeg?updatedAt=1700153094494'
                    }
                    className='w-[360px] h-[240pxpx] rounded-[6px]'
                  />
                  <div className='flex p-[8px] flex-col items-start gap-[20px] self-stretch	'>
                    <div className='flex flex-col items-start gap-[16px] self-stretch'>
                      <button
                        className='rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] '
                        style={{ backgroundColor: 'rgba(75, 107, 251, 0.05)' }}
                      >
                        Business
                      </button>
                      <p className='self-stretch text-[#181A2A] font-Inter text-[20px] font-[600] leading-[28px]'>
                        Regulatory Landscape: Navigating Compliance Challenges
                        in the Lending Industry
                      </p>
                      <div className='flex items-center gap-[20px]'>
                        <img
                          src={
                            'https://ik.imagekit.io/9tezgt6wp/neems.jpeg?updatedAt=1700153301777'
                          }
                          className='flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat'
                        />
                        <p className='font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]'>
                          Nimota Kajidat
                        </p>
                        <p className='font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]'>
                          June 29, 2023
                        </p>
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
        <div className=' container mx-auto flex justify-center py-8'>
          <div className='flex flex-col items-start gap-[20px]'>
            <div className='flex items-start gap-[20px]'>
              {/*  col -1  */}
              <Link to='/post-for-blog'>
                <div className='flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]'>
                  <img
                    src={
                      'https://ik.imagekit.io/9tezgt6wp/blog3.jpeg?updatedAt=1700153012522'
                    }
                    className='w-[360px] h-[240pxpx] rounded-[6px]'
                  />
                  <div className='flex p-[8px] flex-col items-start gap-[20px] self-stretch	'>
                    <div className='flex flex-col items-start gap-[16px] self-stretch'>
                      <button
                        className='rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] '
                        style={{ backgroundColor: 'rgba(75, 107, 251, 0.05)' }}
                      >
                        Technology
                      </button>
                      <p className='self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]'>
                        Digital Transformation: How Technology is Reshaping the
                        Lending Industry
                      </p>
                      <div className='flex items-center gap-[20px]'>
                        <img
                          src={
                            'https://ik.imagekit.io/9tezgt6wp/avater.jpeg?updatedAt=1700152909415'
                          }
                          className='flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat'
                        />
                        <p className='font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]'>
                          Chioma Ukoha
                        </p>
                        <p className='font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]'>
                          August 20, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/*  col -2  */}

              <Link to='/post-for-blog'>
                <div className='flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]'>
                  <img
                    src={
                      'https://ik.imagekit.io/9tezgt6wp/blog4.jpeg?updatedAt=1700153052134'
                    }
                    className='w-[360px] h-[240pxpx] rounded-[6px]'
                  />
                  <div className='flex p-[8px] flex-col items-start gap-[20px] self-stretch	'>
                    <div className='flex flex-col items-start gap-[16px] self-stretch'>
                      <button
                        className='rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] '
                        style={{ backgroundColor: 'rgba(75, 107, 251, 0.05)' }}
                      >
                        Business
                      </button>
                      <p className='self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]'>
                        The Rise of Alternative Lending: Exploring
                        Non-Traditional Loan Options
                      </p>
                      <div className='flex items-center gap-[20px]'>
                        <img
                          src={
                            'https://ik.imagekit.io/9tezgt6wp/ayo.jpeg?updatedAt=1700152952770'
                          }
                          className='flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat'
                        />
                        <p className='font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]'>
                          Abolaji Ayodeji
                        </p>
                        <p className='font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]'>
                          July 28, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/*  col -3  */}
              <div className='flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]'>
                <img
                  src={
                    'https://ik.imagekit.io/9tezgt6wp/book.jpeg?updatedAt=1700153094494'
                  }
                  className='w-[360px] h-[240pxpx] rounded-[6px]'
                />
                <div className='flex p-[8px] flex-col items-start gap-[20px] self-stretch	'>
                  <div className='flex flex-col items-start gap-[16px] self-stretch'>
                    <button
                      className='rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] '
                      style={{ backgroundColor: 'rgba(75, 107, 251, 0.05)' }}
                    >
                      Business
                    </button>
                    <p className='self-stretch text-[#181A2A] font-Inter text-[20px] font-[600] leading-[28px]'>
                      Regulatory Landscape: Navigating Compliance Challenges in
                      the Lending Industry
                    </p>
                    <div className='flex items-center gap-[20px]'>
                      <img
                        src={
                          'https://ik.imagekit.io/9tezgt6wp/neems.jpeg?updatedAt=1700153301777'
                        }
                        className='flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat'
                      />
                      <p className='font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]'>
                        Nimota Kajidat
                      </p>
                      <p className='font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]'>
                        June 29, 2023
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Row end */}
        {/*  Blog columnn row start */}
        <div className=' container mx-auto flex justify-center py-8'>
          <div className='flex  flex-col items-start gap-[20px]'>
            <div className='flex items-start gap-[20px]'>
              {/*  col -1  */}
              <Link to='/post-for-blog'>
                <div className='flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]'>
                  <img
                    src={
                      'https://ik.imagekit.io/9tezgt6wp/post-for-blog1.png?updatedAt=1700151326496'
                    }
                    className='w-[360px] h-[240pxpx] rounded-[6px]'
                  />
                  <div className='flex p-[8px] flex-col items-start gap-[20px] self-stretch	'>
                    <div className='flex flex-col items-start gap-[16px] self-stretch'>
                      <button
                        className='rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] '
                        style={{ backgroundColor: 'rgba(75, 107, 251, 0.05)' }}
                      >
                        Technology
                      </button>
                      <p className='self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]'>
                        Digital Transformation: How Technology is Reshaping the
                        Lending Industry
                      </p>
                      <div className='flex items-center gap-[20px]'>
                        <img
                          src={
                            'https://ik.imagekit.io/9tezgt6wp/avater.jpeg?updatedAt=1700152909415'
                          }
                          className='flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat'
                        />
                        <p className='font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]'>
                          Chioma Ukoha
                        </p>
                        <p className='font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]'>
                          August 20, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/*  col -2  */}

              <Link to='/post-for-blog'>
                <div className='flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]'>
                  <img
                    src={
                      'https://ik.imagekit.io/9tezgt6wp/money.jpeg?updatedAt=1700153289546'
                    }
                    className='w-[360px] h-[240pxpx] rounded-[6px]'
                  />
                  <div className='flex p-[8px] flex-col items-start gap-[20px] self-stretch	'>
                    <div className='flex flex-col items-start gap-[16px] self-stretch'>
                      <button
                        className='rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] '
                        style={{ backgroundColor: 'rgba(75, 107, 251, 0.05)' }}
                      >
                        Business
                      </button>
                      <p className='self-stretch text-[#181A2A] font-Inter text-[24px] font-[600] leading-[28px]'>
                        The Rise of Alternative Lending: Exploring
                        Non-Traditional Loan Options
                      </p>
                      <div className='flex items-center gap-[20px]'>
                        <img
                          src={
                            'https://ik.imagekit.io/9tezgt6wp/ayo.jpeg?updatedAt=1700152952770'
                          }
                          className='flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat'
                        />
                        <p className='font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]'>
                          Abolaji Ayodeji
                        </p>
                        <p className='font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]'>
                          July 28, 2023
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              {/*  col -3  */}

              <Link to='/post-for-blog'>
                <div className='flex w-[392px] p-[16px] flex-col justify-center	item-center gap-[16px] rounded-[12px] bg-white border-solid border-[1px] border-[#E8E8EA]'>
                  <img
                    src={
                      'https://ik.imagekit.io/9tezgt6wp/book.jpeg?updatedAt=1700153094494'
                    }
                    className='w-[360px] h-[240pxpx] rounded-[6px]'
                  />
                  <div className='flex p-[8px] flex-col items-start gap-[20px] self-stretch	'>
                    <div className='flex flex-col items-start gap-[16px] self-stretch'>
                      <button
                        className='rounded-[16px] text-[#4B6BFB] bg-arbitrary  py-[4px] px-[10px] justify-center items-center gap-[4px] '
                        style={{ backgroundColor: 'rgba(75, 107, 251, 0.05)' }}
                      >
                        Business
                      </button>
                      <p className='self-stretch text-[#181A2A] font-Inter text-[20px] font-[600] leading-[28px]'>
                        Regulatory Landscape: Navigating Compliance Challenges
                        in the Lending Industry
                      </p>
                      <div className='flex items-center gap-[20px]'>
                        <img
                          src={
                            'https://ik.imagekit.io/9tezgt6wp/neems.jpeg?updatedAt=1700153301777'
                          }
                          className='flex items-center gap-[12px] w-[36px] h-[36px] rounded-[28px] bg-lightgray bg-cover bg-no-repeat'
                        />
                        <p className='font-Work-Sans text=[16px] font-[500] leading-[24px] text-[#97989f]'>
                          Nimota Kajidat
                        </p>
                        <p className='font-Work-Sans text-[16px] font-[400] leading-[24px] text-[#97989F]'>
                          June 29, 2023
                        </p>
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
        <div className='px-[36rem]'>
          <button className='bg-[#003399] text-white px-4 py-2 rounded-[10px] cursor-pointer'>
            {' '}
            <Link to='/post-for-blog'>Load More</Link>
          </button>
        </div>
      </main>
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default BlogPage;
