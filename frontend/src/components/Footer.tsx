

const Footer = () => {
  return (
    <>
    <div className="flex w-full">
  <div className="flex-1 p-4 flex flex-col justify-between items-start h-40">
  <div className="text-lg font-bold">Eclipse</div>
  <div className="text-sm text-gray-700">
    home / about / buy /<br/> our customer / contacts
  </div>
</div>

<div className="flex-1 p-4 flex flex-col justify-between items-start h-40">
  <div className="text-sm font-medium">+0123456789</div>
  <div className="text-sm text-gray-700">Email:<br/>exampl@gmail.com</div>
</div>

  
 <div className="flex-1 p-4 relative h-40">
  {/* Top-right arrow (rotated down arrow to point right) */}
  <div className="absolute top-0 right-0">
    <button className="text-xl text-white rotate-180 inline-block">&#9660;</button>
  </div>

  {/* Bottom-right content */}
  <div className="absolute bottom-0 right-0 text-sm text-white">
    © Eclypse 2025
  </div>
</div>

</div>
    </>
  )
}

export default Footer
