/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { TbActivityHeartbeat, TbWaveSine } from 'react-icons/tb';
import { GrSwim } from 'react-icons/gr';
import { PiWavesLight } from 'react-icons/pi';
import { FaRunning } from 'react-icons/fa';
import NumberAnimation from './NumberAnimation';

const DemoRightBar = ({
  loggedIn,
}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(!active);
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div className="bg-[#E5E9F1] w-32 sm:h-[33rem] xs:h-40 h-28 absolute top-0 border-t border-[#F0F3F8] z-16 -right-2 p-2">
      <div className="flex flex-col">
        {/* Profile */}
        {loggedIn && (
          <div className="flex gap-6 py-2 px-4 justify-center items-center">
            <p className="text-sm font-bold">Blair </p>
            <img
              src="https://images.unsplash.com/photo-1589156215870-a324614b3fff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBsYWR5fGVufDB8fDB8fHww"
              alt=""
              className="w-12 h-10 rounded-lg"
            />
          </div>
        )}
        <BsThreeDots className="text-gray-700 text-xl ml-4 absolute right-6 top-20 " />
      </div>
      <div className={`flex flex-col ${loggedIn ? 'mt-7' : ''} p-2 absolute sm:right-10 right-0 gap-2`}>
        {/* HeartRate */}
        <div
          className="flex flex-col justify-center bg-gradient-to-r from-primary to-primaryDark
        w-48 h-20 rounded-lg px-4 shadow-lg  text-white"
        >
          <div className="flex justify-between">
            {active ? (
              <IoMdHeart className="text-xl" />
            ) : (
              <IoMdHeartEmpty className="text-xl" />
            )}
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-bold">85</p>
              <p className="text-xs">bpm</p>
            </div>
          </div>
          <div className="flex gap-3">
            <p className="text-xs ani">Heart rate</p>
            <div className="flex">
              <TbActivityHeartbeat className="text-2xl animate-pulse" />
              <TbActivityHeartbeat className="text-2xl -ml-1 animate-pulse" />
              <TbActivityHeartbeat className="text-2xl -ml-1 animate-pulse" />
            </div>
          </div>
        </div>
        {/* Swimming */}
        <div
          className="flex flex-col justify-center bg-white shadow-lg
        w-48 h-20 rounded-lg px-4"
        >
          <div className="flex justify-between">
            <GrSwim className="text-xl" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-bold">65</p>
              <p className="text-xs">sts</p>
            </div>
          </div>
          <div className="flex gap-3">
            <p className="text-xs font-bold">Swimming</p>
            <div className="flex">
              <PiWavesLight className="text-2xl animate-bounce" />
              <PiWavesLight className="text-2xl -ml-1.5 animate-bounce" />
              <PiWavesLight className="text-2xl -ml-1.5 animate-bounce" />
            </div>
          </div>
        </div>
        {/* Running */}
        <div
          className="flex flex-col justify-center bg-white shadow-lg
        w-48 h-20 rounded-lg px-4"
        >
          <div className="flex justify-between">
            <FaRunning className="text-xl" />
            <div className="flex flex-col justify-center items-center">
              <p className="text-sm font-bold">29</p>
              <p className="text-xs">mls</p>
            </div>
          </div>
          <div className="flex gap-3">
            <p className="text-xs font-bold">Running</p>
            <div className="flex">
              <TbWaveSine className="text-2xl animate-spin" />
              <TbWaveSine className="text-2xl -ml-1 animate-spin" />
              <TbWaveSine className="text-2xl -ml-1 animate-spin" />
            </div>
          </div>
        </div>
        {/* Data */}
        <div
          className={`flex justify-between bg-gray-100 shadow-lg
        w-48 ${loggedIn ? 'h-40' : 'h-60'} rounded-lg px-4 overflow-hidden`}
        >
          <div className='flex flex-col gap-1'>
            <div className="flex flex-col justify-center items-center bg-gray-100 px-4 w-16 h-12 mt-2 rounded-lg shadow-lg py-2 relative">
              <p className="text-xs font-bold">122</p>
              <p className="text-xs text-gray-400">time</p>
              <div className="w-2 h-2 rounded-full absolute bg-primary top-0 right-0"></div>
            </div>
            <div className="flex flex-col justify-center items-center bg-white px-4 w-16 h-16 mt-2 rounded-lg shadow-lg py-2 relative">
              <p className="text-xs font-bold">
                12
                <span className="text-xs text-gray-400 ml-1 font-normal">typ</span>
              </p>
              <p className="text-xs text-gray-400">item</p>
              <div className="w-2 h-2 rounded-full absolute bg-secondary top-2 right-1"></div>
            </div>
            <div className={`flex flex-col justify-center items-center bg-gradient-to-r
            from-primary to-primaryDark px-4 w-16 ${loggedIn ? 'h-16 rounded-t-lg pt-8' : 'h-20 rounded-lg'} mt-2 shadow-lg relative text-white`}>
              <p className="text-xs font-bold">
                4536
                <span className="text-xs ml-1 font-normal text-secondary">g</span>
              </p>
              <p className="text-xs text-gray-400">calories</p>
              <div className="w-2 h-2 rounded-full absolute bg-secondary top-2 right-2"></div>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="absolute top-8 left-8 w-1 h-1 rounded-full bg-primary"></div>
            <p className="absolute top-4 left-3 text-[8px] ">time lapsed</p>
            <img src="/data.png" className="w-20" />
            <div className="absolute bottom-8 left-8 w-1 h-1 rounded-full bg-secondary"></div>
            <p className="absolute bottom-4 left-3 text-[8px] text-primary ">data collected</p>
          </div>
        </div>
      </div>
      {/* Side Card */}
      <div className="bg-white sm:w-32 w-24 sm:h-32 h-24 absolute sm:left-20 -left-8 rotate-45 sm:top-40 -top-[120px] rounded-xl shadow transition-all">
        <div className="sm:h-3 h-2 sm:w-3 w-2 rounded-full bg-primary absolute sm:top-4 top-2 sm:left-8 left-3"></div>
        <p className="sm:text-3xl text-xl font-bold text-black absolute sm:top-12 top-10 sm:left-5 left-4 -rotate-90">
          <NumberAnimation targetNumber={122} />
          <span className="sm:text-sm text-xs font-thin sm:ml-3 ml-1 text-primary">
            hr
          </span>
        </p>
        <p className="sm:text-md text-sm font-thin text-gray-500 absolute sm:top-[60px] top-[40px] sm:left-[67px] left-[45px] -rotate-90 capitalize">
          Time
        </p>
      </div>
    </div>
  );
};

export default DemoRightBar;
