import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import './App.css'
import { useRef } from "react";

function App() {
  // routes...
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/route_one" element={<RouteOne />} />
            <Route path="/route_two" element={<RouteTwo />} />
            <Route path="/" element={<>{/*<LandingPage />*/} <FocusInput/></>} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function FocusInput() {
  // Step 1: Create a ref to store the input element
  const inputRef = useRef(null);

  // Step 2: Define the function to focus the input
  const handleFocus = () => {
    // Access the DOM node and call the focus method
    inputRef.current.focus();
  };

  return (
    <div>
      {/* Step 3: Attach the ref to the input element */}
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus the input</button>
    </div>
  );
}

function Layout (){
  return (
    <div>
      <div>
        |
        <Link to={"/"}>Home</Link>
        |
        <Link to={"/route_one"}>Route 1</Link>
        |
        <Link to={"/route_two"}>Route 2</Link>
        |
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        Footer | Contact Us
      </div>
    </div>
  )
}

function ErrorPage(){
  return (
    <div> 
      Sorry Page not Found
    </div>
  )
}

function RouteOne(){
  return (
    <div>
      this is Route one
    </div>
  )
}

function LandingPage(){
  return (
    <div>
      this is Landing Page
    </div>
  )
}
function RouteTwo(){
  const navigate = useNavigate()
  function redirectUser(){
    navigate("/")
  }
  return (
    <div>
      this is Route two
      <button onClick={redirectUser}>Redirect To Landing Page</button>
    </div>
  )
}

export default App
