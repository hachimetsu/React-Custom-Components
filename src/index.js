import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Home from './pages/Home';
// import List from './pages/List';
// import BigSpinner from './components/BigSpinner';
// import PageNotFound from './pages/PageNotFound';
// let router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Home />
//     },
//     {
//         path: "/list",
//         element: <List />
//     },
//     {
//         path: "*",
//         element: <PageNotFound />,
//         errorElement: <PageNotFound />
//     }
// ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
        {/* <div className="mt-5 pt-5">
            <RouterProvider
                router={router}
                fallbackElement={<BigSpinner />}
            />
        </div> */}
    </React.StrictMode>
);

