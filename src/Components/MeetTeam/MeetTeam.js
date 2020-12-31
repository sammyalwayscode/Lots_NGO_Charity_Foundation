import React from 'react'
import "./MeetTeam.css"
import immg from "../Img/img-6.jpg"
import Header from '../Header/Header'

import one from "../VoltImg/vo (1).jpg"
import two from "../VoltImg/vo (2).jpg"
import three from "../VoltImg/vo (3).jpg"
import four from "../VoltImg/vo (4).jpg"
import five from "../VoltImg/vo (5).jpg"
import six from "../VoltImg/vo (6).jpg"
import seven from "../VoltImg/vo (7).jpg"
import eight from "../VoltImg/vo (8).jpg"
import nine from "../VoltImg/vo (9).jpg"

function MeetTeam() {
  return (
    <center>
      <div className="parentDiv">
        <Header />
        <div className="subParentDiv">
          <div className="headLabelDiv">
            <p className="meetDiv">MEET OUR TEAM</p>
          </div>


          <div className="wrwpping">
            <div className="imageDiv">
              <div className="imageCard">
                <div className="pixHolder">
                  <img src={one} alt="sam" className="pixture" />
                  <p className="name">MRS TOLULOPE</p>
                  <p className="position">Founder</p>
                </div>
              </div>
            </div>

            <div className="imageDiv">
              <div className="imageCard">
                <div className="pixHolder">
                  <img src={two} alt="sam" className="pixture" />
                  <p className="name">MRS TAYO</p>
                  <p className="position">Volunteer Caterer</p>
                </div>
              </div>
            </div>

            <div className="imageDiv">
              <div className="imageCard">
                <div className="pixHolder">
                  <img src={three} alt="sam" className="pixture" />
                  <p className="name">MRS MARIAM</p>
                  <p className="position">Volunteer Teacher</p>
                </div>
              </div>
            </div>

            <div className="imageDiv">
              <div className="imageCard">
                <div className="pixHolder">
                  <img src={four} alt="sam" className="pixture" />
                  <p className="name">MR FAKUNLE</p>
                  <p className="position">Volunteer Teacher</p>
                </div>
              </div>
            </div>

            <div className="imageDiv">
              <div className="imageCard">
                <div className="pixHolder">
                  <img src={five} alt="sam" className="pixture" />
                  <p className="name">MR ZD</p>
                  <p className="position">Volunteer Teacherr</p>
                </div>
              </div>
            </div>

            <div className="imageDiv">
              <div className="imageCard">
                <div className="pixHolder">
                  <img src={six} alt="sam" className="pixture" />
                  <p className="name">Mr Francis</p>
                  <p className="position">Volunteer Teacher</p>
                </div>
              </div>
            </div>

            <div className="imageDiv">
              <div className="imageCard">
                <div className="pixHolder">
                  <img src={seven} alt="sam" className="pixture" />
                  <p className="name">MR JAMIU</p>
                  <p className="position">ICT Manager</p>
                </div>
              </div>
            </div>

            <div className="imageDiv">
              <div className="imageCard">
                <div className="pixHolder">
                  <img src={eight} alt="sam" className="pixture" />
                  <p className="name">MR VITUS</p>
                  <p className="position">Assistant to the Admin</p>
                </div>
              </div>
            </div>

            <div className="imageDiv">
              <div className="imageCard">
                <div className="pixHolder">
                  <img src={nine} alt="sam" className="pixture" />
                  <p className="name">MR SAM</p>
                  <p className="position">Head of Admin</p>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </center>
  )
}

export default MeetTeam
