/* eslint-disable react/prop-types */
import { RiCloseLine } from 'react-icons/ri';

const MobileMenu = ({ isOpen, toggle }) => {
  return (
    <div>
      {isOpen && (
        <ul className="flex-col flex items-center fixed inset-0 sm:left-1/4 left-20 bg-primary gap-8 justify-center p-8 md:hidden capitalize">
          <div className="absolute right-16 top-6 scale-150">
            <RiCloseLine onClick={toggle} />
          </div>
          <li className="hover:text-secondary cursor-pointer">feature</li>
          <li className="hover:text-secondary cursor-pointer">instruction</li>
          <li className="hover:text-secondary cursor-pointer">process</li>
          <li className="hover:text-secondary cursor-pointer">feedback</li>
        </ul>
      )}
    </div>
  );
};

export default MobileMenu;
