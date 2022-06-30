import React from 'react'

function Home() {
  return (
    <div className="px-6 flex align-bottom">
      <p className="font-normal opacity-1 flex flex-col">
        This is an online application portal for the upcoming Boys' and Girls' brigade event. <br />
        <span>for more details contact:</span>
        <div className="flex flex-col my-5">
          <span>Ms. Charlotte Mwesigye</span>
          <span className="text-blue-400">+256752692544</span>
        </div>
        <div className="flex flex-col my-5">
          <span>Ms. Dorcas Naiga</span>
          <span className="text-blue-400">+256777054990</span>
        </div>
        <div className="flex flex-col my-5">
          <span>Mr. Bongole Patrick</span>
          <span className="text-blue-400">+256775328299</span>
        </div >
        <span my-5>Send mobile Money Payments to <span className="text-blue-400">+256752419486.</span> <br /> 
          Mr Dantes Kashangirwe</span>

      </p>
    </div>
  )
}

export default Home