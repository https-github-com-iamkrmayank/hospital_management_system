// eslint-disable-next-line no-unused-vars
import React from "react";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../Components/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-2xl lg:text-5xl font-extrabold lg:tracking-wider text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 lg:text-lg text-center lg:text-start py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
            quidem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, nam.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
            <button className="shadow-lg bg-lime-500 border-2 border-zinc-400 text-white font-semibold  px-4 py-2 rounded-md hover:bg-zinc-400/90 hover:border-2 hover:border-zinc-500 transition duration-300 ease-in-out">
                See services
            </button>
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard icon={icon1} title="Lab Test" />
        <ServicesCard icon={icon2} title="Health Check" />
        <ServicesCard icon={icon3} title="Heart Health" />
      </div>
    </div>
  );
};

export default Services;