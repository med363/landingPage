import React from 'react';
import Product_data from '../Data/Product_data';

function MainContent() {
  console.log(Product_data);
  const listOfItem=Product_data.map((i)=>
  <div className="card" key={i.id}>
  <div className="card_img "><img src={i.thumb}/>
  </div>
  <div className="card_header">
  <h2>{i.Product_data}</h2>
  <p>{i.description}</p>
  <p className="price">{i.price}<span>{i.currency}</span></p>
  <div className="btn"> Add to panner</div></div></div>)
  return(
      <div className="main_content">
      <h3>Product</h3>{listOfItem}</div>
  )
}

export default MainContent
