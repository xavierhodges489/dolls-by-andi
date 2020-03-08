import React from "react"

import catalogCardStyles from "./catalogCard.module.scss"
import buttonStyles from "../styles/buttons.module.scss"

const CatalogCard = props => {
  return (
    <div className={catalogCardStyles.cardContainer}>
      <div className={catalogCardStyles.card}>
        <div className={catalogCardStyles.imgContainer}>
          <img src={props.imgUrl} alt={props.name}></img>
          <div></div>
        </div>
        <div className={catalogCardStyles.contentContainer}>
          <div>
            <h3>{props.name}</h3>
            <span className={catalogCardStyles.price}>${props.price}</span>
          </div>
          {props.tag && (
            <span className={catalogCardStyles.tag}>{props.tag}</span>
          )}

          <p
            className={
              props.tag ? catalogCardStyles.oneLine : catalogCardStyles.twoLines
            }
          >
            {props.description}
          </p>
          <button className={buttonStyles.button}>Purchase</button>
        </div>
      </div>
    </div>
  )
}

export default CatalogCard
