import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import Api from '../store/api/axios-auth'
import { useDispatch } from 'react-redux'
import { setAccessToken } from '../store/modules/auth'
import { useNavigate, Link } from "react-router-dom"

const initialValues = {
  userName: '',
  password: '',
}

const validationSchema = Yup.object({
  userName: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
})

const LoginPage = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogin = (values) => {
    Api().post('/auth/login', values).then(response => {
      if (response?.data?.access_token) {
        dispatch(setAccessToken(response.data.access_token))
        navigate("/")
      }
    }).catch(error => {
      console.error('Error fetching data:', error)
    })
  }

  return (
    <>
      <div id='login' className="p-5 container mt-5">
        <h2 className='text-center'>Log In</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
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
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
      <div id='signupItem' className='mt-3 text-center'>
        <span>Henüz bir üyeliğiniz yoksa import <Link to="/signup">üye olmak için tıklayınız.</Link></span>
      </div>
    </>
  );
}

export default LoginPage