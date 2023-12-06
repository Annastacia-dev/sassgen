/* eslint-disable react/prop-types */
import Typewriter from 'typewriter-effect';
import { MdHome } from 'react-icons/md';
import { TbActivityHeartbeat } from 'react-icons/tb';
import { IoCalendarClearOutline } from 'react-icons/io5';
import { BiMessageRounded } from 'react-icons/bi';
import { HiOutlineCog8Tooth } from 'react-icons/hi2';
import { PiSignOut } from 'react-icons/pi';
import NumberAnimation from './NumberAnimation';

const DemoSideBar = ({ activeTab, setActiveTab}) => {
  const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 100,
  });

  const menu = [
    { icon: <MdHome />, name: 'home' },
    { icon: <TbActivityHeartbeat />, name: 'dashboard' },
    { icon: <IoCalendarClearOutline />, name: 'create goal' },
    { icon: <BiMessageRounded />, name: 'messages' },
    { icon: <HiOutlineCog8Tooth />, name: 'settings' },
  ];

  return (
    <div className="bg-white w-28 sm:h-[33rem] xs:h-40 h-28 absolute top-0 border-t border-gray-300 z-16">
      <div className="bg-white sm:w-32 w-24 sm:h-32 h-24 absolute sm:-left-36 -left-8 rotate-45 sm:top-0 -top-[120px] rounded-xl shadow transition-all">
        <div className="sm:h-3 h-2 sm:w-3 w-2 rounded-full bg-secondary absolute sm:top-4 top-2 sm:left-8 left-3"></div>
        <p className="sm:text-3xl text-xl font-bold text-black absolute sm:top-12 top-10 sm:left-5 left-4 -rotate-90">
          <NumberAnimation targetNumber={4536} />
          <span className="sm:text-sm text-xs font-thin sm:ml-3 ml-1 text-secondary">
            g
          </span>
        </p>
        <p className="sm:text-md text-sm font-thin text-gray-500 absolute sm:top-[60px] top-[40px] sm:left-[67px] left-[45px] -rotate-90 capitalize">
          calories
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-primary font-black sm:text-sm text-xs sm:mt-5 mt-1 tracking-wide">
          <Typewriter
            typewriter={typewriter}
            options={{
              strings: ['Gymes.'],
              autoStart: true,
              delay: 100,
              deleteSpeed: 200,
              pauseFor: 5000,
              loop: true,
            }}
          />
        </div>
        <div className="flex flex-col justify-center items-start sm:mt-6 mt-1 sm:gap-3">
          {menu.map((item, index) => (
            <div
              key={index}
              className={`flex justify-center items-center cursor-pointer  px-2 py-1
              ${
                activeTab === item.name
                  ? 'bg-gray-400 text-black rounded-full'
                  : 'text-gray-500 hover:rounded-full transition-all hover:bg-gray-400 hover:text-black'
              }
              `}
              onClick={() => setActiveTab(item.name)}
            >
              <div className="sm:w-5 sm:h-5 ">{item.icon}</div>
              <div className="sm:text-xs text-[0.6rem] sm:ml-0 ml-1  capitalize">
                {item.name}
              </div>
            </div>
          ))}

          <div className="sm:flex justify-center items-center cursor-pointer hover:text-red-500 text-gray-500 px-2 py-1 hover:rounded-full transition-all mt-8 hidden">
            <div className="sm:w-5 w-3 sm:h-5 h-3">
              <PiSignOut />
            </div>
            <div className="sm:text-xs text[0.6rem]  capitalize">sign out</div>
          </div>
        </div>
      </div>
      <div className="bg-white sm:w-32 w-24 sm:h-32 h-24 absolute sm:-left-32 sm:rotate-[100deg] rotate-[100deg] sm:top-96 top-44 rounded-xl shadow transition-all">
        <div className="sm:h-3 h-2 sm:w-3 w-2 rounded-full bg-secondary absolute sm:top-4 top-2 sm:left-8 left-4"></div>
        <p className="sm:text-3xl text-xl font-bold text-black absolute sm:top-12 top-10 sm:left-5 left-3 -rotate-90">
          <NumberAnimation targetNumber={12} />
          <span className="text-sm font-thin sm:ml-3 ml-1 text-primary">
            typ
          </span>
        </p>
        <p className="text-md font-thin text-primary absolute sm:top-[60px] top-[40px] sm:left-[67px] left-[50px] -rotate-90 capitalize">
          items
        </p>
      </div>
    </div>
  );
};

export default DemoSideBar;
