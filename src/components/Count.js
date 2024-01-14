export default function Count(){
  const  count = [{ 
    name1: "Students",
    name2: "Courses",
    name3: "Events",
    name4: "Trainers",
    soni1: "1232",
    soni2: "64",
    soni3: "42",
    soni4: "15",



  }]
    return(
      <>
      {count.map((e)=>
      <section id="counts" className="counts section-bg">
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" className="purecounter">{e.soni1}</span>
            <p>{e.name1}</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" className="purecounter">{e.soni2}</span>
            <p>{e.name2}</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter">{e.soni3}</span>
            <p>{e.name3}</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">{e.soni4}</span>
            <p>{e.name3}</p>
          </div>

        </div>

      </div>
    </section>
      )}
        
      </>
    )
}