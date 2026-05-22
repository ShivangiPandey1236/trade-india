import { ArrowUpRight } from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Customer Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "User Guide", href: "#" },
        { label: "Return & Cancellation Policy", href: "#" },
        { label: "Shipping & Delivery Policy", href: "#" },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "About Our Company", href: "#" },
        { label: "Success Stories", href: "#" },
        { label: "TradeIndia Blog", href: "#" },
        { label: "TradeIndia in News", href: "#" },
        { label: "Jobs & Careers", href: "#", isPill: true },
        { label: "Contact Us", href: "#" },
        { label: "Partner with Us", href: "#" },
        { label: "Make a Payment", href: "#" },
        { label: "Weekly Newsletter", href: "#" },
      ],
    },
    {
      title: "Our Services",
      links: [
        { label: "Advertise with Us", href: "#" },
        { label: "Book Domains", href: "#" },
        { label: "TI Pay", href: "#" },
        { label: "Trade khata", href: "#" },
        { label: "Business Loans", href: "#" },
        { label: "Catalog Templates", href: "#" },
        { label: "Appoint Distributors", href: "#" },
      ],
    },
    {
      title: "For Sellers",
      links: [
        { label: "Display New Products", href: "#" },
        { label: "Buy Trade Leads", href: "#" },
        { label: "Subscribe Buy Trade Alerts", href: "#" },
      ],
    },
    {
      title: "For Buyers",
      links: [
        { label: "Post Your Requirement", href: "#" },
        { label: "Browse Suppliers", href: "#" },
        { label: "Subscribe sell Trade Alerts", href: "#" },
      ],
    },
    {
      title: "Directory",
      links: [
        { label: "Manufacturers", href: "#" },
        { label: "Industry Hubs", href: "#" },
        { label: "Country Suppliers", href: "#" },
        { label: "Featured Products", href: "#" },
      ],
    },
  ]

  const countries = [
    "Japan", "China", "Taiwan", "Thailand", "Malaysia", "Indonesia", "UAE", "Saudi Arabia", "USA", "Iran"
  ]

  return (
    <footer className="w-full bg-white border-t border-gray-200 mt-8 font-sans">
      <div className="w-full  px-6 py-12">
        {/* Top: 6 Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {footerSections.map((section, idx) => (
            <div key={idx} className="flex flex-col">
              <h4 className="text-sm font-extrabold text-slate-800 tracking-tight mb-4 uppercase">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    {link.isPill ? (
                      <a
                        href={link.href}
                        className="inline-flex items-center px-3 py-1 rounded-md border border-slate-300 hover:border-slate-800 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-all uppercase tracking-wider shadow-sm mt-1"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1 stroke-[2.5]" />
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-xs font-semibold text-gray-500 hover:text-primary transition-colors hover:underline underline-offset-4"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Middle: International Links Row */}
        <div className="border-t border-gray-100 py-6 mb-8">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-gray-500 font-semibold">
            {countries.map((country, idx) => (
              <span key={idx} className="flex items-center">
                <a href="#" className="hover:text-amber-600 transition-colors">{country}</a>
                <span className="mx-1.5 text-gray-300">|</span>
              </span>
            ))}
            <a href="#" className="text-amber-600 hover:text-amber-700 transition-colors font-bold underline decoration-dotted">
              Other Countries
            </a>
          </div>
        </div>

        {/* Lower Middle: Brand Partnerships & Social Connect */}
        <div className="border-t border-gray-100 pt-8 pb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand logos (fake representation of screenshot logo+partner) */}
          <div className="flex items-center space-x-6">
            <div className="flex flex-col select-none">
              <div className="flex items-baseline">
                <span className="text-2xl font-black text-primary tracking-tighter">trade</span>
                <span className="text-2xl font-black text-destructive tracking-tighter">india</span>
                <span className="text-xl font-extrabold text-primary">.com</span>
              </div>
              <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mt-[-2px]">
                Global B2B Market
              </span>
            </div>

            {/* Splitter Line */}
            <div className="h-10 w-[1px] bg-gray-200" />

            {/* Fake Google Partner logo block */}
            <div className="flex items-center border border-gray-200 rounded-lg p-2 bg-slate-50/50 shadow-sm">
              <div className="flex flex-col mr-3 leading-none text-left">
                <span className="text-[8px] text-slate-400 font-bold uppercase tracking-widest">Premier</span>
                <span className="text-xs font-extrabold text-slate-700 mt-0.5">Google Partner</span>
              </div>
              {/* Colored blocks representing google badge */}
              <div className="flex space-x-0.5 items-center">
                <div className="w-1.5 h-6 bg-blue-500 rounded-l-sm" />
                <div className="w-1.5 h-6 bg-red-500" />
                <div className="w-1.5 h-6 bg-yellow-500" />
                <div className="w-1.5 h-6 bg-green-500 rounded-r-sm" />
              </div>
            </div>
          </div>

          {/* Social connections */}
          <div className="flex items-center space-x-4">
            <span className="text-sm font-extrabold text-slate-800 tracking-tight">Connect with us</span>
            <div className="flex items-center space-x-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-destructive hover:bg-destructive/95 text-white flex items-center justify-center shadow hover:shadow-md transition-all transform hover:scale-105"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-destructive hover:bg-destructive/95 text-white flex items-center justify-center shadow hover:shadow-md transition-all transform hover:scale-105"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-destructive hover:bg-destructive/95 text-white flex items-center justify-center shadow hover:shadow-md transition-all transform hover:scale-105 font-bold italic text-sm select-none"
                aria-label="X"
              >
                𝕏
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full bg-destructive hover:bg-destructive/95 text-white flex items-center justify-center shadow hover:shadow-md transition-all transform hover:scale-105"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555A3.002 3.002 0 0 0 .503 6.163C0 8.037 0 12 0 12s0 3.963.502 5.837a3.002 3.002 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.963 24 12 24 12s0-3.963-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: Grievances & Copyright Bar */}
      <div className="bg-slate-50 border-t border-gray-100 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-semibold">
            <a href="#" className="hover:text-primary transition-colors">Grievances</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="text-slate-300">|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms & Conditions</a>
          </div>
          <p className="text-xs text-slate-400 font-medium">
            © 1999-2026 Infocom Network Private Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
