import React from 'react';
import padiLogo from '../assets/padiLogo.png';

function PadiLogo() {
  return (
    <div className='flex item-center font-primaryFont'>
      <img src={padiLogo} alt='padiLogo' className='w-7 h-7' />
      <h1 className='self-center ml-2'>
        <span className='font-bold'>Padi</span>Pay
      </h1>
    </div>
  );
}

export default PadiLogo;
