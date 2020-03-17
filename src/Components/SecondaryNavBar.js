import React from 'react'

import './SecondaryNavBar.css'
import { Link } from 'react-router-dom'

const SecondaryNavBar = () => {
    return ( 
        <ul>
            <li><Link className='link' to='/'>Home</Link></li>
            <li>News</li>
            <li>Contact</li>
            <li>About</li>

            <li className='active'><Link to='/login' className='link'>Login</Link></li>
        </ul>
     );
}
 
export default SecondaryNavBar;