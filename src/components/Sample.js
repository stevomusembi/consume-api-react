import React from 'react';

const sampleJSON = {
  "arrOfNumbers": [1, 2, 3, 4],
  "arrOfStrings": ["a", "b", "c", "d"],
  "arrOfObjects": [{ "a": 1, "b": 1 }, { "a": 2, "b": 2 }, { "a": 3, "b": 3 }]
}

export default function Sample() {
  return (
    <div>

      <h2>Array of Numbers:</h2>
      <ul>
        {sampleJSON.arrOfNumbers.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>

      <h2>Array of Strings:</h2>
      <ul>
        {sampleJSON.arrOfStrings.map((item, i) => {
          return <li key={i}>{item}</li>
        })}
      </ul>

      <h2>Array of Objects:</h2>
      <ul>
        {sampleJSON.arrOfObjects.map((item, i) => {
          return <li key={i}>{item.a} - {item.b}</li>
        })}
      </ul>

    </div>
  )
}
