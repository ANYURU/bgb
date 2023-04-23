import React from 'react'

function Home() {
  return (
    <div className="px-6 flex align-bottom">
      <p className="font-normal opacity-1 flex flex-col">
        This is an online application portal for the upcoming Boys' and Girls' brigade heights camp. <br />
        <span>for more details contact:</span>
        <div className="flex flex-col my-5">
          <span>Ms. Dorcas Diana Naiga</span>
          <span className="text-blue-400">0777054990</span>
        </div>
        <div className="flex flex-col my-5">
          <span>Mr. Dorcas Diana Naiga</span>
          <span className="text-blue-400">0701713841</span>
        </div >
      </p>
    </div>
  )
}

export default Home