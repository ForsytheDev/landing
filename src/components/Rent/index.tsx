import React from 'react'

export const Rent: React.FC = () => {
  return (
    <section className="rent section">
      <div className="container">
        <div className="head text-right">
          <span className="subtitle">Почасовая аренда</span>
          <h1 className="title">Пространство для мастеров</h1>
        </div>
        <div className="inner">
          <div className="item my-auto flex justify-center">
            <ul className="gap-10 flex flex-col text-center">
              <li className="text-2xl uppercase">Lorem ipsum dolor sit amet.</li>
              <li className="text-2xl uppercase">Lorem ipsum dolor sit amet.</li>
              <li className="text-2xl uppercase">Lorem ipsum dolor sit amet adipisicing.</li>
              <li className="text-2xl uppercase">Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
          </div>
          <div className="item flex justify-center">
            <div className="max-w-[30rem] overflow-hidden">
              <img className="image" src="reference-4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
