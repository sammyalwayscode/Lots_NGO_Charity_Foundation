import React from 'react'
import Header from '../Header/Header'
import './Events.css'
import ggg from "../Img/img-6.jpg"

const Events = () => {
    return (
        <center>
            <div className="EventConatainer" >
                <Header />
                <div className="Header">
                    <h1>OUR EVENT</h1>
                </div>
                <div className="AllsquaraHolder">
                    <div className="holdTwo">
                        <div className="box">
                            <div className="InnerBox">
                                <img src={ggg} alt="image" className="EventImage" />
                                <div className="storyMode">
                                    <h3 className="Boot">BootCAmp</h3>
                                    <h5>from 5:00pm - 7.00pm</h5>
                                    <h6>AT no 4 Barrister St</h6>
                                </div>
                                <div className="date">
                                    <div className="tellmeDate">
                                        <p>30</p>
                                        <p>DEC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="InnerBox">
                                <img src={ggg} alt="image" className="EventImage" />
                                <div className="storyMode">
                                    <h3>BootCAmp</h3>
                                    <h5>from 5:00pm - 7.00pm</h5>
                                    <h6>AT no 4 Barrister St</h6>
                                </div>
                                <div className="date">
                                    <div className="tellmeDate">
                                        <p>30</p>
                                        <p>DEC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="holdTwo">
                        <div className="box">
                            <div className="InnerBox">
                                <img src={ggg} alt="image" className="EventImage" />
                                <div className="storyMode">
                                    <h3>BootCAmp</h3>
                                    <h5>from 5:00pm - 7.00pm</h5>
                                    <h6>AT no 4 Barrister St</h6>
                                </div>
                                <div className="date">
                                    <div className="tellmeDate">
                                        <p>30</p>
                                        <p>DEC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="InnerBox">
                                <img src={ggg} alt="image" className="EventImage" />
                                <div className="storyMode">
                                    <h3>BootCAmp</h3>
                                    <h5>from 5:00pm - 7.00pm</h5>
                                    <h6>AT no 4 Barrister St</h6>
                                </div>
                                <div className="date">
                                    <div className="tellmeDate">
                                        <p>30</p>
                                        <p>DEC</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </center>
    )
}

export default Events