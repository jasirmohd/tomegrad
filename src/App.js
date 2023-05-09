import './App.css';
import Book from './components/book/Book';
import Bundle from './components/bundle/Bundle';
// import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './components/home/Home';
import Tutorial from './components/tutorial/Tutorial';
import Cart from './components/cart/Cart'

function App() {
  return (
    <>
    {/* <Home /> */}
    {/* <Book /> */}
    {/* <Bundle /> */}
    {/* <Tutorial /> */}
    <Cart />
      {/* <BrowserRouter> */}
      {/* <Routes> */}
        {/* <Route exact path="/" element={<Home/>}/> */}
        {/* <Route exact path="/about" element={<About/>}/> */}
      {/* </Routes> */}
      {/* </BrowserRouter> */}
      </>
  );
}

export default App;
