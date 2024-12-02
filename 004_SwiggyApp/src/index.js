import React from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header"
import Body from "./components/Body"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Error from "./components/Error"
import RestaurantMenu from "./components/RestaurantMenu"
import { Provider } from "react-redux"
import appStore from "./utils/appStore"

const AppLayout = () => {
    return (
        <div className="app">
            <Provider store={appStore}>
                <Header />
            </Provider>
            <Outlet />
        </div>

    );
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/contact",
                    element: <ContactUs />
                }
            ],
            errorElement: <Error />
        },
        {
            path: '/restaurants/:resId',
            element: <RestaurantMenu />
        }
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />);
