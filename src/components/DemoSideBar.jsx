import Typewriter from 'typewriter-effect';
import { MdHome } from "react-icons/md";
import { TbActivityHeartbeat } from "react-icons/tb";
import { IoCalendarClearOutline } from "react-icons/io5";
import { BiMessageRounded } from "react-icons/bi";
import { HiOutlineCog8Tooth } from "react-icons/hi2";
import { PiSignOut } from "react-icons/pi";



const DemoSideBar = () => {
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
    <div className="bg-white w-28 sm:h-[19rem] xs:h-40 h-28 absolute top-0 border-t border-gray-300 z-16">
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
              className="flex justify-center items-center cursor-pointer hover:text-black text-gray-500 hover:bg-gray-500 px-2 py-1 hover:rounded-full transition-all"
            >
              <div className="sm:w-5  sm:h-5 ">{item.icon}</div>
              <div className="sm:text-xs text-[0.6rem] sm:ml-0 ml-1  capitalize">{item.name}</div>
            </div>
          ))}

          <div className="sm:flex justify-center items-center cursor-pointer hover:text-red-500 text-gray-500 px-2 py-1 hover:rounded-full transition-all mt-3 hidden">
            <div className="sm:w-5 w-3 sm:h-5 h-3">
              <PiSignOut />
            </div>
            <div className="sm:text-xs text[0.6rem]  capitalize">sign out</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoSideBar;
