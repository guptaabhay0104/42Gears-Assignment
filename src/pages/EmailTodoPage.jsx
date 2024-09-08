import React from 'react';
import Todo from './../components/Menu_3.jsx/Todo'

function EmailTodoPage (){
  return (
    <>
      <div className="bg-gray-100 p-12 rounded-lg mt-16 ml-64 mr-8 relative h-[80vh] max-h-[200vh]" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 4px 20px rgba(0, 0, 0, 0.13)' }}>
        <div className="absolute top-4 left-4 text-xl font-bold text-gray-800">
          TestProject
        </div>
        <Todo />
      </div>
    </>
  )
};

export default EmailTodoPage;
