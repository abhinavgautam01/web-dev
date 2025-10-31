import React from 'react'
import Sidebar from './Sidebar'
import Contents from './Contents'

export default function Main() {
  return (
    <div className='flex'>
        <Sidebar />
        <Contents />
    </div>
  )
}
