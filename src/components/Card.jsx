import React from "react";

const Card = ({ children, key }) => {
  return (
    <>
      <div key={key} className='bg-white p-4 shadow-md rounded-2xl w-full'>
        {children}
      </div>
    </>
  );
};

export default Card;
