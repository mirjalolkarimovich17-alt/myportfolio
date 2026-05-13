import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const getPageTheme = () => {
    if (location.pathname === '/') return 'dark'
    if (location.pathname === '/services') return 'light'
    return 'neon'
  }

  const theme = getPageTheme()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
  ]

  const isLight = theme === 'light'

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: isScrolled
          ? isLight
            ? 'rgba(245, 240, 232, 0.9)'
            : theme === 'neon'
              ? 'rgba(13, 13, 26, 0.9)'
              : 'rgba(10, 10, 10, 0.9)'
          : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <Link
        to="/"
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '24px',
          fontWeight: 700,
          color: isLight ? '#1A1A1A' : theme === 'neon' ? '#00FF88' : 'white',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}
      >
        MA
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#00FF88',
            animation: 'blink 1s infinite',
          }}
        />
      </Link>

      <div
        style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }}
        className="hidden md:flex"
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: '14px',
              color: isLight ? '#1A1A1A' : theme === 'neon' ? '#00FF88' : 'white',
              textDecoration: 'none',
              position: 'relative',
              padding: '4px 0',
            }}
            className="cursor-hover"
          >
            {link.label}
            {location.pathname === link.path && (
              <motion.div
                layoutId="underline"
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: theme === 'neon' ? '#00FF88' : '#FFE600',
                }}
              />
            )}
          </Link>
        ))}
      </div>

      <button
        className="md:hidden cursor-hover"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '8px',
        }}
      >
        <div
          style={{
            width: 24,
            height: 2,
            background: isLight ? '#1A1A1A' : theme === 'neon' ? '#00FF88' : 'white',
            margin: '6px 0',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
          }}
        />
        <div
          style={{
            width: 24,
            height: 2,
            background: isLight ? '#1A1A1A' : theme === 'neon' ? '#00FF88' : 'white',
            margin: '6px 0',
            opacity: isMobileMenuOpen ? 0 : 1,
            transition: 'all 0.3s ease',
          }}
        />
        <div
          style={{
            width: 24,
            height: 2,
            background: isLight ? '#1A1A1A' : theme === 'neon' ? '#00FF88' : 'white',
            margin: '6px 0',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
          }}
        />
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: isLight
                ? 'rgba(245, 240, 232, 0.98)'
                : theme === 'neon'
                  ? 'rgba(13, 13, 26, 0.98)'
                  : 'rgba(10, 10, 10, 0.98)',
              backdropFilter: 'blur(20px)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: '20px 40px',
                gap: '20px',
              }}
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: '18px',
                      color: isLight ? '#1A1A1A' : theme === 'neon' ? '#00FF88' : 'white',
                      textDecoration: 'none',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        @media (min-width: 768px) {
          .hidden { display: flex !important; }
          .md\\:hidden { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden { display: none !important; }
          .md\\:flex { display: none !important; }
          .md\\:hidden { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}

export default Navbar