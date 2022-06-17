import { useEffect, useState } from 'react'
import { supabase } from '../helpers/supabase/supabase'




function Dashboard() {
  const [ applications, setApplications ] = useState([])

  useEffect(() => {
    
    getApplications()
    .then(data => setApplications(data))
    .catch(error => console.log(error))
  
    return () => {
    }
  }, [])

  const getApplications = async () => {
    const {data, error} = await supabase
      .from('applications')
      .select()

    if ( error ) throw error
    console.log(data)
    return data
  }
  
  return (
    <div>
      applications
      <table className='table-auto'>
        <thead>
          <tr>
            <td>Application id</td>
            <td>First Name</td>
            <td>Surname</td>
            <td>Age</td>
            <td>gender</td>
            <td>email</td>
          </tr>
        </thead>
        <tbody>
          {
            applications?.length > 0 && (
              applications.map((application, index) => {
                const {id, application_meta: { firstname, surname, age, gender, email} }= application
                return (
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{firstname}</td>
                    <td>{surname}</td>
                    <td>{age}</td>
                    <td>{gender}</td>
                    <td>{email}</td>
                  </tr>
                )

              })
            )
          }

        </tbody> 
        <tfoot>
          <tr>
            <td>Application id</td>
            <td>First Name</td>
            <td>Surname</td>
            <td>Age</td>
            <td>gender</td>
            <td>email</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Dashboard