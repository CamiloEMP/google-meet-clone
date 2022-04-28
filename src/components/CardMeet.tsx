import React from 'react'

type Props = {
  children: React.ReactNode
}

export const CardMeet = ({ children }: Props) => {
  return (
    <section className="min-w-min max-h-screen sm:w-7/12 mx-auto flex flex-col shadow rounded-lg pt-8 pb-12 px-6 space-y-8">
      {children}
    </section>
  )
}
