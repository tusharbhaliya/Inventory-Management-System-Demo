import React, { useState } from "react";
import adminLogo from "../assets/admin-logo.svg";
import userLogo from "../assets/user-logo.svg";

function HeaderBar({ user }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };


  return (
    <>
        <header className="bg-gray-800">
          <div className="px-6 py-3 bg-white shadow-md grid grid-cols-10 fixed top-0 right-0 left-0 z-10 items-center">
            <h1 className="text-xl font-semibold col-span-2">
              Inventory Management
            </h1>
            <div className="col-span-6"></div>
            <div className="col-span-2 flex items-center justify-end">
              <div className="flex items-center">
                <img
                  src={user.role === "user" ? userLogo : adminLogo}
                  alt="User Logo"
                  className="h-10 w-10 rounded-full border-4 border-green-600 bg-green-300 p-1"
                />
                <div className="ml-3">
                  <h3 className="text-lg text-neutral-900 font-semibold">
                    {user.name}
                  </h3>
                  <span className="text-sm text-neutral-500">{user.email}</span>
                </div>
              </div>
              <button
                className="ml-4 text-neutral-100 hover:text-white"
                onClick={handleMenuClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>
    </>
  );
}

export default HeaderBar;
