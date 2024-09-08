import React from 'react';
import { Link } from 'react-router-dom';
import menu1 from '../../assets/Menu_Icon1.svg';
import menu2 from '../../assets/Menu_Icon2.svg';
import menu3 from '../../assets/Menu_Icon3.svg';

const Sidebar = () => {
  return (
    <div className="w-1/5 bg-gray-100 p-4 absolute left-0 top-[4rem] h-[calc(110vh)]">
      <nav>
        <ul className="space-y-6">
          <li className="flex items-center p-2 rounded-md hover:bg-white hover:shadow-lg transition-all">
            <Link to="/table" className="flex items-center w-full">
              <img src={menu1} className="w-8 h-8 mr-3" alt="Menu 1" />
              <span className="text-black font-semibold text-lg">Menu 1</span>
            </Link>
          </li>
          <li className="flex items-center p-2 rounded-md hover:bg-white hover:shadow-lg transition-all">
            <Link to="/cards" className="flex items-center w-full">
              <img src={menu2} className="w-8 h-8 mr-3" alt="Menu 2" />
              <span className="text-black font-semibold text-lg">Menu 2</span>
            </Link>
          </li>
          <li className="flex items-center p-2 rounded-md hover:bg-white hover:shadow-lg transition-all">
            <Link to="/emailtodo" className="flex items-center w-full">
              <img src={menu3} className="w-8 h-8 mr-3" alt="Menu 3" />
              <span className="text-black font-semibold text-lg">Menu 3</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
