import React, { useEffect, useState } from 'react'
import ResidentCard from './ResidentCard'
import Pagination from './Pagination'

const INITIAL_PAGE = 1

const ResidentList = ({ residents, currentLocation }) => {
    const [currentPage, setCurrentPage] = useState(1)

    //Residentes por pag
    const RESIDENTS_PER_PAGE = 20

    //Cantidad total de pag
    const totalPages = Math.ceil(residents.length / RESIDENTS_PER_PAGE)

    //Residents en current page
    const sliceStart = (currentPage - 1) * RESIDENTS_PER_PAGE
    const sliceEnd = sliceStart + RESIDENTS_PER_PAGE
    const residentsInPage = residents.slice(sliceStart, sliceEnd)

    // Arreglo de las pag que se van a mostrar
    const pages = []
    for (let i = 1; i <= totalPages; i++){
        pages.push(i)
    }

    useEffect(() => {
      setCurrentPage(INITIAL_PAGE)
      
    }, [currentLocation])
    


  return (
    <section className="flex flex-col items-center justify-center px-4 md:flex-row md:justify-between flex-wrap">
  <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full">
    {residentsInPage.map((resident) => (
      <ResidentCard key={resident} residentUrl={resident} />
    ))}
  </section>
  <Pagination pages={pages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
</section>



  )
}

export default ResidentList
