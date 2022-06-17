import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


export const loginFormValidationSchema = Yup.object({
    email: Yup.string().email("Must be a valid email.").max(255),
    password: Yup.string().trim().min(8, 'Password must be atleast 8 characters').required("Password is required"),
 })

export const ApplicationFormValidationSchema = Yup.object({
    firstname: Yup.string().required("Required!"),
    surname: Yup.string().required("Required!"),
    phone_contact: Yup.string().required("Required!"),
    gender: Yup.string().required("Required!"),
    age: Yup.string().required("Required!")
})

export const SignUpFormValidationSchema = Yup.object({
    
})