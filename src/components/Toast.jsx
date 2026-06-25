import { useEffect, useState } from 'react'

export default function Toast({ message, type = 'success', onDismiss }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!message) return
    setVisible(true)
    const t = setTimeout(() => {
      setVisible(false)
      setTimeout(onDismiss, 500)
    }, 4000)
    return () => clearTimeout(t)
  }, [message])

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={`fixed bottom-8 left-1/2 z-[9999] px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest shadow-2xl whitespace-nowrap transition-all duration-500 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'
      } ${
        type === 'success'
          ? '-translate-x-1/2 bg-black text-white'
          : '-translate-x-1/2 bg-accent text-white'
      }`}
    >
      {message}
    </div>
  )
}
