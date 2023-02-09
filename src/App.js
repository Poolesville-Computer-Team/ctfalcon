import React from "react";
import { NavigationBar } from "./components";
import { HomePage } from "./routes";
import { ChallengesPage } from "./routes/ChallengesPage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { TeamInfo } from "./routes/TeamInfo";

function App() {
  return (
    <div className="my-4 mx-8">
      <NavigationBar
        items={[
          { title: "Home", route: "/" },
          { title: "Challenges", route: "/challenges" },
          { title: "Teams", route: "/teams" },
          { title: "About", route: "About" },
        ]}
      />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="challenges" element={<ChallengesPage />} />
          <Route path="teams" element={<TeamInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
