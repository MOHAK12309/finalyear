import React from 'react'
import { Link } from 'react-router-dom'
import Log from './log'
import "../styles/home.css"
function Home(){
    return(
        <>
        <div className=''>
            <h1>hiiiii</h1>
            <input></input>
            <br></br>
            <Link to="/log">nmbbjhj</Link>
            <Log></Log>

        </div>
        
        </>
    )
}
export default Home