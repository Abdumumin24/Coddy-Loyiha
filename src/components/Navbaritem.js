import {Link} from "react-router-dom"
export default function Navbaritem({ items }) {
  return (
    <>
      {items.submenu ? (
        
          <li className="dropdown">
            <Link to="/">
                {items.nomi }
              <span>{items.submenu.nomi}</span>{" "}
              <i className="bi bi-chevron-down"></i>
            </Link>
            <ul>
              {items.submenu.map((e) => (
                <li>
                  <Link to={e.manzil}>{e.nomi}</Link>
                </li>
              ))}
            </ul>
          </li>
        
      ) : (
        <li>
          <Link className="active" to={items.manzil}>
            {items.nomi}
          
          </Link>
         
        </li>
  
       
      ) }
      
    </>
  );

}
