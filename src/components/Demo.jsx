import DemoSideBar from './DemoSideBar';
import DemoMain from './DemoMain';

const Demo = () => {
  return (
    <>
      <div className="flex justify-center items-center relative">
        <div className="bg-gray-200 rounded-xl shadow-lg p-10 absolute sm:w-[36rem] xs:w-[21rem] w-44 sm:h-[22rem] xs:h-[12rem] h-32">
          <div className="h-2 w-2 bg-gray-400 sm:top-2 top-1 sm:left-72 left-44 rounded-full absolute"></div>
          <div className="bg-white sm:w-[32rem] xs:w-[19rem] w-40 sm:h-[19rem] xs:h-32 h-28 sm:-ml-3 -ml-6 sm:-mt-4 -mt-6 relative">
            <DemoMain />
            <DemoSideBar />
          </div>
        </div>
      </div>
      <div className="mt-96 text-white">Heloo</div>
    </>
  );
};

export default Demo;
