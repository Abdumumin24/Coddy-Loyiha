export default function Navbaritem({ items }) {
  return (
    <>
      {items.submenu ? (
        <>
          <li className="dropdown">
            <a href="/">
                {items.nomi }
              <span>{items.submenu.nomi}</span>{" "}
              <i className="bi bi-chevron-down"></i>
            </a>
            <ul>
              {items.submenu.map((e) => (
                <li>
                  <a href={e.manzil}>{e.nomi}</a>
                </li>
              ))}
            </ul>
          </li>
        </>
      ) : (
        <li>
          <a className="active" href={items.manzil}>
            {items.nomi}
          
          </a>
         
        </li>
  
       
      ) }
      
    </>
  );

}
