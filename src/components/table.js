import React from 'react';
import './css/table.css';

const Table = ({ selectedNumbers, totalPrice }) => {
  if (!selectedNumbers) {
    return null; 
  }

  return (
    <div className="selected-numbers-container">
      <div className="table">
        Numbers Selected:
        {selectedNumbers.map((number, index) => (
          <span key={index}>Mark: {number}</span>
        ))}
      </div>

      <div className="total">
        <span className="total-price">Total: ${totalPrice}</span>
      </div>
    </div>
  );
};

export default Table;
