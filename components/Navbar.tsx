"use client";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [["Services", "#services"], ["Equipment", "#equipment"], ["Earnings", "#calculator"], ["How it works", "#how-it-works"], ["Pricing", "#pricing"], ["Carrier intake", "#intake"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur">
    <div className="container-x flex h-[72px] items-center justify-between gap-4">
      <a href="#top" className="flex items-center gap-2"><Image src="/trueroute-mark.svg" alt="TrueRoute Dispatch" width={42} height={38} priority/><span className="font-[Manrope] text-base font-extrabold leading-tight text-ink">TrueRoute<span className="block text-[10px] font-bold uppercase tracking-[.19em] text-slate-500">Dispatch LLC</span></span></a>
      <nav className="hidden items-center gap-4 lg:flex">{links.map(([label, href]) => <a key={href} href={href} className="text-sm font-semibold text-slate-600 transition hover:text-brand">{label}</a>)}</nav>
      <div className="hidden items-center gap-3 sm:flex"><a href="#intake" className="btn-primary px-4 py-2.5">Get started</a></div>
      <button onClick={() => setOpen(!open)} className="grid h-10 w-10 place-items-center rounded-md bg-slate-100 text-ink lg:hidden" aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <nav className="border-t border-slate-100 bg-white px-5 py-4 lg:hidden">{links.map(([label, href]) => <a onClick={() => setOpen(false)} className="block py-3 text-sm font-bold text-ink" key={href} href={href}>{label}</a>)}</nav>}
  </header>;
}
