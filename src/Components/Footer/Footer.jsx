import React from 'react'


const Footer = () => {
    return (
  
 
    <footer className="text-white py-6">
      <div className="container mx-auto px-0">
        <div className="bg-blue-950 text-center md:text-center grid grid-col-1 md:grid-cols-3 gap-8 pl-8 pb-10 pt-14">

          {/* Column 1: Company */}
          <div className="text-center md:text-center">
             <h1 className="text-3xl text-white font-bold mb-4">AIYTech</h1>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-teal-400 text-lg text-center mb-4 grid grid-cols-3 ml-20 mt-6 ">
            <h3 className="font-bold border-r border-gray-600 pb-2 pr-4 sm:hidden">Our Solutions </h3>
            <ul className="grid grid-cols-1 md:grid-cols-3 md:gap-20 pl-4 pl-6">
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400 ">AnyCaaS</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">AnyBaaS</a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:text-blue-400">AnyPaaS</a>
              </li>
          
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="text-center md:text-center bg-black text-blue-400 border-t border-gray-700 pb-6 pt-8 ">
          <p className=" text-sm font-bold">
            &copy; {new Date().getFullYear()}  All rights reserved.<span className='font-medium'> Any technology Pvt Ltd.</span>
          </p>
          <p className="text-sm">
           Privacy Policy
          </p>
        </div>

        </div>
       
       </footer>
  )
}

export default Footer;
