import { useState, useEffect } from 'react';

const bananaRates = {
  weight: {
    ounces: 4,
    pounds: 0.25,
    "us-ton": 0.00022,
    milligram: 113398,
    gram: 113.398,
    kilogram: 0.113398,
    "metric-ton": 0.000113398,
  },
  distance: {
    inches: 7,
    cm: 17.78,
    feet: 1.778,
    meters: 0.58,
    yards: 0.594,
    kilometers: 0.00058,
    miles: 0.00035,
  },
};

function BananaScale() {
  const [bananaValue, setBananaValue] = useState(0);
  const [convertedValue, setConvertedValue] = useState(0);
  const [fromUnit, setFromUnit] = useState('weight'); // Default category
  const [toUnit, setToUnit] = useState('ounces'); // Default unit

  const convertValue= () => {
    // e.preventDefault();
    const conversionRate = bananaRates[fromUnit][toUnit];
    const convertedAmount = Number(bananaValue) * conversionRate; // Ensure bananaValue is a number
    setConvertedValue(convertedAmount);
  };

  useEffect(() => {
    convertValue();
  }, [bananaValue, fromUnit, toUnit]); // Dependencies



  return (
    <div className="converter-container">
      <h1>Banana Converter</h1>
      <form onSubmit={convertValue}>
        <label htmlFor="banana-value">Enter Banana Quantity:</label>
        <input
          type="number"
          id="banana-value"
          value={bananaValue}
          onChange={(e) => setBananaValue(Number(e.target.value))} // Convert to number
        />
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          <option value="weight">Weight</option>
          <option value="distance">Distance</option>
        </select>
        <br />
        <label htmlFor="converted-value">Converted Value:</label>
        <input type="text" id="converted-value" value={convertedValue} disabled />
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {Object.keys(bananaRates[fromUnit]).map((unit) => (
            <option key={unit} value={unit}>
              {unit}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Convert</button>
      </form>
      <p>
        {convertedValue} {toUnit}
      </p>
    </div>
  );
}

export default BananaScale;