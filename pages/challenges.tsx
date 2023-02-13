import { ChallengesGrid, ChallengeSortBox } from "../components/challenge-item";

export default () => {
  return (
    <div className="mt-4">
      {/* Left Toolbox */}
      {/* <div className="flex flex-col mr-8 items-center space-y-4"> */}
      {/* <p className="text-4xl font-bold">Challenges</p> */}
      {/* </div> */}
      <ChallengeSortBox />
      <div className="mx-4" />

      {/* Challenges Grid */}

      <ChallengesGrid
        challengesList={[
          {
            category: "Web Exploitation",
            title: "URL Scrape-n-Sniff",
            solveRate: 85,
            likeRate: 92,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
          {
            category: "Reverse Engineering",
            title: "De-compiler Roundabout",
            solveRate: 50,
            likeRate: 60,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
          {
            category: "Binary Exploitation",
            title: "Binary Maze",
            solveRate: 35,
            likeRate: 45,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
          {
            category: "Forensics",
            title: "Pixel Sleuth",
            solveRate: 75,
            likeRate: 85,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
          {
            category: "Pwn",
            title: "The Great Pwnage",
            solveRate: 65,
            likeRate: 75,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
          {
            category: "Web Exploitation",
            title: "Cookie Jar Crackdown",
            solveRate: 90,
            likeRate: 95,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
          {
            category: "Reverse Engineering",
            title: "Code Un-scramble",
            solveRate: 40,
            likeRate: 55,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
          {
            category: "Binary Exploitation",
            title: "Binary Breakdown",
            solveRate: 30,
            likeRate: 45,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
          {
            category: "Forensics",
            title: "File Sleuth",
            solveRate: 80,
            likeRate: 90,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
          {
            category: "Pwn",
            title: "Pwn-tastic",
            solveRate: 60,
            likeRate: 70,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
          {
            category: "Web Exploitation",
            title: "Web Wormhole",
            solveRate: 95,
            likeRate: 98,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
          {
            category: "Reverse Engineering",
            title: "Reverse Riddles",
            solveRate: 45,
            likeRate: 60,
            splashUrl:
              "https://www.oecd.org/media/oecdorg/directorates/directorateforsciencetechnologyandindustry/com/space-1140-slider-iStock-1210917397.jpg",
          },
        ]}
      />
    </div>
  );
};
