// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
const ServicesCard = ({ icon, title }) => {
  return (
    <div className="bg-teal1 group hover:bg-light flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
      <div className=" bg-[#dcf1ed] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-zinc-400/90">
        {icon}
      </div>
      <h1 className=" font-semibold text-lg">{title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        praesentium asperiores unde veniam, perspiciatis neque!
      </p>

      <h3 className=" text-black cursor-pointer font-semibold hover:text-teal3/90 transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;