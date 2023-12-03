import ReactDOM from 'react-dom/client'
// Import our custom CSS
import './assets/scss/styles.scss'
// router
import { RouterProvider } from "react-router-dom"
import router from "./router/"
// state
import { Provider } from 'react-redux'
import { store } from './store'
//
import LoadingOverlay from './components/ui/LoadingOverlay'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
    <LoadingOverlay />
  </Provider>
)
