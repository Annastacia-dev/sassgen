import Demo from './demo/Demo';
import { CgGym } from 'react-icons/cg';

const reasons = [
  {
    number: '01',
    title: 'best performance',
    description: 'A complete about-face its core economy Amsterdam',
  },
  {
    number: '02',
    title: 'easy performance',
    description: 'A settings about-face its core economy Amsterdam',
  },
  {
    number: '03',
    title: 'secure multi usable',
    description: 'A complete about-face its core economy Amsterdam',
  },
];

const Features = () => {
  return (
    <>
      <div className="sm:mt-40 mt-32 overflow-x-clip grid grid-cols-1 sm:grid-cols-2 mb-8 gap-10">
        <div className=" w-3/4">
          <img src="/fluid-shape.png" className=""></img>
          <Demo />
          <div className="bg-gradient-pattern sm:w-[26rem] w-64 sm:h-40 h-40 sm:mt-56 -mt-20"></div>
        </div>
        <div className="flex flex-col items-start justify-center sm:-mt-20  sm:ml-40 ml-12">
          <h6 className="uppercase text-secondaryDark text-xs font-bold tracking-widest">
            features
          </h6>
          <h3 className="sm:text-2xl text-lg font-black  mt-2 tracking-wide capitalize">
            why choose us
          </h3>
          <div className="flex flex-col justify-center items-center gap-6 mt-4">
            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="flex  justify-center items-center gap-4"
              >
                <div className="font-bold text-gray-300 text-4xl">
                  {reason.number}
                </div>
                <div>
                  <h4 className="text-sm font-bold mt-4 capitalize">
                    {reason.title}
                  </h4>
                  <p className="text-xs text-left mt-2 text-gray-500 w-3/4">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="sm:mt-80 mt-44 overflow-x-clip grid grid-cols-1 sm:grid-cols-2 mb-8 gap-10">
        <div className="flex flex-col items-start j -mt-28 sm:ml-32 ml-12">
          <h6 className="uppercase text-secondaryDark text-xs font-bold tracking-widest">
            features
          </h6>
          <h3 className="sm:text-2xl text-lg font-black mt-2 tracking-wide capitalize">
            we help you
          </h3>
          <p className="text-xs text-gray-500 sm:w-1/2 w-11/12 mt-4 leading-5">
            At Surge3, we know knowledge is power and experience leads to
            results.There are not many cities that have experienced such social
            and political extremes.
          </p>
          <div className="flex gap-2 sm:mt-4 mt-10">
            <div className="flex flex-col justify-center items-start gap-1">
              <div className="flex sm:flex-row flex-col gap-2 justify-center items-center">
                <div className="bg-gradient-to-b from-pink-500 to-pink-300 w-10 h-10 rounded-lg flex justify-center items-center">
                  <CgGym className="text-white text-2xl" />
                </div>
                <h4 className="text-sm font-bold capitalize">
                  Best Performance
                </h4>
              </div>
              <p className="text-xs text-gray-500 sm:w-3/4 w-11/12 sm:mt-4 leading-5">
                A complete about-face its core economy Amsterdams
              </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-1">
              <div className="flex gap-2 sm:flex-row flex-col justify-center items-center">
                <div className="bg-gradient-to-b from-blue-500 to-blue-300 w-10 h-10 rounded-lg flex justify-center items-center">
                  <CgGym className="text-white text-2xl" />
                </div>
                <h4 className="text-sm font-bold capitalize">Easy Settings</h4>
              </div>
              <p className="text-xs text-gray-500 sm:w-3/4 w-11/12 sm:mt-4 leading-5">
                A complete about-face its core economy Amsterdams
              </p>
            </div>
          </div>
          <button className="bg-gradient-to-r from-secondaryDark to-secondary text-white text-sm font-bold capitalize px-6 py-3 rounded-full mt-16">
            Get the App
          </button>
          <small className="text-[9px] text-gray-500 mt-1">
            *A complete about-face its core economy Amsterdams
          </small>
        </div>
        <div className="sm:ml-56 ml-10 w-3/4">
          <Demo />
          <img src="/fluid-shape.png" className=""></img>
        </div>
      </div>
    </>
  );
};

export default Features;
