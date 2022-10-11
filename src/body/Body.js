import React from 'react'
import data from '../helper/data'

const Body = () => {
    const renderEmployees = (props) => {
      return (
        <>
          <article className='person'>
            <img src={props.picture.medium} alt={props.title}></img>
            <div className='personInfo'>
              <h5>{props.name.first} {props.name.last}</h5>
              <p>{props.email}</p>
              <p>{props.dob.age}</p>
            </div>
          </article>
        </>
      )
    }
    return (
      <div>
        {data.map(renderEmployees)}
      </div>
    )
 
}

export default Body;

