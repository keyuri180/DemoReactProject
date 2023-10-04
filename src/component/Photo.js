import React from 'react'

const Photo = ( props) => {
    const {data} = props
    console.log("lskfn",data)
  return (
    <div className='box'>
        <img src={data?.image}/>
        <div className='projectname'>
            <h3>{data?.name}</h3>
            <p>{data?.address}</p>

        </div>
     
    </div>
  )
}

export default Photo