import React from 'react'
import Document from './_document'
import style from './about.module.css'
import Link from 'next/link'
import Achievments from './components/achievments'
import Aboutsection from './aboutsection'
import Footer from './footer'


function About() {

  return (
    <>
    <div  id={style.about}>
      <div id={style.aboutimage}>
            <div id={style.over}>
              <div id={style.overcolor}>
                <div id={style.overhead}>
                  <h1>About Us</h1>
                </div>
                <div id={style.overlinks}>
                <Link href='/'>Home </Link>
                <h3>/</h3>
                <Link href='/services'> Services </Link>
                <h3> /</h3>
                <Link href='/project'> Project </Link>
                <h3>/</h3>
                <Link href='/contact'> Contact</Link>
                </div>

              </div>
              </div>


      </div>
      <Achievments/>
      <Aboutsection/>
      <Footer/>
  
    </div>
    </>
  )
}

export default About
