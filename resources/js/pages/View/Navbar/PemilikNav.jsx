import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
function PemilikNav() {

  const [Menu, SetMenu] = useState([
    { name: "Detail Property", link: "/dashboard/property" },
    { name: "Detail Sewa", link: "/dashboard/sewa" },
    { name: "Home", link: "/" },
  ]);
  
  return (
    <div className="bg-gray-700 text-white flex p-2 justify-center">
    <div className="flex p-1 gap-x-3 mr-3 items-center">
      {Menu.map((item, index) => (
       <NavLink key={index} to={item.link} className={`font-semibold hover:border-b-white border-transparent p-2 border-2 cursor-pointer transition-all duration-300 text-lg`}>
          {item.name}
        </NavLink>
      ))}
    </div>
</div>
  )
}

export default PemilikNav