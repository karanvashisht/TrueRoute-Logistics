import Image from "next/image";

export default function Footer() {
  return <footer className="py-12" style={{ backgroundColor: "#0B132B", color: "#e2e8f0" }}>
    <div className="container-x">
      <div className="grid items-start gap-8 border-b border-white/20 pb-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3 text-white"><Image className="brightness-0 invert" src="/trueroute-mark.svg" alt="TrueRoute Dispatch" width={42} height={38}/><b className="font-[Manrope]">TrueRoute Dispatch LLC</b></div>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-200">Dedicated dispatch and back-office partnership built around the independent carrier.</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Operations</p>
          <p className="mt-3 text-sm text-slate-100">Carrier dispatch & back-office support</p>
          <p className="mt-2 max-w-[220px] text-sm leading-6 text-slate-200">30 N Gould St Ste R<br/>Sheridan, Wyoming 82801</p>
        </div>
        <div className="lg:text-right">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-300">Start moving</p>
          <a href="#intake" className="mt-3 inline-block text-sm font-bold text-orange-300 hover:text-orange-200">Submit carrier profile →</a>
        </div>
      </div>
      <div className="flex flex-col gap-4 pt-7 text-xs leading-5 text-slate-300 lg:flex-row lg:items-start lg:justify-between">
        <p>© {new Date().getFullYear()} TrueRoute Dispatch LLC. All Rights Reserved.</p>
        <p className="max-w-xl lg:text-right">TrueRoute Dispatch LLC is an independent carrier dispatch and back-office administrative service provider operating on behalf of licensed motor carriers.</p>
      </div>
    </div>
  </footer>;
}
