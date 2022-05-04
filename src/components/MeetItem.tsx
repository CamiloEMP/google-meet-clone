import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'flowbite-react'

interface MeetInfo {
  title: string
  org?: string
  date: string
  uid: string
}

interface MeetItemProps {
  data: MeetInfo
}

export const MeetItem = ({ data }: MeetItemProps): JSX.Element => {
  return (
    <div className="flex justify-between items-center">
      <div className="min-w-0 select-none">
        <h4 className="text-base font-bold truncate text-gray-900 dark:text-slate-50">
          {data.title}
        </h4>
        <small className="text-xs lg:text-sm text-gray-500 truncate">
          {data.date}
        </small>
      </div>
      <Link to={`/${data.uid}`}>
        <Button className="border-none">Unirse</Button>
      </Link>
    </div>
  )
}
