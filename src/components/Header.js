import React from 'react'
import {
    useHistory
  } from "react-router-dom"

//import components
import SearchBar from './SearchBar'
import NavBar from './NavBar'

const Header = (props) => {
    let history = useHistory()
    //handle the pushing of the history
    const handleHistoryPush = (path) => {
        history.push({
            pathname: path,
            state: { tag: path }
        })
    }

    return(
        <header>
            <SearchBar handleHistoryPush={handleHistoryPush}/>
            <NavBar dynTags={props.dynTags}/>
        </header>
    )
}

export default Header