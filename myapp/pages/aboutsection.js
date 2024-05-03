import React from 'react'
import style from './aboutsection.module.css'
function aboutsection({ disabled }) {
  return (
    <>
    
    <div id={style.aboutservices}>
      <div id={style.servicesimages} >
        <div id={style.serimage1} ><img src='about 1.jpg'></img></div>
        <div id={style.serimage2}><img src='about 2.jpg'></img></div>
      </div>
      <div id={style.servicescontent} >
        <div id={style.contentsubheading}>
            <h3>About Us</h3>
        </div>
        <div id={style.contentheading}>
            <h1>About quntumwave Agency 
                And It's Innovative IT Solutions</h1>
        </div>
       
        <div id={style.contentpara}>
            <p>Welcome to QuantumWave Agency, the nexus of innovation and 
                boundary-pushing IT solutions. Our dedication to excellence propels us to deliver 
                state-of-the-art services, surpassing your technological needs. With a team of seasoned 
                professionals, we specialize in crafting bespoke systems that seamlessly blend 
                creativity with technology, propelling your business into the future. Embark on a journey of
                 innovation and excellence 
                 with QuantumWave Agency, where
                 cutting-edge meets client success.</p>
        </div>
        
        <div id={style.contentbutton}>
            <button disabled={disabled}>More Details</button>
        </div>
      </div>
     


    </div>
    
    </>
  )
}
export default aboutsection
