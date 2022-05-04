import { useCallback, useState } from 'react'
import { connectFunction, useRoomI } from '../types/video.types'

/**
 * @description controla los eventos de conecion/desconeccion/reconeccion de una videoconferencia
 */
export function useRoom(): useRoomI {
  const [isConnecting] = useState(false)

  const connect = useCallback<connectFunction>(t => {
    console.log(t)
  }, [])

  return {
    isConnecting,
    connect
  }
}
