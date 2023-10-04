import React from 'react'

const HomeData = (props) => {
    const { data } = props;
    console.log("first", props);
  return (
    <div className="box1">
   
          <img src={data?.image} alt="Reputationimg"/>
          <h1>{data?.name}</h1>
          <p>{data?.dec}</p>
  
  </div>
  )
}

export default HomeData