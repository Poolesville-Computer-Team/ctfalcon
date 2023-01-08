import React from "react";
import { NavigationBar } from "./components";
import { ChallengesPage } from "./routes";
import { HomePage } from "./routes/HomePage";

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
      <ChallengesPage />
    </div>
  );
}

export default App;
