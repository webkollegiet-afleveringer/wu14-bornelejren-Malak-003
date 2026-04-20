import ReactDOM from "react-dom/client"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router"

import App from './App.jsx'
import "./style/main.sass"  


import Forside from './pages/forside.jsx'
import OmOs from './pages/omOs.jsx'
import Sponsor from './pages/sponsor.jsx'
import Takker from './pages/takker.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      { path: "/", element: <Forside /> },
      { path: "/om-os", element: <OmOs /> },
      { path: "/sponsor", element: <Sponsor /> },
      {path: "/takker", element: <Takker /> }


    ]
  },
]);


const root = document.getElementById("root")

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
)


