import React from 'react'
import Nav from '../components/Nav/Nav'

type DashboardLayoutProps = {
  children: React.ReactNode
}

const DefaultLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
    </div>
  )
}

export default DefaultLayout
