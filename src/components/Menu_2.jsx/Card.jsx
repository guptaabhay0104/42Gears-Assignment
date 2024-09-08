import React, { useState, useCallback, memo } from 'react';
import { FaEllipsisV, FaPlay, FaStop, FaUser, FaChevronRight } from 'react-icons/fa';
import DropDown from './DropDown';

const Card = memo(({ running, content, time, progress, error }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = useCallback(() => setMenuOpen(!menuOpen), [menuOpen]);

  const progressWidth = Number(progress) || Number(error);
  const progressBarStyle = {
    width: `${progressWidth}%`,
    backgroundColor: error ? '#f44336' : '#4caf50',
    height: '10px'
  };

  return (
    <div className="bg-white rounded-lg shadow-lg flex flex-col divide-y divide-gray-300 w-[380px] max-w-sm m-2 relative" style={{ boxShadow: '10px 10px 25px rgba(0, 0, 0, 0.15), -10px -10px 25px rgba(0, 0, 0, 0.15)' }}>
      <div className="p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-green-200 p-2 rounded-full">
            <FaUser className="text-green-600" />
          </div>
          <p className="font-semibold">User: Sayedameen_Pro</p>
        </div>
        <div onClick={toggleMenu} className="relative cursor-pointer">
          <FaEllipsisV className="text-xl" />
          {menuOpen && <DropDown visible={menuOpen} />}
        </div>
      </div>

      <div className="flex">
        <div className="flex flex-col items-center p-3 border-r border-gray-300 w-1/4">
          <div className='flex'>
            <div className={`h-2 w-2 rounded-full ${running ? 'bg-green-500' : 'bg-red-500'} m-1`} />
            <p className="text-[12px] text-gray-600 text-left" style={{ minWidth: '70px' }}>{running ? 'Running' : 'Not Running'}</p>
          </div>
          <div>
            <span className="text-xs text-gray-500">{time}</span>
          </div>
        </div>
        <div className="flex-1 ml-1">
          <p className="text-sm text-gray-800 text-left">{content}</p>
          <button className="text-black font-semibold flex items-center text-sm float-end mt-5 mr-2">
            Details <FaChevronRight className="ml-3 text-green-500" />
          </button>
        </div>
      </div>

      {(progress !== undefined || error) && (
        <div className="py-2 flex items-center">
          <p className="text-xs text-gray-600 pl-1 flex-1 text-left">{progress ? 'Packages: Downloading packages...' : 'Error package demo...'}</p>
          <span className="text-xs mx-2">{progress || error}%</span>
          <div className="w-1/3 bg-gray-200 rounded-full overflow-hidden h-1.5 mr-1">
            <div style={progressBarStyle}></div>
          </div>
        </div>
      )}

      <div className="p-2 flex">
        <FaPlay className="text-green-500 cursor-pointer mr-4" />
        <FaStop className="text-red-500 cursor-pointer" />
      </div>
    </div>
  );
});

export default Card;
