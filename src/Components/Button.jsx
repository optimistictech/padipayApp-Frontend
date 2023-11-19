import React from 'react';

export const Button = ({ text, className }) => {
  return (
    <div>
      <button
        className={`bg-primary font-primaryFont text-whiteColor px-4 py-2 border-[1px] border-whiteColor rounded-md hover:bg-blue-700 transition ease-in-out delay-150 ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
