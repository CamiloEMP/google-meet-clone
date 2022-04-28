import * as React from 'react'
import { SVGProps } from 'react'

const MeetIcon = (props: SVGProps<SVGSVGElement>) => (
  <div className="flex items-center gap-2">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      className="w-10 h-10 md:w-12 md:h-12"
      {...props}
    >
      <style>{'.st135{fill:#f5bb41}.st138{fill:#4ca853}'}</style>
      <g id="Layer_2">
        <path
          className="st135"
          d="M91.084 20.921 77.229 32.352V18.068c0-3.528-2.84-6.386-6.346-6.386H25.405L3.723 33.502v48.43c0 3.528 2.84 6.386 6.346 6.386h60.814c3.506 0 6.346-2.858 6.346-6.386V68.18l13.918 11.485c2.083 1.639 5.13.144 5.13-2.522V23.39c0-2.698-3.115-4.178-5.193-2.469zM56.076 66.498H25.405V33.502h30.671v32.996z"
        />
        <path
          d="M3.723 66.498v15.434c0 3.528 2.84 6.386 6.346 6.386h15.336v-21.82H3.723z"
          style={{
            fill: '#2167d1'
          }}
        />
        <path
          style={{
            fill: '#3d84f3'
          }}
          d="M3.723 33.502h21.682v32.996H3.723z"
        />
        <path
          className="st138"
          d="M91.084 20.921 77.229 32.352V68.18l13.918 11.485c2.083 1.639 5.13.144 5.13-2.522V23.39c0-2.698-3.115-4.178-5.193-2.469z"
        />
        <path
          className="st138"
          d="M56.076 50v16.498H25.405v21.82h45.478c3.506 0 6.346-2.858 6.346-6.386V68.18L56.076 50z"
        />
        <path
          style={{
            fill: '#398039'
          }}
          d="M77.229 68.18V32.363L56.076 50z"
        />
        <path
          style={{
            fill: '#d74f3f'
          }}
          d="M3.723 33.502h21.682v-21.82z"
        />
        <path
          className="st135"
          d="M70.883 11.682H25.405v21.82h30.671V50l21.153-17.637V18.068c0-3.528-2.84-6.386-6.346-6.386z"
        />
      </g>
    </svg>
    <span className="text-base md:text-lg font-semibold">
      Google Meet Clone
    </span>
  </div>
)

export default MeetIcon
