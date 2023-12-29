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
      <div className="flex justify-center items-center">
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
