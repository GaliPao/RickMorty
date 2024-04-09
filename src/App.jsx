import { useEffect, useState } from 'react'
import './App.css'
import random from './utils/random'
import axios from 'axios'
import LocationForm from './components/LocationForm'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'

function App() {

  const [currentLocation, setCurrentLocation] = useState(null)


  useEffect(() => {
    const randomDimension = random(126)
    fetchDimension(randomDimension)
    
  }, [])
  
  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    axios
    .get(url)
    .then(({data}) => setCurrentLocation(data))
    .catch((err) => console.log(err))
    
  } 

  
  const handleSubmit = (e) => {
    e.preventDefault()
    const newLocation = (e.target.newLocation.value)

    fetchDimension(newLocation)
  }
  

  return (
    <main className="bg-slate-900 min-h-screen text-white flex flex-col items-center justify-start p-4 md:p-8 lg:p-12">
  <LocationForm handleSubmit={handleSubmit} />
  <LocationInfo currentLocation={currentLocation} />
  <ResidentList residents={currentLocation?.residents ?? []} currentLocation={currentLocation} />
</main>

  )
}

export default App
