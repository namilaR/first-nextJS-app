import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">Navbar</Link>
      </div>
    </nav>
  )
}

export default Nav
