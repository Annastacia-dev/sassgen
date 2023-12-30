const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32 mb-8">
      <h6 className="uppercase text-secondaryDark text-xs font-bold tracking-widest">
        packages
      </h6>
      <h3 className="text-2xl font-black ml-2 mt-2 tracking-wide capitalize">
        pricing plans
      </h3>
      <div className="relative">
        <img
          src="/fluid-shape.png"
          alt="pricing"
          className="absolute w-72 top-[26rem] -left-32"
        />
        <div className="flex flex-col sm:flex-row justify-center items-center gap-10 mt-10 relative">
          <div className="bg-gradient-to-r from-purple-400  to-purple-300 rounded-lg h-[32rem] w-64 shadow-lg">
            <div className="bg-white h-full shadow-lg w-full mt-2 rounded-b-lg">
              <div className="flex flex-col justify-center items-center gap-4 pt-8">
                <p className="text-sm font-bold uppercase tracking-widest">
                  basic
                </p>
                <p className="text-4xl font-bold">$65.99</p>
                <p className="text-[13px] text-gray-500 uppercase tracking-wider font-bold">
                  yearly
                </p>
                <hr className="w-full my-1 border-1.5 border-gray-300" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 pt-9">
                <p className="text-sm font-bold">Great job, Small Work</p>
                <p className="text-xs text-gray-600">50 GB Bandwidth </p>
                <p className="text-xs text-gray-600">
                  Business & Finance Analysing{' '}
                </p>
                <p className="text-xs text-gray-600">24 hour support </p>
                <p className="text-xs text-gray-600">Customer Management </p>
                <hr className="w-full my-1 border-1.5 border-gray-300" />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 pt-4">
                <button className="bg-gradient-to-r from-purple-500 to-purple-400 uppercase text-white sm:px-6 px-4 sm:py-3 py-2 rounded-full hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-500 font-bold text-xs mt-2 cursor-pointer">
                  choose plan
                </button>
                <p className="underline text-gray-700 font-bold tracking-wide text-xs mt-4">
                  Get Your 30 day free trial
                </p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary  to-primaryDark rounded-lg h-[32rem] w-64 shadow-lg text-white">
            <div className="flex flex-col justify-center items-center gap-4 pt-8">
              <p className="text-sm font-bold uppercase tracking-widest">
                standard
              </p>
              <p className="text-4xl font-bold">$75.99</p>
              <p className="text-[13px] text-gray-200 uppercase tracking-wider font-bold">
                yearly
              </p>
              <hr className="w-full my-1 border-1.5 border-gray-300" />
            </div>
            <div className="flex flex-col justify-center items-center gap-4 pt-9">
              <p className="text-sm font-bold">Great job, Small Work</p>
              <p className="text-xs text-gray-300">50 GB Bandwidth </p>
              <p className="text-xs text-gray-300">
                Business & Finance Analysing{' '}
              </p>
              <p className="text-xs text-gray-300">24 hour support </p>
              <p className="text-xs text-gray-300">Customer Management </p>
              <hr className="w-full my-1 border-1.5 border-gray-300" />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 pt-4">
              <button className="bg-white text-primary uppercase sm:px-6 px-4 sm:py-3 py-2 rounded-full text-xs font-bold mt-2 cursor-pointer hover:bg-gradient-to-r hover:text-white hover:from-primaryDark hover:to-primary">
                choose plan
              </button>
              <p className="underline text-gray-300 font-bold tracking-wide text-xs mt-4">
                Get Your 30 day free trial
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-secondaryDark  to-secondary rounded-lg h-[32rem] w-64 shadow-lg">
            <div className="bg-white h-full shadow-lg w-full mt-2 rounded-b-lg">
              <div className="flex flex-col justify-center items-center gap-4 pt-8">
                <p className="text-sm font-bold uppercase tracking-widest">
                  premium
                </p>
                <p className="text-4xl font-bold">$85.99</p>
                <p className="text-[13px] text-gray-500 uppercase tracking-wider font-bold">
                  yearly
                </p>
                <hr className="w-full my-1 border-1.5 border-gray-300" />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 pt-9">
                <p className="text-sm font-bold">Great job, Small Work</p>
                <p className="text-xs text-gray-600">50 GB Bandwidth </p>
                <p className="text-xs text-gray-600">
                  Business & Finance Analysing{' '}
                </p>
                <p className="text-xs text-gray-600">24 hour support </p>
                <p className="text-xs text-gray-600">Customer Management </p>
                <hr className="w-full my-1 border-1.5 border-gray-300" />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 pt-4">
                <button className="bg-gradient-to-r from-orange-500 to-orange-300 uppercase text-white sm:px-6 px-4 sm:py-3 py-2 rounded-full hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-500 font-bold text-xs mt-2 cursor-pointer">
                  choose plan
                </button>
                <p className="underline text-gray-700 font-bold tracking-wide text-xs mt-4">
                  Get Your 30 day free trial
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 bg-gradient-to-r from-primary to-primaryDark rounded-lg w-full shadow-lg text-white relative p-16">
          <div className="flex justify-between items-center">
            <p className="font-bold w-1/2 text-2xl leading-10">
              10,000+ Professionals are recommending SASS product
            </p>
            <div className="flex gap-4">
              <button className="bg-gradient-to-r from-secondaryDark to-secondary text-white capitalize  px-6 py-4 rounded-full text-xs font-bold mt-2 cursor-pointer hover:bg-gradient-to-r hover:text-white hover:from-secondary hover:to-secondaryDark">
                get started now
              </button>
              <button className="bg-transparent border text-white capitalize  px-6 py-4 rounded-full text-xs font-bold mt-2 cursor-pointer hover:bg-gradient-to-r hover:text-white hover:bg-white">
                watch trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
