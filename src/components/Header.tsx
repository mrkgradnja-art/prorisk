import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
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

  const navItems = [
    { path: '/', label: 'Početna' },
    { path: '/ponuda', label: 'Ponuda' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-3 group"
          >
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                isScrolled
                  ? 'bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg'
                  : 'bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20'
              }`}
            >
              <span className={`font-black text-xl transition-colors duration-300 ${
                isScrolled ? 'text-white' : 'text-white'
              }`}>
                P
              </span>
            </motion.div>
            <motion.span 
              className={`text-2xl font-black transition-colors duration-300 ${
                isScrolled ? 'text-primary-500' : 'text-white drop-shadow-lg'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Prorisk
            </motion.span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    location.pathname === item.path
                      ? isScrolled
                        ? 'text-accent-500'
                        : 'text-white'
                      : isScrolled
                        ? 'text-primary-500 hover:text-accent-500'
                        : 'text-white/90 hover:text-white'
                  }`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="activeTab"
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full ${
                        isScrolled ? 'bg-accent-500' : 'bg-white'
                      }`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`absolute inset-0 rounded-lg transition-all duration-300 ${
                    isScrolled 
                      ? 'bg-primary-50 group-hover:bg-primary-100' 
                      : 'bg-white/10 group-hover:bg-white/20'
                  } opacity-0 group-hover:opacity-100`} />
                </motion.span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? 'text-primary-500 hover:bg-primary-50'
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className={`md:hidden overflow-hidden mb-4 rounded-xl ${
                isScrolled
                  ? 'bg-white/95 backdrop-blur-xl border border-gray-100'
                  : 'bg-white/10 backdrop-blur-xl border border-white/20'
              }`}
            >
              <div className="px-4 py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        location.pathname === item.path
                          ? isScrolled
                            ? 'text-accent-500 bg-accent-50'
                            : 'text-white bg-white/20'
                          : isScrolled
                            ? 'text-primary-500 hover:bg-primary-50'
                            : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header

