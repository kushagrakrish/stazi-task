import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import CarList from "./CarList";
import SearchHeader from "./SearchHeader";

const HomePage = ({ cars }) => {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const carsPerPage = 6;
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  // function to filter the entire 'cars' array based on the search text
  const filteredCars = cars?.filter((car) =>
    car.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Hard code Total number of pages
  const totalPages = 10;

  // Function to handle previous page navigation on click of button
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to handle next page navigation on click of button
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className='bg-slate-100'>
      <div className='container mx-auto py-8 px-5'>
        {/* Header */}
        <SearchHeader searchText={searchText} setSearchText={setSearchText} />
        {/* Cards Listing */}
        <CarList cars={currentCars} />
        {/* Footer */}
        <div className='mt-4 bg-slate-200 shadow-xl py-3.5 rounded-3xl px-5 flex justify-end w-full'>
          <button
            onClick={goToPreviousPage}
            className='bg-gray-300 px-3 py-1.5 rounded-xl '
          >
            <AiOutlineArrowLeft className='text-black' />
          </button>
          <div className='px-5'>
            {Array.from({ length: totalPages }).map((_, index) => (
              <Link
                key={index + 1}
                to={`/page/${index + 1}`}
                className={`btn ${
                  currentPage === index + 1 ? " text-white " : ""
                } mr-2`}
                onClick={() => setCurrentPage(index + 1)}
              >
                <button className='bg-gray-300 px-3 py-1.5 rounded-xl '>
                  {index + 1}
                </button>
              </Link>
            ))}
          </div>
          <button
            onClick={goToNextPage}
            className='bg-gray-300 px-3 py-1.5 rounded-xl '
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
