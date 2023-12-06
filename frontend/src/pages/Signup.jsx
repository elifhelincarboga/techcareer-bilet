import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Api from '../store/api/axios-auth'
import { useNavigate } from "react-router-dom"

const initialValues = {
  userName: '',
  email: '',
  password: '',
}

const validationSchema = Yup.object({
  userName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string().required('Required'),
})

const SignupPage = () => {
  const navigate = useNavigate()
  const handleSignup = (values) => {
  Api().post('/users/register', values).then(response => {
      if (response?.data?.success){
        navigate("/login")
      }
    }).catch(error => {
        console.error('Error fetching data:', error)
    })  
  }

  return (
    <>
      <div id='login' className="p-5 container mt-5">
        <h2 className='text-center'>Sign Up</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSignup}
        >
          <Form>
            <div className='row d-flex flex-column align-items-center'>
              <div className="col-md-6 mb-3 mt-5">
                <label htmlFor="userName" className="form-label">
                  Username
                </label>
                <Field
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter your username"
                  className="form-control"
                />
                <ErrorMessage
                  name="userName"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-md-6 mb-3">
                <label htmlFor="email" className="form-label">
                  E-mail
                </label>
                <Field
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="form-control"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-danger"
                />
              </div>
              <div className="col-md-6 mb-5">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                 Sign Up
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  )
}

export default SignupPage;