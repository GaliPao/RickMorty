import React from 'react'

const Pagination = ({ pages, setCurrentPage, currentPage  }) => {
  return (
    <nav>
  <ul className="flex flex-wrap justify-center sm:justify-start">
    {pages.map((page) => (
      <li className={`mr-1 mb-1 text-lg sm:text-2xl cursor-pointer px-2 sm:px-3 py-1 rounded-md border border-gray-300 shadow-sm ${currentPage === page ? 'text-red-500 bg-gray-100' : 'text-gray-700 hover:bg-gray-200'}`} 
        onClick={() => setCurrentPage(page)} 
        key={page}
      >
        {page}
      </li>
    ))}
  </ul>
</nav>

  
  )
}

export default Pagination
