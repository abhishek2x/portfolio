import React from "react"
import style from "./about.module.less"

const AboutTile = props => {
  const {
    img,
    textH4,
    textH3,
    textH5,
    textP,
    textP1,
    alt,
    height,
    width,
  } = props
  return (
    <div className={style.aboutTile}>
      <div className={style.aboutBlock}>
        <img
          src={`../${img}`}
          height={height || 64}
          width={width || 64}
          alt={alt || ""}
        />
      </div>
      <div className={`textCenter ${style.mrTp26PX}`}>
        <h3>{textH3 || ""}</h3>
        <h4>{textH4 || ""}</h4>
        <h5>{textH5 || ""}</h5>
        <p>{textP || ""}</p>
        <p>{textP1 || ""}</p>
      </div>
    </div>
  )
}

export default AboutTile
