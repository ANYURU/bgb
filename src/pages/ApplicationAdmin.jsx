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
    <div>
      <div>
        <span>Application Id: </span>
        <span>{applicationId}</span>
      </div>
      <div>
        <span>Surname:</span>
        <span>{application?.surname}</span>
      </div>
      <div>
        <span>First name:</span>
        <span>{application?.firstname}</span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span></span>
        <span></span>         
      </div>
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <button
          type="button"
        
        >
          Approve
        </button>
        <button
          type="button"

        >
          Reject
        </button>
      </div>
    </div>
  )
}

export default ApplicationAdmin