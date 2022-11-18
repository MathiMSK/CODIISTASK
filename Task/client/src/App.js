import './App.css';
import { HashRouter, Route ,Routes  } from "react-router-dom";
import LoginComp from './components/LoginComp';
import Nav from "./components/nav";
import Register from './components/Register';
function App() {
  return (
    <> 
   <HashRouter>
      {/* <video autoPlay muted loop id='video'>
            <source src={bgvideo} type="video/mp4" />
            </video> */}
        <Nav />
        <Routes>

              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<LoginComp />} />
            </Routes>
      </HashRouter> 
    </>

  );
}

export default App;
