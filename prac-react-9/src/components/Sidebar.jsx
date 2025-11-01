import React from 'react'
import SidebarToggle from '../icons/SidebarToggle'

export default function Sidebar({ sidebarToggle, setSidebarToggle }) {
  return (
    <>
      {/* Sidebar container */}
      <div
        className={`
          fixed md:relative top-0 left-0 h-screen z-40
          bg-red-400 text-white transition-transform duration-700 ease-in-out
          ${sidebarToggle ? 'w-72 md:w-80 md:block' : 'hidden'}
          shrink-0
        `}
      >
        {/* Sidebar content */}
        <div className="p-4 mt-12">
          <h2 className="text-lg font-semibold">Sidebar</h2>
          <p>Example links or content...</p>
        </div>
      </div>

      {/* Toggle button — always visible */}
      <div
        className="fixed top-4 left-4 z-50 bg-red-500 hover:bg-red-600 text-white rounded-md p-2 cursor-pointer transition-all"
        onClick={() => setSidebarToggle(!sidebarToggle)}
      >
        <div className="w-5">
          <SidebarToggle />
        </div>
      </div>
    </>
  )
}
