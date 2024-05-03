import React from 'react'
import style from './prjectsection.module.css'

function projectsection() {
  return (
    <>
        <div id={style.headsection}>
            <div id={style.headservice}>
                <h3>Our Services</h3>
            </div>
            <div id={style.sermotive}>
                <h2>Services Built Specifically For Your Business</h2>

            </div>
            <div id={style.projectphoto}>
              <div id={style.photosection}>
                <div id={style.upperbox}></div>
                <div id={style.photo}>
                  <img src='project-1.jpg'></img>
                  <div id={style.photomiddlebox}>
                    <h3>Web Design</h3>
                    <h4>Web Analysis</h4>

                  </div>
                </div>
                <div id={style.lowerbox}></div>


              </div>
              <div id={style.photosection}>
                <div id={style.upperbox}></div>
                <div id={style.photo}>
                  <img src='project-2.jpg'></img>
                  <div id={style.photomiddlebox}>
                    <h3>Cyber Security</h3>
                    <h4>Cyber Security core</h4>

                  </div>
                </div>
                <div id={style.lowerbox}></div>


              </div>
              <div id={style.photosection}>
                <div id={style.upperbox}></div>
                <div id={style.photo}>
                  <img src='project-3.jpg'></img>
                  <div id={style.photomiddlebox}>
                    <h3>Mobile Info</h3>
                    <h4>Upcomming phone</h4>

                  </div>

                </div>
                <div id={style.lowerbox}></div>


              </div>
              <div id={style.photosection}>
                <div id={style.upperbox}></div>
                <div id={style.photo}>
                  <img src='project-4.jpg'></img>
                  <div id={style.photomiddlebox}>
                    <h3>Web Development</h3>
                    <h4>Web Analysis</h4>

                  </div>
                </div>
                <div id={style.lowerbox}></div>


              </div>
              <div id={style.photosection}>
                <div id={style.upperbox}></div>
                <div id={style.photo}>
                  <img src='project-5.jpg'></img>
                  <div id={style.photomiddlebox}>
                    <h3>Digital Marketing</h3>
                    <h4>Marketing Analysis</h4>

                  </div>
                  
                </div>
                <div id={style.lowerbox}></div>


              </div>
              <div id={style.photosection}>
                <div id={style.upperbox}></div>
                <div id={style.photo}>
                  <img src='project-6.jpg'></img>
                  <div id={style.photomiddlebox}>
                    <h3>Keyword Research</h3>
                    <h4>keyword Analysis</h4>

                  </div>
                </div>
                <div id={style.lowerbox}></div>


              </div>

            </div>

        </div>
      

       
    </>
  )
}

export default projectsection
