import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Home() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const navigate = useNavigate();
  const username = localStorage.getItem('username') || 'Guest';
  const userId = localStorage.getItem('user_id');
  const isLoggedIn = !!localStorage.getItem('token');

  useEffect(() => {
    axios.get('http://localhost:4000/')
      .then(res => {
        setQuestions(res.data);
        res.data.forEach(question => {
          fetchAnswers(question.question_id);
        });
      })
      .catch(err => console.log(err));
  }, []);

  const fetchAnswers = (questionId) => {
    axios.get(`http://localhost:4000/answers/${questionId}`)
      .then(res => {
        console.log(`Fetched answers for question ${questionId}: `, res.data); // Debug log
        setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: res.data }));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="home-container">
      <h1>BananaBooBoo : Casa de Banana</h1>

      <h3>Welcome, {username}!</h3>

      <p>
        We're simply, Bananas! Here at BananaBooBoo we love all things bananas. 
        If you are just as bananas as us, we would love for you to join our community.
        Make banana conversions, share fun facts, ask questions. Everything bananas, all the time.
        Stay peeled, friends!
      </p>

      <br />
      <div>
        <table>
          <thead>
            <tr>
              <th>Question ID</th>
              <th>Category ID</th>
              <th>Subject & Question</th>
              {/* <th>Question</th> */}
              <th>User ID</th>
              <th>Answers</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              questions.map((question) => (
                <tr key={question.question_id}>
                  <td>{question.question_id}</td>
                  <td>{question.category_id}</td>
                  <td><h4>{question.question_title},</h4>
                  {question.question}</td>
                  <td>{question.user_id}</td>
                  <td>
                    <ul>
                      {answers[question.question_id] &&
                        answers[question.question_id].map(answer => (
                          <li key={answer.answer_id}>{answer.answer}</li>
                        ))}
                    </ul>
                  </td>
                  <td>
                    {isLoggedIn && <Link to={`/edit/${question.question_id}`} className="edit">Edit</Link>}
                    {isLoggedIn && <Link to={`/answer/${question.question_id}`} className="edit">Answer</Link>}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <br />
        {isLoggedIn && <Link to='/post' className="edit">Post</Link>}
        <br />
      </div>
      <br />
      {/* {
        questions.map((question) => (
          <div key={question.question_id}>
            <h4>Answers for Question ID: {question.question_id}</h4>
            <ul>
              {
                answers[question.question_id] && answers[question.question_id].map(answer => (
                  <li key={answer.answer_id}>{answer.answer}</li>
                ))
              }
            </ul>
          </div>
        ))
      } */}
    </div>
  );
}

export default Home;