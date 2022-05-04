import React from 'react'

interface Props {
  children: React.ReactNode
}

export const Layout = ({ children }: Props) => {
  return <section className="dark:bg-gray-800 min-h-screen">{children}</section>
}
