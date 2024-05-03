import React, { useEffect ,useRouter} from "react"
import nstyle from './home.module.css'
import Achievments from "./achievments";
import Aboutsection from "../aboutsection";
import Footer from "../footer";
import Servicesection from "../servicesection";
import Projectsection from "../projectsection";
import Contactsection from "../contactsection";

function Homepage() { 

useEffect(() =>{
  let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slider");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    console.log(slides[slideIndex-1])
    // if(slides[slideIndex-1]){
    // }
    slides[slideIndex-1].style.display='block';
    setTimeout(showSlides, 7000);
  }
  

},[])

  return (

    <>
      <div id={nstyle.home}>
        <div id= {nstyle.slider} className="slider">
          <div id={nstyle.image}>
            <img src="carousel2.jpg"></img>
            <div id={nstyle.over}>

              <div id={nstyle.text}>
                <h2 id={nstyle.imagetext}> Best IT Solutions</h2>
                <div id={nstyle.imagetexthead}>
                  <h1>An Innovative IT Solutions Agency</h1>
                </div>
                <div id={nstyle.imagetextpara}>
                  <p>Unlock innovation with our leading IT solutions agency, specializing in forward
                    -thinking programming and transformative digital experiences that
                    propel businesses to new heights.</p>
                </div>


                <div id={nstyle.imagebuttons}>
                  <button>Read More</button>
                  <button>Contact Us</button>
                </div>
                <div id={nstyle.imagebuttons}>

                  <h1></h1>
                  <h1></h1>
                </div>
               
        
              </div>

            </div>

          </div>
        </div>
          <div id={nstyle.slider1} className="slider">
            <div id={nstyle.image}>
              <img src="carousel.jpg"></img>
              <div id={nstyle.over}>

                <div id={nstyle.text}>
                  <h2 id={nstyle.imagetext}> Best IT Solutions</h2>
                  <div id={nstyle.imagetexthead}>
                    <h1>Quality Digital Services You Really Need!</h1>
                  </div>
                  <div id={nstyle.imagetextpara}>
                    <p>Discover the epitome of digital excellence with our comprehensive suite of quality-driven services,
                       tailored to meet your every digital need. Elevate your online presence and business impact with our transformative solutions..</p>
                  </div>


                  <div id={nstyle.imagebuttons}>
                    <button>Read More</button>
                    <button>Contact Us</button>
                  </div>
                  <div id={nstyle.imagebuttons}>

                    <h1></h1>
                    <h1></h1>
                  </div>
                </div>

              </div>

            </div>
          </div>
      </div>
      <Achievments/>
      <Aboutsection/>
      <Servicesection/>
      <Projectsection/>
      <Contactsection/>
      <Footer/>
    </>
  )
}

export default Homepage
