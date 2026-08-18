import Image from "next/image"

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Partners", href: "#brokers" },
  { label: "Work", href: "#case-study" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Logo */}
          <div className="flex items-center gap-3 group">
            <Image
              src="/images/logo.png"
              alt="Blue Shelf"
              width={36}
              height={36}
              className="w-9 h-9 transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-lg font-bold text-gray-900">Blue Shelf</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-8">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Contact info */}
          <div className="text-right text-sm text-gray-500 space-y-1">
            <a 
              href="mailto:sales@blue-shelf.com"
              className="block hover:text-gray-900 transition-colors duration-300"
            >
              sales@blue-shelf.com
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Blue Shelf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
