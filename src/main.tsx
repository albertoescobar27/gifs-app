import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GifsApp } from './GifsApp'
import { AlarmSystem } from './alarmSystem/AlarmSystem'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <GifsApp/> */}
    <AlarmSystem/>
    {/* <MyCounterApp/> */}
  </StrictMode>,
)
