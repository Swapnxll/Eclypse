import React from 'react'


const Pictures = () => {
  return (
    <>
   <>
  <div className=" my-6 space-y-6">
    {/* Top Div for bigger screen */}
    <div className="hidden sm:flex sm:gap-4">
      {/* Video left */}
      <div className="sm:w-2/3">
        <video
          src='https://res.cloudinary.com/do48h78id/video/upload/v1748505415/2ndvid_i8bmo5.mp4'
          autoPlay
          muted
          loop
          className="w-full h-full object-cover rounded"
        />
      </div>
      {/* Image right */}
      <div className="sm:w-1/3 aspect-video">
        <img
          src='https://res.cloudinary.com/do48h78id/image/upload/v1748505857/1stpic_xv9a6t.jpg'
          alt="Right side image"
          className="w-full h-full object-cover rounded"
        />
      </div>
    </div>

    {/* Top Div for smaller screen (only video) */}
    <div className="sm:hidden">
      <video
        src='https://res.cloudinary.com/do48h78id/video/upload/v1748505415/2ndvid_i8bmo5.mp4'
        autoPlay
        muted
        loop
        className="w-full h-auto object-cover rounded"
      />
    </div>

    {/* Bottom Div with three images for all screens */}
    <div className="grid grid-cols-3 gap-4">
      <img
        src='https://res.cloudinary.com/do48h78id/image/upload/v1748505846/2ndpic_pql2fy.jpg'
        alt="Image 2"
        className="w-full h-full object-cover rounded aspect-square"
      />
      <img
        src='https://res.cloudinary.com/do48h78id/image/upload/v1748505839/3rdimg_qx7xbd.jpg'
        alt="Image 3"
        className="w-full h-full object-cover rounded aspect-square"
      />
      <img
        src='https://res.cloudinary.com/do48h78id/image/upload/v1748505964/4thimg_lvdpho.jpg'
        alt="Image 4"
        className="w-full h-full object-cover rounded aspect-square"
      />
    </div>
  </div>
</>


</>
  )
}

export default Pictures
