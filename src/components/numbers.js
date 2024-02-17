import React from 'react';
import './css/numbers.css';

const Numbers = ({ selectedNumbers, setSelectedNumbers, totalPrice, setTotalPrice }) => {
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

  const dividedNumbers = [];
  
  while (numbersArray.length > 0) {
    dividedNumbers.push(numbersArray.splice(0, 5));
  };

  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else {
      if (selectedNumbers.length < 5) {
        setSelectedNumbers([...selectedNumbers, number]);
      } else {
        alert("You can't select more than 5 numbers.");
      }
    }
  };

  const handleClear = () => {
    setSelectedNumbers([]);
    setTotalPrice(0);
  };

  const handleCash = () => {
    if ((selectedNumbers.length === 5) && (totalPrice > 0)) {
      alert(`Numbers selected: ${selectedNumbers.join(', ')}\nTotal Price: $${totalPrice}`);
      setSelectedNumbers([]);
      setTotalPrice(0);
    } else {
      alert("You must select 5 numbers and add money to proceed with the cash transaction.");
    }
  };

  const handleRandom = () => {
    const randomNumbers = [];
    while (randomNumbers.length < 5) {
      const randomNumber = Math.floor(Math.random() * 20) + 1; 
      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
      }
    }
    setSelectedNumbers(randomNumbers);
  };

  return (
    <div className="numbers-content">
        <div className="row-numbers row-1">
            {dividedNumbers[0].map((number) => (
            <button
                className={selectedNumbers.includes(number) ? "number-button selected" : "number-button"}
                onClick={() => handleNumberClick(number)}
            >
                {number}
            </button>
            ))}
        </div>

        <div className="row-numbers row-2">
            {dividedNumbers[1].map((number) => (
            <button
                className={selectedNumbers.includes(number) ? "number-button selected" : "number-button"}
                onClick={() => handleNumberClick(number)}
            >
                {number}
            </button>
            ))}
        </div>

        <div className="row-numbers row-3">
            {dividedNumbers[2].map((number) => (
            <button
                className={selectedNumbers.includes(number) ? "number-button selected" : "number-button"}
                onClick={() => handleNumberClick(number)}
            >
                {number}
            </button>
            ))}
        </div>

        <div className="row-numbers row-4">
            {dividedNumbers[3].map((number) => (
            <button
                className={selectedNumbers.includes(number) ? "number-button selected" : "number-button"}
                onClick={() => handleNumberClick(number)}
            >
                {number}
            </button>
            ))}
        </div>
      <div className="buttons-row">
        <button className="out-button" onClick={handleCash}>Cash</button>
        <button className="out-button" onClick={handleClear}>Clear</button>
        <button className="out-button" onClick={handleRandom}>Random</button>
      </div>
    </div>
  );
};

export default Numbers;
