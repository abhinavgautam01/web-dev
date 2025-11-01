import React, { useState } from 'react'
import Sidebar from './Sidebar'
import Contents from './Contents'

export default function Main() {
  const [sidebarToggle, setSidebarToggle] = useState(true)

  return (
    <div className="flex transition-all duration-700">
      <Sidebar sidebarToggle={sidebarToggle} setSidebarToggle={setSidebarToggle} />
      <Contents sidebarToggle={sidebarToggle} />
    </div>
  )
}
