import { motion } from 'framer-motion'
import { useState } from 'react'

function Services() {
  return (
    <div style={{ background: '#F5F0E8', minHeight: '100vh' }}>
      <ServicesHeader />
      <ServiceCards />
      <ProcessTimeline />
      <TestimonialSection />
    </div>
  )
}

function ServicesHeader() {
  return (
    <section
      style={{
        padding: '140px 40px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2px 1fr',
          gap: '40px',
          alignItems: 'center',
        }}
      >
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(48px, 6vw, 72px)',
              fontStyle: 'italic',
              color: '#1A1A1A',
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            Nima taklif qilaman
          </h1>
        </motion.div>

        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          style={{
            height: '100px',
            background: '#1A1A1A',
            transformOrigin: 'top',
          }}
        />

        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '16px',
              color: '#666',
              lineHeight: 1.6,
            }}
          >
            Sizning biznesingiz uchun mo'ljallangan premium raqamli xizmatlar. Har bir loyiha
            diqqat bilan ishlab chiqiladi va o'z vaqtida topshiriladi.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCards() {
  const services = [
    {
      title: 'Вебсайт / Website',
      price: 'dan $130',
      priceColor: '#FFE600',
      bg: '#1A1A1A',
      textColor: 'white',
      features: [
        'Landing page',
        'Multi-page site',
        'Admin panel',
        'SEO optimization',
        'Mobile responsive',
      ],
      icon: 'globe',
    },
    {
      title: 'Telegram Bot',
      price: 'dan $100',
      priceColor: 'white',
      bg: '#2B5CE6',
      textColor: 'white',
      features: [
        'Custom commands',
        'Payment integration',
        'Database',
        'Admin panel bot',
        'Auto-reply',
      ],
      icon: 'telegram',
    },
    {
      title: "To'liq Paket",
      price: 'Muloqot qiling',
      priceColor: '#1A1A1A',
      bg: '#FFE600',
      textColor: '#1A1A1A',
      features: [
        'Website + Bot + Support',
        'Priority delivery',
        'Unlimited revisions',
        'Ongoing maintenance',
      ],
      icon: 'star',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.85, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePosition({ x, y })
  }

  return (
    <section
      style={{
        padding: '80px 40px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            variants={cardVariants}
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            whileHover={{
              rotateX: mousePosition.y * -8,
              rotateY: mousePosition.x * 8,
            }}
            style={{
              background: service.bg,
              color: service.textColor,
              padding: '40px 32px',
              borderRadius: '16px',
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            <div style={{ marginBottom: '24px' }}>
              {service.icon === 'globe' && (
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              )}
              {service.icon === 'telegram' && (
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.696.065-1.225-.46-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.751-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
              )}
              {service.icon === 'star' && (
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              )}
            </div>

            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '32px',
                fontWeight: 600,
                marginBottom: '16px',
              }}
            >
              {service.title}
            </h3>

            <span
              style={{
                display: 'inline-block',
                padding: '8px 16px',
                borderRadius: '20px',
                background:
                  service.bg === '#FFE600' ? '#1A1A1A' : service.priceColor,
                color: service.bg === '#FFE600' ? '#FFE600' : service.bg,
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                marginBottom: '24px',
              }}
            >
              {service.price}
            </span>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {service.features.map((feature) => (
                <li
                  key={feature}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '14px',
                    color: service.bg === '#FFE600' ? '#1A1A1A' : '#ccc',
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {service.bg === '#FFE600' && '• '}
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://t.me/wasadmin"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-hover"
              style={{
                display: 'block',
                textAlign: 'center',
                padding: '16px',
                marginTop: '24px',
                background: service.bg === '#FFE600' ? '#1A1A1A' : 'white',
                color: service.bg === '#FFE600' ? '#FFE600' : '#1A1A1A',
                borderRadius: '8px',
                textDecoration: 'none',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: '14px',
              }}
            >
              Buyurtma berish
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

function ProcessTimeline() {
  const steps = [
    { title: 'Murojaat', desc: 'Siz bilan bog\'lanish' },
    { title: 'Muhokama', desc: 'Loyiha haqida gaplashish' },
    { title: 'Ishlab chiqish', desc: 'Kod yozish va test' },
    { title: 'Topshirish', desc: 'Tayyor mahsulot' },
  ]

  return (
    <section
      style={{
        padding: '80px 40px',
        maxWidth: '1000px',
        margin: '0 auto',
        textAlign: 'center',
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '48px',
          color: '#1A1A1A',
          marginBottom: '60px',
        }}
      >
        How It Works
      </motion.h2>

      <div
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        {/* Animated Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          style={{
            position: 'absolute',
            top: '20px',
            left: '10%',
            right: '10%',
            height: '2px',
            background: '#1A1A1A',
            transformOrigin: 'left',
          }}
        />

        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              flex: 1,
              position: 'relative',
              zIndex: 1,
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#1A1A1A',
                color: '#FFE600',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '16px',
                marginBottom: '16px',
              }}
            >
              {index + 1}
            </div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: '20px',
                color: '#1A1A1A',
                marginBottom: '8px',
              }}
            >
              {step.title}
            </h3>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: '#666',
              }}
            >
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function TestimonialSection() {
  const testimonials = [
    {
      quote: 'Juda tez va sifatli ish bajarildi. Tavsiya qilaman!',
      author: 'Jasur T.',
      rating: 5,
    },
    {
      quote: "Telegram botim zo'r ishlayapti, rahmat!",
      author: 'Dilnoza M.',
      rating: 5,
    },
    {
      quote: 'Professional yondashuv, natija ajoyib!',
      author: 'Bobur K.',
      rating: 5,
    },
  ]

  return (
    <section
      style={{
        padding: '80px 40px 120px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
        }}
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            style={{
              backdropFilter: 'blur(12px)',
              background: 'rgba(255, 255, 255, 0.6)',
              border: '1px solid rgba(255, 255, 255, 0.8)',
              borderRadius: '16px',
              padding: '32px',
            }}
          >
            <div style={{ marginBottom: '16px' }}>
              {'⭐'.repeat(testimonial.rating)}
            </div>
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: 'italic',
                fontSize: '18px',
                color: '#1A1A1A',
                marginBottom: '16px',
                lineHeight: 1.5,
              }}
            >
              "{testimonial.quote}"
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '14px',
                color: '#666',
              }}
            >
              — {testimonial.author}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Services