import React from 'react'
import { Formik, Form, useField } from 'formik'
import { MyTextInput } from '../components/Form/MyTextInput'
import { MySelect } from '../components/Form/MySelect'
import { formData } from '../helpers/applicationForm'
import { ApplicationFormValidationSchema as validationSchema } from '../helpers/validation'
import { supabase } from '../helpers/supabase/supabase'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from '../auth/AuthContext'


function Application() {
    const initialvalues = { firstname:'', surname:'', phone_contact:'', email:'', gender:'', age:'', company:'', diocese:'', payment_method:'' }
    const { user } = useAuth()
  return (
    <div>
      <ToastContainer />
      <h1 className='text-xl text-gray-700 font-medium mx-7'>BGBU CONNECT CONFERENCE 2022</h1>
      <p className='pb-7 mx-7'>
        Enter your details here to apply for participation in the BGBU Connect Conference Uganda 2022
      </p>
      <h2 className='mx-7'>Application form</h2>
      <Formik
        initialValues={initialvalues}
        validationSchema={validationSchema}
        onSubmit={async (values, {resetForm}) => {
          try {
            const {data, error} = await supabase
              .from('applications')
              .insert(
                [ 
                  {
                    created_at: ((new Date()).toISOString()).toLocaleString('en-GB', { timeZone: 'UTC' }),
                    updated_at: ((new Date()).toISOString()).toLocaleString('en-GB', { timeZone: 'UTC' }),
                    application_meta: {
                      ...values
                    }
                  }
                ]
              )

              if (error) throw error
              console.log(data)
              toast.success(`Application submitted for review`, { position: 'top-center'})
              resetForm()

          } catch ( error ){
            console.log(error)
          }
          // console.log(values)
        }}
      >   
          <Form className='w-full'>
            <div className='flex flex-col items-center  '>
              <div className='grid tablet:gap-x-12 mobile:grid-cols-1 tablet:gap-y-6 desktop:gap-x-20 tablet:grid-cols-2 desktop:grid-cols-4 mb-6'>
                <MyTextInput
                    label="First Name"
                    name="firstname"
                    type="text"
                    placeholder="Enter your first name."
                    useField={useField}
                    className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-56 pl-8`}
                    />
                <MyTextInput 
                    label="Surname"
                    name="surname"
                    type="text"
                    placeholder="Enter your surname"
                    useField={useField}
                    className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-56 pl-8`}
                    />
                <MyTextInput 
                    label="Phone Contact"
                    name="phone_contact"
                    type="tel"
                    placeholder="0777777777"
                    useField={useField}
                    className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-56 pl-8`}
                    />
                <MyTextInput 
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="example@gmail.com"
                    useField={useField}
                    className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-56 pl-8`}
                    />
              </div>
              
              <div className='grid tablet:gap-x-12 tablet:gap-y-6 desktop:gap-x-20 desktop:gap-y-10  mobile:grid-cols-1  tablet:grid-cols-2 desktop:grid-cols-4'>
                <MyTextInput 
                    label="Gender"
                    name="gender"
                    type="text"
                    placeholder="Enter your surname"
                    useField={useField}
                    className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-56 pl-8`}
                    />
                <MyTextInput 
                    label="Age"
                    name="age"
                    type="number"
                    placeholder="Enter your age"
                    useField={useField}
                    className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-56 pl-8`}
                    />
                <MyTextInput 
                    label="Company"
                    name="company"
                    type="text"
                    placeholder="Enter your company"
                    useField={useField}
                    className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-56 pl-8`}
                    />
                <MySelect 
                    label="Diocese"
                    name="diocese"
                    type="text"
                    useField={useField}
                    className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-56 pl-8 h-12`}
                    >
                      <option value="">Select Diocese</option>
                      {formData?.dioceses.map((diocese, index) => (
                        <option key={index} value={diocese}>{diocese}</option>
                      ))}
                </MySelect>
                <MySelect 
                    label="Preferred mode of Payment"
                    name="payment_method"
                    type="text"
                    placeholder="Enter your company"
                    useField={useField}
                    className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-56 pl-8 h-12`}
                >
                  <option value="">Select Method</option>
                    {formData?.paymentMethods.map((method, index) => (
                      <option key={index} value={method}>{method}</option>
                    ))}
                </MySelect>  

              </div>
            </div>
            <div className='flex my-4 mobile:justify-center tablet:justify-center desktop:justify-start sm:justify-center desktop:ml-24 '>
              <button type="submit" 
                className='bg-primary inline-flex items-center justify-center text-white text-base font-medium py-2 h-12 w-40 mt-1'
              >
                Submit
              </button>
            </div>
              
          </Form>
      </Formik>
    </div>
  )
}

export default Application