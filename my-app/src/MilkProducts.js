import React from 'react'
import {myStyle} from './mainStyle'
import moreStyle from './mainStyle'

const MilkProducts = () =>  { 
const ar = ["milk" , "cheese", "cream", "icecream"]

return (
  <div classNAME = "MilkProducts">
  <div class="d-flex justify-content-center"> <h5>the milk way:</h5></div>
  <div class="d-flex justify-content-center"> {ar.map(item => <div class="card" >
  <h5 style={myStyle} class="card-title">{item}</h5>
  {<img src="https://picsum.photos/200/300" class="card-img-top" alt=''></img> }
  <p class="card-text" style={{textAlign: "center"}}>price</p> 
  <button class="btn btn-outline-success" style={moreStyle}>add {item}!</button>
  </div>)}
  </div>
  </div>
)
}


export default MilkProducts