import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import CatalogCard from "../components/catalogCard"
import catalogStyles from "./catalog.module.scss"
import headerStyles from "../styles/headers.module.scss"

const Catalog = () => {
  return (
    <Layout>
      <div className={catalogStyles.category}>
        <div className={catalogStyles.info}>
          <h1 className={headerStyles.h1}>Joli Girl Dolls</h1>
          <p>
            Available in several styles. Pick your favorite from the following
            girls or create your own! Standard dolls are 19-20 inches.
          </p>
        </div>
        <div className={catalogStyles.items}>
          <CatalogCard
            name="Uma"
            price="50"
            imgUrl="http://dollsbyandi.yolasite.com/resources/105_0024.jpg"
            description="Uma loves to have fun! She's very cute in her multi-colored
            striped dress."
          />
          <CatalogCard
            name="Arielle"
            price="160"
            imgUrl="http://dollsbyandi.yolasite.com/resources/Arielle.jpg"
            description="Arielle is simply breathtaking in a simple, yet elegant bridal
            gown. Her finger tip veil and bouquet of roses perfectly
            complement her dress."
          />
          <CatalogCard
            name="Carmi"
            price="100"
            imgUrl="http://dollsbyandi.yolasite.com/resources/Carmie.jpg"
            description="Carmi is charming in her tiger print dress and head wrap. She
            will be a welcome accent to any decor."
            tag="Special Order Only"
          />
        </div>
      </div>

      <div className={catalogStyles.category}>
        <div className={catalogStyles.info}>
          <h1 className={headerStyles.h1}>Spa Dolls</h1>
          <p>
            SPA dolls can be outfitted in several towel &amp; head band colors
            and trims to match your decor!
          </p>
        </div>
        <div className={catalogStyles.items}>
          <CatalogCard
            name="Kennedy"
            price="100"
            imgUrl="http://dollsbyandi.yolasite.com/resources/104_9903.jpg"
            description="Kennedy is so pretty &amp; fresh in her red trimmed wrap!"
            tag="Special Order Only"
          />
          <CatalogCard
            name="Faith"
            price="160"
            imgUrl="http://dollsbyandi.yolasite.com/resources/dolls%202-4-10%20011.JPG"
            description="Faith is comfortable and fresh in her wrap and head band. She's
            a sassy addition for your doll collection."
          />
        </div>
      </div>

      <div className={catalogStyles.category}>
        <div className={catalogStyles.info}>
          <h1 className={headerStyles.h1}>Custom Dolls</h1>
          <p>
            Several elements can be selected when creating your doll. Hair color
            and texture, skin tone and dress style and color are all
            customizable. <Link to="/about">Contact me</Link> when you're ready
            to discuss your choices. Custom orders require a 50% non-refundable
            deposit in order to begin your project. The balance is due prior to
            shipping. Please allow 3 - 4 weeks for custom doll creation and
            delivery.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Catalog
