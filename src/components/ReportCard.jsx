import React from "react";

const ReportCard = ({ name, detail, para }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-lg w-[140px] sm:w-[190px] md:w-[290px] lg:w-[390px] h-60 sm:h-56 md:h-44 lg:h-40 border-[1px] border-solid border-gray-200 shadow-md p-4 md:p-8">
      <h1 className="text-base">{name}</h1>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-700 py-1">
        {detail}
      </h1>
      <p className="text-sm md:text-[15px] text-[#686868] font-thin text-center">
        {para}
      </p>
    </div>
  );
};

export default ReportCard;
