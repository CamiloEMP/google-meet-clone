/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { App } from './App'
import { AppProvider } from './provider/app'
import { AuthProvider } from './provider/auth'
import { VideoProvider } from './provider/video'

const container = document.getElementById('app')
const root = createRoot(container!)

root.render(
  <React.StrictMode>
    <AppProvider>
      <HashRouter>
        <AuthProvider>
          <VideoProvider>
            <App />
          </VideoProvider>
        </AuthProvider>
      </HashRouter>
    </AppProvider>
  </React.StrictMode>
)
