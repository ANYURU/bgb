import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
      <nav>
          <ul>
              <li>
                  <NavLink
                    to="login"
                  >
                    Login
                  </NavLink>
                </li>
              <li>
                  <NavLink
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