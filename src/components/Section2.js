const Section2 = () =>{
  const  section2 = [{ 
    name: "Why Choose Mentor?",
    izohi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.",
    btn:{
      nomi:"Learn More ",
      manzil: "about.html",
    title1: "Corporis voluptates sit",
    title2: "Ullamco laboris ladore pan",
    title3: "Labore consequatur",
      t_izohi1: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
      t_izohi2: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
      t_izohi3: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",


    }


  }]
    return(
      <>
      {section2.map((e)=>
        <section id="why-us" className="why-us">
        <div className="container" data-aos="fade-up">
  
          <div className="row">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="content">
                <h3>Why Choose Mentor?</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                  Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                </p>
                <div className="text-center">
                  <a href="about.html" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-boxes d-flex flex-column justify-content-center">
                <div className="row">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-receipt"></i>
                      <h4>Corporis voluptates sit</h4>
                      <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-cube-alt"></i>
                      <h4>Ullamco laboris ladore pan</h4>
                      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                    </div>
                  </div>
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div className="icon-box mt-4 mt-xl-0">
                      <i className="bx bx-images"></i>
                      <h4>Labore consequatur</h4>
                      <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
        </div>
      </section>
      )}
        
      </>
    )
}

export default Section2;