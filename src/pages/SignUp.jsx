import React from 'react'
import { Formik, Form, useField } from 'formik'
import { signUpFormValidationSchema } from '../helpers/validation'
import logo from '../assets/media/images/bbgb.png'
import { MyTextInput } from '../components/Form/MyTextInput'
import { useAuth } from '../auth/AuthContext'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function SignUp() {
  const { signUp } = useAuth()

  return (
    <div className="">
      
      <div className={`inline-flex justify-center items-center w-screen dark:bg-dark-bg  h-screen font-montserrat`}>
        <ToastContainer /> 
          <Formik 
            initialValues={{ email: '', password: '',confirmPassword: ''}} 
            validationSchema={signUpFormValidationSchema}
            onSubmit={ async (values, {resetForm}) => {
              try {
                const { confirmPassword, ...credentials } = values
                const { data, error } = await signUp(credentials)
                if ( error ) throw error
                console.log(data)
                toast.success(`user has successfully been signup`, { position: "top-center"})

              } catch (error) {
                console.log(error)
              }
            }}
          >
            <Form className='w-11/12 p-10 sm:w-8/12 md:w-6/12 lg:w-4/12 bg-white dark:bg-dark-bg-700 dark:text-secondary-text shadow-myShadow flex justify-center items-center flex-col rounded-lg'>
              <img src={logo} alt='SACCO logo' width={80} />
              <h1 className='block text-center font-bold text-2xl uppercase dark:text-white'>SignUp</h1>
              <MyTextInput 
                label="Email Address"
                name="email"
                type="text"
                placeholder="Enter your email Address."
                useField={useField}
                className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-full pl-8`}
                container='w-full'
              />
              <MyTextInput  
                label="Enter password"
                name="password"
                type="password"
                placeholder="password"
                useField={useField}
                className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-full pl-8`}
                container='w-full'
              />
               <MyTextInput  
                label="Password Confirm"
                name="confirmPassword"
                type="password"
                placeholder="password"
                useField={useField}
                className={`mt-1 py-3 focus:outline-none focus:ring-2 focus:ring-inputblue bg-inputblue focus:bg-transparent w-full pl-8`}
                container='w-full'
              />
              <button
                  type="submit"
                  className='bg-primary inline-flex items-center justify-center  text-white text-base font-medium px-4 py-2 w-full mt-1'
              >
                submit
              </button>
              {/* <div className='flex justify-between w-full mt-3 text-sm'>
                <Link to="">Already have an account? <span className="text-primary font-semibold">SignUp.</span></Link>
                <Link to="" className="text-primary font-semibold">Forgot Password?</Link>
              </div> */}
            </Form>  
          </Formik>
      </div>
      
    </div>
  )
}

export default SignUp