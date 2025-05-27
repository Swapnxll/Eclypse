import React from 'react'
import cus1 from '../assets/customer1.jpg'
import cus2 from '../assets/customer2.jpg'
const CustomerCard = () => {
  return (
    <>
        <div className="w-full px-4 py-12 bg-black text-white">
  <p className="text-left text-sm font-semibold mb-4">OUR CUSTOMERS</p>

  {/* Primary Review */}
  <div className="flex items-center gap-4 py-4 shadow-sm">
    <div className="text-9xl font-serif pt-1">“</div>
    <div className="flex-1">
  <p className="text-xl leading-relaxed">
    Understated, but unforgettable. It feels like it was made for me
  </p>
  <p className="text-xs text-gray-400 mt-1">
    Random woman
  </p>
</div>
    <div className="flex flex-col items-center gap-2">
  {/* Main image */}
 <div className="flex items-center gap-2">
  {/* Rotated arrow pointing left */}
  <span className="text-xl transform rotate-90 text-white">&#9660;</span>

  {/* Customer image */}
  <div className="w-14 h-14 rounded-full overflow-hidden">
    <img
      src={cus1}
      alt="Customer 1"
      className="w-full h-full object-cover object-top object-center"
    />
  </div>
  {/* Smaller image below */}
  <div className="w-8 h-8 rounded-full overflow-hidden">
    <img
      src={cus2}
      alt="Customer 2"
      className="w-full h-full object-cover object-top object-center"
    />
  </div>
</div>


  
</div>

  </div>

  <div className="h-px bg-gray-700 my-2"></div>
</div>
    </>
  )
}

export default CustomerCard
