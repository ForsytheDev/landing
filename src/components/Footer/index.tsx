import React from 'react'
import Link from 'next/link'

import { FaVk } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'
import { FaLightbulb, FaPhoneSquareAlt, FaWhatsappSquare } from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

import styles from './Footer.module.scss'

gsap.registerPlugin(ScrollToPlugin)

export const Footer: React.FC = () => {
  const onScroll = (element: string) => {
    gsap.to(window, {
      duration: 0.55,
      scrollTo: { y: `#${element}`, offsetY: -10 },
      ease: 'power2',
    })
  }

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="inner">
          <div className="synopsis">
            <h5 className="logotype">Logo</h5>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati asperiores
              aspernatur pariatur consequatur placeat. Exercitationem a necessitatibus placeat quos.
              Placeat ea dignissimos ad nobis excepturi recusandae repudiandae quasi.
            </p>
          </div>
          <div className="categories">
            <div className="section">
              <h5 className="head">Ссылки</h5>
              <ul className="list">
                <li>
                  <Link className="item" href="#">
                    <FaVk className="w-auto h-6" />
                    VK
                  </Link>
                </li>
                <li>
                  <Link className="item" href="#">
                    <FaWhatsappSquare className="w-auto h-6" />
                    WhatsApp
                  </Link>
                </li>
                <li>
                  <Link className="item" href="#">
                    <RiInstagramFill className="w-auto h-6" />
                    Instagram
                  </Link>
                </li>
              </ul>
            </div>
            <div className="section">
              <h5 className="head">Сервисы</h5>
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
                  <button className="item" onClick={() => onScroll('faq')}>
                    Вопросы
                  </button>
                </li>
              </ul>
            </div>
            <div className="section min-w-60">
              <h5 className="head">Контактные данные</h5>
              <ul className="list">
                <li>
                  <FaPhoneSquareAlt className="w-auto h-6 mr-2" />
                  <div className="flex flex-col">
                    <Link className="item" href="tel:+79272681049">
                      +7 (927) 268 10-49
                    </Link>
                    <Link className="item" href="tel:+79608479007">
                      +7 (960) 847 90-07
                    </Link>
                  </div>
                </li>
                <li>
                  <IoMailSharp className="w-auto h-6 mr-2.5" />
                  <div className="flex flex-col">
                    <Link className="item" href="mailto:lezote@bk.ru">
                      lezote@bk.ru
                    </Link>
                  </div>
                </li>
                <li>
                  <FaLightbulb className="w-auto h-6 mr-2.5" />
                  <div className="flex flex-col">
                    <Link
                      className="item"
                      href="https://yandex.ru/maps/-/CDBEaVm~"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ул. Маршала Жукова, 1Б
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
