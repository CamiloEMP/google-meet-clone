/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './App'
import { AppProvider } from './provider/app.provider'
import { VideoProvider } from './provider/video.provider'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <AppProvider>
      <VideoProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </VideoProvider>
    </AppProvider>
  </React.StrictMode>
)
