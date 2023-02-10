export default () => {
  return (
    <div className="m-10 space-y-5 flex flex-col">
      <div className="flex">
        <div className="sm:w-1/2 space-y-5">
          <p className="text-7xl font-extrabold">CTFalcons</p>
          <p className="text-justify">
            Welcome to Capture the Falcons (CTFalcons) in the world of
            cybersecurity! In this game, players will be put into teams and
            tasked with finding and exploiting vulnerabilities in computer
            systems in order to "capture" the other team's flag. This is a great
            way to learn and improve your skills in cybersecurity, as well as to
            have some friendly competition with others. Good luck and stay safe!
          </p>
          <div className="bg-accent w-fit px-8 py-2 font-bold rounded-full mx-auto sm:mx-0">
            Join Now
          </div>
        </div>

        <div className="flex-1 flex-col hidden sm:flex">
          <div className="flex-1"></div>
          <div className="flex">
            <div className="flex-1"></div>
            <div className="rounded-3xl border-solid border-4 border-white px-10 py-5 space-y-5 text-center">
              <p>
                Time Until <b>Spring Round</b>
              </p>
              <p className="font-extrabold text-4xl">10:22:10</p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="rounded-3xl border-solid border-4 border-white px-10 py-5 space-y-5 text-center
  sm:hidden w-fit mx-auto"
      >
        <p>
          Time Until <b>Spring Round</b>
        </p>
        <p className="font-extrabold text-4xl">10:22:10</p>
      </div>

      <hr className="h-1 bg-text-theme" />

      <p className="mx-auto text-3xl font-bold">Topics</p>
      <div
        className="flex text-sm md:text-base md:mx-auto md:justify-center overflow-scroll
  md:overflow-clip md:flex-wrap md:w-3/4 space-y-5"
      >
        <div></div>
        <div
          className="border-accent border-solid border-2 rounded-3xl w-40 flex-none text-center
      px-2 pt-3 pb-2 mr-5"
        >
          <p className="font-extrabold text-lg">Cryptography</p>
          <p>
            A cryptography challenge involves tasks that test participants'
            knowledge of cryptography. This can include decoding messages,
            breaking ciphertext, or finding flaws in cryptographic systems.
          </p>
        </div>
        <div
          className="border-accent border-solid border-2 rounded-3xl w-40 flex-none text-center
      px-2 pt-3 pb-2 mr-5"
        >
          <p className="font-extrabold text-lg">Reverse Engineering</p>
          <p>
            A reverse engineering challenge includes tasks such as analyzing
            binary files to understand their inner workings, finding
            vulnerabilities in software, or reversing engineered code to recover
            the original source code.
          </p>
        </div>
        <div
          className="border-accent border-solid border-2 rounded-3xl w-40 flex-none text-center
      px-2 pt-3 pb-2 mr-5"
        >
          <p className="font-extrabold text-lg">Web Exploitation</p>
          <p>
            A web exploitation challenge involves tasks that test participants'
            skills in the field of web security. This involves exploiting
            vulnerabilities in web applications or finding hidden directories on
            a web server.
          </p>
        </div>
        <div
          className="border-accent border-solid border-2 rounded-3xl w-40 flex-none text-center
      px-2 pt-3 pb-2 mr-5"
        >
          <p className="font-extrabold text-lg">PWN</p>
          <p>
            A PWN challenge might involve executing arbitrary code on a remote
            system, bypassing security mechanisms to gain access to a system, or
            discovering vulnerabilities in software programs.
          </p>
        </div>
        <div
          className="border-accent border-solid border-2 rounded-3xl w-40 flex-none text-center
      px-2 pt-3 pb-2"
        >
          <p className="font-extrabold text-lg">Misc.</p>
          <p>
            A miscellaneous challenge involves tasks that do not fit into any
            specific category. These challenges might be puzzles or
            brainteasers, for example, or they might be tasks that require a
            combination of different skills.
          </p>
        </div>
      </div>

      <p className="mx-auto text-3xl font-bold">Sponsored By</p>
      <p className="mx-auto text-3xl font-bold">Additional Information</p>
    </div>
  );
};
