import type { SVGProps } from "react"

type LogoProps = SVGProps<SVGSVGElement>

function SuapeLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 220 92" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <path d="M64 8 77 28l24-6-11 22 18 17-25 2-8 23-15-19-24 6 11-22-18-17 25-2L64 8Z" opacity="0.95" />
        <circle cx="68" cy="47" r="14" fill="#050505" opacity="0.65" />
        <text x="110" y="58" fontFamily="Arial Black, Arial, sans-serif" fontSize="34" fontWeight="900" letterSpacing="1">
          SUAPE
        </text>
      </g>
    </svg>
  )
}

function VoltLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 240 92" aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round">
        <path d="M52 16 22 48h38L35 76" />
        <path d="M18 62h58" opacity="0.78" />
      </g>
      <g fill="currentColor">
        <text x="92" y="52" fontFamily="Arial Black, Arial, sans-serif" fontSize="43" fontWeight="900" letterSpacing="1">
          volt
        </text>
        <text x="99" y="77" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="700" letterSpacing="6" opacity="0.7">
          SOLUTION
        </text>
      </g>
    </svg>
  )
}

function SupergasbrasLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 300 92" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <path d="M45 9a32 32 0 1 0 32 32h-11a21 21 0 1 1-42 0c0-9 6-17 14-20v21a7 7 0 1 0 14 0V9h-7Z" />
        <text x="95" y="57" fontFamily="Arial Black, Arial, sans-serif" fontSize="29" fontWeight="900" letterSpacing="1">
          SUPERGASBRAS
        </text>
      </g>
    </svg>
  )
}

function PandenorLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 260 92" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <path d="M49 11h42c23 0 34 12 29 31-5 20-22 31-45 31H56l7-24h18c10 0 17-4 19-12 2-7-3-11-14-11H68L49 11Z" />
        <path d="M30 51c30-24 67-35 111-33-38 6-72 19-101 39l-10-6Z" opacity="0.7" />
        <path d="M36 60c39-17 82-20 130-10-45-1-84 6-118 20l-12-10Z" opacity="0.45" />
        <text x="18" y="86" fontFamily="Arial Black, Arial, sans-serif" fontSize="25" fontWeight="900" letterSpacing="1">
          PANDENOR
        </text>
      </g>
    </svg>
  )
}

function GravatecLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 220 92" aria-hidden="true" {...props}>
      <g fill="currentColor">
        <path d="M63 19c-25 0-43 16-43 37 0 22 18 37 43 37 14 0 26-5 34-14V53H61v18h15c-4 3-8 4-13 4-12 0-21-8-21-19 0-12 9-19 22-19 8 0 14 3 20 9l14-13c-8-9-20-14-35-14Z" />
        <path d="M116 20h75v24h-24v48h-27V44h-24V20Z" />
        <circle cx="119" cy="69" r="22" />
        <text x="12" y="89" fontFamily="Arial Black, Arial, sans-serif" fontSize="22" fontWeight="900" letterSpacing="1">
          GRAVATEC
        </text>
      </g>
    </svg>
  )
}

function PRCondominiosLogo(props: LogoProps) {
  return (
    <svg viewBox="0 0 260 92" aria-hidden="true" {...props}>
      <g fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" strokeLinecap="round">
        <path d="M22 76V28L62 8l40 20v48" />
        <path d="M42 76V39l20-10 20 10v37" />
        <path d="M62 29v47" />
      </g>
      <g fill="currentColor">
        <text x="116" y="48" fontFamily="Arial Black, Arial, sans-serif" fontSize="35" fontWeight="900">
          P&amp;R
        </text>
        <text x="118" y="68" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" letterSpacing="3" opacity="0.72">
          condomínios
        </text>
        <text x="40" y="88" fontFamily="Arial Black, Arial, sans-serif" fontSize="14" fontWeight="900" letterSpacing="2" opacity="0.82">
          ADMINISTRATIVO
        </text>
      </g>
    </svg>
  )
}

const partners = [
  { name: "SUAPE", Logo: SuapeLogo },
  { name: "Volt Solution", Logo: VoltLogo },
  { name: "Supergasbras", Logo: SupergasbrasLogo },
  { name: "Pandenor", Logo: PandenorLogo },
  { name: "GRAVATEC", Logo: GravatecLogo },
  { name: "P&R Condomínios", Logo: PRCondominiosLogo },
]

const marqueePartners = [...partners, ...partners, ...partners, ...partners]

export function PartnersMarquee() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-[#0c0c0c] py-10 md:py-14">
      <div className="container mx-auto mb-8 px-4 text-center">
        <h2 className="text-[0.95rem] font-medium leading-tight text-white md:text-[1.1rem]">
          Parceiros e <span className="bg-gradient-to-r from-[#1e3a8a] to-[#0ea5e9] bg-clip-text text-transparent">Empresas</span> onde já prestamos serviços
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/85 to-transparent md:w-40" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#0c0c0c] via-[#0c0c0c]/85 to-transparent md:w-40" />

        <div
          className="animate-marquee flex w-fit items-center gap-5 pl-5 hover:[animation-play-state:paused]"
          style={{ animationDuration: "120s" }}
        >
          {marqueePartners.map(({ name, Logo }, index) => (
            <div
              key={`${name}-${index}`}
              className="group flex h-[60px] w-[170px] shrink-0 cursor-pointer items-center justify-center rounded-xl border border-white/[0.04] bg-[#121212] px-5 text-white/38 shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:border-white/10 hover:bg-[#181818] hover:text-white/62"
            >
              <Logo className="h-[36px] w-full transition-transform duration-500 group-hover:scale-[1.03]" />
              <span className="sr-only">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
