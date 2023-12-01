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
  return (
    <div className="absolute sm:left-20 left-8 top-48">
      <div className="flex flex-col gap-6">
        {socials.map(({ icon, link }, index) => (
          <a
            key={index}
            href={link}
            className="bg-primary/10 rounded-full w-8 h-8 flex justify-center items-center"
          >
            {icon}
          </a>
        ))}
      </div>
      <div>
        <p className="text-white text-sm -rotate-90 uppercase tracking-wider -ml-10 mt-28">
          scroll down
        </p>
        <FaLongArrowAltDown className="text-white ml-1 mt-16" />
      </div>
    </div>
  );
};

export default Socials;
