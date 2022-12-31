
import './style.css'
import icon from '/computer-team-icon.png'
import profile_pic from '/profile-pic.png'// TODO: The actual profile picture of the user should be moved in instead of the placeholder picture

// create the navbar if it is requested 
// TODO Decide which icon to use for the navbar
let navbar_element = document.querySelector('#navbar');
if (navbar_element != undefined) {
    navbar_element.innerHTML = `
    <div class="sticky flex w-full h-24">
        <div class="flex-none flex space-x-3 left-2 top-6 absolute cursor-pointer" onclick="location.href='/'">
            <img src="${icon}" class="w-12 h-12 rounded-md" alt="opps looks like
            image doesn't exist">
            <p class="my-auto">CTFalcon</p>
        </div>
        <div class="m-auto flex space-x-4">
            <p class="m-auto hover:bg-secondary p-2 rounded-md cursor-pointer" onclick="location.href='/challenges.html'">Challenges</p>
            <p class="m-auto hover:bg-secondary p-2 rounded-md cursor-pointer" onclick="location.href='/leaderboard.html'">Leaderboard</p>
            <p class="m-auto hover:bg-secondary p-2 rounded-md cursor-pointer" onclick="location.href='/team-info.html'">Team</p>
        </div>
        <div class="flex-none flex right-2 top-6 absolute">
            <p>2 (trophy icon)</p>
            <div class="flex">
                <div class="text-right">
                    <p>Polly Placeholder</p>
                    <p class="italic text-sm">@pollytheplayer</p>
                </div>
                <img class="w-12 h-12 rounded-full" src="${profile_pic}" alt="ok just pretend theres an amogus here">
            </div>
        </div>
    </div>
    `
}

