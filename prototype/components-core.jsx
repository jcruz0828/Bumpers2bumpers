/* global React */

// ─── DATA ─────────────────────────────────────────────────────────────
window.B2B_DATA = {
  services: [
    { num:"01", name:"Showroom Package", it:"Concours", desc:"Multi-stage paint correction, ceramic coating, full interior restoration. 10–14 hours. For vehicles meant to be looked at twice.", img:"https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&q=80" },
    { num:"02", name:"Executive Detail", it:"Weekly", desc:"Full exterior decontamination, ceramic spray sealant, leather conditioning, steam-sanitized interior. The standard for daily-drivers that aren't daily at all.", img:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&q=80" },
    { num:"03", name:"Paint Correction", it:"1-, 2-, 3-stage", desc:"Swirl removal, scratch removal, oxidation reversal under controlled lighting. Measured with a paint-depth gauge before every pass.", img:"https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80" },
    { num:"04", name:"Ceramic & Graphene", it:"1yr · 3yr · 5yr", desc:"Professional-grade coatings applied in a controlled environment. Hydrophobic, UV-stable, chemical-resistant. Warranty registered.", img:"https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=900&q=80" },
    { num:"05", name:"Interior Restoration", it:"Leather · Alcantara", desc:"Deep steam extraction, leather reconditioning, Alcantara revival, odor neutralization. No harsh chemicals, ever.", img:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=900&q=80" },
    { num:"06", name:"Headlight Restoration", it:"OEM-clear", desc:"Multi-stage wet sanding, polishing, UV sealant. Restored to OEM clarity — not the yellow plastic everyone else accepts.", img:"https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=900&q=80" },
    { num:"07", name:"Fleet & Collections", it:"On retainer", desc:"For clients with multiple vehicles or full collections. Scheduled rotation, dedicated file per vehicle, quarterly paint-health reports.", img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&q=80" },
  ],
  testimonials: [
    { stars:"★★★★★", quote:"Richie treats my 812 like it belongs in a museum. Two years in, still beads like day one.", name:"D. Pemberton", title:"Collector · Indian Wells", car:"Ferrari 812 Superfast" },
    { stars:"★★★★★", quote:"I don't let anyone touch the Phantom. Then I saw Richie's work on a friend's Ghost. Now it's only him.", name:"Mr. & Mrs. Vance", title:"Private · Rancho Mirage", car:"Rolls-Royce Phantom VIII" },
    { stars:"★★★★★", quote:"Drove two hours in desert dust. He made it look like it just left Sant'Agata. Obsessive in the best way.", name:"A. Khoury", title:"Concours entrant · La Quinta", car:"Lamborghini Huracán STO" },
  ],
  cities: [
    "Palm Springs","Cathedral City","Rancho Mirage","Palm Desert","Indian Wells",
    "La Quinta","Indio","Coachella","Desert Hot Springs","Thousand Palms",
    "Bermuda Dunes","Thermal","Mecca","North Shore","Salton City",
  ],
  heros: [
    "https://images.unsplash.com/photo-1611821064430-0d40291d0f0b?w=2400&q=85", // dark car detail
    "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=2400&q=85",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2400&q=85",
  ],
  gallery: [
    { url:"https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=900&q=80", tag:"Aventador SVJ" },
    { url:"https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900&q=80", tag:"911 GT3 RS" },
    { url:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=900&q=80", tag:"G-Wagen AMG" },
    { url:"https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=900&q=80", tag:"DB11" },
    { url:"https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=900&q=80", tag:"Ghost" },
    { url:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=900&q=80", tag:"Urus" },
    { url:"https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=900&q=80", tag:"M4 CSL" },
    { url:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=900&q=80", tag:"R8 V10" },
  ],
  ba: [
    { before:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=1600&q=80", after:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80", label:"Paint correction · swirl removal", car:"Porsche 911 Turbo S · Chalk" },
    { before:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&q=80", after:"https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1600&q=80", label:"Ceramic coat · 5yr", car:"Lamborghini Urus · Grigio Lynx" },
    { before:"https://images.unsplash.com/photo-1581650107963-3e8c1f48241b?w=1600&q=80", after:"https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1600&q=80", label:"Full interior + exterior", car:"Aston Martin DB11 · Magnetic Silver" },
  ],
};

// ─── REVEAL HOOK ──────────────────────────────────────────────────────
function useReveal(){
  React.useEffect(()=>{
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold:.15, rootMargin:'0px 0px -8% 0px' });
    els.forEach(el=>io.observe(el));
    return ()=>io.disconnect();
  }, []);
}

// ─── NAV ──────────────────────────────────────────────────────────────
function Nav(){
  const [scrolled, setScrolled] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const lastY = React.useRef(0);
  React.useEffect(()=>{
    const onScroll = ()=>{
      const y = window.scrollY;
      setScrolled(y > 40);
      if(y > 200 && y > lastY.current + 4) setHidden(true);
      else if(y < lastY.current - 4) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    return ()=>window.removeEventListener('scroll', onScroll);
  },[]);
  return (
    <nav className={`nav ${scrolled?'scrolled':''} ${hidden?'hidden':''}`}>
      <a href="#top" className="brand">
        <span className="mark">B<sup style={{fontSize:'7px'}}>2</sup>B</span>
        <span>Bumpers<em style={{fontStyle:'italic',opacity:.6}}>2</em>Bumpers</span>
      </a>
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="#since">Since 1998</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#testimonials">Testimony</a></li>
        <li><a href="#book">Booking</a></li>
      </ul>
      <a href="#book" className="cta">Schedule</a>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────
function Hero({ variant, heroImg, motion }){
  const bgRef = React.useRef(null);
  const heroRef = React.useRef(null);
  React.useEffect(()=>{
    const id = setTimeout(()=>bgRef.current?.classList.add('active'), 60);
    return ()=>clearTimeout(id);
  }, [variant, heroImg]);
  React.useEffect(()=>{
    if(variant !== 'parallax') return;
    const onScroll = ()=>{
      const y = window.scrollY * (motion/10) * 0.25;
      if(bgRef.current) bgRef.current.style.setProperty('--parallax', `${y}px`);
    };
    window.addEventListener('scroll', onScroll, { passive:true });
    return ()=>window.removeEventListener('scroll', onScroll);
  }, [variant, motion]);

  const headline = {
    default: ['Detailing is not', /*italic*/'a service.', 'It is attention.'],
    split:   ['Desert dust.', /*italic*/'Mirror finish.', 'We handle both.'],
    letterbox:['A detail', /*italic*/'for the one', 'car you love most.'],
    parallax:['Obsessive work.', /*italic*/'Quiet results.', 'Since 1998.'],
  }[variant] || ['Detailing is not', 'a service.', 'It is attention.'];

  return (
    <header id="top" className="hero" data-variant={variant} ref={heroRef}>
      <div className="hero-bg" ref={bgRef} style={{ backgroundImage:`url(${heroImg})` }} />
      <div className="hero-content">
        <div className="hero-meta">
          <div className="coords">
            <span>33.7456° N · 116.3744° W</span>
            <span>COACHELLA VALLEY · CA</span>
          </div>
          <div className="coords" style={{textAlign:'right'}}>
            <span>Est. MCMXCVIII</span>
            <span>CERT. PROF. DETAILER · IDA</span>
          </div>
        </div>
        <h1 className="display hero-title">
          <span className="line"><span>{headline[0]}</span></span>
          <span className="line"><span style={{fontStyle:'italic',color:'var(--accent)'}}>{headline[1]}</span></span>
          <span className="line"><span>{headline[2]}</span></span>
        </h1>
        <div className="hero-bottom">
          <p>Richie Herrera has been detailing vehicles across the Coachella Valley for over twenty-seven years — from exotics and concours entries to the family SUV. One detailer. One vehicle at a time. By appointment only.</p>
          <div className="actions">
            <a href="#book" className="btn-primary">
              <span>Book a visit</span>
              <span className="arrow">→</span>
            </a>
            <a href="#services" className="btn-ghost"><span>The work</span></a>
          </div>
        </div>
      </div>
      <div className="hero-scroll"><span>Scroll</span><span className="bar"/></div>
    </header>
  );
}

// ─── MARQUEE ──────────────────────────────────────────────────────────
function Marquee(){
  const items = ["Ferrari","Lamborghini","Rolls-Royce","Bentley","Porsche","Aston Martin","McLaren","Pagani","Bugatti","Koenigsegg","Mercedes-AMG","Lotus"];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[...items, ...items].map((m,i)=> <span key={i}>{m}</span>)}
      </div>
    </div>
  );
}

Object.assign(window, { Nav, Hero, Marquee, useReveal });
