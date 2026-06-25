import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) return

    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0
    let rafId

    const onMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      cursor.style.left = cursorX + 'px'
      cursor.style.top = cursorY + 'px'
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => cursor.classList.add('scale-[1.8]', '!bg-accent/20')
    const onLeave = () => cursor.classList.remove('scale-[1.8]', '!bg-accent/20')

    document.addEventListener('mousemove', onMouseMove)
    document.querySelectorAll('a, button, input, textarea, .project-card').forEach((el) => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    rafId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-11 h-11 bg-accent/10 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[scale,background-color] duration-300 backdrop-blur-sm hidden md:block"
      aria-hidden="true"
    />
  )
}
