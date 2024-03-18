import React from 'react'

import gsap from 'gsap'
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin'

gsap.registerPlugin(ScrollToPlugin)

export const About: React.FC = () => {
  const onScroll = () => {
    gsap.to(window, { duration: 0.75, scrollTo: { y: '#masters', offsetY: -10 }, ease: 'power1' })
  }

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="inner">
          <div className="item">
            <div className="thumb">
              <img className="image" src="reference-1.jpg" alt="Наш салон" />
              <div className="mark">
                <h5 className="address">г. Тольятти, ул. Жукова — 1Б</h5>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <span className="subtitle">О Нас</span>
              <h1 className="title">Lorem ipsum dolor sit amet consectetur.</h1>
              <p className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fuga debitis earum
                necessitatibus quam natus aut. Magni esse quas vero, fuga minus rerum, officia
                voluptatum beatae id itaque libero labore ipsum necessitatibus aut. Quasi similique
                officia quos saepe aliquam ipsam ullam ut hic, tenetur dolores facilis harum atque
                magni nisi?
              </p>
              <ul className="tags">
                <li>Lorem.</li>
                <li>Lorem.</li>
                <li>Lorem.</li>
              </ul>
              <button className="link" onClick={onScroll}>
                Специалисты
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
