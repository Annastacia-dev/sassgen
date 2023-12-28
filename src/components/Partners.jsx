import React from 'react'

const logos = [
  '/gq.png',
  '/guardian.png',
  '/nyt.png',
  '/mashable.png',
  '/cnn.png',
  '/huffpost.png',
]

const Partners = () => {
  return (
    <div className="mt-96 mb-4">
      <div className="flex justify-center items-center">
        {logos.map((logo, index) => (
          <div key={index} className="mx-6">
            <img src={logo} alt="logo" className="w-28" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Partners