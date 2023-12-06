import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import Home from "../pages/Home"
import Place from "../pages/Place"
import EventDetail from "../pages/EventDetail"
import PastEvents from "../pages/PastEvents"
import Login from "../pages/Login"
import SignUp from "../pages/Signup"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/past-events",
        element: <PastEvents />
      },
      {
        path: "/place/:placeId",
        element: <Place />
      },
      {
        path: "/event/:eventId",
        element: <EventDetail />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  }
])

export default router