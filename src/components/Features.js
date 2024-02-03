const Features = () =>{
  const  features = [{ 
    btn1: "Lorem Ipsum",
    bt1_manzil: "",
    btn2: "Dolor Sitema",
    bt12_manzil: "",
    btn3: "Sed perspiciatis",
    bt3_manzil: "",
    btn4: "Magni Dolores",
    bt4_manzil: "",
    btn5: "Nemo Enim",
    bt5_manzil: "",
    btn6: "Eiusmod Tempor",
    bt6_manzil: "",
    btn7: "Midela Teren",bt1_manzil: "",
    bt7_manzil: "",
    btn8: "Pira Neve",
    bt8_manzil: "",
    btn9: "Dirada Pack",
    bt9_manzil: "",
    btn10: "Moton Ideal",
    bt10_manzil: "",
    btn11: "Verdo Park",
    btN11_manzil: "",
    btn12: "Flavor Nivelanda",
    bt12_manzil: "",


  }]
    return(
      <>
      {features.map((e)=>
      <section id="features" class="features">
      <div class="container" data-aos="fade-up">

        <div class="row" data-aos="zoom-in" data-aos-delay="100">
          <div class="col-lg-3 col-md-4">
            <div class="icon-box">
              <i class="ri-store-line" style={{color: '#ffbb2c'}}></i>
              <h3><a href="">Lorem Ipsum</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="ri-bar-chart-box-line" style={{color: '#5578ff'}}></i>
              <h3><a href="">Dolor Sitema</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div class="icon-box">
              <i class="ri-calendar-todo-line" style={{color: '#e80368'}}></i>
              <h3><a href="">Sed perspiciatis</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div class="icon-box">
              <i class="ri-paint-brush-line" style={{color: '#e361ff'}}></i>
              <h3><a href="">Magni Dolores</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-database-2-line" style={{color: '#47aeff'}}></i>
              <h3><a href="">Nemo Enim</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-gradienter-line" style={{color: '#ffa76e'}}></i>
              <h3><a href="">Eiusmod Tempor</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-file-list-3-line" style={{color: '#11dbcf'}}></i>
              <h3><a href="">Midela Teren</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-price-tag-2-line" style={{color: '#4233ff'}}></i>
              <h3><a href="">Pira Neve</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-anchor-line" style={{color: '#b2904f'}}></i>
              <h3><a href="">Dirada Pack</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-disc-line" style={{color: '#b20969'}}></i>
              <h3><a href="">Moton Ideal</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-base-station-line" style={{color: '#ff5828'}}></i>
              <h3><a href="">Verdo Park</a></h3>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 mt-4">
            <div class="icon-box">
              <i class="ri-fingerprint-line" style={{color: '#29cc61'}}></i>
              <h3><a href="">Flavor Nivelanda</a></h3>
            </div>
          </div>
        </div>

      </div>
    </section>
      )}
        
    </>
    )
}

export default Features;