import React from 'react'
import{Link} from 'react-router-dom'
function NavBar() {
  return (
    <>
    <nav>
        <Link to={'/'}>Home </Link>
        <Link to={'/technology'}> technology </Link>
        <Link to={'/politics'}> politics </Link>
        <Link to={'/world'}> world </Link>
        <Link to={'/health'}> health </Link>
    
    </nav>
    </>
  )
}

export default NavBar