import React from 'react'
import CountUp from 'react-countup';
import { FaGreaterThan } from "react-icons/fa";
import { FaMaxcdn } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";


const Experience = () => {
  return (
    
    
    <div className="max-w-full w-full mx-auto py-12">
      <div className="container max-w-6xl mx-auto px-4">
      <div>
      <h2 className="text-blue-500 text-center text-2xl font-medium mb-8">TRUSTED BY THE BEST </h2>
      </div>
        <div className="flex flex-col md:flex-row gap-3 items-center justify-between">
          
          {/* Column 1 */}
          <div className="text-center">    
            <span className="text-8xl flex font-bold text-blue-900 mb-4">
            <FaGreaterThan /> 
              <CountUp duration={1} start={10} end={20}/> </span>
            <p className="text-lg text-gray-600">
                Years of Experience
            </p>
          </div>

          {/* Column 2 */}
          <div className="text-center">
          <span className="text-8xl flex font-bold text-blue-900 mb-4">
        
              <CountUp duration={1} start={20} end={40}/><FaPlus /></span> 
            <p className="text-lg text-gray-600">
            Financial Institutions
            </p>
          </div>

          {/* Column 3 */}
          <div className="text-center">
          <span className="text-8xl flex font-bold text-blue-900 mb-4">
          <FaGreaterThan /> 
        <CountUp duration={1} start={150} end={200}/><FaMaxcdn/></span> 
            <p className="text-lg text-gray-600">
            Customers Each
            </p>
          </div>
        </div>
      </div>
    </div>
 
  );
}

export default Experience
