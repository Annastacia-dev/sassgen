import logo from '../../assets/logo.png';
import mastercard from '/mastercard.svg';
import visa from '/visa.svg';
import americanExpress from '/american-express.svg';

const Footer = () => {
  return (
    <footer className="bg-primaryDark relative flex flex-col justify-center items-center sm:py-16 py-8 text-white rounded-t-3xl mt-20">
      <div className="grid sm:grid-cols-5 grid-cols-2 sm:gap-32 gap-12">
        <div className="flex flex-col justify-center items-start col-span-1">
          <h1 className="text-sm font-bold uppercase tracking-wider">
            service
          </h1>
          <ul className="flex flex-col justify-center items-start mt-4 text-[13px] capitalize gap-2">
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              expand
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              annualize
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              track
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              engineering
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-start col-span-1">
          <h1 className="text-sm font-bold uppercase tracking-wider">
            product
          </h1>
          <ul className="flex flex-col justify-center items-start mt-4 text-[13px] capitalize gap-2">
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              E-books
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              presentation
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              dashboard
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              management
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-start col-span-1">
          <h1 className="text-sm font-bold uppercase tracking-wider">team</h1>
          <ul className="flex flex-col justify-center items-start mt-4 text-[13px] capitalize gap-2">
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              about us
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              careers
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              education
            </li>
            <li className="text-primaryDark">extra</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-start col-span-1">
          <h1 className="text-sm font-bold uppercase tracking-wider">
            product
          </h1>
          <ul className="flex flex-col justify-center items-start mt-4 text-[13px] capitalize gap-2">
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              E-books
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              presentation
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              dashboard
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              management
            </li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-start col-span-1">
          <h1 className="text-sm font-bold uppercase tracking-wider">press</h1>
          <ul className="flex flex-col justify-center items-start mt-4 text-[13px] capitalize gap-2">
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              publications
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              features
            </li>
            <li className="text-gray-300 cursor-pointer hover:text-secondaryDark hover:underline">
              awesome
            </li>
            <li className="text-primaryDark">extra</li>
          </ul>
        </div>
      </div>
      <hr className="w-3/4 sm:my-16 my-8 border-gray-400" />
      <div className="flex flex-col md:flex-row justify-between items-center w-3/4 sm:gap-0 gap-10">
        <div className="flex gap-1 justify-center items-center">
          <img src={logo} alt="logo" className="w-6" />
          <p className="text-sm font-bold tracking-wider">SassPack</p>
        </div>

        <div className="flex gap-1 text-xs">
          <p>© 2018 - {new Date().getFullYear()} Luova Studios</p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <img src={mastercard} alt="mastercard" className="w-12 h-12" />
          <img src={visa} alt="visa" className="w-11 h-11" />
          <img
            src={americanExpress}
            alt="american express"
            className="w-12 h-12"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
