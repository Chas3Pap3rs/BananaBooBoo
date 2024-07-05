import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

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

function Conversions() {
  const [bananaValue, setBananaValue] = useState({}); // Set default banana quantity to 0
  const [weightValues, setWeightValues] = useState({});
  const [distanceValues, setDistanceValues] = useState({});
  const isLoggedIn = !!localStorage.getItem('token'); // Assuming token is stored in localStorage

  useEffect(() => {
    const newWeightValues = {};
    const newDistanceValues = {};
    Object.keys(bananaRates.weight).forEach(unit => {
      newWeightValues[unit] = bananaValue * bananaRates.weight[unit];
    });
    Object.keys(bananaRates.distance).forEach(unit => {
      newDistanceValues[unit] = bananaValue * bananaRates.distance[unit];
    });
    setWeightValues(newWeightValues);
    setDistanceValues(newDistanceValues);
  }, [bananaValue]);

  const handleUnitChange = (unit, value, type) => {
    const baseValue = value / bananaRates[type][unit];
    setBananaValue(baseValue);
  };

  const handleBananaChange = (e) => {
    const value = e.target.value;
    setBananaValue(value === '' ? 0 : Number(value));
  };

  const [data, setData] = useState([])

  useEffect(() => {
    const categoryId = [1];
    axios.get(`http://localhost:4000?category_id=${categoryId}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])





  return (
    <div className="converter-container">
      <h1>BananaBooBoo : Conversions</h1>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <label>Banana(s):</label>
        <input
          type="number"
          value={bananaValue || ''} // To avoid leading 0
          placeholder="Banana(s)"
          onChange={handleBananaChange}
        />
      </div>

      <div className="conversions-container">
        <div className="unit-container">
          <h2>Weight</h2>
          {Object.keys(weightValues).map((unit) => (
            <div key={unit} className="unit-row">
              <label className="unit-label">{unit}:</label>
              <input
                type="number"
                value={weightValues[unit] || ''} // To avoid leading 0
                placeholder={unit}
                onChange={(e) => handleUnitChange(unit, Number(e.target.value), 'weight')}
              />
            </div>
          ))}
        </div>

        <div className="unit-container">
          <h2>Distance</h2>
          {Object.keys(distanceValues).map((unit) => (
            <div key={unit} className="unit-row">
              <label className="unit-label">{unit}:</label>
              <input
                type="number"
                value={distanceValues[unit] || ''} // To avoid leading 0
                placeholder={unit}
                onChange={(e) => handleUnitChange(unit, Number(e.target.value), 'distance')}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>Question ID</th>
              <th>Category ID</th>
              <th>Title</th>
              <th>Question</th>
              <th>User ID</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((question)=> (
                  <tr key={question.question_id}>
                      <td>{question.question_id}</td>
                      <td>{question.category_id}</td>
                      <td>{question.question_title}</td>
                      <td>{question.question}</td>
                      <td>{question.user_id}</td>
                      <td>
                        {isLoggedIn && <Link to={`/edit/${question.question_id}`} className="edit">Edit</Link>} <br />
                      </td>
                  </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Link to='/post' className="edit" state={{ category_id: '1' }}>Post</Link>
    </div>
  )
}

export default Conversions
