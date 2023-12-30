const logos = [
  '/gq.png',
  '/guardian.png',
  '/nyt.png',
  '/mashable.png',
  '/cnn.png',
  '/huffpost.png',
];

const Partners = () => {
  return (
    <div className="sm:mt-96 mt-10 mb-4">
      <div className="sm:flex grid grid-cols-3 sm:gap-0 gap-6 justify-center items-center">
        {logos.map((logo, index) => (
          <div key={index} className="mx-6">
            <img src={logo} alt="logo" className="w-28" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
