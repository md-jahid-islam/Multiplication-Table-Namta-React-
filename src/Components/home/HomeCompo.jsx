 import React, { useState, useEffect } from "react";
 import { ToastContainer, toast } from "react-toastify";
 import { animated } from "react-spring";
 import "react-toastify/dist/ReactToastify.css";
 import './HomeCompo.css'
 // ======================== useState part start 
 const HomeCompo = () => {
  const [range, setRange] = useState(10);
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

 //================ speak part start 
  const speak = (text, lang = "bn-BD") => {
    const synth = window.speechSynthesis;
    if (synth.speaking) synth.cancel(); 
    const utterance = new SpeechSynthesisUtterance(text.trim());
    utterance.lang = lang;
    synth.speak(utterance);
  };
 //================ readRow part start 
  const readRow = (row) => {
    const rowText = Array.from({ length: range }, (_, i) => {
      const col = i + 1;
      return `${row} গুন ${col} সমান ${row * col}`;
    }).join("\n");
    speak(rowText);
  };
 // =================== handleRangeChange event  part start 
  const handleRangeChange = (event) => {
    const newRange = Math.min(Math.max(parseInt(event.target.value, 10), 1), 100); 
    setRange(newRange);
    setSelected(null); 
    speak(`সারণি আকার ${newRange} এ পরিবর্তন করা হয়েছে।`, "bn-BD");
  };
 // ==================== renderTable part start 
  const renderTable = () => {
    const table = [];
    for (let i = 1; i <= range; i++) {
      const row = [];
      for (let j = 1; j <= range; j++) {
        const result = i * j;
 // ==================== isHovered part start 
        const isHovered = hovered === result;
        const cellStyle = {
          transform: isHovered ? "scale(1.2)" : "scale(1)",
          backgroundColor:
            selected?.row === i || selected?.col === j
              ? "#dfe6e9"
              : isHovered
              ? "#f39c12"
              : "#fff",
          boxShadow: isHovered ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "none",
          transition: "transform 0.2s, background-color 0.2s",
        };
 // ======================= push part start 
        row.push(
          <animated.td
            key={j}
            style={cellStyle}
            aria-label={`${i} গুন ${j} সমান ${result}`}
            onMouseEnter={() => {
              setHovered(result);
              speak(`${i} গুন ${j} সমান ${result}`, "bn-BD");
            }}
            onMouseLeave={() => setHovered(null)}
            onClick={() => {
              setSelected({ row: i, col: j });
              speak(`নির্বাচিত ${i} গুন ${j} সমান ${result}`, "bn-BD");
            }}
          >
            {result}
          </animated.td>
        );
      }
      table.push(<tr key={i}>{row}</tr>);
    }
    return table;
  };
 // ==================== useEffect speak part start 
  useEffect(() => {
    speak(
      "গুণ সারণিতে স্বাগতম। \nযেকোনো ঘরের উপর কার্সর রাখুন উত্তর শুনতে। \nঘর ক্লিক করলে তা নির্বাচিত হবে। \nআপনি সারণির আকার পরিবর্তন করতে পারেন।",
      "bn-BD"
    );
  }, []);
 // ====================== design part start 
  return (
    <div className="table-container">
      <h1>গুণ সারণি</h1>

      <label htmlFor="range">সারণির আকার নির্ধারণ করুন (1 থেকে 100): </label>
      <input
       className=" "  type="number"
        id="range"
        value={range}
        onChange={handleRangeChange}
        min="1"
        max="100"
        style={{ margin: "10px 0", padding: "5px" }}
      />

      <button
        onClick={() => {
          setSelected(null);
          speak("সব নির্বাচিত ঘর মুছে ফেলা হয়েছে।", "bn-BD");
        }}
        style={{
          padding: "5px 10px",
          margin: "10px 0",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        হাইলাইটস মুছে ফেলুন
      </button>

      <button
        onClick={() => {
          speak("গুণ সারণি পড়া শুরু হচ্ছে।", "bn-BD");
          for (let i = 1; i <= range; i++) {
            setTimeout(() => readRow(i), i * 3000); // Delay for each row
          }
        }}
        style={{
          padding: "5px 10px",
          margin: "10px 0",
          cursor: "pointer",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
        }}
      >
        সারণি পড়ুন
      </button>

      <table>
        <tbody>{renderTable()}</tbody>
      </table>

      {selected && (
        <div>
          <h3>
            {`নির্বাচিত: ${selected.row} গুন ${selected.col} = ${
              selected.row * selected.col
            }`}
          </h3>
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
 };

 export default HomeCompo;
