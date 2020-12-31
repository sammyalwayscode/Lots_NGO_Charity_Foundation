import React from 'react'
import { Link } from 'react-router-dom'
import lllll from "../Img/lllo.png"

function Header() {
  return (
    <div>
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
          <div style={{
            height: "60px",
            width: "100vw",
            backgroundColor: "#242632",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "-20px"
          }} >
            <div style={{
              marginLeft: "30px",
            }}>
              <img src={lllll} alt="Dode" style={{ height: "50px", width: "50px" }} />
            </div>
            <div style={{
              display: "flex",
              width: "400px",
              justifyContent: "space-around",
              marginRight: "60px",
            }} >
              <Link to="/" style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "normal"
              }} > <p>Home</p></Link>
              <Link to="/events" style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "normal"
              }}><p>Events</p></Link>
              {/* <Link to="/volunteers" style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "normal"
              }} ><p>Volunteer</p></Link> */}
              <Link to="/meetteam" style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "normal"
              }} ><p>Meet Our Team</p></Link>
              {/* <Link to="/testimonies" style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "normal"
              }} ><p>Testimony</p></Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
