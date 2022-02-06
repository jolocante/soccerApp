import React from "react";
import { Link } from "react-router-dom";

export const MainPage = () => {
    return (
        <div className='mainpage'>
                <h1>Welcome to SoccerApp</h1>
                <Link className='btn' to='/competitions'>Begin</Link>
        </div>

    )
}