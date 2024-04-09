import React from 'react'

const LocationForm = ({ handleSubmit }) => {

  

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center sm:justify-start space-y-2 sm:space-y-0 sm:space-x-2 w-full md:max-w-3xl">
  <input 
    className="text-black border border-gray-300 px-3 py-2 rounded-md w-full sm:w-auto"
    min={1}
    max={126}
    id="newLocation"
    placeholder="Type a location id..."
    type="number"
  />
  <button 
    className="bg-green-600 hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out"
    type="submit"
  >
    Search
  </button>
</form>

  )
}

export default LocationForm
