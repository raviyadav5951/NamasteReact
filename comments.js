import React from "react";
import ReactDOM from "react-dom/client";


/**
 * Header
 *  -Logo
 * - Nav items
 * Body
 *  Search
 *  RestaurantContainer
 *    RestaurantCard
 * Footer
 *  Copyright
 *  Links
 *  Address
 *  Contact
 */
//React.createElement => ReactElement(object)=> HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from react!"
);

console.log(heading);

//JSX (gets transpiled before it reaches JS engine)- Parcel(Babel)

//JSX=>Babel transpiles it to React.createElement=>React element=>JS object-HTML element(render)

const jsxHeading = (
  <h1 className="head" tabIndex={1}>
    Hello world from JSX
  </h1>
);

const HeaderComponent = () => {
  return(
  <h1 className="head" tabIndex={1}>
    Hello world from JSX HeaderComponent
  </h1>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);