import React from 'react'
import {motion} from 'framer-motion'
export default function OurProgessSectionCard() {
  return (
    <motion.div className="row"
    
    >
    <motion.div className="lg:w-[16.66%] md:w-[16.66%] sm:w-full w-full"
    initial={{ opacity: 0, y: 150,scale:1 }} // Initial state
    whileInView={{ opacity: 1, y: 0,scale:1 }} // Animation when in view
    transition={{ duration: 1, ease: 'easeOut' }} // Transition options
    >
      <div className="number__Section">
        <span>.01</span>
      </div>
    </motion.div>
    <motion.div className="lg:w-[83.3%] md:w-[83.3%] sm:w-full w-full"
    initial={{ opacity: 0, y: 100,scale:1 }} // Initial state
    whileInView={{ opacity: 1, y: 0,scale:1 }} // Animation when in view
    transition={{ duration: 1, ease: 'easeOut' }} // Transition options
    >
      <div className="reserach__section">
        <h2>Research and Discovery</h2>
      </div>
      <div className="Research_details mb-4">
        <p>Identify who your target audience is, including their needs, pain points, and how your services can address these.</p>
      </div>
      <div className="mainn__reserach">
        <div className="research__sec">
          <ul>
            <li>
              <a>Research</a>
            </li>
            <li>
              <a>Goals</a>
            </li>
            <li>
              <a>Discovery</a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  </motion.div>
  )
}
