import { IoCloseSharp } from "react-icons/io5";
import { ReactDOM } from "react";

function Application({setApplicationModal, application}) {
  console.log(application)
   

    return ReactDOM(
        <div  className='bg-black bg-opacity-30 z-40 w-screen h-screen fixed top-0 left-0 right-0 bottom-0 overflow-scroll flex justify-center items-center'>
          <div
            className=" hover:bg-accent p-2 rounded-full cursor-pointer"
            onClick={() => setApplicationModal(false)}
          >
            <IoCloseSharp />
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">Application ID:</p>
            <p className="font-bold col-span-3">{application.id}</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">First name:</p>
            <p className="font-bold col-span-3">{application.firstname}</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">Last name:</p>
            <p className="font-bold col-span-3">{application.lastname}</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">Age:</p>
            <p className="font-bold col-span-3">{application.age}</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">Gender:</p>
            <p className="font-bold col-span-3">{application.gender}</p>
          </div>
        </div>,
        document.getElementById("portal")
      )
}

export default Application