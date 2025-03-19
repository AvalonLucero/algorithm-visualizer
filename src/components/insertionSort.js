import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./InsertionSort.css";

const InsertionSort = () => {
  const generateRandomArray = (size) => {
    return Array.from(
      { length: size },
      () => Math.floor(Math.random() * 50) + 1
    );
  };

  const [array, setArray] = useState(generateRandomArray(10));
  const [current, setCurrent] = useState(null);
  const [compare, setCompare] = useState(null);
  const [message, setMessage] = useState("Click 'Start Sorting' to begin!");
  const [isPaused, setIsPaused] = useState(false);
  const isPausedRef = useRef(isPaused);

  // Sync useRef with state
  useEffect(() => {
    isPausedRef.current = isPaused;
  }, [isPaused]);

  useEffect(() => {
    highlightBars(current, compare);
  }, [current, compare]);

  useEffect(() => {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar, index) => {
      bar.style.transform = `translateX(${index * 40}px)`;
    });
  }, [array]);

  const pauseOrResume = () => {
    setIsPaused(!isPaused);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const waitForResume = async () => {
    while (isPausedRef.current) {
      await sleep(100); // Check every 100ms
    }
  };

  const visualizeInsertionSort = async (arr) => {
    setMessage("Starting Insertion Sort...");
    await waitForResume();
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
      setMessage(`Considering element ${key} at index ${i}`);
      setCurrent(i);
      await sleep(1000);
      await waitForResume();

      while (j >= 0 && arr[j] > key) {
        setMessage(`Comparing ${key} with ${arr[j]}`);
        setCompare(j);

        // Slide the bar visually by swapping positions in the array
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        setArray([...arr]);
        j--;

        await sleep(1000);
        await waitForResume();
      }
      arr[j + 1] = key;
      setMessage(`Placing ${key} at position ${j + 1}`);
      setArray([...arr]);
      await sleep(1000);
      await waitForResume();
    }
    setMessage("Array is sorted!");
  };

  const highlightBars = (current, compare) => {
    const bars = document.querySelectorAll(".bar");
    bars.forEach((bar, index) => {
      bar.style.backgroundColor = "cornflowerblue"; // Default color
      if (index === current) bar.style.backgroundColor = "orange"; // Current element
      if (index === compare + 1) bar.style.backgroundColor = "green"; // Insert position
    });
  };

  const resetArray = () => {
    setArray(generateRandomArray(10));
    setCurrent(null);
    setCompare(null);
    setMessage("New array generated!");
  };

  return (
    <div className="insertion-sort-page">
      <div>
        <Link to="/" className="nav-button">
          ⬅️ Back to Home
        </Link>
      </div>
      <div className="explanation">
        <h2>Insertion Sort</h2>
        <p>{message}</p>
        <p>
          Insertion Sort is an in-place comparison-based sorting algorithm. It
          builds the sorted array one item at a time by comparing the current
          element with the largest value in the sorted array.
        </p>
        <ol>
          <li>
            Start from the second element and compare with elements before it.
          </li>
          <li>Shift all larger elements to the right.</li>
          <li>Insert the current element at the correct position.</li>
          <li>Repeat until the array is sorted.</li>
        </ol>
        <button onClick={() => visualizeInsertionSort([...array])}>
          Start Sorting
        </button>
        <button onClick={pauseOrResume}>{isPaused ? "Resume" : "Pause"}</button>
        <button onClick={resetArray}>New Array</button>
      </div>
      <div className="visualization">
        <div className="bars-container">
          {array.map((value, index) => (
            <div
              key={index}
              className="bar"
              style={{ height: `${value * 5}px` }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsertionSort;
