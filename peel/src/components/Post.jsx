import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Post() {
    const navigate = useNavigate();
    const location = useLocation();

    const [values, setValues] = useState({
        question_title: '',
        question: '',
        category_id: location.state?.category_id || '1',
        user_id: localStorage.getItem('user_id') || '',
    });

    function handleSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:4000/post', values)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.error(err));
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    return (
        <>
            <div className="post-container">
                <h1>Post Question:</h1>
                
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="question_title">Title:
                            <br />
                            <input
                                type="text"
                                name="question_title"
                                id="question_title"
                                value={values.question_title}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="question">Question:
                            <br />
                            <textarea
                                name="question"
                                id="question"
                                value={values.question}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <br />
                    <div>
                        <label htmlFor="category_id">Category:
                            <select
                                name="category_id"
                                id="category_id"
                                value={values.category_id}
                                onChange={handleInputChange}
                            >
                                <option value="1">Conversions</option>
                                <option value="2">Recipes</option>
                                <option value="3">Fun Facts</option>
                                <option value="4">Books</option>
                            </select>
                        </label>
                    </div>
                    <br />
                    <div>
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Post;

