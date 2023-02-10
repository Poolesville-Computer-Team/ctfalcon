export default () => {
  return (

    <div className="mx-10 space-y-5">
      <div className="flex w-auto space-x-4">
        <img className="w-48 h-48 rounded-full" src="/team-profile-pic.png" alt="ong so romantic" />
        <div className="space-y-6 my-auto">
          <p className="text-2xl font-bold">Polly Programmmer's Love Square????</p>
          <div className="text-sm">
            <p>Poolesville High School Pooesville</p>
            <p>14 challenges solved</p>
          </div>
        </div>
        <div className="hidden lg:block"> GRAPH PLACEHOLDER</div>
      </div>

      <div className="flex space-x-5">
        {/*people*/}
        <div className="flex-none bg-background-secondary p-4 rounded-md space-y-3 w-fit">
          <div className="flex space-x-2">
            <img className="rounded-full" src="/profile-pic.png" alt="hugh mogus" />
            <div className="hidden md:block">
              <p>Polly Placeholder</p>
              <p className="italic text-sm">@pollytheplayer</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">+2</p>
              <div className="text-sm">20 pts</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <img className="rounded-full" src="/profile-pic.png" alt="hugh mogus" />
            <div className="hidden md:block">
              <p>Polly Placeholder</p>
              <p className="italic text-sm">@pollytheplayer</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">+2</p>
              <div className="text-sm">20 pts</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <img className="rounded-full" src="/profile-pic.png" alt="hugh mogus" />
            <div className="hidden md:block">
              <p>Polly Placeholder</p>
              <p className="italic text-sm">@pollytheplayer</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">+2</p>
              <div className="text-sm">20 pts</div>
            </div>
          </div>
          <div className="flex space-x-2">
            <img className="rounded-full" src="/profile-pic.png" alt="hugh mogus" />
            <div className="hidden md:block">
              <p>Polly Placeholder</p>
              <p className="italic text-sm">@pollytheplayer</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-bold">+2</p>
              <div className="text-sm">20 pts</div>
            </div>
          </div>
        </div>

        {/*problems*/}
        <div className="flex-auto space-y-5 overflow-x-auto">
          {/*sort bar*/}
          <div className="flex bg-background-secondary px-4 rounded-full font-bold space-x-4 py-2 h-10">
            <p className="flex-none">Sort By</p>
            <div className="space-x-2 flex overflow-x-scroll flex-initial no-scrollbar">
              <div className="text-center rounded-full bg-accent px-2 min-w-fit w-28">Cryptography</div>
              <div className="text-center rounded-full bg-accent px-2 min-w-fit w-28">Reverse</div>
              <div className="text-center rounded-full bg-background-main px-2 min-w-fit w-28">BinEx</div>
              <div className="text-center rounded-full bg-background-main px-2 min-w-fit w-28">WebEx</div>
              <div className="text-center rounded-full bg-background-main px-2 min-w-fit w-28">WebEx</div>
              <div className="text-center rounded-full bg-background-main px-2 min-w-fit w-28">WebEx</div>
            </div>
            <div className="flex gap-2">
              <div className="text-center rounded-full bg-background-main px-2 w-fit">Solved</div>
              <div className="text-center rounded-full bg-background-main px-2 w-fit">Unsolved</div>
            </div>
          </div>
          {/*TODO: Layout as grid and not inline*/}
          <div className="space-y-5">
            <div className="flex px-6 py-2 bg-background-secondary rounded-lg space-x-4">
              <p className="text-lg my-auto"><b>Challenge 1 &bull; </b> cryptography</p>
              <p className="text-xs my-auto text-accent italic">@pollytheplayer</p>
            </div>
            <div className="flex px-6 py-2 bg-background-secondary rounded-lg space-x-4">
              <p className="text-lg my-auto"><b>Challenge 1 &bull; </b> cryptography</p>
              <p className="text-xs my-auto text-accent italic">@pollytheplayer</p>
            </div>
            <div className="flex px-6 py-2 bg-background-secondary rounded-lg space-x-4">
              <p className="text-lg my-auto"><b>Challenge 1 &bull; </b> cryptography</p>
              <p className="text-xs my-auto text-accent italic">@pollytheplayer</p>
            </div>
            <div className="flex px-6 py-2 bg-background-secondary rounded-lg space-x-4">
              <p className="text-lg my-auto"><b>Challenge 1 &bull; </b> cryptography</p>
              <p className="text-xs my-auto text-accent italic">@pollytheplayer</p>
            </div>
            <div className="flex px-6 py-2 bg-background-secondary rounded-lg space-x-4">
              <p className="text-lg my-auto"><b>Challenge 1 &bull; </b> cryptography</p>
              <p className="text-xs my-auto text-accent italic">@pollytheplayer</p>
            </div>
            <div className="flex px-6 py-2 bg-background-secondary rounded-lg space-x-4">
              <p className="text-lg my-auto"><b>Challenge 1 &bull; </b> cryptography</p>
              <p className="text-xs my-auto text-accent italic">@pollytheplayer</p>
            </div>
            <div className="flex px-6 py-2 bg-background-secondary rounded-lg space-x-4">
              <p className="text-lg my-auto"><b>Challenge 1 &bull; </b> cryptography</p>
              <p className="text-xs my-auto text-accent italic">@pollytheplayer</p>
            </div>
            <div className="flex px-6 py-2 bg-background-secondary rounded-lg space-x-4">
              <p className="text-lg my-auto"><b>Challenge 1 &bull; </b> cryptography</p>
              <p className="text-xs my-auto text-accent italic">@pollytheplayer</p>
            </div>
            <div className="flex px-6 py-2 bg-background-secondary rounded-lg space-x-4">
              <p className="text-lg my-auto"><b>Challenge 1 &bull; </b> cryptography</p>
              <p className="text-xs my-auto text-accent italic">@pollytheplayer</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}