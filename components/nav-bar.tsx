"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: t("nav.projects"), href: "/projects" },
    { name: "Education", href: "/education" },
    { name: t("nav.support"), href: "/resume" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-lg"
          : "bg-white/5 backdrop-blur-md border-b border-white/10"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold shadow-md">
              PK
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={scrollToTop}
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? "text-emerald-400 shadow-[0_0_10px_#34d39980] font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Right side items */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            <Link
              href="/corporate-login"
              onClick={scrollToTop}
              className="text-gray-300 hover:text-white transition-colors"
            >
              {/* Optional login text or icon can be placed here */}
            </Link>
            <Link href="/consultation" onClick={scrollToTop}>
              <Button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium shadow-lg">
                Contact Me
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-gray-300 hover:text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => {
                      setIsOpen(false)
                      scrollToTop()
                    }}
                    className={`flex items-center space-x-2 text-base font-medium transition-colors duration-300 ${
                      pathname === item.href
                        ? "text-emerald-400 shadow-[0_0_10px_#34d39980] font-semibold"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-white/20">
                  <Link
                    href="/consultation"
                    onClick={() => {
                      setIsOpen(false)
                      scrollToTop()
                    }}
                  >
                    <Button className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium shadow-md">
                      Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
