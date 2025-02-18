import React, { useState, useEffect } from "react";
import "./InsertionSort.css";

const InsertionSort = () => {
  const [array, setArray] = useState([5, 3, 8, 6, 2, 7, 1, 4]);

  useEffect(() => {
    visualizeInsertionSort();
  }, []);

  const visualizeInsertionSort = async (arr) => {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j = j - 1;
        setArray([...arr]);
        highlightBars(i, j);
        await new Promise((resolve) => setTimeout(resolve, 500)); //Animation delay
      }
      arr[j + 1] = key;
      setArray([...arr]);
      highlightBars(i, j);
      await new Promise((resolve) => setTimeout(resolve, 500)); //Animation delay
    }
  };

  const highlightBars = (current, compare) => {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar, index) => {
      if (index === current) {
        bar.style.backgroundColor = "red";
      } else if (index === compare) {
        bar.style.backgroundColor = "blue";
      } else {
        bar.style.backgroundColor = "black";
      }
    });
  };
  const shuffleArray = () => {
    const shuffledArray = [...array].sort(() => Math.random() - 0.5);
    setArray(shuffledArray);
  };

  return (
    <div className="insertion-sort">
      <button onClick={() => visualizeInsertionSort([...array])}>
        Start Sorting
      </button>
      <button onClick={shuffleArray}>Reset Array</button>
      <div className="bars-container">
        {array.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${value * 20}px` }}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsertionSort;
