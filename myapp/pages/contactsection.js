import React from 'react'
import style from './contactsection.module.css'
function contactsection() {
  return (
    <>
    <div id={style.contactsection}>
        <div id={style.contactelements}>
            <div id={style.comcontact}>
                 <div id={style.address} className={style.commoncomcontact}>
                    <div id={style.icon}>
                        <img src='conloc.png'></img>
                    </div>
                    <div id={style.addressloc}>
                        <h3>Address</h3>
                        <h4>Vijaywada</h4>
                    </div>
                 </div>
                 <div id={style.phoneno} className={style.commoncomcontact} >
                 <div id={style.icon}>
                        <img src='conphone.png'></img>
                    </div>
                    <div id={style.addressloc}>
                        <h3>Call Us</h3>
                        <h4>+91 9392273514</h4>
                    </div>
                 </div>
                 <div id={style.email} className={style.commoncomcontact}>
                 <div id={style.icon}>
                        <img src='conemail.png'></img>
                    </div>
                    <div id={style.emailaddress}>
                        <h3>Email Us</h3>
                        <h4>contactus@quantumwaveit.in</h4>
                    </div>
                 </div>

            </div>
            <div id={style.comlocdet}>
                <div id={style.location}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4710403339755!2d-73.82241512404069!3d40.685622471397615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c26749046ee14f%3A0xea672968476d962c!2s123rd%20St%2C%20Queens%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1686493221834!5m2!1sen!2sbd"></iframe>
                </div>
                <div id={style.details}>
                    <input type='text' id={style.name} placeholder='Your Name'></input>
                    <input type='text' id={style.textemail} placeholder='Your Email'></input>
                    <input type='text' id={style.project} placeholder='Project'></input>
                    <input type='text' id={style.message}  placeholder='Message'></input>
                    <button>Send Message</button>
                </div>


            </div>

        </div>


    </div>
    </>
  )
}

export default contactsection
