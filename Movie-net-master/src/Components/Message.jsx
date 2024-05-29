import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareXTwitter , faSquareInstagram , faSquareFacebook , faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope , faPhone } from '@fortawesome/free-solid-svg-icons'

export default function Message() {
  return (
    <div className='message-box' >
      <div>

        <h1>We welcome your suggestions</h1>
        <form action="">
          <label htmlFor=""> Name</label>
          <input type="text" name="" id="" required/>
          <br /><br />
          <label htmlFor="">Email id</label>
          <input type="email" name="" id="" required/>
          <br /><br />
          <label htmlFor="">Any Suggestions</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <br />
          <input className='submit-btn' type="submit" value="Submit" />
          
        </form>
      </div>
      <div id='contact-info' >
        <ul>
          <li > <button className='icons'><FontAwesomeIcon  icon={faPhone} /></button>  Contact Number</li>
          <li > <button className='icons' ><FontAwesomeIcon  icon={faEnvelope} /> </button> Email</li>
          <li > <button className='icons' ><FontAwesomeIcon  icon={faSquareXTwitter} /> </button>  Twitter</li>
          <li> <button className='icons' ><FontAwesomeIcon  icon={faSquareInstagram} /></button> Instagram</li>
          <li > <button className='icons' ><FontAwesomeIcon  icon={faSquareFacebook} /></button>  Facebook</li>
          <li > <button className='icons' ><FontAwesomeIcon  icon={faLinkedin} /></button> Linkedin</li>
        </ul>
      </div>
    </div>
  )
}
