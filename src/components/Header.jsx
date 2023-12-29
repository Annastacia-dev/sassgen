import NavBar from './layout/NavBar';
import Socials from './Socials';
import bg from '../assets/bg.jpg';

const Header = () => {
  return (
    <header
      className="sm:h-screen  bg-cover bg-image bg-center bg-no-repeat flex flex-col bg-fixed text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="">
        <Socials />
        <NavBar />
        <div className="h-full text-white absolute  top-16 w-full flex justify-center items-start">
          <div className="bg-gradient-pattern sm:w-[26rem] w-64 sm:h-40 h-40"></div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-4 sm:mt-12 xs:mt-20 mt-2 sm:mb-0 mb-28">
          <h1 className="sm:text-7xl xs:text-5xl text-xl font-bold w-8/12 xs:leading-[60px] sm:text-center sm:ml-0 xs:ml-16 ml-4">
            Conduct more customer in a better way
          </h1>

          <div className="flex sm:flex-row flex-col sm:gap-8 gap-2 sm:ml-0 -ml-16">
            <button className="bg-gradient-to-r from-secondary to-secondaryDark capitalize text-white sm:px-6 px-4 sm:py-3 py-2 rounded-full hover:bg-gradient-to-r hover:from-secondaryDark hover:to-secondary xs:text-sm text-xs sm:mt-10 mt-2 cursor-pointer">
              get started now
            </button>
            <button className="bg-transparent border capitalize text-white sm:px-6 px-4 sm:py-3 py-2 rounded-full hover:bg-gradient-to-r hover:from-secondaryDark hover:to-secondary xs:text-sm text-xs sm:mt-10 mt-2 cursor-pointer">
              Watch trailer
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
