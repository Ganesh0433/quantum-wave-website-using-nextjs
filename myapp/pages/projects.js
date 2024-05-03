import React from 'react'
import style from './project.module.css'
import Projectsection from './projectsection'
import Link from 'next/link'
import Footer from './footer'
import Achievments from './components/achievments'
function projects() {
  return (
    
       
       <div  id={style.about}>
      <div id={style.aboutimage}>
            <div id={style.over}>
              <div id={style.overcolor}>
                <div id={style.overhead}>
                  <h1>Projects</h1>
                </div>
                <div id={style.overlinks}>
                <Link href='/'>Home </Link>
                <h3>/</h3>
                <Link href='/services'> About </Link>
                <h3> /</h3>
                <Link href='/project'> Services </Link>
                <h3>/</h3>
                <Link href='/contact'> Contact</Link>
                </div>

              </div>
              </div>


      </div>
        <Achievments/>
       <Projectsection/>
       <Footer/>
    </div>
  )
}

export default projects
