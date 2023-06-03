import React from 'react'
import { linkedin, github } from '../assets'

const Footer = () => {
  return (
    <div className="footer bg-maroon text-white p-4 flex justify-end space-x-4">
      <a href="https://github.com/cnobleshriver" className="flex items-center text-white">
        <img src={linkedin} alt="LinkedIn" className="w-8 h-8 mr-2" />
        <span>LinkedIn</span>
      </a>

      <a href="https://github.com/cnobleshriver" className="flex items-center text-white">
        <img src={github} alt="Github" className="w-8 h-8 mr-2" />
        <span>Github</span>
      </a>
    </div>

    
  )
}

export default Footer