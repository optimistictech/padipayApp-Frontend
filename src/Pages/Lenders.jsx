import React from 'react';


const Lenders = () => {
  return (
    <div>
      {/* Navigation */}
      <header />
      <section
        className="h-screen w-full hero flex flex-row px-4"
        style={{
          backgroundImage:
            "url(https://ik.imagekit.io/sxdzzbbl3/Images/Smiling%20young%20african%20man%20standing%20in%20office%20chatting%20by%20phone.png?updatedAt=1700726466678)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" flex-1"></div>
        <div
          className="bg-white mt-14 rounded-lg shadow-lg p-4 flex-1 p-7 lg:h-[450px] w-[300px]"
          style={{ width: "40%" }}
        >
          <h1 className="text-5xl font-bold  pb-5" style={{ width: "80%" }}>
            Empower your <span className="text-[#003399]">funds</span> to labor
            on your behalf
          </h1>
          <p>
            Regardless of whether you're new to lending or a seasoned financier,
            our intelligent lending solutions enable you to embark on lending to
            numerous borrowers. Revel in enticing interest rates while taking
            charge of your personal risk management.
          </p>
          {/* <div class="">
          <button class="py-2 rounded-lg bg-black text-white px-2 flex items-center space-x-2">
               Download on the <br> App Store</button>
          <button class="py-2 rounded-lg bg-black text-white px-2">GET IT ON <i class="fa-brands fa-google-play"></i> <br> Google Play</button>
      </div> */}
          <div className="flex flex-row justify-center pt-7">
            <img
              src={
                "https://ik.imagekit.io/sxdzzbbl3/Images/appstore.png?updatedAt=1700726450627"
              }
              alt="apple store"
              className=""
              style={{ width: 295, height: 76 }}
            />
            <img
              src={
                "https://ik.imagekit.io/sxdzzbbl3/Images/playstore.png?updatedAt=1700726450474"
              }
              alt="google play"
              className=""
            />
          </div>
        </div>
      </section>
      <section className="fueldream grid grid-cols-2 grid-rows-2 px-12 py-10">
        <div className>
          <img
            src={
              "https://ik.imagekit.io/sxdzzbbl3/Images/Handsome%20adult%20male%20browsing%20his%20phone.png?updatedAt=1700726465581"
            }
            alt=""
            style={{ height: "fit-content", width: "90%" }}
          />
        </div>
        <div>
          {" "}
          <h1 className="text-5xl p-7 flex justify-center items-center  font-bold text-[#003399] ">
            Fuel dreams, find financial freedom
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <p className="w-80 text-2xl">
            Attain consistent returns as borrowers repay loans through regular
            installments accompanied by interest. Stay informed about upcoming
            payments with visibility into scheduled payment dates.
          </p>
        </div>
        <div className>
          <img
            src={
              "https://ik.imagekit.io/sxdzzbbl3/Images/Medium%20shot%20man%20typing%20on%20phone.png?updatedAt=1700726465614"
            }
            alt=""
            style={{ height: "fit-content", width: "90%" }}
          />
        </div>
        {/* <div class="left flex flex-col w-1/2 f">
      <img src="../Images/Medium shot student with smartphone.png" alt="">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dolore error aliquam deleniti quis maxime maiores expedita reiciendis delectus magni.</p>
  </div>
  <div class="right w-1/2 flex">
      <h1>Fuel dreams, find financial freedom</h1>
  </div> */}
      </section>
      <section
        className="bg-[#003399] grid grid-cols-2 pt-10  text-white"
        style={{ height: "100vh" }}
      >
        <div className="left col-span-1 ml-17 flex items-center flex-col">
          <h1 className="text-[48px] mb-5 text-white font-bold text-inter">
            Lenders' Benefits
          </h1>
          <section className="grid gap-9">
            <div className="benefit-div flex flex-row gap-3 items-center ">
              <i className="fa-solid fa-square-check text-[#4EABE9] rounded-xl text-[19px]" />
              <p className="text-[20px]">
                Highlight the benefits of being a lender
              </p>
            </div>
            <div className="benefit-div flex flex-row gap-3 items-center ">
              <i className="fa-solid fa-square-check text-[#4EABE9] rounded-xl text-[19px]" />
              <p className="text-[20px]">Earn Competitive Returns</p>
            </div>
            <div className="benefit-div flex flex-row gap-3 items-center ">
              <i className="fa-solid fa-square-check text-[#4EABE9] rounded-xl text-[19px]" />
              <p className="text-[20px]">Diversified Investment Options</p>
            </div>
            <div className="benefit-div flex flex-row gap-3 items-center ">
              <i className="fa-solid fa-square-check text-[#4EABE9] rounded-xl text-[19px]" />
              <p className="text-[20px]">Positive Social Impact</p>
            </div>
            <div className="benefit-div flex flex-row gap-3 items-center ">
              <i className="fa-solid fa-square-check text-[#4EABE9] rounded-xl text-[19px]" />
              <p className="text-[20px]">
                Icons and brief descriptions for each benefit
              </p>
            </div>
          </section>
        </div>
        <div className="right col-span-1 flex justify-center flex-col">
          <img src={"https://ik.imagekit.io/sxdzzbbl3/Images/Surprised%20african%20man%20using%20smartphone.png?updatedAt=1700726469050"} alt="" className=" h-85" style={{ height: 'fit-content', width: '80%' }}  />
        </div>
      </section>
      <section className="p-20">
        <h1 className=" text-[#003399] flex justify-center font-bold text-5xl mt-3 mb-3">
          How it works
        </h1>
        <section className="grid grid-cols-3 p-4 gap-10">
          <div className="left col-span-1">
            <img
              src={
                "https://ik.imagekit.io/sxdzzbbl3/Images/Handsome%20man%20using%20modern%20smartphone%20outdoors@2x.png?updatedAt=1700726469309"
              }
              alt=""
              style={{ width: "100%", height: "inherit" }}
            />
          </div>
          <div
            className="right col-span-2 flex flex-col justify-evenly"
            style={{ width: "80%" }}
          >
            <div className="browse">
              <b className="font-bold">Browse Investment Opportunities</b>
              <p className="w-85" style={{ width: "90%" }}>
                This highlights the different types of investment opportunities
                embedded in PadiPay
              </p>
            </div>
            <div className="browse">
              <b className="font-bold">Choose Loans to Fund: </b>
              <p style={{ width: "90%" }}>
                Highlight of different loan to fund, this includes interest
                loan, non interest loan and investment facility.
              </p>
            </div>
            <div className="browse">
              <b className="font-bold">Monitor Your Portfolio: </b>
              <p style={{ width: "90%" }}>
                Gives details information of lenders showing every bit of
                information about lenders investment.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-[#003399] grid grid-cols-2 text-white">
        <div className="left col-span-1 flex justify-center flex-col items-start text-left mx-20">
          <h1 className="text-3xl font-bold mb-4">
            Register without any charges
          </h1>
          <p className="text-1xl ">Access immediate loans.</p>
          <p className="left col-span-2 mb-4">
            Start your journey as a lender today.
          </p>
          <div className="flex flex-col items-center justify-start space-y-3">
            <img
              src={
                "https://ik.imagekit.io/sxdzzbbl3/Images/appstore.png?updatedAt=1700726450627"
              }
              alt=""
              style={{ width: 295, height: 76 }}
            />
            <img
              src={
                "https://ik.imagekit.io/sxdzzbbl3/Images/playstore.png?updatedAt=1700726450474"
              }
              alt=""
              style={{ width: 257, height: 86 }}
            />
          </div>
        </div>
        <div className="right col-span-1 flex justify-center flex-col ">
          <img
            src={
              "https://ik.imagekit.io/sxdzzbbl3/Images/padiphone.png?updatedAt=1700726456609"
            }
            alt=""
          />
          {/* <img src="../Images/padipay_on_phone.png" alt=""> */}
        </div>
      </section>
      <footer />
      {/* Including Header and Footer Dynamically */}
    </div>
  );
}

export default Lenders;

