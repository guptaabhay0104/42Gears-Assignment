import React, {memo} from "react";
import { IoMdShare, IoMdCopy, IoMdRefresh, IoMdBook, IoMdCreate, IoMdTrash } from 'react-icons/io';

const DropDown = memo(({ visible }) => {
  if (!visible) return null;
  
  return (
    <div className="absolute right-0 top-0 w-40 bg-white rounded-md shadow-xl z-10" style={{boxShadow: '10px 10px 25px rgba(0, 0, 0, 0.15), -10px -10px 25px rgba(0, 0, 0, 0.15)', transform: 'translateX(100%)' }}>
      {[
        { Icon: IoMdShare, label: 'Share Project' },
        { Icon: IoMdCopy, label: 'Copy Project' },
        { Icon: IoMdRefresh, label: 'Refresh' },
        { Icon: IoMdBook, label: 'Logs' },
        { Icon: IoMdCreate, label: 'Edit' },
        { Icon: IoMdTrash, label: 'Delete' }
      ].map((item, index) => (
        <div key={index} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
          <item.Icon className="text-lg mr-2" />
          {item.label}
        </div>
      ))}
    </div>
  );
});

export default DropDown;