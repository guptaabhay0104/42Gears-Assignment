import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Table = () => {
    const [data, setData] = useState([]);
    const [expandedRows, setExpandedRows] = useState([]);

    useEffect(() => {
      fetch('/Data.json') 
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
    }, []);

    const toggleExpand = (id) => {
        setExpandedRows((prevExpandedRows) =>
            prevExpandedRows.includes(id)
                ? prevExpandedRows.filter((rowId) => rowId !== id)
                : [...prevExpandedRows, id]
        );
    };

    return (
            <div className="bg-white rounded-lg overflow-hidden text-center">
                <table className="w-full border-collapse">
                    <thead style={{background: 'linear-gradient(to right, #2E366A, #463178, #613069)'}}>
                        <tr>
                            <th className="text-white p-4 text-left font-bold border-r border-white first:rounded-tl-lg last:rounded-tr-lg">
                                S. No
                            </th>
                            <th className="text-white p-4 text-left font-bold border-r border-white">
                                Project
                            </th>
                            <th className="text-white p-4 text-left font-bold border-r border-white">
                                Progress
                            </th>
                            <th className="text-white p-4 text-left font-bold first:rounded-tl-lg last:rounded-tr-lg">
                                Analysis
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <React.Fragment key={item.id}>
                                <tr>
                                    <td className="p-4 border-b border-gray-300">{index + 1}</td>
                                    <td className="p-4 border-b border-gray-300">{item.project}</td>
                                    <td className="p-4 border-b border-gray-300">{item.progress}</td>
                                    <td className="p-4 border-b border-gray-300">
                                        <button
                                            className="text-[#683B70] px-4 py-2 rounded-lg flex items-center gap-2"
                                            onClick={() => toggleExpand(item.id)}
                                        >
                                            {expandedRows.includes(item.id) ? 'View Less' : 'View More'}
                                            <FontAwesomeIcon
                                                icon={expandedRows.includes(item.id) ? faChevronUp : faChevronDown}
                                            />
                                        </button>
                                    </td>
                                </tr>
                                {expandedRows.includes(item.id) && (
                                    <tr>
                                        <td colSpan="4" className="bg-gray-100">
                                            <div className="w-full h-16 bg-gray-200 p-2 rounded-lg">
                                                <div className="text-gray-800 font-semibold">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
    );
};

export default Table;
