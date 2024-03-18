import React from 'react'

import { IoIosArrowUp } from 'react-icons/io'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export const Anchor: React.FC = () => {
  React.useEffect(() => {
    gsap.fromTo(
      '.anchor',
      { opacity: 0 },
      {
        opacity: 1,
        scrollTrigger: {
          trigger: '.hero',
          start: 'center',
          end: 'bottom',
          scrub: true,
        },
      }
    )
  }, [])

  const onScroll = () => {
    gsap.to(window, {
      duration: 0.35,
      scrollTo: { y: 0 },
      ease: 'power2',
    })
  }

  return (
    <button className="anchor" onClick={onScroll}>
      <IoIosArrowUp className="text-3xl" />
    </button>
  )
}
