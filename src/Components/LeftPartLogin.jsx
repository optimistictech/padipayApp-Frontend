import React from 'react'

const LeftPartLogin = () => {
  return (
    <div>
        {/* LEFT SIDE */}
          <div className="text-center">
            <h1 className="text-4xl">Welcome Onboard</h1>
            <span className="text-4xl font-bold">Padi</span>
          </div>
          <div className="mx-auto ">
          <img src={"https://ik.imagekit.io/gru3qfrss/tr:w-200,h-500,bl-10/Group%2023936.svg"} alt="PadiPay" className="right-img" />
          </div>
          <div className="flex gap-4 small-screen  relative ">
            <div className=" p-4 rounded-lg">
            <img src={"https://ik.imagekit.io/gru3qfrss/appStore.png"} alt="apple mockup" className="w-40" />
            </div>
            <div className="p-4 rounded-lg">
            <img src={"https://ik.imagekit.io/gru3qfrss/googlePlay.png"} alt="google-play mockup" className="w-40"/>
            </div>
          </div>
    </div>
  )
}

export default LeftPartLogin