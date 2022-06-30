import { useEffect, useState } from 'react'
import { supabase } from '../helpers/supabase/supabase'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const [ applications, setApplications ] = useState([])
  const [ show, setShow ] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    
    getApplications()
    .then(data => setApplications(data))
    .catch(error => console.log(error))
  
    return () => {}
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
    <div className='px-5'>
      <h1 className='text-gray-700 font-extrabold capitalize'>applications</h1>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            {/* <td className='px-6 py-3'>Application id</td> */}
            <td className='px-6 py-3'>First Name</td>
            <td className='px-6 py-3'>Surname</td>
            <td className='px-6 py-3'>Age</td>
            <td className='px-6 py-3'>gender</td>
            <td className='px-6 py-3'>email</td>
          </tr>
        </thead>
        <tbody>
          {
            applications?.length > 0 && (
              applications.map((application, index) => {
                const {id: applicationId, application_meta: { firstname, surname, age, gender, email} }= application
                return (
                    <tr
                      key={index}
                      onClick={() => navigate(`/dashboard/${applicationId}`)}
                      className={`${index % 2 === 0 ? "bg-gray-50 dark:bg-dark-bg" : ""} hover:bg-gray-100 dark:hover:bg-dark-bg-600 cursor-pointer`}
                    >
                      {/* <td className='px-6 py-3'>{applicationId}</td> */}
                      <td className='px-6 py-3'>{firstname}</td>
                      <td className='px-6 py-3'>{surname}</td>
                      <td className='px-6 py-3'>{age}</td>
                      <td className='px-6 py-3'>{gender}</td>
                      <td className='px-6 py-3'> {email}</td>
                    </tr>
  
                )

              })
            )
          }

        </tbody> 
        <tfoot className='text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            {/* <td className='px-6 py-3'>Application id</td> */}
            <td className='px-6 py-3'>First Name</td>
            <td className='px-6 py-3'>Surname</td>
            <td className='px-6 py-3'>Age</td>
            <td className='px-6 py-3'>gender</td>
            <td className='px-6 py-3'>email</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default Dashboard