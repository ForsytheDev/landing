import React from 'react'
import Link from 'next/link'

import cn from 'classnames'
import { IoIosArrowUp } from 'react-icons/io'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

export const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  const onScroll = (element: string) => {
    gsap.to(window, {
      duration: 0.55,
      scrollTo: { y: `#${element}`, offsetY: -10 },
      ease: 'power2',
    })
    onClose()
  }

  return (
    <div className={cn('menu', { ['opened']: isOpen })}>
      <nav>
        <ul className="list">
          <li>
            <button className="item" onClick={() => onScroll('about')}>
              О нас
            </button>
          </li>
          <li>
            <button className="item" onClick={() => onScroll('services')}>
              Услуги
            </button>
          </li>
          <li>
            <button className="item" onClick={() => onScroll('portfolio')}>
              Портфолио
            </button>
          </li>
          <li>
            <button className="item" onClick={() => onScroll('footer')}>
              Контакты
            </button>
          </li>
        </ul>
        <button className="closer" onClick={onClose}>
          <IoIosArrowUp />
        </button>
      </nav>
      <div className="overlay" onClick={onClose} />
    </div>
  )
}
