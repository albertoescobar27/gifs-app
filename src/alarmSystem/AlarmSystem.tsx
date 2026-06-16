import { useState } from 'react';

export const AlarmSystem = () => {
  const [isAlertActive, setIsAlertActive] = useState(false);

  return (
    <div className="alarm-panel">
      <h1>Estado de Alarma: { isAlertActive ? 'ACTIVADA 🚨' : 'Apagada ✅' }</h1>
      
      <button onClick={() => setIsAlertActive(true)}>ENCENDER</button>
      <button onClick={() => setIsAlertActive(false)}>APAGAR</button>
    </div>
  );
};