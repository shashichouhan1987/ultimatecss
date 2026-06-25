import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowRight, Loader2, Check } from 'lucide-react'
import Toast from '../components/Toast'
import { useReveal } from '../hooks/useReveal'

/*
 * EmailJS configuration
 * ─────────────────────
 * 1. Sign up free at https://emailjs.com
 * 2. Create a service (Gmail, Outlook, etc.) connected to admin@ultimatecss.com
 * 3. Create an email template with these variables:
 *      {{from_name}}, {{from_email}}, {{services}}, {{budget}}, {{message}}
 *    Set the "To Email" in the template to: admin@ultimatecss.com
 * 4. Copy your Service ID, Template ID, and Public Key into the .env file:
 *      VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
 *      VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
 *      VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
 */
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ''

const SERVICE_OPTIONS = ['Web Design', 'Performance', 'E-Commerce', 'SEO Audit']
const BUDGET_OPTIONS = ['Under $5K', '$5K–$10K', '$10K–$25K', '$25K–$50K', '$50K+']

export default function Contact() {
  const pageRef = useReveal()
  const formRef = useRef(null)

  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [selectedServices, setSelectedServices] = useState([])
  const [budget, setBudget] = useState('')
  const [budgetOpen, setBudgetOpen] = useState(false)
  const [status, setStatus] = useState('idle') // idle | loading | success
  const [toast, setToast] = useState(null)

  /* ── Validation ── */
  function validate() {
    const e = {}
    if (!fields.name.trim()) e.name = 'Please enter your name'
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
      e.email = 'Please enter a valid email address'
    }
    if (!fields.message.trim()) e.message = 'Please tell us about your project'
    return e
  }

  function clearError(field) {
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  /* ── Service tags ── */
  function toggleService(svc) {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    )
  }

  /* ── Submit ── */
  async function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      setToast({ message: 'Please fill in all required fields.', type: 'error' })
      return
    }

    setStatus('loading')

    const templateParams = {
      from_name: fields.name,
      from_email: fields.email,
      services: selectedServices.length > 0 ? selectedServices.join(', ') : 'Not specified',
      budget: budget || 'Not specified',
      message: fields.message,
      to_email: 'admin@ultimatecss.com',
    }

    try {
      if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        )
      } else {
        // Dev mode: log payload and simulate success
        console.info('[Contact Form] EmailJS not configured. Payload:', templateParams)
        await new Promise((r) => setTimeout(r, 800))
      }
      setStatus('success')
      setToast({ message: "Message sent! We'll be in touch within 12 hours.", type: 'success' })
    } catch (err) {
      console.error('[Contact Form] EmailJS error:', err)
      setStatus('idle')
      setToast({ message: 'Something went wrong. Please email us directly.', type: 'error' })
    }
  }

  /* ── Reset ── */
  function handleReset() {
    setFields({ name: '', email: '', message: '' })
    setErrors({})
    setSelectedServices([])
    setBudget('')
    setBudgetOpen(false)
    setStatus('idle')
  }

  return (
    <div ref={pageRef} className="relative min-h-screen flex flex-col">
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onDismiss={() => setToast(null)}
        />
      )}

      <main className="flex-1 pt-32">
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* LEFT: hero info */}
            <div className="reveal active">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-accent font-bold text-[10px] uppercase tracking-widest mb-10">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                Available for new projects
              </div>
              <h1 className="font-display font-bold text-6xl lg:text-7xl leading-[0.9] tracking-tighter mb-12">
                Have a <br /> <span className="text-accent">great idea?</span>
                <br />
                Let's talk.
              </h1>

              <div className="space-y-12 mt-20">
                <div>
                  <p className="text-[11px] font-bold text-brand-gray uppercase tracking-[0.3em] mb-4">
                    Email us
                  </p>
                  <a
                    href="mailto:admin@ultimatecss.com"
                    className="text-3xl font-display font-medium hover:text-accent transition-colors"
                  >
                    admin@ultimatecss.com
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-brand-gray uppercase tracking-[0.3em] mb-4">
                    Call us
                  </p>
                  <a
                    href="tel:+15551234567"
                    className="text-3xl font-display font-medium hover:text-accent transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-bold text-brand-gray uppercase tracking-[0.3em] mb-4">
                    Our Space
                  </p>
                  <p className="text-3xl font-display font-medium">
                    124 Madison St, NY
                    <br />
                    10016, USA
                  </p>
                </div>
              </div>

              <div className="flex gap-8 mt-24">
                {['LinkedIn', 'Twitter', 'Behance', 'Instagram'].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-xs font-bold uppercase tracking-widest hover:text-accent transition-all"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* RIGHT: form */}
            <div className="reveal active lg:bg-brand-light lg:p-16 lg:rounded-[4rem]">
              {status === 'success' ? (
                /* Success state */
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mx-auto mb-8">
                    <Check className="text-white w-10 h-10" />
                  </div>
                  <h3 className="font-display font-bold text-4xl mb-4">Message sent!</h3>
                  <p className="text-brand-gray text-lg font-light">
                    We'll get back to you within 12 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-12 px-10 py-4 rounded-full border-2 border-black font-bold text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-all"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-12">
                  {/* Name */}
                  <div className="relative">
                    <input
                      type="text"
                      id="field-name"
                      value={fields.name}
                      onChange={(e) => {
                        setFields((p) => ({ ...p, name: e.target.value }))
                        clearError('name')
                      }}
                      placeholder=" "
                      autoComplete="name"
                      className={`w-full bg-transparent border-b-2 py-6 text-2xl font-light outline-none transition-all ${
                        errors.name ? 'border-accent' : 'border-gray-200 focus:border-accent'
                      }`}
                    />
                    <label
                      htmlFor="field-name"
                      className="absolute left-0 top-6 text-2xl font-light text-brand-gray pointer-events-none transition-all duration-300 origin-left peer-focus:-translate-y-6 peer-focus:scale-75"
                      style={{
                        transform: fields.name ? 'translateY(-24px) scale(0.75)' : '',
                        color: fields.name ? '#eb4242' : '',
                      }}
                    >
                      What's your name?
                    </label>
                    {errors.name && (
                      <span className="text-accent text-xs font-bold uppercase tracking-widest mt-1 block">
                        {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      id="field-email"
                      value={fields.email}
                      onChange={(e) => {
                        setFields((p) => ({ ...p, email: e.target.value }))
                        clearError('email')
                      }}
                      placeholder=" "
                      autoComplete="email"
                      className={`w-full bg-transparent border-b-2 py-6 text-2xl font-light outline-none transition-all ${
                        errors.email ? 'border-accent' : 'border-gray-200 focus:border-accent'
                      }`}
                    />
                    <label
                      htmlFor="field-email"
                      className="absolute left-0 top-6 text-2xl font-light text-brand-gray pointer-events-none transition-all duration-300 origin-left"
                      style={{
                        transform: fields.email ? 'translateY(-24px) scale(0.75)' : '',
                        color: fields.email ? '#eb4242' : '',
                      }}
                    >
                      What's your email?
                    </label>
                    {errors.email && (
                      <span className="text-accent text-xs font-bold uppercase tracking-widest mt-1 block">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  {/* Service tags */}
                  <div className="space-y-6">
                    <p className="text-[11px] font-bold text-brand-gray uppercase tracking-[0.3em]">
                      What are you looking for?
                    </p>
                    <div className="flex flex-wrap gap-4">
                      {SERVICE_OPTIONS.map((svc) => {
                        const active = selectedServices.includes(svc)
                        return (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => toggleService(svc)}
                            className={`px-8 py-4 rounded-full border font-bold text-sm uppercase transition-all duration-300 hover:-translate-y-0.5 ${
                              active
                                ? 'bg-black text-white border-black'
                                : 'border-gray-200 hover:bg-black hover:text-white hover:border-black'
                            }`}
                          >
                            {svc}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Budget dropdown */}
                  <div className="space-y-8 relative">
                    <div>
                      <p className="text-[11px] font-bold text-brand-gray uppercase tracking-[0.3em] mb-3">
                        What's your budget?
                      </p>
                      <p className="text-base text-brand-gray font-light">
                        Select your project budget range
                      </p>
                    </div>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setBudgetOpen((o) => !o)}
                        className="w-full flex items-center justify-between bg-transparent border-b-2 border-gray-200 py-6 text-2xl font-light text-left outline-none focus:border-accent transition-all"
                      >
                        <span className={budget ? 'text-brand-black' : 'text-brand-gray'}>
                          {budget || 'Select your budget...'}
                        </span>
                        <svg
                          className={`w-5 h-5 text-brand-gray transition-transform duration-300 ${
                            budgetOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {budgetOpen && (
                        <div className="absolute top-full left-0 w-full mt-4 bg-white rounded-2xl shadow-premium border border-gray-100 py-4 z-[60]">
                          {BUDGET_OPTIONS.map((opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => {
                                setBudget(opt)
                                setBudgetOpen(false)
                              }}
                              className={`w-full px-8 py-5 text-xl font-light text-left hover:bg-brand-light transition-colors ${
                                budget === opt ? 'text-accent bg-brand-light' : 'text-brand-black'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <textarea
                      id="field-message"
                      value={fields.message}
                      onChange={(e) => {
                        setFields((p) => ({ ...p, message: e.target.value }))
                        clearError('message')
                      }}
                      rows={3}
                      placeholder=" "
                      className={`w-full bg-transparent border-b-2 py-6 text-2xl font-light outline-none transition-all resize-none ${
                        errors.message ? 'border-accent' : 'border-gray-200 focus:border-accent'
                      }`}
                    />
                    <label
                      htmlFor="field-message"
                      className="absolute left-0 top-6 text-2xl font-light text-brand-gray pointer-events-none transition-all duration-300 origin-left"
                      style={{
                        transform: fields.message ? 'translateY(-24px) scale(0.75)' : '',
                        color: fields.message ? '#eb4242' : '',
                      }}
                    >
                      Tell us about your project
                    </label>
                    {errors.message && (
                      <span className="text-accent text-xs font-bold uppercase tracking-widest mt-1 block">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="pt-10">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-8 rounded-full bg-accent hover:bg-[#d12f2f] text-white text-xl font-bold transition-all hover:scale-[1.02] shadow-xl shadow-accent/20 flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="w-6 h-6 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Inquiry
                          <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                        </>
                      )}
                    </button>
                    <p className="text-center text-[10px] text-brand-gray uppercase tracking-[0.4em] mt-8 font-bold">
                      Response time: typically under 12 hours
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
