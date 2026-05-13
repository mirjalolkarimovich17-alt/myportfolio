import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

function Home() {
  return (
    <div style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      {/* Noise Overlay */}
      <NoiseOverlay />

      {/* Hero Section */}
      <HeroSection />

      {/* About Strip - Marquee */}
      <MarqueeSection />

      {/* Skills Grid */}
      <SkillsSection />
    </div>
  )
}

function NoiseOverlay() {
  return (
    <motion.div
      className="noise-overlay"
      animate={{
        x: [0, 50, 0],
        y: [0, 30, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  )
}

function HeroSection() {
  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '120px 40px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Main Heading */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(60px, 12vw, 160px)',
            fontWeight: 900,
            color: 'white',
            lineHeight: 0.9,
            margin: 0,
            letterSpacing: '-2px',
          }}
        >
          MIRJALOL
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(60px, 12vw, 160px)',
            fontWeight: 900,
            color: 'transparent',
            WebkitTextStroke: '2px #FFE600',
            lineHeight: 0.9,
            margin: 0,
            letterSpacing: '-2px',
          }}
        >
          ABDULLAYEV
        </motion.h1>
      </div>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        style={{ marginTop: '24px' }}
      >
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: '16px',
            color: '#888',
          }}
        >
          Web Developer · Telegram Bot Creator
        </p>
      </motion.div>

      {/* Animated Underline */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '200px' }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: '4px',
          background: '#FFE600',
          marginTop: '16px',
        }}
      />

      {/* Stats - Bottom Right */}
      <div
        style={{
          position: 'absolute',
          bottom: '80px',
          right: '40px',
          display: 'flex',
          gap: '40px',
        }}
      >
        {[
          { number: '50+', label: 'Projects' },
          { number: '3+', label: 'Years' },
          { number: '100%', label: 'Dedication' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
            style={{ textAlign: 'right' }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '48px',
                fontWeight: 800,
                color: '#FFE600',
                margin: 0,
                lineHeight: 1,
              }}
            >
              {stat.number}
            </p>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: '14px',
                color: 'white',
                margin: 0,
              }}
            >
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#FFE600"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  )
}

function MarqueeSection() {
  const text = 'WEB SITES · TELEGRAM BOTS · FAST DELIVERY · CLEAN CODE · MODERN UI · '
  const repeatedText = text.repeat(4)

  return (
    <section
      style={{
        background: '#FFE600',
        padding: '20px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          whiteSpace: 'nowrap',
          display: 'flex',
        }}
      >
        <span
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '28px',
            fontWeight: 800,
            color: '#0A0A0A',
            paddingRight: '50%',
          }}
        >
          {repeatedText}
        </span>
      </motion.div>
    </section>
  )
}

function SkillsSection() {
  const skills = [
    'Next.js',
    'React',
    'Node.js',
    'Telegram Bot API',
    'MongoDB',
    'Tailwind CSS',
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <section
      style={{
        padding: '120px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(48px, 8vw, 80px)',
          fontWeight: 800,
          color: 'white',
          marginBottom: '60px',
        }}
      >
        WHAT I BUILD
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            whileHover={{
              y: -8,
              borderColor: '#FFE600',
              borderWidth: '1px',
            }}
            style={{
              background: '#111',
              borderLeft: '1px solid #FFE600',
              padding: '24px',
              transition: 'border 0.3s ease',
              cursor: 'pointer',
            }}
          >
            <p
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '24px',
                fontWeight: 600,
                color: 'white',
                margin: 0,
              }}
            >
              {skill}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Home