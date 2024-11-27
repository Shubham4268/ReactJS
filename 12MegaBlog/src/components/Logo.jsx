import React from 'react'
import blog from './blog.png'

function Logo({width = '100px'}) {
  return (
    <img src={blog} alt='blog' width='100px' className=''/>
  )
}

export default Logo