import React from 'react';
import Table from '../components/Menu_1.jsx/Table';

function TablePage(){
    return (
      <div className="bg-gray-100 p-12 rounded-lg mt-16 ml-64 mr-8 relative h-[80vh] max-h-[200vh]" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 4px 20px rgba(0, 0, 0, 0.13)' }}>
        <Table />
      </div>
    );
};

export default TablePage;