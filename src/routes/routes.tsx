import { Routes, Route, Link } from "react-router-dom";
import App from "../App";
import { Home } from "../pages/home";

export const Router = () => {
  return (
    <Routes>
      {/* <Route path="about" element={<About />} /> */}
      <Route path="/" element={<Home />}>
        <Route index element={<Home />} />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
      </Route>
    </Routes>
  );
};
