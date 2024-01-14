const Trainers = () =>{
  const  trainers = [{ 
    card1:{
      trainer_name: "Walter White",
      trainer_title: "Web Development",
      trainer_izohi: " Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut",
      trainer_img: "",
      links1:{
        t_link: "",
        f_link: "",
        insta_link: "",
        in_link: "",
      }
    },
    card2:{
      trainer_name: "Sarah Jhinson",
      trainer_title: "Marketing",
      trainer_izohi: "Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus",
      trainer_img: "",
      links2:{
        t_link: "",
        f_link: "",
        insta_link: "",
        in_link: "",
      }
    },
    card3:{
      trainer_name: "William Anderson",
      trainer_title: "Content",
      trainer_izohi: "Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara",
      trainer_img: "",
      links3:{
        t_link: "",
        f_link: "",
        insta_link: "",
        in_link: "",
      }
    },
    


  }]
    return(
      <>
      {trainers.map((e)=>
      <section id="trainers" class="trainers">
      <div class="container" data-aos="fade-up">

        <div class="row" data-aos="zoom-in" data-aos-delay="100">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/trainers/trainer-1.jpg" class="img-fluid" alt=""/>
              <div class="member-content">
                <h4>{e.card1.trainer_name}</h4>
                <span>{e.card1.trainer_title}</span>
                <p>{e.card1.trainer_izohi}</p>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/trainers/trainer-2.jpg" class="img-fluid" alt=""/>
              <div class="member-content">
                <h4>{e.card2.trainer_name}</h4>
                <span>{e.card2.trainer_title}</span>
                <p>{e.card2.trainer_izohi}</p>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <img src="assets/img/trainers/trainer-3.jpg" class="img-fluid" alt=""/>
              <div class="member-content">
                <h4>{e.card3.trainer_name}</h4>
                <span>{e.card3.trainer_title}</span>
                <p>{e.card3.trainer_izohi}</p>
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
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

export default Trainers;