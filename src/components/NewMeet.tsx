import { TextInput } from 'flowbite-react'
import React, { useState } from 'react'
import { ButtonModal } from './Buttons/ButtonModal'
import { Button } from './Buttons/ButtonPrimary'

interface NewMeetProps {
  onClose: () => void
  onClick: (room: string) => void
}

export const NewMeet = ({ onClose, onClick }: NewMeetProps) => {
  const [room, setRoom] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoom(e.target.value)
  }

  return (
    <div className="relative p-4 w-full max-w-md h-auto">
      <div className="relative bg-white rounded-lg p-4 shadow dark:bg-gray-700">
        <section className="flex justify-between items-start mb-4 rounded-t pb-2 border-b dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Nombre de la reunión
          </h3>
          <ButtonModal onClose={onClose} />
        </section>
        <section className="flex items-center justify-between gap-4 flex-wrap">
          <TextInput
            id="room"
            placeholder="Mi sala"
            required={true}
            value={room}
            onChange={handleChange}
          />
          <Button action={() => onClick(room)} text="Iniciar" type="button" />
        </section>
      </div>
    </div>
  )
}
