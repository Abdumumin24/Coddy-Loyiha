const PopularCourses = () =>{
  const  courses = [{ 
    title1: "Courses",
    title2: "Popular Courses",
    card1:{
      card_name: "Web Development",
      card_title: "Website Design",
      card_img: "",
      prise: "$169",
      card_izohi: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      trainer_name: "Antonio",
      members: "50",
      likes: "65",
    },
    card2:{
      card_name: "Marketing",
      card_title: "Search Engine Optimization",
      card_img: "",
      prise: "$250",
      card_izohi: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      trainer_name: "Lana",
      members: "35",
      likes: "42",
    },
    card3:{
      card_name: "Content",
      card_title: "Copywriting",
      card_img: "",
      prise: "$180",
      card_izohi: "Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.",
      trainer_name: "Brandon",
      members: "20",
      likes: "85",
    },
    


  }]
    return(
      <>
      {courses.map((e)=>
      <section id="popular-courses" class="courses">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>{e.title1}</h2>
          <p>{e.title2}</p>
        </div>

        <div class="row" data-aos="zoom-in" data-aos-delay="100">

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="course-item">
              <img src="assets/img/course-1.jpg" class="img-fluid" alt="..."/>
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>{e.card1.card_name}</h4>
                  <p class="price">{e.card1.prise}</p>
                </div>

                <h3><a href="course-details.html">{e.card1.card_title}</a></h3>
                <p>{e.card1.card_izohi}</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt=""/>
                    <span>{e.card1.trainer_name}</span>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bx bx-user"></i>&nbsp;{e.card1.members}
                    &nbsp;&nbsp;
                    <i class="bx bx-heart"></i>&nbsp;{e.card1.likes}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="course-item">
              <img src="assets/img/course-2.jpg" class="img-fluid" alt="..."/>
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>{e.card2.card_name}</h4>
                  <p class="price">{e.card2.prise}</p>
                </div>

                <h3><a href="course-details.html">{e.card2.card_title}</a></h3>
                <p>{e.card2.card_izohi}</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-2.jpg" class="img-fluid" alt=""/>
                    <span>{e.card1.trainer_name}</span>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bx bx-user"></i>&nbsp;{e.card1.members}
                    &nbsp;&nbsp;
                    <i class="bx bx-heart"></i>&nbsp;{e.card1.likes}
                  </div>
                </div>
              </div>
            </div>
          </div> 

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="course-item">
              <img src="assets/img/course-3.jpg" class="img-fluid" alt="..."/>
              <div class="course-content">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4>{e.card3.card_name}</h4>
                  <p class="price">{e.card3.prise}</p>
                </div>

                <h3><a href="course-details.html">{e.card3.card_title}</a></h3>
                <p>{e.card3.card_izohi}</p>
                <div class="trainer d-flex justify-content-between align-items-center">
                  <div class="trainer-profile d-flex align-items-center">
                    <img src="assets/img/trainers/trainer-3.jpg" class="img-fluid" alt=""/>
                    <span>{e.card3.trainer_name}</span>
                  </div>
                  <div class="trainer-rank d-flex align-items-center">
                    <i class="bx bx-user"></i>&nbsp;{e.card3.members}
                    &nbsp;&nbsp;
                    <i class="bx bx-heart"></i>&nbsp;{e.card3.likes}
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

export default PopularCourses;