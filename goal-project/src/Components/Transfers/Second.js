import React from "react"
import { transfers } from "../../data/Transfers"
import { BsClock } from "react-icons/bs"
import { BiMessageMinus } from "react-icons/bi"

const Second = () => {
  return (
    <aside className='second'>
      {transfers.second.map((item, index) => {
        const { img, title, time, one, response } = item
        return (
          <div key={index}>
            <div className='img-container'>
              <img src={img} alt='' />
            </div>
            <div className='second-content'>
              <a href='#'>{one}</a>
              <h3>{title}</h3>
              <div className='second-base'>
                <p>
                  <BsClock />
                  {time}
                </p>
                <p>
                  <BiMessageMinus />
                  {response}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </aside>
  )
}

export default Second
