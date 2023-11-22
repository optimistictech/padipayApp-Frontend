import React from 'react'
import { Link } from 'react-router-dom';
import BorrowersSideNav from '../../../Components/Auth/Dashboard/sideNavbar/BorrowersSideNav';
import BorrowersNavBar from '../../../Components/Auth/Dashboard/headerNavBar/BorrowersNavbarV';
import Button from '../../../Components/Button'

const BorrowerSectionThree = () => {
  return (
    <div className='flex'>
      <BorrowersSideNav />
      <div>
        <BorrowersNavBar/>
        <div className="grid grid-cols-3 grid-rows-2 gap-x-0 gap-y-8">
                        {/* first grid */}
                    <div className=" h-80 shadow-lg my-14 rounded-md relative overflow-hidden px-4 ">
                            <img 
                            src={"https://ik.imagekit.io/b6b9xwu9l/bg-graph.png?updatedAt=1700659644267"}className="object-cover h-44 w-96 px-2 rounded-md" 
                            alt="GraphImage"/> 
                                <div className="pt-4">
                                    <p className="font-bold text-[#344767]">Interest Rate Loans</p>
                                <p className="text-[#7B809A] text-sm">Find a lender</p>
                                <hr className="border-b border-gray-200 my-4"/>
                                
                              <Link to="/borrowersDashboard6">
                              <Button className="text-[#FFFFFF] bg-[#003399] text-sm py-1.5 px-5 mb-4 rounded-xl" text='Get Loan' size='md' />
                              </Link>
                                </div>
                            </div>
                            {/* second grid */}
                            <div className=" h-80 shadow-lg my-14 rounded-md relative overflow-hidden px-4 ">
                                <img 
                                src={"https://ik.imagekit.io/b6b9xwu9l/bg-grap.png?updatedAt=1700659923464"} className="object-cover h-44 w-96 px-2 rounded-md" 
                                alt="GraphImage"/> 
                                    <div className="pt-4">
                                        <p className="font-bold text-[#344767]">Non Interest Rate Loans</p>
                                    <p className="text-[#7B809A] text-sm">Get loans at no interest rate</p>
                                    <hr className="border-b border-gray-200 my-4"/>
                                  
                                    <Link to="/nonInterest">
                                    <Button className="text-[#FFFFFF] bg-[#003399] text-sm py-1.5 px-5 mb-4 rounded-xl" text='Get Loan' size='md' />
                                    </Link>
                                    </div>
                                </div>
                                {/* third grid */}
                                <div className=" h-80 my-14 shadow-lg px-6 my-auto overflow-hidden">
                                    <p className="py-1 font-semibold px-auto text-3xl">Community?</p>
                                    <p className="text-2xl pt-2 font-light">Discover our collaborative<br/> community, Discover and<br/> engage.</p>
                                    <Link to="/community">
                                    <Button className="text-[#FFFFFF] bg-[#003399] text-sm py-1.5 px-5 mb-4 rounded-xl" text='Join Community' size='lg' />
                                    </Link>
                                </div>
                         {/* FOURTH BOX */}
       <div className="w-140 h-40 shadow-lg rounded-md mt-14 px-4 flex items-center">
        <div className="pr-4 pl-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        </div>
        <div>
          <p className="pr-32 font-bold text-[#344767]">General<br/>Settings</p>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </div>
          </div>
       {/* FIFTH BOX */}
       <div className="w-140 h-40 shadow-lg rounded-md mt-14 px-4 flex items-center">
        <div className="pr-4 pl-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z" /></svg>
        </div>
        <div>
          <p className="pr-32 font-bold text-[#344767]">Support<br/>Request</p>
          </div>
          <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
          </div>
          </div>
       {/* SIXTH BOX */}
       <div className="w-140 h-40 shadow-lg rounded-md mt-14 px-4 flex items-center">
        <div className="pr-4 pl-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
        </div>
        <div>
          <p className="pr-32 font-bold text-[#344767]">Transaction Supporting<br/>Documents</p>
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </div>
            </div>
             </div>
             </div>
      </div>
  )
}

export default BorrowerSectionThree