import React, { useState } from 'react';
import './App.css';


function App() {
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(year, month - 1, day);
    const today = new Date();
    
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    
    if (monthDiff < 0 || dayDiff <0
    ) {
      calculatedAge ++; 
    }

    setAge(calculatedAge);
  };
  
  return (
    <div className="container">
      
      <div className="card">
           <h1 style={{ textAlign: 'center', padding: '30px', fontFamily: 'sans-serif' }}>
          Age Calculator
         </h1>
        <label>
          Year
          <input className="form"
            type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Enter birth year"
          />
        </label>

        <label>
          Month
          <input className="form"
            type="number"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder="Enter birth month"
          />
        </label>

        <label>
          Day
          <input className="form"
            type="number"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder="Enter birth day"
          />
        </label>

        <button  className="button" onClick={calculateAge}>Calculate Age</button>

        {age !== '' && (
          <div>
            <h2>Your Age: {age} years</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
