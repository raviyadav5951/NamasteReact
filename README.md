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

