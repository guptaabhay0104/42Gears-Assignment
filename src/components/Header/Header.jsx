import React from 'react';
import logo from '../../assets/42Gears Logo.png';
import logoutArrow from '../../assets/LogoutArrow.svg';
import downArrow from '../../assets/Arrow_down_White.svg';

function Header() {
    return (
        <div className="fixed top-0 left-0 right-0 h-16 text-white flex justify-between items-center z-50 shadow-md " style={{background: 'linear-gradient(to right, #2E366A, #463178, #613069)'}}>
            <div className="flex items-center">
                <img alt="Logo" className="p-2 h-9 w-32 mx-4" src={logo}/>
            </div>
            <div className="flex items-center pr-4 h-full">
                <div className="flex items-center mr-4 mx-2 h-full">
                    <div className="flex items-center h-full pl-6">
                        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center mr-4">
                        </div>
                        <span className='font-semibold text-lg mr-3'>Test user</span>
                        <img src={downArrow} alt="Logout" className="h-4 w-4 mr-6" />
                    </div>
                </div>
                <button className="flex items-center bg-transparent text-white px-5 py-1 rounded">
                    <span className='font-semibold text-lg'>Logout</span>
                    <img src={logoutArrow} alt="Logout" className="h-4 w-4 ml-2" />
                </button>
            </div>
        </div>
    );
}

export default Header;
