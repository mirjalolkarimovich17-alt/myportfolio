import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedCursor from './components/AnimatedCursor'

const Home = lazy(() => import('./pages/Home'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedCursor />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            } />
            <Route path="/services" element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            } />
            <Route path="/contact" element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App