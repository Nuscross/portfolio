import { createBrowserRouter, RouterProvider }  from "react-router-dom";
import { Layout, Home, Menu, Services, Blog, About, Contact, Cart } from "./pages/index";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ]
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  )

}

export default App;