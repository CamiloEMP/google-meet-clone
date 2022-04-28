import React from 'react'
import { Button } from './Button'

interface Props {
  title: string
  titleButton: string
  otherClass?: string
  date?: string
}

export const CardMeetItem = ({
  date,
  title,
  titleButton,
  otherClass
}: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="relative">
        <span className={`${otherClass || 'text-lg md:text-xl'}`}>{title}</span>
        {date !== '' && (
          <span className="absolute top-6 left-0 text-base text-gray-700">
            {date}
          </span>
        )}
      </div>
      <Button>{titleButton}</Button>
    </div>
  )
}
