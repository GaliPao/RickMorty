import React from 'react'

const LocationInfo = ({ currentLocation }) => {
  return (
    <section className="max-w-lg mx-auto p-4 flex flex-wrap justify-around items-center">
    <h2 className="text-2xl font-semibold mb-4 w-full text-center">{currentLocation?.name}</h2>
    <ul className="w-full flex flex-wrap justify-between">
      <li className="mb-2 mr-4"><span className="font-semibold">Type:</span> {currentLocation?.type}</li>
      <li className="mb-2 mr-4"><span className="font-semibold">Dimension:</span> {currentLocation?.dimension}</li>
      <li className="mb-2"><span className="font-semibold">Population:</span> {currentLocation?.residents.length}</li>
    </ul>      
  </section>
  

  )
}

export default LocationInfo
