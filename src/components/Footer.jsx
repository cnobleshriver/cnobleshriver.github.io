import React from 'react'
import { linkedin } from '../assets'

const Footer = () => {
  return (
    <div className="footer bg-maroon text-white p-4 flex justify-end space-x-4">
    <a href="https://www.linkedin.com/in/christian-noble-shriver-234262238/" className="flex items-center text-white">
      <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mr-2"/>
      <span>LinkedIn</span>
    </a>
  </div>
  )
}

export default Footer