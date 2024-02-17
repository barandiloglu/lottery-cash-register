import React from 'react';
import './css/buttons.css'; 
import lottery from './icons/lottery.png';

const Buttons = ({ selectedNumbers, setTotalPrice }) => {

  const addMoney = (price) => {
    if(selectedNumbers.length < 5) {
      alert("You have to select 5 numbers.");
    } else {
      setTotalPrice(prevTotalPrice => prevTotalPrice + price);
    }
  };

  return (
    <div className="button-container">
        <div className='icon'>
            <img src={lottery} alt='Lottery'></img>
        </div>
        <div className='first-row'>
            <button className="button" onClick={() => addMoney(1)}>$1</button>
            <button className="button" onClick={() => addMoney(5)}>$5</button>
        </div>
        <div className='second-row'>
            <button className="button" onClick={() => addMoney(10)}>$10</button>
            <button className="button" onClick={() => addMoney(20)}>$20</button>
        </div>
    </div>
  );
};

export default Buttons;
