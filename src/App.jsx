import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import TablePage from './pages/TablePage';
import CardsPage from './pages/CardsPage';
import EmailTodoPage from './pages/EmailTodoPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="table" element={<TablePage />} />
          <Route path="cards" element={<CardsPage />} />
          <Route path="emailtodo" element={<EmailTodoPage />} />
          <Route path="/" element={<TablePage />} /> {/* Default route */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
