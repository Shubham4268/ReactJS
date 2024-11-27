import {useLoaderData } from "react-router-dom"
import React, { useState, useEffect } from 'react'

function Github() {
  // const [data,setData] = useState('')
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then((response)=>response.json())
  //   .then(data => {setData(data)})
  // }, [])

  const data = useLoaderData();
  console.log(data);    
  
  return (
    <div className='text-center bg-gray-700 text-white text-3xl m-4 p-4'>Github followers : {data.followers}
    <img src={data.avatar_url} alt="git-picture" width='300' />
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async()=>{
  const response = await fetch('https://api.github.com/users/hiteshchoudhary')
  
  return response.json();
}