import React from "react";
import { NavigationBar } from "./components";
import { HomePage } from "./routes";
import { ChallengesPage } from "./routes/ChallengesPage";

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
      {/* <HomePage /> */}
      <HomePage />
    </div>
  );
}

export default App;
