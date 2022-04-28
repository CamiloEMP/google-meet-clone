import React from 'react'
import { CardMeet } from '../components/CardMeet'
import { CardMeetItem } from '../components/CardMeetItem'
import { Header } from '../components/Header'

export const Dashboard = () => {
  return (
    <>
      <Header />
      <CardMeet>
        <CardMeetItem
          title="Reuniones"
          titleButton="Nueva Reunión"
          otherClass="text-xl md:text-3xl font-extrabold"
        />
        <CardMeetItem
          title="Reunion con el cliente"
          titleButton="Unirse"
          date="24/08/2002"
        />
        <CardMeetItem
          title="Reunion con la familia"
          titleButton="Unirse"
          date="24/08/2002"
        />
      </CardMeet>
    </>
  )
}
