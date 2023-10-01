import React from "react";
import { BiSolidGroup } from "react-icons/bi";
import { TbSteeringWheel } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFillFuelPumpDieselFill, BsSpeedometer } from "react-icons/bs";

const CarList = ({ cars }) => {
  return (
    <div className='grid grid-cols-3 place-items-start justify-start gap-5 my-14'>
      {cars.map((car) => (
        <div key={car.id} className='bg-white p-4 shadow-md rounded-2xl w-full'>
          <img
            src={car.image}
            alt={car.name}
            className='object-cover bg-cover h-80 w-full'
          />
          <div className='flex w-full items-center justify-between my-5'>
            <h3 className='text-4xl font-semibold text-gray-700'>{car.name}</h3>
            <button className='text-base border-dashed font-bold border  text-gray-700 border-blue-800 border-spacing-y-32 py-1.5 px-2.5 rounded-md'>
              {car.year}
            </button>
          </div>
          <div className='grid grid-cols-2 gap-3'>
            <div className='flex items-center gap-1.5'>
              <BiSolidGroup className='text-[#1E83E8] text-xl' />
              <h3 className='text-lg font-medium text-gray-500'>
                {car.noOfPeople} People
              </h3>
            </div>
            <div className='flex items-center gap-1.5'>
              <BsFillFuelPumpDieselFill className='text-[#1E83E8] text-xl' />
              <h3 className='text-lg font-medium text-gray-500'>
                {car.fuelType}{" "}
              </h3>
            </div>
            <div className='flex items-center gap-1.5'>
              <BsSpeedometer className='text-[#1E83E8] text-xl' />
              <h3 className='text-lg font-medium text-gray-500'>
                {car.mileage}{" "}
              </h3>
            </div>
            <div className='flex items-center gap-1.5'>
              <TbSteeringWheel className='text-[#1E83E8] text-xl' />
              <h3 className='text-lg font-medium text-gray-500'>{car.type}</h3>
            </div>
          </div>
          <div className='my-5 border border-gray-200' />
          <div className='flex items-center justify-between w-full'>
            <div>
              <p className='text-3xl text-gray-700 font-semibold'>
                {car.price}/{" "}
                <span className='text-xl text-gray-700 font-semibold'>
                  month
                </span>
              </p>
            </div>

            <div className='flex items-center gap-5'>
              <button className='bg-[#93c7fb70] px-3 py-2.5 rounded-xl '>
                <AiOutlineHeart className='text-[#1E83E8] text-xl font-semibold' />
              </button>
              <button className='bg-[#1E83E8] px-3 py-2.5 rounded-xl text-xl text-white font-semibold'>
                Rent Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarList;
