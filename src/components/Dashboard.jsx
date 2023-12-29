/* eslint-disable react/prop-types */
import { useState } from 'react';
import BarChart from './BarChart';
import { activity } from '../data/activity';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';
import Recommended from './Recommended';

const Dashboard = () => {
  const [chartData] = useState({
    labels: activity.map((data) => data.month),
    datasets: [
      {
        label: 'Daily',
        data: [200, 175, 120, 160, 115, 173, 289, 93, 347, 162, 220, 150],
        backgroundColor: '#07189B',
        barThickness: 6,
      },
      {
        label: 'Weekly',
        data: [400, 553, 305, 700, 650, 600, 606, 453, 707, 759, 900, 659],
        backgroundColor: '#0930D1',
        barThickness: 6,
      },
      {
        label: 'Monthly',
        data: [
          2007, 2209, 1604, 2503, 3000, 2607, 3203, 2909, 3107, 3304, 3507,
          3408,
        ],
        backgroundColor: '#F67E49',
        barThickness: 6,
      },
    ],
  });

  return (
    <>
      <div className="bg-[#F0F3F8] dark:bg-gray-900 dark:text-white sm:h-[33rem] xs:h-40 h-26 border-t border-r border-[#F0F3F8] dark:border-gray-500">
        <div className="ml-32 mt-4">
          <div className="flex sm:flex-row flex-col gap-40 justify-start items-center">
            <div className="flex gap-2 font-bold justify-center items-center">
              <IoIosArrowRoundBack className="text-2xl text-gray-500 dark:text-gray-200" />
              <IoIosArrowRoundForward className="text-2xl text-gray-500 dark:text-gray-200" />
            </div>

            <div className="relative flex justify-start items-center gap-4">
              <input
                type="text"
                placeholder="Search Here"
                className="border bg-transparent rounded-full w-40 px-7 py-1 text-xs text-gray-700 focus:ring-transparent focus:outline-none
            "
              />
              <RiSearch2Line className="absolute left-2  text-gray-400 text-sm" />
            </div>
          </div>

          <div className="mt-6  flex-col bg-white dark:bg-gray-800 dark:text-white p-2 w-8/12 rounded-lg sm:flex hidden">
            <h3 className=" font-bold tracking-wide mb-4 text-sm">
              Fitness Activity
            </h3>
            <BarChart chartData={chartData} />
          </div>

          <div className="mt-8 flex flex-col w-7/12">
            <div className="flex justify-between items-center capitalize mb-4">
              <h3 className=" font-bold tracking-wide text-sm">
                recommended
              </h3>
              <h3 className="text-gray-500 dark:text-gray-200 text-sm">trainer</h3>
              <h3 className="text-gray-500 dark:text-gray-200 text-sm">duration</h3>
            </div>
            <Recommended />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
