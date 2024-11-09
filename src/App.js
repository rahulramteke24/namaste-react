import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";

// const child = <h1>I'm child.</h1>;
// const youngChild = (
//     <div className='youngChild'>
//         <h2>I,m a young child!!!!</h2>
//     </div>
// );

// const Parent = () => (
//     <div id="parent" className='newParent'>
//         <h1>I'm parent!</h1>
//         {child}
//         {youngChild}
//     </div>
// );
// // JSX is a HTML like syntax
// // A react component is a normal js function which returns are react element(JSX code is transpiled
// // into pure js code which the browser understands. i.e. JSX code > react.createElement >
// // react element > js object)
// const ReactComponent = () => (
//     <div>
//         <h1>I'm a react component!!!</h1>
//         <Parent />
//         <Parent />
//         <Parent />
//         <Parent />
//         <Parent />
//         <Parent />
//     </div>
// );

// const styleCard = {
//     backgroundColor: "#f0f0f0"
// };

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
//earlier component render without routing
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
