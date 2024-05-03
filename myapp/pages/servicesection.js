import React from 'react'
import style from './servicesection.module.css'
function servicesection() {
  return (
    <>
    <div id={style.servicesection}>
        <div id={style.headsection}>
            <div id={style.headservice}>
                <h3>Our Services</h3>
            </div>
            <div id={style.sermotive}>
                <h2>Services Built Specifically For Your Business</h2>

            </div>

        </div>
        
        <div id={style.services}>
           
            <div id={style.cloneservice}>
                <img src='htmltag.png'></img>
                <h3>Web Design</h3>
                <p>Elevate your online presence with our expertly crafted web design solutions, seamlessly blending aesthetics and functionality for an exceptional user experience.</p>
                <div id={style.contentbutton}>
             <button >More Details</button>
       
            </div>
            </div>
            <div id={style.cloneservice}>
                <img src='htmlfile.png'></img>
                <h3>Web Development</h3>
                <p>Empower your digital presence through our comprehensive web development services, where innovation meets functionality to create dynamic and user-centric websites.</p>
                <div id={style.contentbutton}>
             <button >More Details</button>
        </div>
            </div>
            <div id={style.cloneservice}>
                <img src='htmltag.png'></img>
                <h3>UI/UX Design</h3>
                <p>Transform user experiences with our meticulous UI/UX design, seamlessly blending aesthetics and functionality to captivate and engage your audience.</p>
                <div id={style.contentbutton}>
             <button >More Details</button>
        </div>
            </div>
            <div id={style.cloneservice}>
                <img src='htmltag.png'></img>
                <h3>App Development</h3>
                <p>Bring your ideas to life with our cutting-edge app development services, combining innovation and functionality to deliver seamless and user-friendly mobile solutions.

</p>
                <div id={style.contentbutton}>
             <button >More Details</button>
        </div>
            </div>
            <div id={style.cloneservice}>
                <img src='htmltag.png'></img>
                <h3>Digital Marketing</h3>
                <p>Amplify your brand's visibility and engagement with our results-driven digital marketing strategies, tailored to maximize online presence and drive business growth.

</p>
                <div id={style.contentbutton}>
             <button >More Details</button>
        </div>
            </div>
            <div id={style.cloneservice}>
                <img src='htmltag.png'></img>
                <h3>Programming</h3>
                <p>Unlock the power of code with our proficient programming services, where precision meets innovation to build scalable and efficient solutions for your unique needs.</p>
                <div id={style.contentbutton}>
             <button >More Details</button>
        </div>
            </div>
            </div>
        </div>
    
  
    </>
  )
}

export default servicesection
