import React from 'react'

export const Feedback = () => {
  return (
    <section className="feedback section mask">
      <div className="container">
        <div className="z-10 relative">
          <div className="head text-center">
            <span className="subtitle">Довольные посетители</span>
            <h1 className="title text-white">Отзывы наших клиентов</h1>
          </div>
          <div className="comments">
            <iframe
              className="widget"
              src="https://yandex.ru/maps-reviews-widget/136135248708?comments"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
