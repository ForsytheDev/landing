import React from 'react'

import { RiScissorsFill } from 'react-icons/ri'

import styles from './Becauses.module.scss'

const points = [
  {
    icon: <RiScissorsFill className="w-auto h-14 p-2.5" />,
    topic: 'Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic.',
  },
  {
    icon: <RiScissorsFill className="w-auto h-14 p-2.5" />,
    topic: 'Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic.',
  },
  {
    icon: <RiScissorsFill className="w-auto h-14 p-2.5" />,
    topic: 'Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic.',
  },
  {
    icon: <RiScissorsFill className="w-auto h-14 p-2.5" />,
    topic: 'Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic.',
  },
  {
    icon: <RiScissorsFill className="w-auto h-14 p-2.5" />,
    topic: 'Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic.',
  },
  {
    icon: <RiScissorsFill className="w-auto h-14 p-2.5" />,
    topic: 'Lorem, ipsum dolor.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam impedit hic.',
  },
]

export const Becauses: React.FC = () => {
  return (
    <section className="becauses section">
      <div className="container">
        <div className="head text-center">
          <span className="subtitle">Наши преимущества</span>
          <h1 className="title">Почему нас выбирают</h1>
        </div>
        <div className="points">
          {points.map((point, index) => (
            <div className="item" key={index}>
              <div className="text-red-500 border border-red-500 rounded-full">{point.icon}</div>
              <div className="description">
                <h5>{point.topic}</h5>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
