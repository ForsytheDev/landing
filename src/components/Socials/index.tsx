import React from 'react'
import Link from 'next/link'

import { FaVk } from 'react-icons/fa6'
import { RiInstagramFill } from 'react-icons/ri'

export const Socials: React.FC = () => {
  return (
    <section className="socials section mask">
      <div className="container">
        <div className="z-20 relative">
          <div className="head text-center">
            <h1 className="title text-white">Наши медиа</h1>
          </div>
          <div className="group">
            <ul className="list">
              <li>
                <Link
                  className="item"
                  href="https://vk.com/lezote_tlt"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaVk className="icon" />
                  @lezote_tlt
                </Link>
              </li>
              <li>
                <Link
                  className="item"
                  href="https://www.instagram.com/lezote"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiInstagramFill className="icon" />
                  @lezote
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
