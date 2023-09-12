import React from 'react'
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function PemilikNav() {
  const navigate = useNavigate();

  const HandleLogout = () => {
      axios.post("/api/logout")
        .then((res) => {
            if (res.data.success === true) {
                localStorage.removeItem("access_token");
                setTimeout(() => {
                    return navigate("/");
                }, 400);
                localStorage.removeItem("access_token");
            }
        })
        .catch(err  => {
            setTimeout(() => {
                localStorage.removeItem("access_token");
                return navigate("/");
            }, 400);
        });
};
  
  const [Menu, SetMenu] = useState([
    { name: "Detail Property", link: "/dashboard/property" },
    { name: "Detail Sewa", link: "/dashboard/sewa" },
    { name: "Home", link: "/" },
  ]);
  
  return (<div className="bg-gray-700 text-white flex p-2 justify-center">
    <div className="flex p-1 gap-x-3 mr-3 items-center">
      {Menu.map((item, index) => (
       <NavLink key={index} to={item.link} className={`font-semibold hover:border-b-white border-transparent p-2 border-2 cursor-pointer transition-all duration-300 text-lg`}>
          {item.name}
        </NavLink>
      ))}
      <div className="font-semibold hover:border-b-white border-transparent p-2 border-2 cursor-pointer transition-all duration-300 text-lg" onClick={HandleLogout}>
        Logout
      </div>
    </div>
</div>)
}

export default PemilikNav