import React from 'react'

import video3 from '../assets/3rdvid.mp4'
import img5 from '../assets/5thimg.jpg'
import img6 from '../assets/6thimg.jpg'
import img7 from '../assets/7th img.jpg'

const Cartcart = () => {
  return (
    <>
    <div className='my-24 text-4xl'>Silhouette No. 1 – Vermilion</div>
    <div className="my-24 flex flex-col sm:flex-row gap-0 items-stretch">
  {/* Left side - Video */}
  <div className="sm:w-1/2 w-full rounded overflow-hidden flex">
    <div className="aspect-[7/9] w-full h-full">
      <video
        src={video3}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover rounded"
      />
    </div>
  </div>

  {/* Right side */}
  <div className="bg-white sm:w-1/2 w-full flex flex-col justify-between gap-6">
    <p className="px-4 pt-8 text-[10px] text-black leading-tight">
      A tailored composition in motion. Cut from structured wool with a sculpted<br />
      shoulder and softened hem, this piece captures presence without force. Worn<br />
      here in the stillness of a city in motion.
    </p>

    {/* Image grid */}
    <div className="flex gap-4 px-4">
      {[img5, img6, img7].map((img, idx) => (
        <div
          key={idx}
          className="w-1/3 aspect-square rounded overflow-hidden shadow-md"
        >
          <img src={img} alt={`Image ${idx + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>

    {/* Price */}
    <div className="flex items-end gap-2 px-6 text-black">
      <div className="font-bold text-4xl font-home">₹7,999</div>
      <span className="text-xs">MRP incl. of all taxes</span>
    </div>

    {/* Size selection label */}
    <div className="flex items-end gap-2 px-6 text-black font-home">
      <div className="text-xl">Please select a size</div>
      <span className="text-xs cursor-pointer underline">Size chart</span>
    </div>

    {/* Size buttons */}
    <div className="flex gap-3 px-4 w-full">
      {['XS', 'S', 'M', 'L', 'XL'].map((size, idx) => (
        <button
          key={idx}
          className="flex-1 bg-white text-gray-600 font-bold h-12 text-sm flex items-center justify-center rounded-md shadow-sm hover:shadow-md hover:bg-gray-100"
        >
          {size}
        </button>
      ))}
    </div>

    {/* Add to Cart / Buy Now */}
    <div className="flex w-full gap-4 px-4 pb-6">
      <button className="w-1/3 bg-white text-black py-3 rounded shadow hover:shadow-md">
        Add to Cart
      </button>
      <button className="w-2/3 bg-black text-white py-3 rounded shadow hover:shadow-lg">
        Buy Now
      </button>
    </div>
  </div>
</div>


</>
  )
}

export default Cartcart
