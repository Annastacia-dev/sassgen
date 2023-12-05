import { FaLinkedinIn, FaFacebookF, FaLongArrowAltDown } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socials = [
  {
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/',
  },
  {
    icon: <FaFacebookF />,
    link: 'https://www.facebook.com/',
  },
  {
    icon: <FaXTwitter />,
    link: 'https://twitter.com/',
  },
];

const Socials = () => {
  const handleScrollDown = () => {
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="absolute sm:left-12 xs:left-8 left-2 top-48">
      <div className="flex flex-col gap-6">
        {socials.map(({ icon, link }, index) => (
          <a
            key={index}
            href={link}
            className="bg-primary/10 rounded-full w-8 h-8 flex justify-center items-center cursor-pointer transition-all hover:bg-primary"
          >
            {icon}
          </a>
        ))}
      </div>
      <div className="cursor-pointer" onClick={handleScrollDown}>
        <p className="text-white text-sm -rotate-90 uppercase tracking-wider -ml-10 mt-28">
          scroll down
        </p>
        <FaLongArrowAltDown className="text-white ml-1 mt-16" />
      </div>
    </div>
  );
};

export default Socials;
