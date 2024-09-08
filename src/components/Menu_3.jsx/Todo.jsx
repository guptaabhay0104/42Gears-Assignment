import React, { useState } from 'react';
import { FaPlus, FaTrash } from 'react-icons/fa';

function EmailTodo() {
  const [emails, setEmails] = useState([]);
  const [input, setInput] = useState('');

  
  const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const addEmail = () => {
    if (!input) {
      alert("Please enter an email address before adding.");
    } else if (!validateEmail(input)) {
      alert("Please enter a valid email address.");
    } else {
      setEmails([...emails, { email: input, id: Date.now() }]);
      setInput('');
    }
  };

  const deleteEmail = (id) => {
    setEmails(emails.filter(email => email.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg flex flex-wrap">
      <div className="flex-1 text-nd font-semibold min-w-[150px]">Google EmailId's for FRP</div>
      <div className="flex-1 flex flex-col items-end">
        <div className="flex w-full justify-end mb-4">
          <input 
            type="email"
            placeholder="Enter email address"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="border border-gray-300 shadow-sm p-2 rounded-sm text-lg w-80 h-11"
            style={{ maxWidth: '320px' }}
          />
          <button 
            onClick={addEmail}
            className="bg-gray-400 hover:bg-gray-500 text-white rounded-sm p-4 h-11">
            <FaPlus />
          </button>
        </div>
        <div className="w-full flex flex-col space-y-2">
          {emails.map(email => (
            <div key={email.id} className="flex justify-between items-center bg-white p-2 shadow-md rounded-lg mb-2 w-[368px] ml-52">
              <p className="text-lg">{email.email}</p>
              <button 
                onClick={() => deleteEmail(email.id)}
                className="text-gray-500 hover:text-gray-700">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EmailTodo;
