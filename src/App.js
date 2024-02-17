import React, { useState } from 'react';
import Header from './components/header';
import Buttons from './components/buttons';
import Numbers from './components/numbers';
import Table from './components/table';
import './App.css';

const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className="app-container">
      <Header />
      <div className="numbers-buttons-container">
        <div className="buttons-container">
          <Buttons setTotalPrice={setTotalPrice} selectedNumbers={selectedNumbers} />
        </div>
        <div className="numbers-container">
          <Numbers selectedNumbers={selectedNumbers} totalPrice={totalPrice} setSelectedNumbers={setSelectedNumbers} setTotalPrice={setTotalPrice} />
        </div>
        <div className="table-container">
          <Table selectedNumbers={selectedNumbers} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default App;
