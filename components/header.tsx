import { ModeToggle } from "./mode-toggle"
import Link from "next/link"

// Updated nav items - removed Open Source, Education, and Contact
const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
]

export default function Header() {
  return (
    <header className="sticky-header bg-background/80 backdrop-blur-md shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold gradient-text">NM</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <div className="relative flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors px-3 py-2 rounded-md relative text-muted-foreground hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="js-only">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Navigation - Always visible without JS */}
        <div className="md:hidden">
          <div className="js-only flex items-center space-x-4">
            <ModeToggle />
            <button className="relative text-foreground p-2" aria-label="Toggle Menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* No-JS Mobile Navigation - Always visible without JS */}
          <div className="no-js hidden">
            <nav className="flex space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs font-medium px-2 py-1 text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Hidden by default with CSS, shown with JS */}
      <div className="md:hidden overflow-hidden h-0 js-only">
        <div className="container py-4 bg-background/95 backdrop-blur-sm">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors py-2 px-3 rounded-md text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
