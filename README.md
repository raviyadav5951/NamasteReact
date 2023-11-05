# Parcel

- Create build
- Auto refresh page
- Create local server
- HMR (Hot module replacement)
- File watching algoritm(C++)
- Caching (Faster Builds)
- Image Optimisation
- Minification
- Bundling
- Compression
- Consistent hashing
- Differential bundling (supports older browsers)
- Code spliting
- Diagnostic
- Error handling
- HTTPs
- Tree shaking (remove unused code)
- Different dev and prod builds

## browserslist

- Browserlist compatibility
- https://browserslist.dev/

## JSX and React

- JSX and react is different. JSX makes life easy for react developers
- React.createElement is react and JSX directly merges HTML+ JS together
- const jsxHeading = <h1> I am written using JSX</h1>

## Basic design structure

/\*\*

- Header
- -Logo
- - Nav items
- Body
- Search
- RestaurantContainer
- RestaurantCard
- Footer
- Copyright
- Links
- Address
- Contact
  \*/

Two types of export/import
Default import/export is done like:
export default Component
import Component from 'path'

Named export/import done like this:

export const CDN_URL
import{CDN_URL} from 'path'

## DOM

- React works on virtual DOM
- Reconciliation(React 16 React Fiber)
- Virtual DOM is representation of actual DOM (if printing component)
- It will display JS object representation of actual HTML tags(Which is real DOM)
- Diff Algorithm calculates diff and rerenders the UI

### Why React is fast

- It efficiently manipulates the virtual DOM

## seEffect

- useEffect will be called after the component is rendered

## Routing(react-dom-router)

- react-dom-router used to provide routing support
- Client side routing and single page app interchange the component and loads it.
- <Outlet></Outlet> from react-dom-router automcatically replaces the components based on the path added as string. Loads children inside outlet
- <Link to={destination_component_routename}></Link> : this will load the destination component (under the hood uses a href)
- useParams hook from react-dom-router fetches the params that are passed to route and we can use this param to make the component dynamic like restaturant menu page which is dynamic and loads different menu based on the restaurant id.

## class component

- Parent constructor->Parent render-> componentdidmount

- If Parent component is having child component then
  Parent constructor->Parent render-> Child constructor->Child render-> child componentDidmount-> Parent didcomponentMount

- To complete the cleanup function in useEffect return callback fun from inside the useEffect

useEffect(()=>{
const timer= setInterval(()=>{
log("timer called)
},1000)

return ()=>{
clearInterval(timer)
}
})

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## Ep-9 (custom hook)

- creating useRestaurantHook which takes resID and returns restaurant information from where its called.

- export and import like the function
- created useOnlineStatus which returns online and offline status

### Bundling
- Bundling the complete app inside one js file will make it huge, so we have two options 
- Chunking, code splting, dynamic bundling, on demand loading,lazy loading
- Above process creates smaller chunks of the bundle
- How to make smaller bundles and what is present in smaller bundles
- Bundle should have code for each major feature.(spliting the logic)
- e.g makemytrip one bundle for hotels, bus booking, flight booking
- We load Grocery component only when user clicks on grocery option
- We need to use lazy(()=>import("path of component" )) to import and assign to cons nameOfCOmponent
- We need to wrap dynamic comp inside Suspense and provide a jsx as fallback to show during the rendering finally completed by react

## Ep-10 (Styling)
- sass and scss
- styled-components
- material ui components
- bootstrap and chakra ui

