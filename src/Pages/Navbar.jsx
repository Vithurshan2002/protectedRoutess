import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.userInfor.user);
  console.log(user);
  return (
    <div className="flex justify-between p-8 mb-2 items-center bg-gradient-to-r from-blue-800 via-red-300 via-50% to-green-700">
      <h1 className="font-bold text-3xl text-emerald-950">Ultarz Mobiliz</h1>
      <ol className="flex space-x-5 text-white font-bold">
        {!user && (
          <NavLink to={"/login"}>
            {" "}
            <li className="cursor-pointer hover:underline hover:underline-offset-4 transition-all hover:text-blue-700">
              Login
            </li>
          </NavLink>
        )}
        {user && (
          <>
            <NavLink to={"/"}>
              {" "}
              <li className="cursor-pointer hover:underline hover:underline-offset-4 transition-all hover:text-blue-700">
                Home
              </li>
            </NavLink>

            <NavLink to={"/setting"}>
              <li className="cursor-pointer hover:underline hover:underline-offset-4 transition-all hover:text-blue-700">
                Setting
              </li>
            </NavLink>
          </>
        )}
      </ol>
    </div>
  );
};

export default Navbar;
