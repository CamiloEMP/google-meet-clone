import React from 'react'
import { NavBar } from '../components/Navbar'
import { useSession } from '../hooks/useSession'

export const Profile = () => {
  const { user } = useSession()
  console.log(user)
  return (
    <>
      <NavBar />
      <section className="container mx-auto flex flex-col items-center ">
        {user?.email}
      </section>
    </>
  )
}
