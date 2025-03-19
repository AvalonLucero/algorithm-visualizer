import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BinarySearch.css";

const BinarySearch = () => {
  const generateSortedArray = (size) => {
    const arr = Array.from(
      { length: size },
      () => Math.floor(Math.random() * 50) + 1
    );
    return arr.sort((a, b) => a - b);
  };

  const [array, setArray] = useState(generateSortedArray(10));
  const [target, setTarget] = useState(null);
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(array.length - 1);
  const [mid, setMid] = useState(null);
  const [message, setMessage] = useState(
    "Set a target and click 'Start Search'"
  );
  const [isPaused, setIsPaused] = useState(false);

  const pauseOrResume = () => {
    setIsPaused(!isPaused);
  };

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const visualizeBinarySearch = async () => {
    setMessage("Starting Binary Search...");
    let l = 0;
    let r = array.length - 1;
    while (l <= r) {
      const m = Math.floor((l + r) / 2);
      setMid(m);
      setMessage(`Checking middle element at index ${m}`);
      await sleep(1000);

      // Pause handling
      while (isPaused) {
        await sleep(100);
      }

      if (array[m] === target) {
        setMessage(`Found ${target} at index ${m}`);
        return;
      } else if (array[m] < target) {
        setMessage(
          `${target} is greater than ${array[m]}, searching right half`
        );
        l = m + 1;
      } else {
        setMessage(`${target} is less than ${array[m]}, searching left half`);
        r = m - 1;
      }

      setLeft(l);
      setRight(r);
      await sleep(1000);
    }
    setMessage(`${target} not found in the array.`);
  };

  const resetArray = () => {
    setArray(generateSortedArray(10));
    setLeft(0);
    setRight(array.length - 1);
    setMid(null);
    setMessage("New array generated! Set a target to start.");
  };

  return (
    <div className="binary-search-page">
      <div className="algorithm-explanation">
        <h2>Binary Search Algorithm</h2>
        <p>
          Binary Search is a search algorithm used to efficiently find a target
          value within a sorted array. It follows the{" "}
          <strong>Divide and Conquer</strong> approach by repeatedly dividing
          the search interval in half.
        </p>
        <ol>
          <li>Start with the middle element of the array.</li>
          <li>If the middle element is the target, the search is complete.</li>
          <li>
            If the target is smaller, continue the search on the left half.
          </li>
          <li>
            If the target is larger, continue the search on the right half.
          </li>
          <li>
            Repeat until the target is found or the search range is empty.
          </li>
        </ol>
        <p>
          <strong>Time Complexity:</strong> \( O(\log n) \) - Very efficient for
          large sorted arrays.
        </p>
      </div>

      <div className="explanation">
        <h2>Binary Search Visualization</h2>
        <p>{message}</p>
        <input
          type="number"
          placeholder="Set Target"
          onChange={(e) => setTarget(Number(e.target.value))}
        />
        <button onClick={visualizeBinarySearch}>Start Search</button>
        <button onClick={pauseOrResume}>{isPaused ? "Resume" : "Pause"}</button>
        <button onClick={resetArray}>New Array</button>
      </div>
      <div className="visualization">
        <div className="bars-container">
          {array.map((value, index) => (
            <div
              key={index}
              className="bar"
              style={{
                height: `${value * 5}px`,
                backgroundColor:
                  index === mid
                    ? "orange"
                    : index >= left && index <= right
                    ? "cornflowerblue"
                    : "lightgray",
              }}
            >
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BinarySearch;
