import React from 'react'
import './FooterX.css'
import { Link } from 'react-router-dom'

function FooterX() {
  return (
    <div>
      <div className="aFooter">

        <div className="navFooter">
          <p className="useF">Usefull Links</p>
          <div className="contr">
            <Link to="/" className="link11"> <p>Home</p></Link>
            <Link to="/events" className="link11"><p>Events</p></Link>
            {/* <Link to="/volunteers" className="link11"><p>Volunteer</p></Link> */}
            <Link to="/meetteam" className="link11"><p>Meet Our Team</p></Link>
            {/* <Link to="/testimonies" className="link11"><p>Testimony</p></Link> */}
          </div>
        </div>

        <div className="mediaLinks">
          <p className="useF">Connect Via</p>
          <p>Facebook</p>
          <p>Whatapp</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Link in</p>
        </div>



        <div className="OurAddress">
          <p className="useF">Our Address</p>
          <p>Flat 1, Emmanuel villa, No. 48, Odofin akinsanya street, off mechanic bus stop, Awodi-ora, Ajeromi Ifelodun L.G.A, Ajegunle, Apapa</p>
        </div>
      </div>

    </div>
  )
}

export default FooterX
