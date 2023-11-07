import React from 'react';
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <div>
      <button className=' bg-primary text-whiteColor px-4 py-2 border-[1px] border-whiteColor rounded-md hover:bg-whiteColor hover:text-primary'>
        <Link to='/signup'>Register now</Link>
      </button>
    </div>
  );
};

export default Button;
