import React from 'react'
import './Footer.css'

export const Footer = () => {
  let footerStyle ={
    position: "absolute",
    top:"100vh",
    width: "100%",
  }
  return (
    <footer className='bg-dark text-light py-3' style={footerStyle}>
       <p className='text-center'>Copyright &copy; sanjaypahari.com</p>
        </footer>
  )
}
