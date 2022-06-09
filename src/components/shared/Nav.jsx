import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/media/images/bbgb.png'

function Nav() {
  return (
      <nav className="flex justify-between">
        <div className="ml-5 my-3">
          <img src={logo} height="50px" width="40px" alt="logo" />
        </div>
        <ul className="flex items-center h-12 mr-5 gap-4">
            <li>
                <NavLink
                  to="login"
                  className="px-4 py-1 transition bg-white dark:bg-black dark:border-white dark:text-light-gray hover:-translate-y-1 hover:bg-blue-100 duration-300 mx-auto max-w-md rounded-full border border-blue-900 dark:hover:text-blue-400 dark:hover:bg-black dark:hover:border-blue-400"
                >
                  Login
                </NavLink>
              </li>
            <li>
                <NavLink
                  className="px-4 py-1 transition bg-white dark:bg-black dark:border-white dark:text-light-gray hover:-translate-y-1 hover:bg-blue-100 duration-300 mx-auto max-w-md rounded-full border border-blue-900 dark:hover:text-blue-400 dark:hover:bg-black dark:hover:border-blue-400"
                  to="apply"
                >
                  Apply
                </NavLink>
            </li>
        </ul>
      </nav>
  )
}

export default Nav