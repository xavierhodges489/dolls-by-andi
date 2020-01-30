import React from "react"

import Layout from "../components/layout"
import catalogStyles from "./catalog.module.scss"
import buttonStyles from "../styles/buttons.module.scss"
import headerStyles from "../styles/headers.module.scss"

const Catalog = () => {
  return (
    <Layout>
      <div className={catalogStyles.grid}>
        <div className={catalogStyles.info}>
          <h1 className={headerStyles.h1}>Joli Girl Dolls</h1>
          <p>
            Available in several styles. Pick your favorite from the following
            girls or create your own!
          </p>
          <span>Standard dolls are 19-20 inches.</span>
        </div>
        <div className={catalogStyles.items}>
          <div className={catalogStyles.card}>
            <img src="http://dollsbyandi.yolasite.com/resources/105_0024.jpg" />
            <div>
              <div>
                <h3>Uma</h3>
                <span className={catalogStyles.price}>$50</span>
              </div>
              <p>
                Uma loves to have fun! She's very cute in her multi-colored
                striped dress.
              </p>
              <button className={buttonStyles.button}>Purchase</button>
            </div>
          </div>
          <div className={catalogStyles.card}>
            <img src="http://dollsbyandi.yolasite.com/resources/Arielle.jpg" />
            <div>
              <div>
                <h3>Arielle</h3>
                <span className={catalogStyles.price}>$160</span>
              </div>
              <p>
                Arielle is simply breathtaking in a simple, yet elegant bridal
                gown. Her finger tip veil and bouquet of roses perfectly
                complement her dress.
              </p>
              <button className={buttonStyles.button}>Purchase</button>
            </div>
          </div>
          <div className={catalogStyles.card}>
            <img src="http://dollsbyandi.yolasite.com/resources/Carmie.jpg" />
            <div>
              <div>
                <h3>Carmi</h3>
                <span className={catalogStyles.price}>$100</span>
              </div>
              <div className={catalogStyles.tag}>
                <span>Special Order Only</span>
              </div>
              <p>
                Carmi is charming in her tiger print dress and head wrap. She
                will be a welcome accent to any decor.
              </p>
              <button className={buttonStyles.button}>Purchase</button>
            </div>
          </div>
        </div>
      </div>

      <div className={catalogStyles.grid}>
        <div className={catalogStyles.info}>
          <h1 className={headerStyles.h1}>Spa Dolls</h1>
          <p>
            SPA dolls can be outfitted in several towel &amp; head band colors
            and trims to match your decor!
          </p>
          <span>Standard dolls are 19-20 inches.</span>
        </div>
        <div className={catalogStyles.items}>
          <div className={catalogStyles.card}>
            <img src="http://dollsbyandi.yolasite.com/resources/104_9903.jpg" />
            <div>
              <div>
                <h3>Kennedy</h3>
                <span className={catalogStyles.price}>$100</span>
              </div>
              <div className={catalogStyles.tag}>
                <span>Special Order Only</span>
              </div>
              <p>Kennedy is so pretty &amp; fresh in her red trimmed wrap!</p>
              <button className={buttonStyles.button}>Purchase</button>
            </div>
          </div>
          <div className={catalogStyles.card}>
            <img src="http://dollsbyandi.yolasite.com/resources/dolls%202-4-10%20011.JPG" />
            <div>
              <div>
                <h3>Faith</h3>
                <span className={catalogStyles.price}>$160</span>
              </div>
              <p>
                Faith is comfortable and fresh in her wrap and head band. She's
                a sassy addition for your doll collection.
              </p>
              <button className={buttonStyles.button}>Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Catalog
