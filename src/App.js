import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import LandingPage from "./components/LandingPage";
import Trainees from "./components/Trainees";
import TraineeProfile from "./components/TraineeProfile";
import InputRatings from "./components/InputRatings";
import Page404 from "./components/Page404";

function App() {
  return (
    <Router>
      <MainNav />
      {/* Move the Router component here to wrap the entire app */}
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage /> }/>
          <Route path="/trainees" element={<Trainees /> }/>
          <Route path="/traineeProfile/:key" element={<TraineeProfile />}/>
          <Route path="/inputTraineeRating/:traineeId" element={<InputRatings />}/>
          <Route path="*" element={<Page404 />}/>


          {/* If no matching route found, show PageNotFound component */}

        </Routes>

        {/* Footer component */}

      </div>
    </Router>
  );
}

export default App;
