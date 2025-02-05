import React from 'react'
import photo from '../../assets/photo.jpg';

const About = () => {
  return (
       
    <div>
      <div className="max-w-full text-black mx-auto w-full">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 mx-auto py-12 items-center max-w-7xl">
          <div className="w-full pl-4">
            {/* className="md:flex mx-5 mt-8 w-full" */}
            <h2 className="text-blue-400 text-2xl font-bold mb-8">POWERING THE FUTURE OF FINANCE </h2>
            <h1 className='text-black text-6xl font-medium'>Uncovering new ways to delight customers</h1>
            <p className="w-full my-6 text-gray-900 bold py-6">
            AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.
            </p>
            <p className='text-gray-700'>Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.</p>

          </div>
          <div className="w-full mt-4  p-4">
            <img
              className="rounded-3xl w-full h-96 mx-auto"
              src={photo}
              alt="photo"
            />
          </div>
        </div>
      </div>
    </div>
  
  )
}

export default About
