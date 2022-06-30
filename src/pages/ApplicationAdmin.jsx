import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../helpers/supabase/supabase'


function ApplicationAdmin() {
  const { applicationId } = useParams()
  const [application, setApplication] = useState({})

  useEffect(() => {
    getApplications()
    .then(data => setApplication(data.application_meta))
    .catch(error => console.log(error))
  
  
    return () => {
    }
  }, [])

  const getApplications = async () => {
    const {data, error} = await supabase
      .from('applications')
      .select()
      .eq("id", applicationId)
      .single()

    if ( error ) throw error
    console.log(data)
    return data
  }

  
  
  return (
    <div className='px-10'>
      <div className="font-extrabold opacity-1">{`${application.firstname}'s application Details.`}</div>
      <div  className='h-full w-full flex flex-col justify-center'>
        
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">First name:</p>
            <p className="font-bold col-span-3">{application.firstname}</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">Last name:</p>
            <p className="font-bold col-span-3">{application.surname}</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">Age:</p>
            <p className="font-bold col-span-3">{application.age}</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">Gender:</p>
            <p className="font-bold col-span-3">{application.gender}</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">Company:</p>
            <p className="font-bold col-span-3">{application.company}</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">Diocese:</p>
            <p className="font-bold col-span-3">{application.diocese}</p>
          </div>
          <div className="grid grid-cols-5 gap-2 mb-2 justify-start w-full">
            <p className="col-span-2">Payment method:</p>
            <p className="font-bold col-span-3">{application.payment_method}</p>
          </div>
        </div>
      <div>
      <div className="flex gap-3">

        <button 
          className="bg-green-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded"
          type="button"

        >
          Approve
        </button>
          <button
            className="bg-red-400 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded"
            type="button"
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  )
}

export default ApplicationAdmin