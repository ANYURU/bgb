import { useEffect } from 'react'
import { useParams } from 'react-router-dom'


function ApplicationAdmin() {
  const { id } = useParams()
  const [application, setApplication] = useState()

  useEffect(() => {
    getApplications()
    .then(data => setApplication(data))
    .catch(error => console.log(error))
  
  
    return () => {
    }
  }, [])

  const getApplications = async () => {
    const {data, error} = await supabase
      .from('applications')
      .select()
      s

    if ( error ) throw error
    console.log(data)
    return data
  }
  
  return (
    <div>
      <div>
        <h2>First Name</h2>
        <span></span>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <button
          type
        
        >
          Approve
        </button>
        <button
          Reject

        >
          Reject
        </button>
      </div>
    </div>
  )
}

export default ApplicationAdmin