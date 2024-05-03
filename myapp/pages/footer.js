import React from 'react'
import style from './footer.module.css'
import Link from 'next/link'
function footer() {
    return (
    <>
          <div id={style.footer}>
  <div id={style.verticalfooter}>
    <div id={style.comsummary}>
      <div id={style.summaryheading}>
        <h1>Quantum <span>Wave</span></h1>
      </div>
      <div id={style.summarypara}>
        <p>
          Elevating digital experiences through expert programming and innovative solutions. Your partner in the journey of transforming ideas into impactful realities.
        </p>
      </div>
      <div id={style.summarylogo}>
        <div id={style.insta}>
          <img src="insta.png" />
        </div>
        <div id={style.linkdin}>
          <img src="linkdin.png" />
        </div>
      </div>
    </div>
    <div id={style.shortlinks}>
      <div id={style.shortheading}>
        <h1>Short Link</h1>
      </div>
      <div id={style.shortlink}>
      <div><span>&gt;</span><Link href="/">Home</Link></div> 
      <div><span>&gt;</span><Link href="/about">About</Link></div>
     <div><span>&gt;</span><Link href="/services">Services</Link></div> 
      <div><span>&gt;</span> <Link href="/project">Project</Link></div>
      <div><span>&gt;</span><Link href="/contact">Contact</Link></div>
      </div>
    </div>
    <div id={style.helplinks}>
      <div id={style.helpheading}>
        <h1>Help Link</h1>
      </div>
      <div id={style.helplink}>
     <div><span>&gt;</span><Link href="/"> Terms of Use</Link></div> 
      <div><span>&gt;</span><Link href="/">Privacy Policy</Link></div>
     <div><span>&gt;</span><Link href="/">Helps</Link></div> 
      <div><span>&gt;</span> <Link href="/">FQAs</Link></div>
      <div><span>&gt;</span><Link href="/">Contact</Link></div>
      </div>
    </div>
    <div id={style.contactus}>
      <div id={style.contactheading}>
        <h1>Contact Us</h1>
      </div>
      <div id={style.contacts}>
        <div id={style.location}>
          <div id={style.logol}>
            <img src="location.png" />
            <h3>Vijaywada</h3>
          </div>
          <div id={style.line} ></div>
        </div>
        <div id={style.phoneno}>
          <div id={style.num}>
            <img src="phonecall.png" />
            <h3>+91 9392273514</h3>
          </div>
          <div id={style.line} ></div>
        </div>
        <div id={style.email}>
          <div id={style.elogo}>
            <img src="email.png" />
            <h3>contactus@quantumwaveit.in</h3>
          </div>
          <div id={style.line} ></div>
        </div>
      </div>
    </div>
  </div>
  <div id={style.horizontal}>
    <div id={style.holine}>

    </div>
    <div id={style.name}>
        <div id={style.leftname}>
            <img></img>
            <h3><span>Quantum Waveit</span>, All right reserved.</h3>
        </div>
        <div id={style.rightname}>
           <h3>IN ASSOCIATION WITH: <span>DIGIFRILLS</span></h3>
        </div>

    </div>
  </div>
</div>
            </>
            )
}
            export default footer
