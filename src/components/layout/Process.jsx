import React from 'react'

const processes = [
  {
  number: 1,
  image: '/money.png',
  title: 'computer boots up',
  content: 'A complete about-face in it\'s core economy Amsterdams progressive multicultural conscientious'
  },
  {
    number: 2,
    image: '/click.png',
    title: 'user double clicks',
    content: 'A complete about-face in it\'s core economy Amsterdams progressive multicultural conscientious'
  },
  {
    number: 3,
    image: '/encrypt.png',
    title: 'data is encrypted',
    content: 'A complete about-face in it\'s core economy Amsterdams progressive multicultural conscientious'
  },
]

const Process = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-24 mb-10">
      <h6 className="uppercase text-secondaryDark text-xs font-bold tracking-widest">
        process
      </h6>
      <h3 className="text-2xl font-black ml-2 mt-2 tracking-wide capitalize">
        how it works
      </h3>
      <p className="text-center text-gray-500 text-[13px] mt-2 w-5/12">
        At Surge3 we know knowledge is power and experience leads to results. There are not many cities that have experienced such social and political extremes.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center mt-12 px-16">
        {processes.map((process) => (
          <div key={process.number} className="flex flex-col justify-center items-center ">
            <div className="flex justify-center items-center w-44 h-44 rounded-lg bg-white shadow-lg relative">
            <div className="absolute w-12 h-12 rounded-full bg-secondaryDark flex justify-center items-center text-white font-bold text-xl top-0 -left-3">
              {process.number}
            </div>
              <img src={process.image} alt="" className="w-20 h-20 object-cover" />
            </div>
            <h6 className="text-sm font-bold mt-8 capitalize">
              {process.title}
            </h6>
            <p className="text-gray-500 text-[11px] text-left mt-4 w-7/12 ml-12">
              {process.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Process
