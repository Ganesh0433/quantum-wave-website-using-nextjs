import React, { memo } from 'react'
import Link from 'next/link'

import style from './navbar.module.css'

function Navbar() {

  return (
    <>
    <div id={style.navbar}>
        <div id={style.info}>
            <div id={style.loc}>
            <img  src='location.png'></img>
            Vijayawada
            </div>
            <div id={style.email}>
            <img src='email.png'></img>
            contactus@quantumwaveit.in
            </div>
        </div>
         <div id={style.movtextleft}></div>
         <div id={style.textmov}><p>Note : We help you to Grow your Business</p></div>
         <div id={style.movtextright}></div>
        <div id={style.media}>
            <div id={style.insta}>
            <img src='insta.png'></img>
            </div>
            <div id={style.linkdin}>
            <img src='linkdin.png'></img>
            </div>
        </div>
    </div>
        <div id={style.menubar}>
          <div id={style.logo}><h1>Quantum <span>Wave</span></h1></div>
          <div id={style.menu}>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/services'>Services</Link>
            <Link href='/projects'>Project</Link>
            <Link href='/contact'>Contact</Link>
          </div>
          
          <div id={style.phonedetails}>
          <div id={style.phone}>
          <img src='phone.png'></img>
          <img id={style.message} src='message.png'></img>
          </div> 
          <div id={style.call}>
          <p>Have any questions?</p>
          <p id={style.phonenumber}>Call: +91 9392273514</p>
          </div>
          <div id={style.verticalline}></div>
          <div id={style.search}>
          <img src='search.png'></img>
          </div>
          </div>
        </div>
    </>
  )
}
export default Navbar

