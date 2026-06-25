import { Link, useParams } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const studies = {
  'fintech-global': {
    tag: 'Fintech & Payments',
    title: 'Fintech Global: The ROI Engine',
    hero: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    client: 'Fintech Global Inc.',
    deliverables: ['Conversion Strategy', 'UX/UI Architecture', 'Webflow Engine'],
    timeline: '12 Weeks',
    impact: '+210% ROI',
    challengeTitle: 'Complexity is the Enemy of Conversion.',
    challengeBody:
      "Fintech Global had a powerful platform but a broken entry point. Users were bouncing due to technical jargon and a 4-second page load time. They didn\u2019t need a facelift; they needed a high-performance conversion machine that spoke to enterprise CFOs and individual traders alike.",
    img1: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
    img2: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1000',
    quote: "\u201cUltimateCSS didn\u2019t just design a site; they engineered a sales pipeline that tripled our demo bookings in the first quarter.\u201d",
    quoteName: 'David Chen',
    quoteRole: 'Head of Growth, Fintech Global',
    quoteImg: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  ecostream: {
    tag: 'E-Commerce / Consumer',
    title: 'EcoStream: Scaling Sustainable Commerce',
    hero: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    client: 'EcoStream Lifestyle',
    deliverables: ['Headless Commerce', 'UX Strategy', 'Performance Optimization'],
    timeline: '10 Weeks',
    impact: '3.2X Sales',
    challengeTitle: 'Conversion Without Compromise.',
    challengeBody:
      'EcoStream needed to scale their sustainable home goods brand while maintaining their eco-conscious identity. We rebuilt their commerce infrastructure with headless architecture and cut their load time by 60%.',
    img1: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    img2: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000',
    quote: '"Sales tripled after launch. Our cart abandonment dropped by 40%. UltimateCSS understood our brand deeply."',
    quoteName: 'Mia Torres',
    quoteRole: 'CEO, EcoStream',
    quoteImg: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
}

const fallback = {
  tag: 'Case Study',
  title: 'Project Case Study',
  hero: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1600',
  client: 'Client Name',
  deliverables: ['Strategy', 'Design', 'Development'],
  timeline: '8–12 Weeks',
  impact: '+200% ROI',
  challengeTitle: 'A Complex Problem, Solved Elegantly.',
  challengeBody: "Every engagement starts with deeply understanding the client\u2019s challenge. We architect solutions that combine technical excellence with conversion-focused design.",
  img1: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1000',
  img2: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000',
  quote: '"Working with UltimateCSS was a game-changer. They delivered beyond expectations."',
  quoteName: 'Happy Client',
  quoteRole: 'CEO, Growth Co.',
  quoteImg: 'https://randomuser.me/api/portraits/men/10.jpg',
}

export default function CaseStudyDetail() {
  const { id } = useParams()
  const study = studies[id] || fallback
  const pageRef = useReveal()

  return (
    <div ref={pageRef} className="min-h-screen bg-white font-body text-brand-black">
      {/* HERO */}
      <header className="pt-40 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-8 mb-16 reveal active">
            <div className="inline-flex w-fit items-center gap-2 px-4 py-1.5 rounded-full border border-gray-100 bg-brand-light text-accent font-bold text-[10px] uppercase tracking-widest">
              {study.tag}
            </div>
            <h1 className="font-display font-bold text-6xl lg:text-7xl tracking-tighter leading-[0.9]">
              {study.title}
            </h1>
          </div>
          <div className="aspect-[21/9] w-full rounded-[3rem] overflow-hidden reveal mb-20">
            <img src={study.hero} className="w-full h-full object-cover" alt={study.title} />
          </div>
          <div className="grid lg:grid-cols-4 gap-12 border-t border-gray-100 pt-16 reveal">
            <div className="space-y-4">
              <p className="text-[10px] uppercase font-bold text-brand-gray tracking-[0.3em]">Client</p>
              <p className="text-xl font-medium">{study.client}</p>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase font-bold text-brand-gray tracking-[0.3em]">Deliverables</p>
              <ul className="text-xl font-medium space-y-1">
                {study.deliverables.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase font-bold text-brand-gray tracking-[0.3em]">Timeline</p>
              <p className="text-xl font-medium">{study.timeline}</p>
            </div>
            <div className="space-y-4">
              <p className="text-[10px] uppercase font-bold text-brand-gray tracking-[0.3em]">Impact</p>
              <p className="text-4xl font-display font-bold text-accent">{study.impact}</p>
            </div>
          </div>
        </div>
      </header>

      {/* CHALLENGE */}
      <section className="py-32 px-6 bg-brand-light">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
            <div className="lg:col-span-5 sticky top-28">
              <p className="text-[11px] font-bold text-accent uppercase tracking-[0.3em] mb-6">
                The Challenge
              </p>
              <h2 className="font-display font-bold text-5xl lg:text-6xl tracking-tighter mb-8 leading-tight">
                {study.challengeTitle}
              </h2>
              <p className="text-xl text-brand-gray font-light leading-relaxed">{study.challengeBody}</p>
            </div>
            <div className="lg:col-span-7 space-y-12">
              <div className="aspect-square rounded-[3rem] overflow-hidden reveal shadow-premium">
                <img src={study.img1} className="w-full h-full object-cover" alt="Detail 1" />
              </div>
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden reveal shadow-premium">
                <img src={study.img2} className="w-full h-full object-cover" alt="Detail 2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="py-40 px-6">
        <div className="max-w-4xl mx-auto text-center reveal">
          <p className="text-[11px] font-bold text-accent uppercase tracking-[0.3em] mb-10">
            The Outcome
          </p>
          <h3 className="font-display font-bold text-4xl md:text-6xl tracking-tighter mb-16 italic font-light">
            {study.quote}
          </h3>
          <div className="flex items-center justify-center gap-4 text-left">
            <img src={study.quoteImg} className="w-14 h-14 rounded-full" alt={study.quoteName} />
            <div>
              <p className="font-bold">{study.quoteName}</p>
              <p className="text-xs text-brand-gray uppercase tracking-widest">{study.quoteRole}</p>
            </div>
          </div>
        </div>
      </section>

      {/* NAVIGATION */}
      <section className="py-32 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Link
              to="/case-studies"
              className="group p-12 rounded-[3rem] border border-gray-100 bg-white hover:border-accent transition-all duration-500 flex flex-col justify-between aspect-video"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gray group-hover:text-accent transition-colors">
                ← Back to Portfolio
              </div>
              <h4 className="font-display font-bold text-4xl group-hover:translate-x-4 transition-transform">
                All Case Studies
              </h4>
            </Link>
            <Link
              to="/contact"
              className="group p-12 rounded-[3rem] bg-brand-black text-white hover:bg-accent transition-all duration-500 flex flex-col justify-between aspect-video"
            >
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">
                Start a Project
              </div>
              <h4 className="font-display font-bold text-4xl group-hover:translate-x-4 transition-transform">
                Let's Work Together
              </h4>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
