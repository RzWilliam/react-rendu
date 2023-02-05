import Navbar from './components/Navbar';
import Home from './pages/Home';
import './style.scss'
import {Routes, Route} from "react-router-dom"
import SignUpModal from "./components/SignUpModal";
import SignInModal from "./components/SignInModal"
import Private from './pages/Private'


function App() {
  return (
    <div className="App">
      <SignUpModal />
      <SignInModal />
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/private" element={<Private />}>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
