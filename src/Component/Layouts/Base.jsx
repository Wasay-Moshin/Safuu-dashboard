import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
function Base(props) {
  return (
    <div>
<Header/>
{props.children}
<Sidebar/>
    </div>
  )
}

export default Base