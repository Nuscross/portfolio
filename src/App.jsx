import { createBrowserRouter, RouterProvider }  from "react-router-dom";
import { Layout, Home, Menu, Services, Blog, About, Contact, Cart, Error } from "./pages/index";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
          errorElement: <Error />,
        },
        {
          path: "/menu",
          element: <Menu />,
          errorElement: <Error />,
        },
        {
          path: "/services",
          element: <Services />,
          errorElement: <Error />,
        },
        {
          path: "/blog",
          element: <Blog />,
          errorElement: <Error />,
        },
        {
          path: "/about",
          element: <About />,
          errorElement: <Error />,
        },
        {
          path: "/contact",
          element: <Contact />,
          errorElement: <Error />,
        },
        {
          path: "/cart",
          element: <Cart />,
          errorElement: <Error />,
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