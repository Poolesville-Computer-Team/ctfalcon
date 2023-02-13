export default () => {
  return (
    <div>
      <section
        id="graph"
        className="max-w-7xl w-11/12 h-[300px] bg-white mx-auto"
      ></section>
      <section
        id="sort"
        className="w-screen bg-slate-500 mx-auto shadow-glow shadow-slate-500 flex items-center justify-center"
      >
        <div className="flex gap-2 py-2 flex-wrap">
          <div className="flex gap-2 items-center justify-center flex-grow">
            Division
            <ul className="flex overflow-x-scroll no-scrollbar gap-2">
              <li className="px-4 py-1 bg-slate-900 rounded-full whitespace-nowrap" >
                Platinum
              </li>
              <li className="px-4 py-1 bg-slate-900 rounded-full whitespace-nowrap" >
                High School
              </li>
              <li className="px-4 py-1 bg-slate-900 rounded-full whitespace-nowrap" >
                Middle School
              </li>
              <li className="px-4 py-1 bg-slate-900 rounded-full whitespace-nowrap" >
                Kindergarten
              </li>
            </ul>
          </div>
          <div className="flex gap-2 items-center justify-center w-96">
            Sort
            <ul className="flex gap-2">
              <li className="px-4 py-1 bg-slate-600 rounded-full">
                Ascending
              </li>
              <li className="px-4 py-1 bg-slate-600 rounded-full">
                Descending
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section id="table" className="max-w-7xl w-11/12 mx-auto">
        <div id="header" className="flex text-2xl">
          <div className="w-32">Rank</div>
          <div className="flex-grow">Team Name</div>
          <div className="w-32 text-left">Score</div>
          <div className="w-12"></div>
        </div>
        <div id="you" className="flex text-2xl bg-slate-700 rounded py-2 mt-2">
          <div className="w-32 pl-2">148</div>
          <div className="flex-grow flex items-center gap-2">
            <img
              className="rounded-full"
              src="/profile-pic.png"
              alt="hugh mogus"
              width="30"
            />
            Polly Programmer's Love Square??
          </div>
          <div className="w-32 text-left">320 pts</div>
          <div className="w-12 flex items-center justify-center">
            <div className="bg-amber-500 h-5 w-5 rounded-full"></div>
          </div>
        </div>
        <div id="top" className="flex flex-col mt-8 gap-1">
          <div className="flex text-2xl bg-slate-800 rounded py-2 mt-2">
            <div className="w-32 pl-2">1</div>
            <div className="flex-grow flex items-center gap-2">
              <img
                className="rounded-full"
                src="/profile-pic.png"
                alt="hugh mogus"
                width="30"
              />
              Polly Programmer's Love Square??
            </div>
            <div className="w-32 text-left">320 pts</div>
            <div className="w-12 flex items-center justify-center">
              <div className="bg-amber-500 h-5 w-5 rounded-full"></div>
            </div>
          </div>
          <div className="flex text-2xl bg-slate-800 rounded py-2 mt-2">
            <div className="w-32 pl-2">2</div>
            <div className="flex-grow flex items-center gap-2">
              <img
                className="rounded-full"
                src="/profile-pic.png"
                alt="hugh mogus"
                width="30"
              />
              Polly Programmer's Love Square??
            </div>
            <div className="w-32 text-left">320 pts</div>
            <div className="w-12 flex items-center justify-center">
              <div className="bg-amber-500 h-5 w-5 rounded-full"></div>
            </div>
          </div>
          <div className="flex text-2xl bg-slate-800 rounded py-2 mt-2">
            <div className="w-32 pl-2">3</div>
            <div className="flex-grow flex items-center gap-2">
              <img
                className="rounded-full"
                src="/profile-pic.png"
                alt="hugh mogus"
                width="30"
              />
              Polly Programmer's Love Square??
            </div>
            <div className="w-32 text-left">320 pts</div>
            <div className="w-12 flex items-center justify-center">
              <div className="bg-amber-500 h-5 w-5 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
