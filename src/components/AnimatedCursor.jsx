import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

function AnimatedCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { stiffness: 200, damping: 20 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const ringXSpring = useSpring(cursorX, { stiffness: 100, damping: 15 })
  const ringYSpring = useSpring(cursorY, { stiffness: 100, damping: 15 })

  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches
    if (isTouchDevice) return

    setIsVisible(true)

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX - 4)
      cursorY.set(e.clientY - 4)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-hover')
      ) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (!isVisible) return null

  return (
    <>
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
          pointerEvents: 'none',
        }}
        animate={{
          scale: isHovering ? 0 : 1,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#FFE600',
          }}
        />
      </motion.div>

      <motion.div
        style={{
          translateX: ringXSpring,
          translateY: ringYSpring,
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9998,
          pointerEvents: 'none',
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          backgroundColor: isHovering ? 'rgba(255, 230, 0, 0.3)' : 'transparent',
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            border: '1px solid rgba(255, 230, 0, 0.5)',
            background: isHovering ? 'rgba(255, 230, 0, 0.3)' : 'transparent',
            transition: 'background 0.2s ease',
          }}
        />
      </motion.div>
    </>
  )
}

export default AnimatedCursor