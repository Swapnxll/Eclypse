import React from 'react'
import video2 from '../assets/2ndvid.mp4'
import img1 from '../assets/1stpic.jpg'
import img2 from '../assets/2ndpic.jpg'
import img3 from '../assets/3rdimg.jpg'
import img4 from '../assets/4thimg.jpg'
const Pictures = () => {
  return (
    <>
    <div className="px-0 my-3 space-y-6">
  {/* First Row */}
  <div className="flex flex-col sm:flex-row gap-4">
    <div className="sm:w-2/3 w-full">
      <video
        src={video2}
        autoPlay
        muted
        loop
        className="w-full h-full object-cover rounded"
      />
    </div>
    <div className="sm:w-1/3 w-full aspect-square">
  <img
    src={img1}
    alt="Image"
    className="w-full h-full object-cover rounded"
  />
</div>

  </div>

  {/* Second Row */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
    <img src={img2} alt="1" className="w-full h-full object-cover rounded aspect-square" />
    <img src={img3} alt="2" className="w-full h-full object-cover rounded aspect-square" />
    <img src={img4} alt="3" className="w-full h-full object-cover rounded aspect-square" />
  </div>
</div>
</>
  )
}

export default Pictures
