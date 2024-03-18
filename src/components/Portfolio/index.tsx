import React from 'react'

import cn from 'classnames'

import styles from './Portfolio.module.scss'

const items = [
  {
    category: '1',
    image: 'https://nextgenerationdev.com/demos/html/diana/diana/assets/images/gallery/gl6.png',
    description: 'Desc',
  },
  {
    category: '2',
    image: 'https://nextgenerationdev.com/demos/html/diana/diana/assets/images/gallery/gl6.png',
    description: 'Desc',
  },
  {
    category: '2',
    image: 'https://nextgenerationdev.com/demos/html/diana/diana/assets/images/gallery/gl6.png',
    description: 'Desc',
  },
  {
    category: '3',
    image: 'https://nextgenerationdev.com/demos/html/diana/diana/assets/images/gallery/gl6.png',
    description: 'Desc',
  },
  {
    category: '3',
    image: 'https://nextgenerationdev.com/demos/html/diana/diana/assets/images/gallery/gl6.png',
    description: 'Desc',
  },
  {
    category: '3',
    image: 'https://nextgenerationdev.com/demos/html/diana/diana/assets/images/gallery/gl6.png',
    description: 'Desc',
  },
]

export const Portfolio: React.FC = () => {
  const [category, setCategory] = React.useState<number | null>(0)

  const toggle = (index: number) => {
    if (category !== index) {
      setCategory((prev) => (prev === index ? null : index))
    }
  }

  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="head">
          <span className="subtitle">Портфолио</span>
          <h1 className="title text-white">Креативные работы</h1>
        </div>
        <div className="group">
          <button
            className={cn('category', { ['checked']: category === 0 })}
            onClick={() => toggle(0)}
          >
            Все
          </button>
          <button
            className={cn('category', { ['checked']: category === 1 })}
            onClick={() => toggle(1)}
          >
            Категория 1
          </button>
          <button
            className={cn('category', { ['checked']: category === 2 })}
            onClick={() => toggle(2)}
          >
            Категория 2
          </button>
          <button
            className={cn('category', { ['checked']: category === 3 })}
            onClick={() => toggle(3)}
          >
            Категория 3
          </button>
        </div>
        <div className="collection">
          {items.map(
            (item, index) =>
              (category === 0 || category === Number(item.category)) && (
                <div className="item" key={index}>
                  <img className="image" src={item.image} alt={`Фото №${index}`} />
                  <span className="link">{item.description}</span>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  )
}
