import React from 'react'

import cn from 'classnames'
import { LuPlus, LuMinus } from 'react-icons/lu'

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur.',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.',
  },
]

export const FAQ: React.FC = () => {
  const [tab, setTab] = React.useState<number | null>(0)

  const toggle = (index: number) => {
    if (tab !== index) {
      setTab((prev) => (prev === index ? null : index))
    }
  }

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="head">
          <span className="subtitle">FAQ</span>
          <h1 className="title">Ответим на вопросы</h1>
        </div>
        <div className="inner">
          <div className="item">
            <div className="accordion">
              {faqs.map((faq, index) => (
                <div className={cn('tab', { ['opened']: tab === index })} key={index}>
                  <h2>
                    <button className="action" onClick={() => toggle(index)}>
                      {tab === index ? (
                        <LuMinus className="text-red-500" />
                      ) : (
                        <LuPlus className="text-red-500" />
                      )}
                      {faq.question}
                    </button>
                  </h2>
                  <div className="wrapper">
                    <p className="description">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="item">
            <img
              className="image"
              src="https://nextgenerationdev.com/demos/html/diana/diana/assets/images/fqa/1.jpg"
              alt="FAQ"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
