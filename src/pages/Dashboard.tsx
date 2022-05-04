import { Card, Dropdown } from 'flowbite-react'
import React, { useState } from 'react'
import { NavBar } from '../components/Navbar'
import { MeetItem } from '../components/MeetItem'
import { NewMeet } from '../components/NewMeet'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'

interface MeetInfo {
  title: string
  org?: string
  date: string
  uid: string
}

export const Dashboard = () => {
  const [over, setOver] = useState(false)
  const navigate = useNavigate()

  const handleRoom = (nameRoom: string) => {
    setOver(false)
    let room: string
    if (nameRoom === 'default') {
      room = v4()
    } else {
      room = nameRoom
    }
    navigate(`/meet-config/${room}`)
  }

  const meets: MeetInfo[] = Array.from({ length: 14 }).map((_, i) => ({
    uid: 'xml-sas-sd' + i,
    title: 'mi reunion ' + (i + 1),
    org: 'my Team',
    date: '12/12/2020'
  }))

  return (
    <>
      <NavBar />
      <div className="container mx-auto px-2 my-4">
        <Card className="shadow-sm mx-auto w-full md:w-3/4">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Reuniones
            </h3>
            <Dropdown className="border-none" label="Nueva Reunion">
              <Dropdown.Item onClick={() => handleRoom('default')}>
                Reunirse Ahora
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setOver(true)}>
                Programar Runion
              </Dropdown.Item>
            </Dropdown>
          </div>
          <Dropdown.Divider />
          {meets.map((x, i) => (
            <div key={`meet-info-item-${i}`}>
              {i !== 0 && (
                <div className="border-b border-gray-200 dark:border-gray-700 mb-2" />
              )}
              <MeetItem data={x} />
            </div>
          ))}
        </Card>
      </div>
      {over && (
        <section
          role="dialog"
          className="absolute inset-0 z-10 h-full w-full bg-black/25 flex justify-center items-center overflow-y-auto overflow-x-hidden"
        >
          <NewMeet onClick={handleRoom} onClose={() => setOver(false)} />
        </section>
      )}
    </>
  )
}
