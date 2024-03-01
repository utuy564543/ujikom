import React from "react";
import "./App.css";
import ProjectPage from "./component/ProjectPage";
import ProjectsPage from "./component/ProjectsPage";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./component/home/HomePage";
import ContactForm from "./component/contact use/pesanan";
import LoginForm from "./component/login/login";

function App() {
  // const[data, setData]=useState([])

  // useEffect(()=>{
  //   fetch("http://localhost:3001/projects")
  //   .then((res) => res.json())
  //   .then((json) => setData(json))
  // },[])

  return (
    <BrowserRouter>
      <header className="sticky pisah">
        <div className="list">
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo-template-design-84c2a388516ead623b3dcdf85bf1f94e_screen.jpg?ts=1604496744" alt="" width="49" height="20" />
          <NavLink id="link" to="/" className="button rounded">
            <span className="icon-home"></span>
            Home
          </NavLink>

          <NavLink id="link" to="/projects" className="button rounded">
            List Makanan
          </NavLink>

          <NavLink id="link" to="/contact" className="button rounded">
            contact
          </NavLink>

          <NavLink id="link" to="/login" className="button rounded">
            login
          </NavLink>
        </div>
      </header>

      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </BrowserRouter>
    // <div className="row">

    //         {data.map(item =>(
    //             <figure className="card">
    //                 <p>{item.id}</p>
    //                 <img src={item.imageUrl} alt="" />
    //                 <p>Nama : {item.name}</p>
    //                 <p>Deskripsi : {item.description}</p>
    //                 <p>Tanggal :{item.contractSignedOn}</p>
    //                 <p>Budget : {item.budget}</p>
    //             </figure>
    //         ))}

    // </div>
  );
}

export default App;
