import { TbArrowsMaximize } from 'react-icons/tb';
import { PiGlobeStandBold } from 'react-icons/pi';
import { GiChaingun } from 'react-icons/gi';
import { TbBrandReact } from 'react-icons/tb';

const solutions = [
  {
    id: 1,
    icon: <TbArrowsMaximize />,
    bg: 'bg-blue-100',
    colour: 'text-blue-500',
    title: 'expand your reach',
    content: "A complete about-face in it's core economy amsterdam",
  },
  {
    id: 2,
    icon: <PiGlobeStandBold />,
    bg: 'bg-orange-100',
    colour: 'text-orange-500',
    title: 'higher annualized growth',
    content: "A complete about-face in it's core economy",
  },
  {
    id: 3,
    icon: <GiChaingun />,
    bg: 'bg-pink-100',
    colour: 'text-pink-500',
    title: 'book your provider',
    content: 'Amsterdam progressive multicultural conscientious',
  },
  {
    id: 4,
    icon: <TbBrandReact />,
    bg: 'bg-purple-100',
    colour: 'text-purple-500',
    title: 'secure multiuserable',
    content: 'core economy amsterdams progressive multicultural',
  },
];

const getColorClasses = (bgColor, textColor) => {
  return `flex justify-center items-center w-16 h-16 rounded-full ${bgColor} ${textColor} text-4xl`;
};

const Solutions = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 mb-8">
      <h6 className="uppercase text-secondaryDark text-xs font-bold tracking-widest">
        features
      </h6>
      <h3 className="sm:text-2xl text-lg font-black ml-2 mt-2 tracking-wide">
        Our Solutions
      </h3>
      <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-4 gap-20 mt-10 px-24">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="flex flex-col justify-center items-center "
          >
            <div className={getColorClasses(solution.bg, solution.colour)}>
              {solution.icon}
            </div>
            <h4 className="text-sm font-bold mt-4 capitalize">
              {solution.title}
            </h4>
            <p className=" px-4 mt-2 text-gray-700 sm:text-sm text-xs capitalize sm:text-center text-left">
              {solution.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
