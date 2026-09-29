import { ArrowRight, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";

const trust = ["Independent carrier focus", "No forced dispatch", "Dedicated dispatcher", "Broker paperwork support"];
export default function Hero() {
  return <section id="top" className="relative overflow-hidden bg-ink pb-14 pt-16 text-white sm:pb-20 sm:pt-24">
    <div className="absolute inset-0 opacity-30" style={{backgroundImage:"radial-gradient(circle at 78% 32%, #3A86FF 0, transparent 23%), linear-gradient(112deg, transparent 50%, #1c2541 50.2%, transparent 50.4%)"}}/>
    <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1.15fr_.85fr]">
      <div><div className="eyebrow border-orange-400/30 bg-orange-400/10 text-orange-200"><ShieldCheck size={15}/> US Carrier Dispatch & Back-Office Support</div>
        <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.07] tracking-[-.055em] sm:text-6xl">Keep Your Wheels Moving.<br/><span className="text-brand">We Handle The Rest.</span></h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">Rate negotiation, lane planning, and back-office administration for reefer, flatbed, and dry van owner-operators. You choose the loads you accept; we support the dispatch and paperwork process.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#intake" className="btn-primary">Start dispatch service <ArrowRight size={17}/></a><a href="#calculator" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-500 px-5 py-3.5 text-sm font-bold transition hover:bg-white/10">Calculate weekly earnings <ChevronRight size={17}/></a></div>
      </div>
      <div className="rounded-2xl border border-white/15 bg-white/[.07] p-5 shadow-2xl backdrop-blur sm:p-7"><div className="border-b border-white/10 pb-4"><p className="text-xs font-bold uppercase tracking-[.15em] text-slate-400">Dedicated dispatch model</p></div><div className="py-7"><p className="text-3xl font-extrabold">Support built around your operation.</p><p className="mt-2 leading-6 text-slate-300">Your dispatcher learns your equipment, preferred lanes, home-time needs, and minimum rate per mile.</p></div><div className="grid grid-cols-2 gap-3"><div className="rounded-xl bg-white/10 p-4"><p className="text-lg font-extrabold text-brand">Paperwork support</p><p className="mt-1 text-xs leading-5 text-slate-300">We submit completed paperwork to your factoring company the same day.</p></div><div className="rounded-xl bg-white/10 p-4"><p className="text-2xl font-extrabold text-brand">0%</p><p className="mt-1 text-xs text-slate-300">Forced dispatch — every load is your choice.</p></div></div></div>
    </div>
    <div className="container-x relative mt-14"><div className="flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-6">{trust.map(x => <span key={x} className="flex items-center gap-2 text-xs font-bold tracking-wide text-slate-200"><CheckCircle2 size={16} className="text-brand"/>{x}</span>)}</div></div>
  </section>;
}
