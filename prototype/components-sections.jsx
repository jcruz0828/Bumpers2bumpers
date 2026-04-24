/* global React */

// ─── SECTION HEADER ──────────────────────────────────────────────────
function SectionHd({ num, eyebrow, title, id }){
  return (
    <div className="section-hd" id={id}>
      <div className="num reveal"><span className="label">§ {num}</span> {eyebrow}</div>
      <h2 className="h2 reveal d1">{title}</h2>
    </div>
  );
}

// ─── SERVICES ─────────────────────────────────────────────────────────
function Services(){
  const data = window.B2B_DATA.services;
  return (
    <section className="wrap" id="services">
      <SectionHd num="01" eyebrow="The Work" title={<>A catalogue of <em style={{fontStyle:'italic',color:'var(--accent)'}}>obsessions.</em></>} />
      <div className="services">
        {data.map((s,i)=> (
          <div className="service-row reveal" key={s.num} style={{transitionDelay:`${i*60}ms`}}>
            <div className="service-num">{s.num} / 07</div>
            <div className="service-name">{s.name} <em>{s.it}</em></div>
            <div className="service-desc">{s.desc}</div>
            <div className="service-arrow">↗</div>
            <div className="dossier" style={{backgroundImage:`url(${s.img})`}} />
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── BEFORE / AFTER ───────────────────────────────────────────────────
function BeforeAfter({ item, idx }){
  const [x, setX] = React.useState(50);
  const ref = React.useRef(null);
  const drag = React.useRef(false);
  const onMove = React.useCallback((clientX)=>{
    if(!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100));
    setX(pct);
  },[]);
  React.useEffect(()=>{
    const mm = (e)=>{ if(drag.current) onMove(e.clientX || (e.touches && e.touches[0].clientX)); };
    const mu = ()=>{ drag.current = false; };
    window.addEventListener('mousemove', mm);
    window.addEventListener('touchmove', mm, { passive:true });
    window.addEventListener('mouseup', mu);
    window.addEventListener('touchend', mu);
    return ()=>{
      window.removeEventListener('mousemove', mm);
      window.removeEventListener('touchmove', mm);
      window.removeEventListener('mouseup', mu);
      window.removeEventListener('touchend', mu);
    };
  }, [onMove]);

  return (
    <div className="reveal">
      <div className="ba" ref={ref} style={{ '--x': `${x}%` }}
        onMouseDown={(e)=>{ drag.current=true; onMove(e.clientX); }}
        onTouchStart={(e)=>{ drag.current=true; onMove(e.touches[0].clientX); }}>
        <div className="img before" style={{backgroundImage:`url(${item.before})`, filter:'grayscale(.25) brightness(.75)'}} />
        <div className="img after" style={{backgroundImage:`url(${item.after})`}} />
        <span className="tag before">Before</span>
        <span className="tag after">After</span>
        <div className="divider" />
        <div className="handle">↔</div>
      </div>
      <div className="ba-caption">
        <span>{item.label}</span>
        <span className="meta">{`Case ${String(idx+1).padStart(3,'0')} · ${item.car}`}</span>
      </div>
    </div>
  );
}

function BeforeAfterSection(){
  return (
    <section className="wrap" id="ba" style={{borderTop:'1px solid var(--line)'}}>
      <SectionHd num="02" eyebrow="Dossier" title={<>Same car. <em style={{fontStyle:'italic',color:'var(--accent)'}}>Eight hours apart.</em></>} />
      <div className="ba-wrap">
        {window.B2B_DATA.ba.map((b,i)=><BeforeAfter item={b} idx={i} key={i} />)}
      </div>
    </section>
  );
}

// ─── SINCE 1998 ───────────────────────────────────────────────────────
function Since(){
  return (
    <section className="wrap" id="since" style={{borderTop:'1px solid var(--line)'}}>
      <SectionHd num="03" eyebrow="Heritage" title={<>Twenty-seven years. <em style={{fontStyle:'italic',color:'var(--accent)'}}>One detailer.</em></>} />
      <div className="since">
        <div className="since-num reveal">
          <span className="small">Practicing since</span>
          1998<sup>'</sup>
        </div>
        <div className="since-body reveal d1">
          <p>Richie Herrera started detailing before ceramic coatings had a name. Before paint-depth gauges were common. Before YouTube. He learned by watching masters, by ruining his own cars, by spending weekends on a single fender until it disappeared into the next panel.</p>
          <p>Today he runs a one-man mobile operation across the Coachella Valley. Exotics, daily drivers, classics, SUVs, trucks, boats, RVs — every vehicle that pulls into a driveway gets the same obsessive treatment. No franchise. No staff. No shortcuts.</p>
          <p>Every car gets a file. Every file gets photographs. Every coating is registered with the manufacturer in the owner's name.</p>
          <div className="signature">
            <div className="sig">Richie Herrera</div>
            <div className="who"><b>Richie Herrera</b>Owner · Certified Prof. Detailer · IDA Cert #4482</div>
          </div>
        </div>
      </div>
      <div className="timeline">
        <div className="tl-item reveal"><div className="y">1998</div><div className="t">Begins</div><div className="d">First paying clients in Indio. A rag, a bucket, and too much patience.</div></div>
        <div className="tl-item reveal d1"><div className="y">2007</div><div className="t">Certified</div><div className="d">International Detailing Association professional certification.</div></div>
        <div className="tl-item reveal d2"><div className="y">2014</div><div className="t">Ceramic Era</div><div className="d">Authorized installer for professional-grade ceramic coating systems.</div></div>
        <div className="tl-item reveal d3"><div className="y">2026</div><div className="t">Today</div><div className="d">By appointment only. Concours entries, private collections, daily indulgences.</div></div>
      </div>
    </section>
  );
}

// ─── USP MAP ──────────────────────────────────────────────────────────
function USP(){
  const cities = window.B2B_DATA.cities;
  // scattered dot positions (percent)
  const pins = [
    { t:12, l:22, name:"Desert Hot Springs", hl:false },
    { t:22, l:32, name:"Palm Springs",       hl:true  },
    { t:30, l:42, name:"Cathedral City",     hl:false },
    { t:36, l:52, name:"Rancho Mirage",      hl:false },
    { t:44, l:58, name:"Palm Desert",        hl:true  },
    { t:52, l:65, name:"Indian Wells",       hl:false },
    { t:58, l:70, name:"La Quinta",          hl:false },
    { t:48, l:78, name:"Indio",              hl:true  },
    { t:66, l:78, name:"Coachella",          hl:false },
    { t:78, l:72, name:"Thermal",            hl:false },
    { t:86, l:64, name:"Mecca",              hl:false },
    { t:90, l:40, name:"Salton City",        hl:false },
    { t:78, l:30, name:"North Shore",        hl:false },
    { t:42, l:72, name:"Bermuda Dunes",      hl:false },
    { t:26, l:48, name:"Thousand Palms",     hl:false },
  ];
  return (
    <section className="wrap" id="usp" style={{borderTop:'1px solid var(--line)'}}>
      <SectionHd num="04" eyebrow="We Come To You" title={<>The vehicle <em style={{fontStyle:'italic',color:'var(--accent)'}}>doesn't move.</em> Richie does.</>} />
      <div className="usp">
        <div className="usp-map reveal">
          <svg viewBox="0 0 400 500" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(214,211,204,.04)" strokeWidth=".5"/>
              </pattern>
              <filter id="glow"><feGaussianBlur stdDeviation="1.5"/></filter>
            </defs>
            <rect width="400" height="500" fill="url(#grid)"/>
            {/* stylized valley outline */}
            <path d="M60,90 Q150,60 240,100 T380,180 Q360,280 300,360 T180,460 Q100,440 70,380 T60,90 Z"
              fill="none" stroke="var(--accent)" strokeOpacity=".25" strokeWidth="1" strokeDasharray="2 4"/>
            {/* connection lines */}
            {pins.slice(0,10).map((p,i)=>{
              const q = pins[(i+3)%pins.length];
              return <line key={i} x1={`${p.l}%`} y1={`${p.t}%`} x2={`${q.l}%`} y2={`${q.t}%`}
                stroke="var(--accent)" strokeOpacity=".08" strokeWidth=".5"/>;
            })}
          </svg>
          {pins.map((p,i)=>(
            <div key={i} className={`city ${p.hl?'highlight':''}`} style={{top:`${p.t}%`, left:`${p.l}%`}}>
              <span>{p.name}</span>
            </div>
          ))}
        </div>
        <div className="usp-body reveal d1">
          <p className="lead" style={{fontSize:'19px',color:'var(--fg)',lineHeight:1.55}}>
            A mobile unit carries its own filtered water, pure-sine inverter power, climate-controlled chemicals, and a full set of Rupes polishers. Your driveway becomes the workshop. Your Saturday stays yours.
          </p>
          <div className="cities">
            {cities.map(c=> <span key={c}>{c}</span>)}
          </div>
          <div style={{marginTop:40,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:30,paddingTop:30,borderTop:'1px solid var(--line)'}}>
            <div><div className="h3" style={{color:'var(--accent)',fontSize:32}}>15</div><div className="micro" style={{marginTop:6}}>Cities served</div></div>
            <div><div className="h3" style={{color:'var(--accent)',fontSize:32}}>1</div><div className="micro" style={{marginTop:6}}>Car at a time</div></div>
            <div><div className="h3" style={{color:'var(--accent)',fontSize:32}}>0</div><div className="micro" style={{marginTop:6}}>Hidden fees</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── GALLERY ──────────────────────────────────────────────────────────
function Gallery(){
  const g = window.B2B_DATA.gallery;
  return (
    <section className="wrap" id="gallery" style={{borderTop:'1px solid var(--line)',overflow:'hidden'}}>
      <SectionHd num="05" eyebrow="Recent Visits" title={<>A quiet <em style={{fontStyle:'italic',color:'var(--accent)'}}>ledger</em> of work.</>} />
      <div className="gallery">
        <div className="gallery-strip">
          {[...g,...g].map((it,i)=>(
            <div key={i} className="g-item" style={{backgroundImage:`url(${it.url})`}}>
              <span className="tag">{it.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TESTIMONIALS ─────────────────────────────────────────────────────
function Testimonials(){
  return (
    <section className="wrap" id="testimonials" style={{borderTop:'1px solid var(--line)'}}>
      <SectionHd num="06" eyebrow="Testimony" title={<>Quiet endorsements <em style={{fontStyle:'italic',color:'var(--accent)'}}>from loud garages.</em></>} />
      <div className="testimonials">
        <div className="t-grid">
          {window.B2B_DATA.testimonials.map((t,i)=>(
            <div className="t-card reveal" key={i} style={{transitionDelay:`${i*100}ms`}}>
              <div className="quote-mark">"</div>
              <div className="stars">{t.stars}</div>
              <blockquote>{t.quote}</blockquote>
              <div className="attr">
                <div className="who"><b>{t.name}</b><span>{t.title}</span></div>
                <div className="car">{t.car}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── BOOKING ──────────────────────────────────────────────────────────
function Book(){
  const [submitted, setSubmitted] = React.useState(false);
  const [form, setForm] = React.useState({ name:'', phone:'', email:'', vehicle:'', service:'Showroom Package', city:'Palm Desert', notes:'' });
  const upd = (k)=>(e)=> setForm(f=>({...f,[k]:e.target.value}));
  return (
    <section className="wrap" id="book" style={{borderTop:'1px solid var(--line)'}}>
      <SectionHd num="07" eyebrow="Schedule" title={<>Introductions are <em style={{fontStyle:'italic',color:'var(--accent)'}}>by appointment.</em></>} />
      <div className="book-grid">
        {!submitted ? (
          <form className="book-form reveal" onSubmit={(e)=>{e.preventDefault();setSubmitted(true);}}>
            <div className="book-field"><label>Your name</label>
              <input required value={form.name} onChange={upd('name')} placeholder="First and last" /></div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
              <div className="book-field"><label>Phone</label>
                <input required value={form.phone} onChange={upd('phone')} placeholder="(xxx) xxx-xxxx" /></div>
              <div className="book-field"><label>Email</label>
                <input required type="email" value={form.email} onChange={upd('email')} placeholder="you@domain.com" /></div>
            </div>
            <div className="book-field"><label>Vehicle</label>
              <input required value={form.vehicle} onChange={upd('vehicle')} placeholder="Year · Make · Model" /></div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24}}>
              <div className="book-field"><label>Service</label>
                <select value={form.service} onChange={upd('service')}>
                  {window.B2B_DATA.services.map(s=> <option key={s.num}>{s.name}</option>)}
                </select></div>
              <div className="book-field"><label>City</label>
                <select value={form.city} onChange={upd('city')}>
                  {window.B2B_DATA.cities.map(c=> <option key={c}>{c}</option>)}
                </select></div>
            </div>
            <div className="book-field"><label>Notes · concerns · preferred date</label>
              <textarea value={form.notes} onChange={upd('notes')} placeholder="Anything Richie should know before arriving." /></div>
            <button type="submit" className="btn-primary" style={{alignSelf:'flex-start',marginTop:10}}>
              <span>Request appointment</span><span className="arrow">→</span>
            </button>
          </form>
        ) : (
          <div className="reveal in" style={{padding:'40px 0'}}>
            <div className="eyebrow" style={{marginBottom:20}}><span className="dot"/>Request received</div>
            <h3 className="h2" style={{fontSize:56}}>Thank you, {form.name.split(' ')[0] || 'friend'}.</h3>
            <p className="lead" style={{marginTop:20}}>Richie personally reviews every inquiry. You'll hear back within 24 hours with a quote and available windows for your {form.vehicle || 'vehicle'}.</p>
            <button className="btn-ghost" style={{marginTop:30}} onClick={()=>setSubmitted(false)}><span>Submit another</span></button>
          </div>
        )}
        <aside className="book-side reveal d1">
          <div>
            <div className="eyebrow"><span className="dot"/>What to expect</div>
            <h3 style={{marginTop:16}}>Structured. Unhurried.</h3>
          </div>
          <div>
            <div className="line-item"><span>Response</span><span>&lt; 24 hrs</span></div>
            <div className="line-item"><span>Consultation</span><span>Complimentary</span></div>
            <div className="line-item"><span>Minimum engagement</span><span>4 hrs</span></div>
            <div className="line-item"><span>Deposit</span><span>25%</span></div>
            <div className="line-item"><span>Cancellation</span><span>48 hrs</span></div>
            <div className="line-item"><span>Weather contingency</span><span>Rescheduled</span></div>
          </div>
          <div style={{paddingTop:20,borderTop:'1px solid var(--line)'}}>
            <div className="eyebrow" style={{marginBottom:16}}><span className="dot"/>Direct line</div>
            <div className="h3" style={{fontSize:26}}>(760) 555·0198</div>
            <div className="micro" style={{marginTop:8}}>richie@bumpers2bumpers.detail</div>
          </div>
        </aside>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────
function Foot(){
  return (
    <footer className="foot">
      <div className="foot-brand">
        <div className="mark">Bumpers<em>2</em>Bumpers<sup style={{fontSize:'.18em',color:'var(--fg-mute)',marginLeft:8,fontStyle:'normal'}}>LLC</sup></div>
        <p>Mobile detailing for every vehicle in the Coachella Valley — from daily drivers to concours entries. One vehicle at a time, since 1998.</p>
      </div>
      <div className="foot-col">
        <h4>Services</h4>
        <ul>{window.B2B_DATA.services.slice(0,5).map(s=><li key={s.num}><a href="#services">{s.name}</a></li>)}</ul>
      </div>
      <div className="foot-col">
        <h4>Service Area</h4>
        <ul>{window.B2B_DATA.cities.slice(0,6).map(c=><li key={c}><a href="#usp">{c}</a></li>)}</ul>
      </div>
      <div className="foot-col">
        <h4>Contact</h4>
        <ul>
          <li><a href="#book">(760) 555·0198</a></li>
          <li><a href="#book">richie@bumpers2bumpers.detail</a></li>
          <li><a href="#book">@bumpers2bumpers</a></li>
          <li><a href="#book">By appointment only</a></li>
        </ul>
      </div>
      <div className="foot-bottom">
        <span>© 2026 Bumpers2Bumpers Mobile Car Detail Service LLC</span>
        <span>Made in the desert · 33.7° N</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Services, BeforeAfterSection, Since, USP, Gallery, Testimonials, Book, Foot });
