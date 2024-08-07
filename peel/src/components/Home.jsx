import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const categoryMapping = {
  1: 'Conversion',
  2: 'Recipes',
  3: 'Fun Facts',
  4: 'Books'
};

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
              <th>Category</th>
              <th>Question</th>
              <th>Question Actions</th>
              <th>Answers</th>
              <th>Answer Actions</th>
            </tr>
          </thead>

          <tbody>
            {questions.map((question) => (
                <tr key={question.question_id}>
                  <td>{categoryMapping[question.category_id]}</td>
                  <td><h4>{question.question_title},</h4>
                  {question.question}</td>

                  <td>
                    {isLoggedIn && userId === String(question.user_id) && (
                      <>
                        <Link to={`/edit/${question.question_id}`} className="edit">Edit</Link>
                        <Link to={`/delete-question/${question.question_id}`} className="edit">Delete</Link>
                      </>
                    )}
                    {isLoggedIn && <Link to={`/answer/${question.question_id}`} className="edit">Answer</Link>}
                  </td>

                  <td>
                    <ul>
                      {answers[question.question_id] &&
                        answers[question.question_id].map(answer => (
                          <li key={answer.answer_id}>{answer.answer}</li>
                        ))}
                    </ul>
                  </td>

                  <td>
                    {answers[question.question_id] && answers[question.question_id].map(answer => (
                        <div key={answer.answer_id}>
                          {isLoggedIn && userId === String(answer.user_id) && (
                            <>
                              <Link to={`/edit-answer/${answer.answer_id}`} className="edit">Edit</Link>
                              <Link to={`/delete-answer/${answer.answer_id}`} className="edit">Delete</Link>
                            </>
                          )}
                        </div>
                    ))}
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>


      </div>
        {isLoggedIn && <Link to='/post' className="edit">Post Question</Link>}
      </div>
  );
}

export default Home;





// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const categoryMapping = {
//   1: 'Conversion',
//   2: 'Recipes',
//   3: 'Fun Facts',
//   4: 'Books'
// };

// function Home() {
//   const [questions, setQuestions] = useState([]);
//   const [answers, setAnswers] = useState({});
//   const navigate = useNavigate();
//   const username = localStorage.getItem('username') || 'Guest';
//   const userId = localStorage.getItem('user_id');
//   const isLoggedIn = !!localStorage.getItem('token');

//   useEffect(() => {
//     axios.get('http://localhost:4000/')
//       .then(res => {
//         setQuestions(res.data);
//         res.data.forEach(question => {
//           fetchAnswers(question.question_id);
//         });
//       })
//       .catch(err => console.log(err));
//   }, []);

//   const fetchAnswers = (questionId) => {
//     axios.get(`http://localhost:4000/answers/${questionId}`)
//       .then(res => {
//         console.log(`Fetched answers for question ${questionId}: `, res.data); // Debug log
//         setAnswers(prevAnswers => ({ ...prevAnswers, [questionId]: res.data }));
//       })
//       .catch(err => console.log(err));
//   };

//   return (
//     <div className="home-container">
//       <h1>BananaBooBoo : Casa de Banana</h1>

//       <h3>Welcome, {username}!</h3>

//       <p>
//         We're simply, Bananas! Here at BananaBooBoo we love all things bananas. 
//         If you are just as bananas as us, we would love for you to join our community.
//         Make banana conversions, share fun facts, ask questions. Everything bananas, all the time.
//         Stay peeled, friends!
//       </p>

//       <br />
//       <div>
//         <table>
//           <thead>
//             <tr>
//               {/* <th>Question ID</th> */}
//               <th>Category</th>
//               <th>Question</th>
//               {/* <th>Question</th> */}
//               {/* <th>User ID</th> */}
//               <th>Question Actions</th>
//               <th>Answers</th>
//               <th>Answer Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               questions.map((question) => (
//                 <tr key={question.question_id}>
//                   {/* <td>{question.question_id}</td> */}
//                   <td>{categoryMapping[question.category_id]}</td>
//                   <td><h4>{question.question_title},</h4>
//                   {question.question}</td>
//                   {/* <td>{question.user_id}</td> */}

//                   <td>
//                     {isLoggedIn && <Link to={`/edit/${question.question_id}`} className="edit">Edit</Link>}
//                     {isLoggedIn && <Link to={`/answer/${question.question_id}`} className="edit">Answer</Link>}
//                     {isLoggedIn && <Link to={`/delete-question/${question.question_id}`} className="edit">Delete</Link>}
//                   </td>

//                   <td>
//                     <ul>
//                       {answers[question.question_id] &&
//                         answers[question.question_id].map(answer => (
//                           <li key={answer.answer_id}>{answer.answer}</li>
//                         ))}
//                     </ul>
//                   </td>

//                   <td>
//                     {answers[question.question_id] && answers[question.question_id].map(answer => (
//                         <div key={answer.answer_id}>
//                             <td>
//                               {isLoggedIn && <Link to={`/edit-answer/${answer.answer_id}`} className="edit">Edit</Link>}
//                               {isLoggedIn && <Link to={`/delete-answer/${answer.answer_id}`} className="edit">Delete</Link>}
                            
//                             </td>
//                         </div>
//                         ))}
//                   </td>


                    
//                 </tr>
//               ))
//             }
//           </tbody>
//         </table>
//         <br />
//         {isLoggedIn && <Link to='/post' className="edit">Post Question</Link>}
//         <br />
//       </div>
//       <br />
//     </div>
//   );
// }

// export default Home;