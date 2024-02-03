import Count from "./Count"

export default function About(){
  const  About = [{ 
    Img: "",
    name: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
    izohi: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sections:{
      section1: " Ullamco laboris nisi ut aliquip ex ea commodo consequat.", 
      section2: " Duis aute irure dolor in reprehenderit in voluptate velit.",
      section3: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.",
    },
    tugashi: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate",
    img: "",

  }]
    return(
      <>
      {About.map((e)=>
      <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
            <img src="assets/img/about.jpg" class="img-fluid" alt=""/>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <h3>{e.name}</h3>
            <p class="fst-italic">
              {e.izohi}
            </p>
            <ul>
              <li><i class="bi bi-check-circle"></i>{e.sections.section1}</li>
              <li><i class="bi bi-check-circle"></i> {e.sections.section2}</li>
              <li><i class="bi bi-check-circle"></i>{e.sections.section3}</li>
            </ul>
            <p>
              {e.tugashi}
            </p>

          </div>
        </div>

      </div>
    </section>
      )}
      </>
    )
}