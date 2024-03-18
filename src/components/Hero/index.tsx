import React from 'react'
import Link from 'next/link'

import { BiLinkExternal } from 'react-icons/bi'

export const Hero: React.FC = () => {
  return (
    <section className="hero section">
      <div className="container">
        <div className="head">
          <div className="wrapper">
            <h4 className="caption">Lorem, ipsum.</h4>
            <h1 className="slogan">Lorem ipsum dolor sit amet.</h1>
            <Link
              className="link"
              href="https://n274678.yclients.com/company/266526/menu?o="
              target="_blank"
              rel="noopener noreferrer"
            >
              Записаться
              <BiLinkExternal />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
