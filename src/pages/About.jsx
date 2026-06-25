import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const team = [
  { name: 'Marcus Thorne', role: 'Founder & Technical Director', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600' },
  { name: 'Elena Rodriguez', role: 'Head of Performance Design', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600' },
  { name: 'Sam Wilson', role: 'Conversion Strategist', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600' },
  { name: 'Julia Chen', role: 'Lead Webflow Architect', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600' },
]

const philosophy = [
  {
    num: '01',
    title: 'Performance is a Feature',
    body: 'We believe that speed is the most important UX element. A beautiful site that loads in 4 seconds is a failed site. Our code is optimized for Core Web Vitals from the first line.',
  },
  {
    num: '02',
    title: 'Radical Transparency',
    body: 'No black boxes. No hidden markups. We work as an extension of your team, providing direct access to our strategists and developers via Slack and open dashboards.',
  },
  {
    num: '03',
    title: 'Measurable Impact',
    body: "We don't measure success by award trophies. We measure it by conversion lifts, bounce rate reductions, and MRR growth for our clients.",
  },
]

export default function About() {
  const pageRef = useReveal()

  return (
    <div ref={pageRef} className="bg-white text-brand-black">
      {/* HERO */}
      <section className="py-32 lg:py-48 px-6 pt-40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-brand-light text-accent font-bold text-[10px] uppercase tracking-widest mb-10">
              <span className="flex h-2 w-2 rounded-full bg-accent"></span>
              Est. 2014 in San Francisco
            </div>
            <h1 className="font-display font-bold text-6xl lg:text-7xl leading-[0.9] text-brand-black mb-12 tracking-tighter">
              We help visionary teams build{' '}
              <span className="text-accent">performance-first</span> digital products.
            </h1>
            <p className="text-xl md:text-2xl text-brand-gray font-light leading-relaxed max-w-2xl">
              UltimateCSS is a boutique performance agency. We don't just build websites; we
              engineer revenue-generating ecosystems that prioritize user speed and conversion data.
            </p>
          </div>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="px-6 reveal">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
              'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200',
            ].map((src, i) => (
              <div key={i} className="h-[500px] rounded-[3rem] overflow-hidden group">
                <img
                  src={src}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  alt="Studio"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-24">
            <div className="lg:col-span-1">
              <p className="text-[11px] font-bold text-accent uppercase tracking-[0.3em] mb-6">
                Our Philosophy
              </p>
              <h2 className="font-display font-bold text-5xl lg:text-6xl text-brand-black tracking-tighter">
                Why we exist.
              </h2>
            </div>
            <div className="lg:col-span-2 space-y-20">
              {philosophy.map(({ num, title, body }) => (
                <div key={num} className="reveal">
                  <span className="text-6xl font-display font-bold text-gray-100 mb-8 block">
                    {num}
                  </span>
                  <h3 className="text-3xl font-display font-bold mb-6 tracking-tight">{title}</h3>
                  <p className="text-brand-gray text-xl leading-relaxed font-light">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-40 bg-brand-light px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <p className="text-[11px] font-bold text-accent uppercase tracking-[0.3em] mb-6">
              Meet the Experts
            </p>
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-brand-black tracking-tighter">
              Engineers of Growth.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {team.map(({ name, role, img }, i) => (
              <div
                key={name}
                className="reveal group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 border border-gray-100 shadow-card">
                  <img
                    src={img}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    alt={name}
                  />
                </div>
                <h4 className="text-2xl font-display font-bold mb-1">{name}</h4>
                <p className="text-accent font-bold text-[10px] uppercase tracking-widest">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-48 px-6 text-center">
        <div className="max-w-4xl mx-auto reveal">
          <h2 className="font-display font-bold text-5xl lg:text-6xl text-brand-black mb-16 tracking-tighter leading-[0.9]">
            Ready to break your <br />
            <span className="text-accent">performance ceiling?</span>
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="bg-accent hover:bg-[#d12f2f] text-white px-12 py-6 rounded-full font-bold text-xl transition-all shadow-xl shadow-accent/20 hover:scale-105 hover:-translate-y-1"
            >
              Start Your Project
            </Link>
            <Link
              to="/case-studies"
              className="border border-gray-200 hover:border-brand-black px-12 py-6 rounded-full font-bold text-xl transition-all hover:scale-105"
            >
              See Our Impact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
