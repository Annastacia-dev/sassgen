/* eslint-disable react/prop-types */
import { RiCloseLine } from 'react-icons/ri';

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <div>
      {isOpen && (
        <ul className="flex-col flex items-center fixed inset-0 sm:left-1/4 left-20 bg-primaryDark gap-8 justify-center p-8 md:hidden capitalize z-10">
          <div className="absolute right-16 top-6 scale-150">
            <RiCloseLine onClick={toggle} />
          </div>
          <li className="hover:text-secondary cursor-pointer">
            <a>feature</a>
          </li>
          <li className="hover:text-secondary cursor-pointer">
            <a>instruction</a>
          </li>
          <li className="hover:text-secondary cursor-pointer">
            <a>process</a>
          </li>
          <li className="hover:text-secondary cursor-pointer">
            <a>feedback</a>
          </li>
          <li className="hover:text-secondary cursor-pointer">
            <a>pricing</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
