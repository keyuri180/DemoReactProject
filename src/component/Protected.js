import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const Protected = ({children}) => {
  let location = useLocation();


   const storedData = localStorage.getItem("signupdata")

    if(!storedData ){
      return   <Navigate to="/" state={{ from: location}} replace />
       }

 

  return children
}

export default Protected