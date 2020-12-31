import React from 'react';
import Header from '../Header/Header';
import './Volunteers.css'
import one from "../VoltImg/vo (1).jpg"
import two from "../VoltImg/vo (2).jpg"
import three from "../VoltImg/vo (3).jpg"
import four from "../VoltImg/vo (4).jpg"
import five from "../VoltImg/vo (5).jpg"
import six from "../VoltImg/vo (6).jpg"
import seven from "../VoltImg/vo (7).jpg"
import eight from "../VoltImg/vo (8).jpg"
import nine from "../VoltImg/vo (9).jpg"


function Volunteers() {
  return (
    <center>
      <div className="VContainer">
        <Header />
        <div className="HeaderTags">
          <h2 className="our">OUR </h2>
          <h2 className="volonteer">VOLUNTEERS</h2>
        </div>
        <div className='Top'>
          <div className="imageHOlder">
            <div className="ImageBox">
              <img src={one} alt="image" className="Image" />
              <p>Mrs Tolulope </p>
            </div>

            <div className="ImageBox">
              <img src={two} className="Image" />
              <p>Mrs Tayo </p>
            </div>
            <div className="ImageBox">
              <img src={three} className="Image" />
              <p>Mrs Mariam </p>
            </div>

            <div className="ImageBox">
              <img src={four} className="Image" />
              <p>Mr Fakunle </p>
            </div>

            <div className="ImageBox">
              <img src={five} className="Image" />
              <p>Mr Zd </p>
            </div>

            <div className="ImageBox">
              <img src={six} className="Image" />
              <p>Mr Francis </p>
            </div>

            <div className="ImageBox">
              <img src={seven} className="Image" />
              <p>Mr Jamiu </p>
            </div>

            <div className="ImageBox">
              <img src={eight} className="Image" />
              <p>Mr Vitus </p>
            </div>

            <div className="ImageBox">
              <img src={nine} className="Image" />
              <p>Mr Sam </p>
            </div>



          </div>
        </div>
        <div className="below">
          <div className='everythingDown'>
            <div className="lastSide">
              <div className="BecomeaV">
                <h2>Become a volunteers</h2>
                {/* <h5>thie ewoffn bjnow neoforojr knoinwowrr nonowr</h5> */}
              </div>
              <h4 className="personal">personal information</h4>

            </div>

            <form className='form'>

              <input placeholder="Enter Name" className="Input" />
              <input placeholder="Enter Email" className="Input" />
              <input placeholder="Sex" className="Input" />
            </form>

            <input placeholder="write a message" className='writeMessage' />
            <div className="lastDetails">
              <h3 className="cv">C/V Upload</h3>
              <input type="file" placeholder="No File Choosen" className="ChooseFile" />
            </div>

            <div className="footer">
              <button className="Button">
                Apply Now
              </button>
            </div>

          </div>
        </div>


      </div>


    </center>
  );
}

export default Volunteers;
