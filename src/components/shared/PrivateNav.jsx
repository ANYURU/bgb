import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/media/images/bbgb.png'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'

function PrivateNav() {

    const navigate = useNavigate()
    const { signOut } = useAuth()


    return (
        <nav className="flex justify-between">
            <div className="ml-5 my-3">
            <img src={logo} height="50px" width="40px" alt="logo" />
            </div>
            <ul className="flex items-center h-12 mr-5 gap-4">
                <li>
                    <NavLink
                    className="px-4 py-1 transition bg-white dark:bg-black dark:border-white dark:text-light-gray hover:-translate-y-1 hover:bg-blue-100 duration-300 mx-auto max-w-md rounded-full border border-blue-900 dark:hover:text-blue-400 dark:hover:bg-black dark:hover:border-blue-400"
                    to="apply"
                    >
                    Apply
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className="px-4 py-1 transition bg-white dark:bg-black dark:border-white dark:text-light-gray hover:-translate-y-1 hover:bg-blue-100 duration-300 mx-auto max-w-md rounded-full border border-blue-900 dark:hover:text-blue-400 dark:hover:bg-black dark:hover:border-blue-400"
                    to="signup"
                    >
                    Register Admin
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className="px-4 py-1 transition bg-white dark:bg-black dark:border-white dark:text-light-gray hover:-translate-y-1 hover:bg-blue-100 duration-300 mx-auto max-w-md rounded-full border border-blue-900 dark:hover:text-blue-400 dark:hover:bg-black dark:hover:border-blue-400"
                    to="dashboard"
                    >
                    Dashboard
                    </NavLink>
                </li>
                <li>
                    <button
                    className="px-4 py-1 transition bg-white dark:bg-black dark:border-white dark:text-light-gray hover:-translate-y-1 hover:bg-blue-100 duration-300 mx-auto max-w-md rounded-full border border-blue-900 dark:hover:text-blue-400 dark:hover:bg-black dark:hover:border-blue-400"
                    onClick={async () => {
                        try {
                            const { error } = await signOut()
                            if( error ) throw error
                        } catch ( error ) {
                            console.log( error ) 
                        }
                    }}
                    > 
                    Logout
                    </button>
                </li>

            </ul>
        </nav>
  )
}

export default PrivateNav