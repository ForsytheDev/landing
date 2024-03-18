import React from 'react'
import Link from 'next/link'

import { RiInstagramFill } from 'react-icons/ri'

export const Masters: React.FC = () => {
  return (
    <section className="masters section" id="masters">
      <div className="container">
        <div className="head text-center">
          <span className="subtitle">Профессионалы</span>
          <h1 className="title">Топ-мастера салона</h1>
        </div>
        <div className="inner pt-4">
          <div className="item flex justify-center">
            <Link className="thumb" href="#" target="_blank" rel="noopener noreferrer">
              <img className="image" src="reference-3.jpg" alt="" />
              <div className="link">
                <RiInstagramFill className="w-auto h-14" />
              </div>
            </Link>
          </div>
          <div className="item my-auto flex flex-col">
            <div className="mb-10 text-center">
              <span className="subtitle">Топ-мастер</span>
              <h3 className="text-5xl font-semibold">Lorem, ipsum.</h3>
            </div>
            <div className="categories">
              <span>Category 1</span>
              <span>Category 2</span>
              <span>Category 3</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptates aperiam
              mollitia tempore corporis quisquam doloremque cum amet, exercitationem ipsa fugit
              assumenda explicabo laboriosam dolore, illo veniam dolores harum voluptatibus eaque
              velit officia commodi. Impedit sunt quo in repudiandae nobis recusandae necessitatibus
              enim amet, facere ullam pariatur dolor delectus tempore quidem mollitia quos fuga ad!
              Debitis, est illum dolorem sed maxime harum quos fugiat?
            </div>
            <span className="experience">Experience*</span>
            <Link
              className="action"
              href="https://n274678.yclients.com/company/266526/menu?o="
              target="_blank"
              rel="noopener noreferrer"
            >
              Запись к мастеру
            </Link>
          </div>
          <div className="item my-auto flex flex-col">
            <div className="mb-10 text-center">
              <span className="subtitle">Топ-мастер</span>
              <h3 className="text-5xl font-semibold">Lorem, ipsum.</h3>
            </div>
            <div className="categories">
              <span>Category 1</span>
              <span>Category 2</span>
              <span>Category 3</span>
            </div>
            <div className="description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque voluptates aperiam
              mollitia tempore corporis quisquam doloremque cum amet, exercitationem ipsa fugit
              assumenda explicabo laboriosam dolore, illo veniam dolores harum voluptatibus eaque
              velit officia commodi. Impedit sunt quo in repudiandae nobis recusandae necessitatibus
              enim amet, facere ullam pariatur dolor delectus tempore quidem mollitia quos fuga ad!
              Debitis, est illum dolorem sed maxime harum quos fugiat?
            </div>
            <span className="experience">Experience*</span>
            <Link
              className="action"
              href="https://n274678.yclients.com/company/266526/menu?o="
              target="_blank"
              rel="noopener noreferrer"
            >
              Запись к мастеру
            </Link>
          </div>
          <div className="item flex justify-center">
            <Link className="thumb" href="#" target="_blank" rel="noopener noreferrer">
              <img className="image" src="reference-3.jpg" alt="" />
              <div className="link">
                <RiInstagramFill className="w-auto h-14" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
