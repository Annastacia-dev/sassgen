import Demo from './demo/Demo';

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
    <div className="mt-80 overflow-x-clip grid grid-cols-1 sm:grid-cols-2 mb-8 gap-10">
      <div className="ml-[0px] w-3/4">
        <Demo />
        <div className="bg-gradient-pattern sm:w-[26rem] w-64 sm:h-40 h-40 mt-56"></div>
      </div>
      <div className="flex flex-col items-center -mt-20">
        <h6 className="uppercase text-secondaryDark text-xs font-bold tracking-widest">
          features
        </h6>
        <h3 className="text-2xl font-black ml-2 mt-2 tracking-wide capitalize">
          why choose us
        </h3>
        <div className="flex flex-col justify-center items-center ml-44 gap-6 mt-4">
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
  );
};

export default Features;
