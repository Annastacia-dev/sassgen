import NavBar from './layout/NavBar';
import bg from '../assets/bg.jpg';

const Header = () => {
  return (
    <header
      className="h-screen bg-cover bg-image bg-center bg-no-repeat flex flex-col bg-fixed text-white"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <NavBar />
      <div className="h-full text-white absolute  top-16 w-full flex justify-center items-start">
        <div className="bg-gradient-pattern sm:w-[26rem] w-64 sm:h-60 h-40"></div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 mt-10">
        <h1 className="sm:text-7xl text-6xl font-bold w-8/12 leading-[70px]">
          Conduct more customer in a better way
        </h1>
      </div>
    </header>
  );
};

export default Header;
