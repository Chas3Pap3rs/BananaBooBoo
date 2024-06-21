// import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Home() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000')
        .then(res => setData(res.data))
        .catch(err => console.log(err))
    }, [])

  return (
    <>
      <div class="home-container">
        <h1>Casa de Banana</h1>
      </div>
    </>
  )
}

export default Home
