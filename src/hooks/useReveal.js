import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px', ...options }
    )

    const targets = el.querySelectorAll('.reveal, .stagger-child')
    targets.forEach((t) => observer.observe(t))

    // Also observe the root element if it has the class
    if (el.classList.contains('reveal') || el.classList.contains('stagger-child')) {
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return ref
}

export function useCounterAnimation() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const counters = entry.target.querySelectorAll('[data-counter]')
            counters.forEach((counter, i) => {
              setTimeout(() => animateNumber(counter), i * 150)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

function animateNumber(element) {
  const target = parseFloat(element.dataset.counter)
  const originalText = element.textContent
  const suffix = originalText.replace(/[0-9.]/g, '')
  const hasDecimal = element.dataset.counter.includes('.')
  const duration = 2500
  const start = Date.now()
  const easeOut = (t) => 1 - (1 - t) * (1 - t)

  const tick = () => {
    const elapsed = Date.now() - start
    const progress = Math.min(elapsed / duration, 1)
    const value = target * easeOut(progress)
    element.textContent = (hasDecimal ? value.toFixed(1) : Math.floor(value)) + suffix
    if (progress < 1) requestAnimationFrame(tick)
    else element.textContent = originalText
  }

  requestAnimationFrame(tick)
}
