import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import cn from 'classnames'
import { IoMenu } from 'react-icons/io5'

import { Menu } from '@/components/Menu'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

export const Header: React.FC = () => {
  const router = useRouter()
  const [isMenu, setIsMenu] = React.useState(false)
  const [isSticky, setIsSticky] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 650) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const goBack = (event: React.MouseEvent) => {
    if (router.pathname === '/') {
      event.preventDefault()
      gsap.to(window, {
        duration: 0.35,
        scrollTo: { y: 0 },
        ease: 'power2',
      })
    }
  }

  const onScroll = (element: string) => {
    gsap.to(window, {
      duration: 0.35,
      scrollTo: { y: `#${element}`, offsetY: -10 },
      ease: 'power2',
    })
  }

  return (
    <>
      <header className={cn('header', { ['sticky']: isSticky || isMenu })}>
        <div className="container">
          <div className="inner">
            <Link className="logotype" href="/" onClick={(event) => goBack(event)}>
              LOGO
            </Link>
            <nav className="gap-24 flex">
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
            </nav>
            <button className="more" onClick={() => setIsMenu(!isMenu)}>
              <IoMenu />
            </button>
          </div>
        </div>
      </header>
      <Menu isOpen={isMenu} onClose={() => setIsMenu(false)} />
    </>
  )
}
