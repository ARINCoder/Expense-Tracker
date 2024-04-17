import React from 'react'
import { Link } from 'react-router-dom'
import '../Components/footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <img src=".\src\assets\pexels-tima-miroshnichenko-5717640.jpg" alt="" />
        <p> All Rights Reserved To MarvinandCo.👽👽</p>
        <p> <Link to ='/abouttheApp' > About the App </Link></p>
    </div>
  )
}

export default Footer