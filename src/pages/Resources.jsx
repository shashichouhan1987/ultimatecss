import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const articles = [
  { cat: 'Performance', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800', title: 'The Ultimate Core Web Vitals Guide for 2025', body: 'Everything you need to achieve perfect Lighthouse scores on any platform — Webflow, WordPress, or custom.' },
  { cat: 'Conversion', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800', title: 'Our 12-Step CRO Framework for B2B SaaS', body: 'The exact conversion rate optimization process we use to 3–5X demo bookings for SaaS clients.' },
  { cat: 'Strategy', img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800', title: 'Webflow vs WordPress: The 2025 Decision Matrix', body: 'An objective breakdown of when to choose each platform based on your team size, budget, and growth goals.' },
  { cat: 'Design', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800', title: '10 Hero Section Patterns That Actually Convert', body: 'Real-world hero section breakdowns with A/B test data across 40+ landing pages.' },
  { cat: 'Business', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800', title: 'How to Brief a Web Agency (And Not Waste Money)', body: 'The 1-page brief template we wish every client used before starting a project.' },
  { cat: 'Analytics', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800', title: 'GA4 + Hotjar Setup Guide for Growth Teams', body: 'The analytics stack we configure for every client to track real conversion data — not vanity metrics.' },
]

export default function Resources() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const pageRef = useReveal()

  function handleSubscribe(e) {
    e.preventDefault()
    if (!email) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <div ref={pageRef} className="min-h-screen flex flex-col bg-white text-brand-black">
      <main className="flex-grow pt-40 pb-48 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HERO */}
          <div className="max-w-3xl mb-32 reveal active">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-light text-accent font-bold text-[10px] uppercase tracking-widest mb-10">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              Free Knowledge Base
            </div>
            <h1 className="font-display font-bold text-6xl lg:text-7xl leading-[0.9] tracking-tighter mb-12">
              Resources for <span className="text-accent">growth-minded</span> teams.
            </h1>
            <p className="text-xl text-brand-gray font-light leading-relaxed">
              Guides, frameworks, and insights from our team — everything you need to build faster,
              convert better, and scale smarter.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {articles.map(({ cat, img, title, body }, i) => (
              <article
                key={title}
                className="reveal group cursor-pointer"
                style={{ transitionDelay: `${(i % 3) * 100}ms` }}
              >
                <div className="aspect-[16/10] rounded-[2rem] overflow-hidden mb-8 bg-brand-light">
                  <img
                    src={img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={title}
                  />
                </div>
                <div className="px-2">
                  <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">
                    {cat}
                  </p>
                  <h3 className="text-2xl font-display font-bold mb-4 tracking-tight group-hover:text-accent transition-colors">
                    {title}
                  </h3>
                  <p className="text-brand-gray font-light leading-relaxed">{body}</p>
                </div>
              </article>
            ))}
          </div>

          {/* NEWSLETTER */}
          <div className="mt-48 bg-brand-black rounded-[4rem] p-20 text-center text-white relative overflow-hidden reveal">
            <div className="relative z-10 max-w-2xl mx-auto">
              <p className="text-[11px] font-bold text-accent uppercase tracking-[0.3em] mb-6">
                Stay Sharp
              </p>
              <h2 className="font-display font-bold text-5xl lg:text-6xl mb-8 tracking-tighter">
                Get new resources <br /> every two weeks.
              </h2>
              <p className="text-white/50 text-xl font-light mb-16">
                No fluff. Just actionable insights on performance, conversion, and digital strategy.
              </p>
              {subscribed ? (
                <p className="text-accent font-bold text-2xl">You're in! Talk soon.</p>
              ) : (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 bg-white/10 border border-white/20 rounded-full px-8 py-5 text-white placeholder-white/40 outline-none focus:border-accent transition-colors text-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-accent hover:bg-[#d12f2f] text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:scale-105 whitespace-nowrap"
                  >
                    Subscribe Free
                  </button>
                </form>
              )}
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#eb4242_0%,_transparent_70%)] opacity-10"></div>
          </div>
        </div>
      </main>
    </div>
  )
}
