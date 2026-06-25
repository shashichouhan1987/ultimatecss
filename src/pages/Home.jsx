import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Target, Zap, Layout, Code, LifeBuoy } from 'lucide-react'
import { useReveal, useCounterAnimation } from '../hooks/useReveal'

const carouselImages = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500&h=600',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=500&h=600',
  'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=500&h=600',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=500&h=600',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=500&h=600',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=500&h=600',
]

const leftImgs = [...carouselImages, ...carouselImages]
const rightImgs = [...carouselImages.slice(3), ...carouselImages.slice(0, 3), ...carouselImages.slice(3), ...carouselImages.slice(0, 3)]

export default function Home() {
  const pageRef = useReveal()
  const statsRef = useCounterAnimation()
  const auditFormRef = useRef(null)

  function handleAuditSubmit(e) {
    e.preventDefault()
    // Basic audit form — redirect to contact for full form
    window.location.href = '/contact'
  }

  return (
    <div ref={pageRef}>
      {/* HERO */}
      <section className="relative overflow-hidden bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6 h-full relative z-10">
          <div className="grid lg:grid-cols-2 items-stretch min-h-screen gap-12 lg:gap-16">
            {/* Left: copy */}
            <div className="flex flex-col justify-center py-20 reveal active">
              <div className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-brand-light text-accent font-bold text-[10px] uppercase tracking-widest mb-10 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Accepting Q1 partnerships
              </div>
              <h1 className="font-display font-bold text-6xl lg:text-7xl leading-tight text-brand-black mb-12 tracking-tighter">
                Hey! Let's build <br /> something{' '}
                <span className="text-accent">extraordinary</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-gray font-light leading-relaxed mb-12 max-w-xl">
                We build high-converting Webflow &amp; Elementor sites designed to double your
                leads and maximize ROI. Pure{' '}
                <span className="text-brand-black font-medium">data-driven</span> design.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Link
                  to="/contact"
                  className="bg-accent hover:bg-[#d12f2f] text-white px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-accent/20 hover:scale-105 hover:-translate-y-1 transition-all"
                >
                  Get Free Site Analysis <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/case-studies"
                  className="group px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-2 text-brand-black border border-gray-200 hover:border-brand-black hover:bg-brand-light hover:scale-105 hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  View Case Studies
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-6 border-t border-gray-50">
                <div className="text-xs font-bold text-brand-gray uppercase tracking-[0.2em]">
                  Trusted by 80+ growth brands
                </div>
              </div>
            </div>

            {/* Right: dual-scroll carousel */}
            <div className="reveal active relative min-h-[500px] lg:min-h-full h-full">
              <div className="carousel-mask absolute inset-0 grid grid-cols-2 gap-4 lg:gap-6 h-full">
                <div className="h-full overflow-hidden relative">
                  <div className="carousel-track-up flex flex-col gap-6">
                    {leftImgs.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        className={`w-full object-cover rounded-2xl shadow-lg ${
                          i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
                        }`}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
                <div className="h-full overflow-hidden relative">
                  <div className="carousel-track-down flex flex-col gap-6">
                    {rightImgs.map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        className={`w-full object-cover rounded-2xl shadow-lg ${
                          i % 3 === 0 ? 'aspect-[4/5]' : i % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'
                        }`}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODOLOGY */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-28 reveal">
            <p className="text-[11px] font-bold text-accent uppercase tracking-[0.3em] mb-6">
              Our Methodology
            </p>
            <h2 className="font-display font-bold text-5xl lg:text-6xl text-brand-black mb-12 tracking-tighter">
              Data-First Design. <br /> Results-Obsessed.
            </h2>
            <div className="grid lg:grid-cols-2 gap-16 text-left">
              {[
                {
                  icon: <Target className="text-2xl w-6 h-6" />,
                  bg: 'bg-brand-black',
                  title: 'Why Aesthetics Fail Alone',
                    body: "Most agencies focus on \u2018pretty\u2019 sites that fail to convert because they ignore user psychology and technical performance. We believe a website is a tool, not a gallery piece.",
                },
                {
                  icon: <Zap className="text-2xl w-6 h-6" />,
                  bg: 'bg-accent',
                  title: 'The ROI Engine',
                  body: 'Every pixel is backed by conversion data. We study thousands of high-converting patterns to ensure your investment pays for itself within months of launch.',
                },
              ].map(({ icon, bg, title, body }) => (
                <div
                  key={title}
                  className="stagger-child p-12 rounded-[3.5rem] bg-white border border-gray-100 transition-all duration-500 hover:shadow-premium group"
                >
                  <div
                    className={`w-14 h-14 rounded-full ${bg} text-white flex items-center justify-center mb-10 transform transition-transform group-hover:rotate-6`}
                  >
                    {icon}
                  </div>
                  <h3 className="text-2xl font-display font-bold text-brand-black mb-6 tracking-tight">
                    {title}
                  </h3>
                  <p className="text-brand-gray leading-relaxed text-lg font-light">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section className="py-32 bg-brand-light relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8 reveal">
            <div className="max-w-xl">
              <p className="text-[11px] font-bold text-accent uppercase tracking-[0.3em] mb-6">
                Success Stories
              </p>
              <h2 className="font-display font-bold text-5xl lg:text-6xl text-brand-black tracking-tighter leading-tight">
                Impact, <br /> Delivered Daily.
              </h2>
            </div>
            <p className="text-brand-gray text-xl mb-4 font-light leading-relaxed max-w-md">
              Explore the numbers behind our recent launches. High-end design meets enterprise-level
              conversion logic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
                tag: 'Fintech',
                name: 'Fintech Global Inc.',
                stat1: { label: 'Revenue', value: '+210%' },
                stat2: { label: 'Leads', value: '+118%' },
              },
              {
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
                tag: 'E-Commerce',
                name: 'EcoStream Pro',
                stat1: { label: 'Sales', value: '+3.2X' },
                stat2: { label: 'Bounce', value: '-55%' },
              },
              {
                img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800',
                tag: 'SaaS B2B',
                name: 'SaaSFlow Pro',
                stat1: { label: 'Demo Book', value: '+440%' },
                stat2: { label: 'Retention', value: '98%' },
              },
            ].map(({ img, tag, name, stat1, stat2 }) => (
              <Link
                key={name}
                to="/case-studies"
                className="stagger-child project-card bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-card block"
              >
                <div className="aspect-[16/11] overflow-hidden relative">
                  <img src={img} className="w-full h-full object-cover project-image-wrap" alt={name} />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/95 px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                      {tag}
                    </span>
                  </div>
                </div>
                <div className="p-12">
                  <h3 className="font-display font-bold text-2xl tracking-tight mb-8">{name}</h3>
                  <div className="grid grid-cols-2 gap-8 border-t border-gray-50 pt-8">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-brand-gray tracking-widest mb-2">
                        {stat1.label}
                      </p>
                      <p className="text-3xl font-display font-bold text-accent">{stat1.value}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-brand-gray tracking-widest mb-2">
                        {stat2.label}
                      </p>
                      <p className="text-3xl font-display font-bold">{stat2.value}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section ref={statsRef} className="py-40 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
            {[
              { label: 'Global Impact', value: '80+', counter: '80', desc: 'Elite builds launched across 12 countries in the last 24 months.' },
              { label: 'Avg Scaling', value: '3.5X', counter: '3.5', desc: 'Average increase in trackable user engagement after site relaunch.' },
              { label: 'Retention', value: '98%', counter: '98', desc: 'Ongoing partnership rate with our growth-stage enterprise clients.' },
              { label: 'Guarantee', value: '100%', counter: '100', desc: 'Unmatched technical support and conversion-gap coverage.' },
            ].map(({ label, value, counter, desc }) => (
              <div key={label} className="text-left">
                <div className="text-[10px] font-bold text-accent uppercase tracking-[0.4em] mb-6">{label}</div>
                <div className="text-7xl font-display font-bold text-white mb-4 tracking-tighter" data-counter={counter}>
                  {value}
                </div>
                <p className="text-sm font-light text-white/40 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-24 mb-32 items-end">
            <div className="lg:col-span-2 reveal">
              <p className="text-[11px] font-bold text-accent uppercase tracking-[0.3em] mb-6">
                Our Expertise
              </p>
              <h2 className="font-display font-bold text-5xl lg:text-6xl text-brand-black leading-tight tracking-tighter">
                Hey! Let's Fix <br />
                Your <span className="text-brand-gray/30">Website</span>
              </h2>
            </div>
            <div className="reveal lg:text-right">
              <Link
                to="/contact"
                className="text-brand-black font-bold text-lg flex items-center lg:justify-end gap-3 group transition-all hover:text-accent"
              >
                Explore Capabilities
                <ArrowRight className="text-2xl w-6 h-6 transition-transform group-hover:translate-x-2" />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { Icon: Layout, bg: 'bg-accent', title: 'Webflow Systems', tag: 'Performance First', body: 'Enterprise-grade Webflow builds focused on scalability and conversion metrics. From startups to global brands.' },
              { Icon: Code, bg: 'bg-brand-black', title: 'WordPress Builds', tag: 'Global Reliability', body: 'Custom Elementor ecosystems that don\'t break. High control with zero standard template bloat.' },
              { Icon: LifeBuoy, bg: 'bg-accent', title: 'Growth Support', tag: '24h Response', body: 'Dedicated account strategy with direct Slack access. We don\'t use tickets; we use results.' },
            ].map(({ Icon, bg, title, tag, body }) => (
              <div
                key={title}
                className="stagger-child p-14 rounded-[3.5rem] bg-white border border-gray-100 transition-all duration-700 hover:shadow-premium group"
              >
                <div className={`w-16 h-16 rounded-full ${bg} text-white flex items-center justify-center text-3xl mb-12 transform transition-all group-hover:scale-110`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-display font-bold mb-6 tracking-tight">{title}</h3>
                <p className="text-brand-gray text-lg mb-12 leading-relaxed font-light">{body}</p>
                <div className={`text-xs font-bold uppercase tracking-widest ${bg === 'bg-accent' ? 'text-accent' : 'text-brand-black'} flex items-center gap-2`}>
                  <div className={`w-8 h-[1px] ${bg === 'bg-accent' ? 'bg-accent' : 'bg-brand-black'}`}></div>
                  {tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                quote: '"UltimateCSS transformed our digital presence into a high-converting machine. Our revenue tripled within three months. Unmatched focus."',
                name: 'David Chen',
                role: 'Founder, SaaSFlow',
                img: 'https://randomuser.me/api/portraits/men/1.jpg',
              },
              {
                quote: '"The level of professionalism and technical depth is unmatched. They built a growth engine. Only partner we trust with our dev."',
                name: 'Sarah Jenkins',
                role: 'Director, GreenPath',
                img: 'https://randomuser.me/api/portraits/women/3.jpg',
              },
            ].map(({ quote, name, role, img }) => (
              <div
                key={name}
                className="stagger-child bg-white p-16 rounded-[4rem] border border-gray-100 shadow-card relative"
              >
                <p className="text-3xl text-brand-black font-light italic mb-12 leading-relaxed relative z-10">
                  {quote}
                </p>
                <div className="flex items-center gap-6">
                  <img src={img} className="w-16 h-16 rounded-full bg-gray-100" alt={name} />
                  <div>
                    <p className="font-bold text-xl">{name}</p>
                    <p className="text-xs font-bold text-accent uppercase tracking-widest mt-1">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIT CTA */}
      <section className="py-48 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-32">
            <div className="reveal">
              <h2 className="font-display font-bold text-5xl lg:text-6xl mb-12 tracking-tighter">
                Tell us <br /> all the <span className="text-accent">things</span>
              </h2>
              <p className="text-2xl text-brand-gray font-light leading-relaxed mb-16">
                We'll spend 30 minutes looking at your site and give you a real, actionable list of
                what's broken and how to fix it. No fluff, just help.
              </p>
              <div className="space-y-12">
                {[
                  { Icon: Target, title: 'Conversion Gap Analysis', sub: 'Leads Leak Identification' },
                  { Icon: Zap, title: 'Tech & Speed Audit', sub: 'Core Web Vitals Check' },
                ].map(({ Icon, title, sub }) => (
                  <div key={title} className="flex gap-8">
                    <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center text-accent">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-bold text-xl">{title}</p>
                      <p className="text-xs text-brand-gray mt-2 font-bold uppercase tracking-widest">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal lg:pt-10">
              <form onSubmit={handleAuditSubmit} className="space-y-16">
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gray mb-4 block">
                      Your name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-gray-200 py-4 text-2xl font-light outline-none focus:border-accent transition-colors"
                      placeholder="Alex Smith"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gray mb-4 block">
                      Site URL
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border-b border-gray-200 py-4 text-2xl font-light outline-none focus:border-accent transition-colors"
                      placeholder="mysite.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gray mb-4 block">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="w-full bg-transparent border-b border-gray-200 py-4 text-2xl font-light outline-none focus:border-accent transition-colors"
                      placeholder="alex@company.com"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-[#d12f2f] text-white font-bold py-8 rounded-full text-xl shadow-xl shadow-accent/20 hover:scale-105 hover:-translate-y-1 transition-all"
                >
                  Send Site Inquiry
                </button>
                <p className="text-center text-[11px] text-brand-gray uppercase tracking-[0.4em] font-bold">
                  Only 3 Free Performance Audits Remaining
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
