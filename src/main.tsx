import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GifsApp } from './GifsApp'
import { AlarmSystem } from './alarmSystem/components/AlarmSystem'
import { MyCounterApp } from './counter/components/MyCounterApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <GifsApp/> */}
    {/* <AlarmSystem/> */}
    <MyCounterApp/>
  </StrictMode>,
)
