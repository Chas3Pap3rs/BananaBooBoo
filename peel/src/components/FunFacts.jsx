import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function FunFacts() {
  const [data, setData] = useState([])
  const isLoggedIn = !!localStorage.getItem('token'); // Assuming token is stored in localStorage

  useEffect(() => {
    const categoryId = [3];
    axios.get(`http://localhost:4000?category_id=${categoryId}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="funfacts-container">
      <h1>BananaBooBoo : Fun Facts</h1>

      <p>
        Who doesn't love fun?! Post your fun fact questions here!
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
      <Link to='/post' className="edit" state={{ category_id: '3' }}>Post</Link>
    </div>
  )
}

export default FunFacts
