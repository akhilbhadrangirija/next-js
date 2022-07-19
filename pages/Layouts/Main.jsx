import React from 'react'
import Navbar from '../Componets/Navbar'

function Main({ children }) {
  return (
    <div className="m-5">
      <Navbar />
      <div className="w-screen h-screen">{children}</div>
    </div>
  )
}

export default Main
