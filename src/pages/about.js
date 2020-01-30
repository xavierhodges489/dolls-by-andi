import React from "react"

import Layout from "../components/layout"
import aboutStyles from "./about.module.scss"
import buttonStyles from "../styles/buttons.module.scss"
import headerStyles from "../styles/headers.module.scss"

const About = () => {
  return (
    <Layout>
      <div className={aboutStyles.grid}>
        <div className={aboutStyles.about}>
          <div className={aboutStyles.container}>
            <h1 className={headerStyles.h1}>About Me</h1>
            <p>
              I've been sewing and creating art since I was a little girl. My
              interest in crafting and different cultures resulted in the
              development of cloth dolls that encourage the appreciation of
              diverse ethnicities, and provide positive images for young ladies
              with compromised self-identity.
            </p>
            <p>
              Each doll is designed with care, and I particularly enjoy seeing
              the doll's personality emerge during the process. I hope you find
              a doll that you can fall in love with. If she is not currently
              displayed, we can create her together. Just see the Custom Order
              tab for information on creating your one-of-a-kind doll.
            </p>
            <p>
              If you are interested in learning more about the doll making
              craft, I would love to spend some time teaching you techniques to
              help you make your own. Classes for children and adults are held
              in the metro Atlanta area. Contact me for more information.
            </p>
          </div>
        </div>
        <div className={aboutStyles.policies}>
          <div className={aboutStyles.container}>
            <h2 className={headerStyles.h2}>Policies</h2>
            <h3 className={headerStyles.h3}>Shipping Fees &amp; Delivery</h3>
            <p>
              Standard shipping fees are: $10.00 (large doll) &amp; $5.00
              (petite doll). Items are shipped via USPS. Pre-made dolls are
              shipped within 2 days after payment is received. Allow 7 business
              days for delivery for pre-made dolls, and up to 6 weeks for custom
              orders.
            </p>
            <h3 className={headerStyles.h3}>Customer Service</h3>
            <p>
              Please contact me if you have questions about the custom order
              process, classes, or if you need clarification or additional
              information prior to placing an order.
            </p>
            <h3 className={headerStyles.h3}>Returns</h3>
            <p>
              Returns accepted within 7 days of receipt and must be authorized.
              Contact us via email at dollsbyandi@gmail.com for authorization
              prior to product return. Item must be in as-new condition and in
              original packaging. Shipping fees are not refundable.
            </p>
          </div>
        </div>
        <div className={aboutStyles.contact}>
          <div className={aboutStyles.contactContainer}>
            <h1 className={headerStyles.h1}>Contact</h1>
            <ul>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="envelope"
                  class="svg-inline--fa fa-envelope fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                  ></path>
                </svg>
                <span>dollsbyandi@gmail.com</span>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="phone"
                  class="svg-inline--fa fa-phone fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"
                  ></path>
                </svg>
                <span>404-550-7674</span>
              </li>
              <li>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  class="svg-inline--fa fa-instagram fa-w-14"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
                <span>dollsbyandi</span>
              </li>
            </ul>

            <h2>Send me a message...</h2>
            <form className={aboutStyles.form}>
              <input type="text" name="name" id="name" placeholder="Name" />

              <input type="email" name="email" id="email" placeholder="Email" />

              <textarea
                name="message"
                id="name"
                rows="10"
                placeholder="Message..."
              />

              <button className={buttonStyles.button} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default About
