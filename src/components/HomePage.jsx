import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CarList from "./CarList";
import SearchHeader from "./SearchHeader";

const HomePage = ({ cars }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const initialSearchText = searchParams.get("search") || "";
  const initialPage = parseInt(location.pathname.split("/")[2]) || 1;

  const [searchText, setSearchText] = useState(initialSearchText);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const [filteredCars, setFilteredCars] = useState([]);

  const carsPerPage = 6;
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;

  // Function to filter the 'cars' array based on the search text
  const filterCars = () => {
    const filtered = cars.filter((car) =>
      car.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredCars(filtered);
  };

  // Update filteredCars whenever searchText changes

  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  // Hard code Total number of pages
  const totalPages = 10;

  // Function to handle previous page navigation on click of button
  useEffect(() => {
    filterCars();
    const searchParams = new URLSearchParams();
    searchParams.set("search", searchText);
    navigate(`/page/${currentPage}?${searchParams.toString()}`);
  }, [searchText]);

  // Inside the `goToPreviousPage` and `goToNextPage` functions
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      const searchParams = new URLSearchParams();
      searchParams.set("search", searchText);
      navigate(`/page/${currentPage - 1}?${searchParams.toString()}`);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      const searchParams = new URLSearchParams();
      searchParams.set("search", searchText);
      navigate(`/page/${currentPage + 1}?${searchParams.toString()}`);
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
            <Link
              to={`/page/${currentPage - 1}?search=${searchText}`}
              className='text-black'
            >
              <AiOutlineArrowLeft />
            </Link>
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
            <Link
              to={`/page/${currentPage + 1}?search=${searchText}`}
              className={`btn ${currentPage === totalPages ? "hidden" : ""}`}
            >
              <AiOutlineArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
