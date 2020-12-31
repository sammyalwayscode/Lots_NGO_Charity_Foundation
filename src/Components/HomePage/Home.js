import React from 'react'
import "./Home.css"
import pixNo1 from "../Img/nnnnnooo.png"
import stooy from '../Img/sit.png'
import hand from '../Img/hand.png'
import { Link } from 'react-router-dom'
import { app } from "../../Firebase"
import theL from "../Img/lllo.png"
import Header from '../Header/Header'
import FooterX from '../FooterX/FooterX'


const db = app.firestore();
function Home() {
  const [get, setGet] = React.useState([]);

  const getData = async () => {
    await db.collection("Benefit").onSnapshot((snapshot) => {
      const item = [];
      snapshot.forEach((doc) => {
        item.push(doc.data())
      })
      setGet(item)
    })
  }

  React.useEffect(() => {
    getData();
  }, [])
  return (
    <center>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            flexDirection: "column"
          }}>
          {/* <div className="navBarHolder" >
            <div className="logoDiv">
              <img src={theL} alt="Dod" style={{ height: "50px", width: "50px" }} />
            </div>
            <div className="navBar">
              <Link to="/" className="link11"> <p>Home</p></Link>
              <Link to="/events" className="link11"><p>Events</p></Link>
              <Link to="/volunteers" className="link11"><p>Volunteer</p></Link>
              <Link to="/meetteam" className="link11"><p>Meet Our Team</p></Link>
              <Link to="/testimonies" className="link11"><p>Testimony</p></Link>
            </div>
          </div> */}
          <Header />

          <div className="headerImage">
            <img src={pixNo1} alt="" className="imageItSelf" />
          </div>
          <div>
            <div className="counting">
              <p>No OF Students On Scorelaship</p>
              <h3>{get.length}</h3>
            </div>
          </div>

          <div className="Our Story" >
            <div className="ourOur">
              <p className="aaa">Our </p>
              <p className="bbb">Story</p>
            </div>
            <div className="imgtex">
              {/* <img src={hand} alt="alt" className="imageItSelf" /> */}
              <div className="realStory">
                <p className="rrr">

                  LOTS charity foundation is a registered charity organization that caters to the physiological [feeding, clothing and shelter], social, educational, psychological, medical, and emotional needs of street kids and vulnerable children. Our area of focus now in Ajeromi-ifelodun local government in a community called ‘DUSTBIN ESTATE’ in Ajegunle, Lagos state. As it ‘s name connotes, Dustbin estate is an area of refuse; a settlement in which its inhabitants build their house with planks on refuse dumps

</p>
              </div>
            </div>
          </div>


          <div className="missionVision">
            <div className="diffcol">
              <p className="its">Its</p>
              <p className="ourM">Our Mission</p>
              <p className="to">to</p>
            </div>
            {/* <img src={stooy} alt="alt" /> */}
            <div className="missVis">
              <p className="ppp">Our area of focus now in Ajeromi-ifelodun local government in a community called ‘DUSTBIN ESTATE’ in Ajegunle, Lagos state. As it ‘s name connotes, Dustbin estate is an area of refuse; a settlement in which its inhabitants build their house with planks on refuse dumps</p>
            </div>
          </div>

          <div className="blog">
            <div>
              <p>See Recent Works</p>
              <p className="recc">Recent Case Study</p>
            </div>
            <div className="mmmmmmm">
              <div className="imageDiv">
                <img src={hand} alt="alt" className="imageItSelf" />
                <img src={hand} alt="alt" className="imageItSelf" />
                <img src={hand} alt="alt" className="imageItSelf" />
                <img src={hand} alt="alt" className="imageItSelf" />
              </div>
            </div>
          </div>
          <FooterX />
          {/* <div className="aFooter">

            <div className="navFooter">
              <p className="useF">Usefull Links</p>
              <div className="contr">
                <Link to="/" className="link11"> <p>Home</p></Link>
                <Link to="/events" className="link11"><p>Events</p></Link>
                <Link to="/volunteers" className="link11"><p>Volunteer</p></Link>
                <Link to="/meetteam" className="link11"><p>Meet Our Team</p></Link>
                <Link to="/testimonies" className="link11"><p>Testimony</p></Link>
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
          </div> */}



        </div>
      </div>
    </center >
  )
}

export default Home
