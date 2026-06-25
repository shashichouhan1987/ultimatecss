import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const projects = [
  { id: 'fintech-global', category: 'Fintech', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200', label: 'Fintech / Enterprise', name: 'Fintech Global Inc.', desc: 'Modernizing legacy banking for the 2.0 generation.', metricLabel: 'Revenue Impact', metric: '+210%' },
  { id: 'ecostream', category: 'E-Commerce', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200', label: 'E-Commerce / Consumer', name: 'EcoStream Lifestyle', desc: 'Scaling sustainable home goods through headless commerce.', metricLabel: 'Sales Volume', metric: '3.2X' },
  { id: 'saasflow', category: 'SaaS', img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1200', label: 'SaaS / B2B Automation', name: 'SaaSFlow Pro', desc: 'Operational efficiency tools for remote engineering teams.', metricLabel: 'Conversion Rate', metric: '+440%' },
  { id: 'auralis', category: 'B2B AI', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200', label: 'Data / Artificial Intelligence', name: 'Auralis AI Systems', desc: 'Democratizing data science with intuitive visualization.', metricLabel: 'Engagement', metric: '+180%' },
  { id: 'vanguard', category: 'E-Commerce', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200', label: 'Retail / Premium Fashion', name: 'Vanguard Atelier', desc: 'Bringing high-fashion digital experiences to mobile first.', metricLabel: 'Avg Order Value', metric: '+85%' },
  { id: 'vitalis', category: 'SaaS', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200', label: 'HealthTech / Wellness', name: 'Vitalis Platform', desc: 'Streamlining patient care through unified digital ecosystems.', metricLabel: 'Onboarding', metric: '-60% Time' },
]

const categories = ['All Projects', 'Fintech', 'SaaS', 'E-Commerce', 'B2B AI']

export default function CaseStudies() {
  const [active, setActive] = useState('All Projects')
  const pageRef = useReveal()

  const filtered =
    active === 'All Projects' ? projects : projects.filter((p) => p.category === active)

  return (
    <div ref={pageRef} className="min-h-screen flex flex-col bg-white text-brand-black">
      <main className="flex-grow pt-32 pb-48">
        {/* HERO */}
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <div className="reveal active">
            <p className="text-[11px] font-bold text-accent uppercase tracking-[0.3em] mb-6">
              Our Portfolio
            </p>
            <h1 className="font-display font-bold text-6xl lg:text-7xl leading-tight text-brand-black mb-12 tracking-tighter max-w-4xl">
              Success stories <br /> backed by{' '}
              <span className="text-brand-gray/30">actual</span> numbers.
            </h1>
            <div className="flex flex-wrap gap-3 mt-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest border transition-all duration-300 hover:-translate-y-0.5 ${
                    active === cat
                      ? 'bg-brand-black text-white border-brand-black'
                      : 'bg-white text-brand-black border-gray-100 hover:bg-black hover:text-white hover:border-black'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECT LIST */}
        <section className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
            {filtered.map(({ id, img, label, name, desc, metricLabel, metric }, i) => (
              <Link
                key={id}
                to={`/case-studies/${id}`}
                className={`stagger-child project-card group block ${i % 2 === 1 ? 'md:mt-24' : ''}`}
              >
                <div className="aspect-[16/10] overflow-hidden rounded-[2.5rem] bg-gray-50 mb-10 shadow-premium">
                  <img
                    src={img}
                    className="w-full h-full object-cover project-image-wrap"
                    alt={name}
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-bold text-accent uppercase tracking-widest mb-3">
                      {label}
                    </p>
                    <h3 className="text-3xl font-display font-bold tracking-tight mb-4">{name}</h3>
                    <p className="text-brand-gray text-lg font-light max-w-md">{desc}</p>
                  </div>
                  <div className="text-right shrink-0 ml-6">
                    <p className="text-[10px] uppercase font-bold text-brand-gray tracking-widest mb-1">
                      {metricLabel}
                    </p>
                    <p className="text-4xl font-display font-bold text-accent tracking-tighter">
                      {metric}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* BOTTOM CTA */}
        <section className="max-w-7xl mx-auto px-6 mt-48 reveal">
          <div className="bg-brand-black rounded-[4rem] p-20 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-display font-bold text-5xl lg:text-6xl mb-12 tracking-tighter">
                Ready to scale <br /> your digital product?
              </h2>
              <Link
                to="/contact"
                className="inline-block bg-accent hover:bg-[#d12f2f] text-white px-12 py-6 rounded-full font-bold text-xl shadow-xl shadow-accent/20 hover:scale-105 transition-all"
              >
                Start Your Journey
              </Link>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#eb4242_0%,_transparent_70%)] opacity-10"></div>
          </div>
        </section>
      </main>
    </div>
  )
}
