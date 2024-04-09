import React, { useEffect, useState } from 'react'
import axios from 'axios'


const ResidentCard = ({ residentUrl }) => {

    const [residentInfo, setResidentInfo] = useState(null)

    const residentStatus = {
        Alive: 'bg-green-500',
        Dead: 'bg-red-500',
        Unknown: 'bg-slate-500',
    }

    useEffect(() => {
      axios
        .get(residentUrl)
        .then(({data}) => setResidentInfo(data))
        .catch((err) => console.log(err))
    }, [])
    
  return (
    <article className="bg-slate-800 shadow-lg rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 md:mb-0 md:mr-4 ">
  <header className="px-4 py-2 bg-gray-800 text-white">
    <img src={residentInfo?.image} alt="" className="w-full h-40 object-cover" />
    <div className="flex items-center gap-2 mt-2">
      <div className={`h-2 w-2 rounded-full ${residentStatus[residentInfo?.status]}`}></div>
      <span>{residentInfo?.status}</span>
    </div>
  </header>
  <section className="p-4 text-center">
    <h3 className="text-lg font-semibold">{residentInfo?.name}</h3>
    <ul className="mt-2">
      <li><span className="font-semibold">Species:</span> {residentInfo?.species}</li>
      <li><span className="font-semibold">Origin:</span> {residentInfo?.origin.name}</li>
      <li><span className="font-semibold">Time appear:</span> {residentInfo?.episode.length}</li>
    </ul>
  </section>      
</article>


  )
}

export default ResidentCard
