import React from 'react'

function SectionOne(props) {
  return (
    <div className='col-md-3 col-sm-6' >
        <div className='d-flex sec-one-single-item' >
            <div>
                <img src={props.image} alt="" />
            </div>
            <div>
                <h5>{props.title}</h5>
                <p>{props.desc}</p>
            </div>
        </div>
    </div>
  )
}

export default SectionOne