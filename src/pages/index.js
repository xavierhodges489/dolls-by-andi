import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import homeStyles from "./home.module.scss"

const IndexPage = () => {
  return (
    <Layout>
      <div className={homeStyles.grid}>
        <div className={homeStyles.main}>
          <div className={homeStyles.container}>
            <h1>
              Beautiful, <br /> Handcrafted <br /> Cloth Dolls
            </h1>
            <p>
              Dolls by Andi offers beautifully hand-crafted dolls. Each unique,
              cloth doll is individually designed to portrait the beauty
              inherent in ladies and girls from various cultures.
            </p>
            <div className={homeStyles.viewDolls}>
              <Link to="/catalog">View Dolls</Link>
              <svg
                viewBox="0 0 17 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.6004 5.50736L8.76117 1.66809L10.1754 0.253877L16.4289 6.50737L10.1754 12.7609L8.76117 11.3466L12.6005 7.50736L-2.31556e-05 7.50734L-2.04582e-05 5.50734L12.6004 5.50736Z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={homeStyles.parties}>
          <h2>Parties</h2>
          <p>
            What could be more fun than making a special doll with your best
            friends?<Link to="/about">Contact us for details.</Link>
          </p>
          <br />
          <h2>Classes</h2>
          <p>
            Would you like to learn how to craft a doll for yourself, or to give
            as a gift? Check with Andi about classes to help you or a special
            little girl learn the basics of this age-old craft.
            <Link to="/about">Contact us for rates and schedules.</Link>
          </p>
          <span>
            All parties and classes are held in the metro Atlanta area.
          </span>
        </div>
        <div className={homeStyles.info}>
          <h2>Info</h2>
          <p>Ask about multi-item discounts!</p>
          <p>
            Dolls can be purchased as shown, or customized to meet your needs.
            Please see the <Link to="/about">Custom Order</Link> tab for more
            information regarding this process. Either way, your collectable,
            one-of-a-kind doll will be treasured for many years to come.
          </p>
        </div>
        <div className={homeStyles.carousel}>
          {/* <img src="https://picsum.photos/600/900" alt="the dolls" /> */}
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
