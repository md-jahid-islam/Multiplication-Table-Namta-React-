import React from "react";

const DemoCompo = () => {
  return (
    <>
    <div className="container">
    <div className="p-6 text-[#AE445A] max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Multiplication Table Namta
      </h1>

      <h2 className="text-xl md:text-2xl font-semibold mt-4">
        React Code
      </h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
        {`
 import React, { useState } from "react";

 function MultiplicationTable() {
  const [number, setNumber] = useState(1);

  const generateTable = () => {
    return Array.from({ length: 10 }, (_, i) => (
      <div key={i}>{number} x {i + 1} = {number * (i + 1)}</div>
    ));
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
        className="border rounded p-2 mb-4"
      />
      <div>{generateTable()}</div>
    </div>
  );
 }

 export default MultiplicationTable;
        `}
      </pre>

      <h2 className="text-xl md:text-2xl font-semibold mt-4">
        Installation Details
      </h2>
      <ul className="list-disc ml-6 text-sm md:text-base">
        <li>Ensure you have Node.js installed on your system.</li>
        <li>Install dependencies:</li>
        <ul className="list-disc ml-6">
          <li>`react-hook-form`: ^7.53.2</li>
          <li>`react-icons`: ^5.3.0</li>
          <li>`react-router-dom`: ^6.28.0</li>
          <li>`react-spinners`: ^0.14.1</li>
          <li>`react-spring`: ^9.7.4</li>
          <li>`react-toastify`: ^10.0.6</li>
        </ul>
        <li>Run `npx create-react-app namota` to create a new React app.</li>
        <li>Replace the code in `src/App.js` with the code above.</li>
        <li>Run `npm install` to install the required dependencies.</li>
        <li>Run `npm start` to launch the development server.</li>
        <li>Alternatively, for Vite, run `npm run dev` to launch the project.</li>
      </ul>
    </div>

    </div>
    
    </>
  );
};

export default DemoCompo;
