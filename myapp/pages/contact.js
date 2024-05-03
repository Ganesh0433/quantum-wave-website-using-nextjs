import React from 'react'
import Link from 'next/link'
import style from './contact.module.css'
import Contactsection from './contactsection'
import Footer from './footer'
function contact() {
  return (
    <>
  <div  id={style.about}>
      <div id={style.aboutimage}>
            <div id={style.over}>
              <div id={style.overcolor}>
                <div id={style.overhead}>
                  <h1>Contact Us</h1>
                </div>
                <div id={style.overlinks}>
                <Link href='/'>Home </Link>
                <h3>/</h3>
                <Link href='/services'> About</Link>
                <h3> /</h3>
                <Link href='/project'> Services</Link>
                <h3>/</h3>
                <Link href='/contact'> Project</Link>
                </div>

              </div>
              </div>


      </div>
    
  
    </div>
    <Contactsection/>
    <Footer/>
          
    </>
  )
}

export default contact
