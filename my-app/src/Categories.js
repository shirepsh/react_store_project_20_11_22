import React from 'react'
import {myStyle} from './mainStyle'
import moreStyle from './mainStyle'

const Categories = () => {
//     constructor(this.props.first);{
//         super(this.props.first)
//         this.state.first = {}
// }
    const ar = ["dairy products" , "meat products", "fishes", "pastries"]
    
    const hadleClick = () =>{
        alert ("changing component")
    }

    return (
      <>
      <div class="d-flex justify-content-center"> <h5>choose a category</h5></div>
      <div class="d-flex justify-content-center"> {ar.map(item => <div class="card" >
      <h5 style={myStyle} >{item}</h5>
      <img src="https://picsum.photos/200/300" alt=''></img>
      <p style={{textAlign: "center"}}>Some quick example text </p>
      <button class="btn btn-outline-success" style={moreStyle} onClick={hadleClick}>go</button>
      
      </div>)} 
      </div>
      </>
    )}


export default Categories