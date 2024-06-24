// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { useEffect, useState } from 'react'

function Home() {
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:4000')
    //     .then(res => setData(res.data))
    //     .catch(err => console.log(err))
    // }, [])

  return (
    <>
      <div className="home-container">
        <h1>Casa de Banana</h1>

        <p>
          We're simply, Bananas! Here at BananaBooBoo we love all things bananas. 
          If you are just as bananas as us, we would love for you to join our community.
          Make banana conversions, share fun facts, ask questions. Everything bananas, all the time.
          Stay peeled, friends!
        </p>
      </div>
    </>
  )
}

export default Home
