import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useAuth } from '/src/context/AuthContext.jsx';


function Books() {
  const [data, setData] = useState([])
  const isLoggedIn = !!localStorage.getItem('token'); // Assuming token is stored in localStorage
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const categoryId = [4];
    axios.get(`http://localhost:4000?category_id=${categoryId}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err));
  }, [])

  return (
    <div className="books-container">

      <h1>BananaBooBoo : Books</h1>

      <p>
        What are some good books about bananas? Share your favorite reads here!
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
                        {isLoggedIn && isAuthenticated && <Link to={`/edit/${question.question_id}`} className="edit">Edit</Link>} <br />
                      </td>
                  </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <Link to='/post' className="edit" state={{ category_id: '4' }}>Post</Link>
    </div>
  )
}

export default Books
