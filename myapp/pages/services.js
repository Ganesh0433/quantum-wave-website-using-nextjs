import React from 'react'
import Footer from './footer'
import style from './services.module.css'
import Link from 'next/link'
import Achievments from './components/achievments'
import Servicesection from './servicesection'


function services() {
  return (
    <>
    <div>
    <div  id={style.services}>
      <div id={style.servicesimage}>
            <div id={style.over}>
              <div id={style.overcolor}>
                <div id={style.overhead}>
                  <h1>Services</h1>
                </div>
                <div id={style.overlinks}>
                <Link href='/'>Home </Link>

                <h3>/</h3>
                <Link href='/services'> services </Link>
                <h3> /</h3>
                <Link href='/project'> Project </Link>
                <h3>/</h3>
                <Link href='/contact'> Contact</Link>
                </div>

              </div>
              </div>


      </div>
      <Achievments/>
      <Servicesection/>
      <Footer/>
    
  
    </div>
    
    </div>
    </>
  )
}

export default services
