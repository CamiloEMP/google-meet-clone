import { Button, Card, Dropdown } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/Navbar'

interface MeetInfo {
  title: string
  org?: string
  date: string
  uid: string
}

interface MeetItemProps {
  data: MeetInfo
}

function MeetItem({ data }: MeetItemProps): JSX.Element {
  return (
    <div className="flex justify-between items-center">
      <div className="min-w-0 select-none">
        <h4 className="text-base font-bold truncate text-gray-900">
          {data.title}
        </h4>
        <small className="text-xs text-gray-500 truncate">{data.date}</small>
      </div>
      <Link to={`/${data.uid}`}>
        <Button>Unirse</Button>
      </Link>
    </div>
  )
}

export const Dashboard = () => {
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
            <Dropdown label="Nueva Reunion">
              <Dropdown.Item>Reunirse Ahora</Dropdown.Item>
              <Dropdown.Item>Programar Runion</Dropdown.Item>
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
    </>
  )
}
