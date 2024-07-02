import { useState, useEffect } from 'react';

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove);
    }
    return () => {
        window.removeEventListener('pointermove', handleMove);
    }
  }, [enabled]);

  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled);
    return () => {
      document.body.classList.remove('no-cursor');
    } 
  }, [enabled]);

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: 'green',
        border: '3px solid black',
        borderRadius: '50%',
        opacity: 0.5,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} />
      <button onClick={() => { setEnabled(!enabled) }}>{enabled ? 'Desactivar' : 'Activar'} seguir puntero</button>
    </>
  )
}

export default FollowMouse