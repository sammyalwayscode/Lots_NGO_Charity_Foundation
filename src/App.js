import React from "react"
import Home from "./Components/HomePage/Home"
import MeetTeam from "./Components/MeetTeam/MeetTeam"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Events from "./Components/Event/Events"
import Testimonies from "./Components/Testimonies/Testimonies"
import Volunteers from "./Components/Volunteers/Volunteers"
import Admin from "./Capture.js"
import Header from "./Components/Header/Header"
function App() {
  return (
    <div>
      {/* <MeetTeam /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/meetteam" exact component={MeetTeam} />
          <Route path="/events" exact component={Events} />
          <Route path="/testimonies" exact component={Testimonies} />
          <Route path="/volunteers" exact component={Volunteers} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/header" exact component={Header} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
