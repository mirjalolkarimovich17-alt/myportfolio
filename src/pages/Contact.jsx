import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

function Contact() {
  return (
    <div style={{ background: '#0D0D1A', minHeight: '100vh', overflowX: 'hidden' }}>
      <GridPattern />
      <ContactHero />
      <TelegramCTA />
      <InfoCards />
      <FAQSection />
    </div>
  )
}

function GridPattern() {
  return (
    <motion.div
      className="grid-pattern"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
      }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  )
}

function ContactHero() {
  const text = '> GET IN TOUCH_'
  const [displayText, setDisplayText] = useState('')

  useState(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      style={{
        padding: '140px 40px 80px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {/* Blinking cursor */}
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '18px',
            color: '#00FF88',
            marginBottom: '16px',
          }}
        >
          █
        </motion.div>

        {/* Typewriter heading */}
        <TypewriterText text={text} />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '18px',
            color: '#888',
            marginTop: '24px',
          }}
        >
          // Ready to build something amazing?
        </motion.p>
      </div>
    </section>
  )
}

function TypewriterText({ text }) {
  const [displayedText, setDisplayedText] = useState('')

  useState(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 60)
    return () => clearInterval(interval)
  }, [text])

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 'clamp(40px, 8vw, 64px)',
        fontWeight: 700,
        color: '#00FF88',
        margin: 0,
        lineHeight: 1.2,
      }}
    >
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
      >
        _
      </motion.span>
    </motion.h1>
  )
}

function TelegramCTA() {
  return (
    <section
      style={{
        padding: '40px 40px 80px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: 'rgba(0, 255, 136, 0.05)',
          border: '1px solid #00FF88',
          borderRadius: '16px',
          padding: '48px 32px',
          textAlign: 'center',
          boxShadow: '0 0 30px rgba(0, 255, 136, 0.3)',
        }}
      >
        <h2
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '36px',
            fontWeight: 700,
            color: 'white',
            marginBottom: '16px',
          }}
        >
          Loyihangizni boshlaylik!
        </h2>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '16px',
            color: '#888',
            marginBottom: '32px',
          }}
        >
          Telegram orqali bog'laning va bepul konsultatsiya oling
        </p>
        <motion.a
          href="https://t.me/wasadmin"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-hover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-block',
            background: '#00FF88',
            color: '#0D0D1A',
            padding: '20px 48px',
            borderRadius: '4px',
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: '18px',
            textDecoration: 'none',
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)',
            transition: 'box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = '0 0 40px rgba(0, 255, 136, 0.6)'
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = '0 0 20px rgba(0, 255, 136, 0.4)'
          }}
        >
          📩 @wasadmin ga yozish
        </motion.a>
      </motion.div>
    </section>
  )
}

function InfoCards() {
  const cards = [
    {
      label: 'response_time',
      value: '→ 2-4 soat ichida',
    },
    {
      label: 'working_hours',
      value: '→ 09:00 - 23:00 (GMT+5)',
    },
    {
      label: 'languages[]',
      value: '→ ["O\'zbek", "Русский", "English"]',
    },
  ]

  return (
    <section
      style={{
        padding: '40px 40px 80px',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
        }}
      >
        {cards.map((card, index) => (
          <motion.div
            key={card.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
              background: '#0F0F1E',
              borderTop: '2px solid #00FF88',
              padding: '24px',
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <p
              style={{
                fontSize: '14px',
                color: '#00FF88',
                marginBottom: '8px',
              }}
            >
              {'> '}{card.label}
            </p>
            <p
              style={{
                fontSize: '16px',
                color: 'white',
              }}
            >
              {card.value}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function FAQSection() {
  const faqs = [
    {
      question: 'Narxlar qancha?',
      answer:
        'Websayt — $130 dan boshlanadi. Telegram bot — $100 dan. To\'liq paket uchun muloqot qiling.',
    },
    {
      question: 'Qancha vaqt kerak?',
      answer:
        'Oddiy landing page — 3-5 kun. Ko\'p sahifali sayt — 7-14 kun. Bot — 3-7 kun.',
    },
    {
      question: 'Oldindan to\'lov kerakmi?',
      answer:
        'Ha, loyiha boshlanishidan oldin 50% oldindan to\'lov talab qilinadi.',
    },
    {
      question: 'Portfolio ko\'rsata olasizmi?',
      answer:
        'Ha, Telegram orqali @wasadmin ga yozing — barcha ishlarimni ko\'rsataman.',
    },
    {
      question: 'Qo\'llab-quvvatlash xizmati bormi?',
      answer:
        'Ha, loyiha topshirilgandan keyin 1 oy bepul texnik qo\'llab-quvvatlash.',
    },
  ]

  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section
      style={{
        padding: '40px 40px 120px',
        maxWidth: '800px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: '24px',
          color: '#00FF88',
          marginBottom: '40px',
        }}
      >
        {'>'} frequently_asked_questions
      </motion.h2>

      <div>
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  )
}

function FAQItem({ question, answer, isOpen, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      style={{
        borderBottom: '1px solid rgba(0, 255, 136, 0.2)',
      }}
    >
      <motion.button
        onClick={onClick}
        whileTap={{ scale: 0.98 }}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '18px',
            color: '#00FF88',
          }}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            color: '#00FF88',
            fontSize: '20px',
          }}
        >
          ▼
        </motion.span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              overflow: 'hidden',
            }}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '16px',
                color: '#aaa',
                paddingBottom: '20px',
                lineHeight: 1.6,
              }}
            >
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Contact