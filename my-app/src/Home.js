import React , { useState }from 'react'

export const Home = () => {
    const [name, setName] = useState("");
    
  return (
    <>
        <div class="d-flex justify-content-center"> <h3>welcome {name}!</h3></div>
        <h6>enter your full name: 
        <input value={name} 
        onChange={(e) => setName(e.target.value)}
      ></input> </h6>
    </>
  )
}

export default Home;