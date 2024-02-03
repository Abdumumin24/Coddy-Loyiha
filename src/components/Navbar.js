// import {useState} from 'react'
import { Link } from 'react-router-dom';
import Navbaritem from './Navbaritem';
const Navbar = () =>{

  const qiymat  = [
    {
      id:"1",
      manzil:"/",
      nomi:"Bosh sahifa"
    },
    {
      id:"2",
      manzil: "/about",
      nomi: "Biz haqimizda"
    },
    {
      id:"3",
      manzil: "/courses",
      nomi: "Kurslar"
    },
    {
      id:"4",
      manzil:"#",
      nomi:"Developer",
      submenu:[
        {
          manzil:"/react",
          nomi:"React developer"
        },
        {
          manzil:"/nodejs",
          nomi:"Nodejs developer"
        },
        {
          manzil:"/vue",
          nomi:"Vuejs developer"
        },
        {
          manzil:"/fullstack",
          nomi:"FullStack developer"
        }
      ]
    },
    {
      id:"5",
      manzil: "/contact",
      nomi: "Bog'lanish"
    },
    {
      id:"6",
      manzil: "/login",
      nomi:"Boshlash"
    }
];
    



    return(
        <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">

      <h1 className="logo me-auto"><a href="index.html">Mentor</a></h1>
     
       <Link to="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"/></Link>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
        {
          qiymat.map(
            (e)=>(<Navbaritem key={e.id} items={e} />)
            )
            }

          {/* <li className="dropdown"><a href="/"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
            <ul> */}
              {/* <li><a href="/">Drop Down 1</a></li>
              <li className="dropdown"><a href="/"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="/">Deep Drop Down 1</a></li>
                  <li><a href="/">Deep Drop Down 2</a></li>
                  <li><a href="/">Deep Drop Down 3</a></li>
                  <li><a href="/">Deep Drop Down 4</a></li>
                  <li><a href="/">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="/">Drop Down 2</a></li>
              <li><a href="/">Drop Down 3</a></li>
              <li><a href="/">Drop Down 4</a></li>
            </ul>
          </li> */}
          {/* <li><a href="contact.html">Contact</a></li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

     

    </div>
  </header>
    )
} 

export default Navbar