const Footer = () =>{
  const footer  = [{
    card1:{
      card_title: "Mentor",
      card_manzil: <p>
      A108 Adam Street <br/>
      New York, NY 535022<br/>
      United States <br/><br/>
    </p>,
      card_phone_nomi: "Phone:",
      card_phone: "+1 5589 55488 55",
      card_email_nomi: "Email:",
      card_email: "info@example.com",
    },
    card2:{
      card_title: "Useful Links",
      manzil_nomi1: "Home",
      manzil1: "",
      manzil_nomi2: "About us",
      manzil2: "",
      manzil_nomi3: "Services",
      manzil3: "",
      manzil_nomi4: "Terms of service",
      manzil4: "",
      manzil_nomi5: "Privacy policy",
      manzil5: "",
    },
  card3:{
    card_title: "Our Services",
      manzil_nomi1: "Web Design",
      manzil1: "",
      manzil_nomi2: "Web Development",
      manzil2: "",
      manzil_nomi3: "Product Management",
      manzil3: "",
      manzil_nomi4: "Marketing",
      manzil4: "",
      manzil_nomi5: "Graphic Design",
      manzil5: "",
  },
  card4:{
    card_title: "Join Our Newsletter",
    card_izohi: "Tamen quem nulla quae legam multos aute sint culpa legam noster magna",
  },
}];
    return(
      <>
      {footer.map((e)=>
      <footer id="footer">

      <div className="footer-top">
        <div className="container">
          <div className="row">
  
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>{e.card1.card_title}</h3>
              <p>
                {e.card1.card_manzil}
                <strong>{e.card1.card_phone_nomi}</strong>  {e.card1.card_phone}<br/>
                <strong>{e.card1.card_email_nomi}</strong> {e.card1.card_email}<br/>
              </p>
            </div>
  
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>{e.card2.card_title}</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/">{e.card2.manzil_nomi1}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">{e.card2.manzil_nomi2}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">{e.card2.manzil_nomi3}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">{e.card2.manzil_nomi4}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">{e.card2.manzil_nomi5}</a></li>
              </ul>
            </div>
  
            <div className="col-lg-3 col-md-6 footer-links">
              <h4>{e.card3.card_title}</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <a href="/">{e.card3.manzil_nomi1}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">{e.card3.manzil_nomi2}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">{e.card3.manzil_nomi3}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">{e.card3.manzil_nomi4}</a></li>
                <li><i className="bx bx-chevron-right"></i> <a href="/">{e.card3.manzil_nomi5}</a></li>
              </ul>
            </div>
  
            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>{e.card4.card_title}</h4>
              <p>{e.card4.card_izohi}</p>
              <form action="" method="post">
                <input type="email" name="email"/><input type="submit" value="Subscribe"/>
              </form>
            </div>
  
          </div>
        </div>
      </div>
  
      
    </footer>
      )}
        
  </>
    )
}
export default Footer;