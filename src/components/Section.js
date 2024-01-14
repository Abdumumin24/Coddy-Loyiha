export default function Section(){
  const  header = [{ 
    name: "Learning Today,Leading Tomorrow",
    izohi: "We are team of talented designers making websites with Bootstrap",
    btn:{
      nomi:"Get Started",
      manzil: "courses.html"

    }


  }]
    return(
      <>
      {header.map((e)=>
         <section id="hero" class="d-flex justify-content-center align-items-center">
        <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
          <h1>{e.name}</h1>
          
          <h2>{e.izohi}</h2>
          <a href={e.btn.manzil} class="btn-get-started">{e.btn.nomi}</a>
        </div>
      </section>
      )}
     
      </>
    )
}