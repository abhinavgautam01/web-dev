import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/route_one" element={<RouteOne />} />
            <Route path="/route_two" element={<RouteTwo />} />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
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
