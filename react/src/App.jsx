// import "./App.css"
// import BookList from "./BookList";
import Axios from "./Axios";
import Fetch from "./useEffect/Fetch";
import MulReturn from "./useEffect/MulReturn";
import UseEffect from "./useEffect/UseEffect";
import UseReducer from "./UseReducer/UseReducer";
import UseState from "./UseState";
import Data from "./useState/Data";
import From from "./useState/From";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from './Params/UserDetails';

function App() {



  return (
    <div >
      {/* <BookList/> */}
      {/* <UseState/> */}
      {/* <Data/> */}
      {/* <From/> */}
      {/* <UseEffect/> */}
      {/* <Fetch/> */}
      {/* <MulReturn/> */}
      {/* <UseReducer/> */}
      {/* <Axios/> */}

      <Router>
      <Routes>
        <Route path="/users/:userId/:name" element={<UserDetails />} />
      </Routes>
    </Router>
      
    </div>
  )
}

export default App
