import React from 'react'

const categories = [
  {
    topic: 'Service 1',
    imageUrl:
      'https://nextgenerationdev.com/demos/html/diana/diana/assets/images/service/service1.png',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    topic: 'Service 2',
    imageUrl:
      'https://nextgenerationdev.com/demos/html/diana/diana/assets/images/service/service1.png',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    topic: 'Service 3',
    imageUrl:
      'https://nextgenerationdev.com/demos/html/diana/diana/assets/images/service/service1.png',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
  {
    topic: 'Service 4',
    imageUrl:
      'https://nextgenerationdev.com/demos/html/diana/diana/assets/images/service/service1.png',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
  },
]

export const Services: React.FC = () => {
  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="head text-center">
          <span className="subtitle">Что мы предлагаем</span>
          <h1 className="title text-zinc-800">Наши услуги</h1>
        </div>
        <div className="categories">
          {categories.map((category, index) => (
            <button className="card" key={index}>
              <div className="thumb">
                <img className="image" src={category.imageUrl} alt={category.topic} />
              </div>
              <div className="description">
                <h5>{category.topic}</h5>
                <p>{category.description}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
