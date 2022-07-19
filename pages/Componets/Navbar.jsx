import React from 'react'

function Navbar() {
  return (
    <div className="relative">
      <div className=" absolute w-full px-20">
        <div className="flex  justify-between ">
          <div className="font-bold text-xl">Logo</div>
          <ul className="flex justify-evenly gap-10">
            <li>Home</li>
            <li>Service</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
