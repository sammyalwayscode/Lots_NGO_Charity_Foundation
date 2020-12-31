import React from 'react'
import "./Capture.css"
import { app } from "./Firebase"
import { Link } from "react-router-dom"

const db = app.firestore();
function Capture() {
  const [data, setData] = React.useState(null);
  const [surname, setSurname] = React.useState("");
  const [last, setLast] = React.useState("");
  const [post, setPost] = React.useState([]);


  const imageurl = async (e) => {
    const file = e.target.files[0];
    const Storage = app.storage().ref();
    const Child = Storage.child(file.name)
    await Child.put(file)
    setData(await Child.getDownloadURL())
  }

  const postdata = async () => {
    await db.collection("Benefit").doc().set({
      Photo: data,
      Surname: surname,
      Lastname: last,
      date: Date.now(),

    })
    console.log(post);
  }

  return (
    <div className="head">
      <div className="header">
        <section className="login1">
          <aside className="login">
            <center>
              <h2 style={{ fontFamily: "cursive", color: "gold" }}>New Benefiaciary</h2>
            </center>
            <h3 style={{ font: "cursive" }}>Surname :</h3><input type="text" value={surname} onChange={(e) => { setSurname(e.target.value) }} style={{ height: "20px", width: "300px" }} />
            <h3 style={{ font: "cursive" }}>LastName :</h3><input type="text" value={last} onChange={(e) => { setLast(e.target.value) }} style={{ height: "20px", width: "300px" }} />
            <h3 style={{ font: "cursive" }}>Photo :</h3> <input type="file" onChange={imageurl} />
            <div className="button"><Link to="/"><button onClick={postdata} style={{ backgroundColor: "black", border: "none" }}>Enter</button></Link></div>
          </aside>
        </section>
      </div>
    </div>

  )
}

export default Capture;
