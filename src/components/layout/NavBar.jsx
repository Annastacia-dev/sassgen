import { useState } from 'react';
import logo from '../../assets/logo.png';
import MobileMenu from './MobileMenu';
import { RiMenuFill } from 'react-icons/ri';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b border-gray-500 sm:px-44 px-4 py-6 text-white z-10">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="logo" className="w-6" />
          <p className="text-md font-bold tracking-wider">SassGen</p>
        </div>
        <div className="absolute right-16 md:hidden top-6 scale-150">
          <RiMenuFill onClick={toggle} />
        </div>
        <div className="hidden sm:flex gap-8">
          <ul className="flex items-center space-x-12 text-gray-300 text-sm capitalize">
            <li className="hover:text-secondary cursor-pointer">feature</li>
            <li className="hover:text-secondary cursor-pointer">instruction</li>
            <li className="hover:text-secondary cursor-pointer">process</li>
            <li className="hover:text-secondary cursor-pointer">feedback</li>
          </ul>

          <div className="flex items-center">
            <button className="bg-gradient-to-r from-secondary to-secondaryDark capitalize text-white px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-secondaryDark hover:to-secondary text-sm">
              get the app
            </button>
          </div>
        </div>
      </div>
        <MobileMenu isOpen={isOpen} toggle={toggle} />
    </nav>
  );
};

export default NavBar;
