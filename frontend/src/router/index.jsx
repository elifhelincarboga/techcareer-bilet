import { createBrowserRouter } from "react-router-dom"

import App from "../App"
import Home from "../pages/Home"
import Place from "../pages/Place"
import EventDetail from "../pages/EventDetail"
import PastEvents from "../pages/PastEvents"

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
  }
])

export default router