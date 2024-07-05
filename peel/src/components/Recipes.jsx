import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Recipes() {
  const [data, setData] = useState([])
  const isLoggedIn = !!localStorage.getItem('token'); // Assuming token is stored in localStorage

  useEffect(() => {
    const categoryId = [1];
    axios.get(`http://localhost:4000?category_id=${categoryId}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="recipes-container">
      <h1>BananaBooBoo : Recipes</h1>

      <p>
        What are some delicious banana recipes for you to try at home? Ask here!
        If you know a good one, please share it! We hope you enjoy these as much
        as we do!
      </p>

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
      <Link to='/post' className="edit" state={{ category_id: '2' }}>Post</Link>
    </div>
  )
}

export default Recipes
