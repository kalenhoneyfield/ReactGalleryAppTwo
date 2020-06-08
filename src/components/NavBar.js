import React from 'react'
import {
    NavLink
  } from "react-router-dom"

const NavBar = (props) => {
    //loop through the pre-generated tags and create nav links
    let dynLinks = props.dynTags.map((word, idx) => {
        return (
            <li key={idx}>
                <NavLink to={`/search/${word}`} >
                    {word}
                </NavLink>
            </li>
        )
    })
    return(
        <nav className="main-nav">
            <ul>
                {dynLinks}
            </ul>
        </nav>
    )
}

export default NavBar