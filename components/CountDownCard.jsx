import React from 'react';

const CountDownSquare = ({ label, number, cardRef }) => {
  return (
    <div className="countdown__card m-4 flex flex-col justify-center items-center ">
      <div className="countdown__card__bg p-6  w-[250px]" ref={cardRef}>
        <div className="countdown__card__number rounded-[10px] bg-white" id={label}>
          {number}
        </div>
      </div>
      <div className="countdown__card__label sm:text-[1.5vw] !text-[5vw] text-white">{label}</div>
    </div>
  );
};

export default CountDownSquare;
