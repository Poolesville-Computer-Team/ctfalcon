
import './style.css'
import icon from '/computer-team-icon.png'
import profile_pic from '/profile-pic.png'// TODO: The actual profile picture of the user should be moved in instead of the placeholder picture

// create the navbar if it is requested 
// TODO Decide which icon to use for the navbar
let navbar_element = document.querySelector('#navbar');
if (navbar_element != undefined) {
    navbar_element.innerHTML = `
    <div class="sticky grid gap-4 grid-cols-3 grid-rows-1 w-full h-24 p-2">
        <div class="my-auto flex-none flex space-x-3">
            <img src="${icon}" class="w-12 h-12 rounded-md" alt="opps looks like
            image doesn't exist">
            <p class="my-auto">CTFalcon</p>
        </div>
        <div class="my-auto flex-auto flex">
            <p class="m-auto">Challenges</p>
            <p class="m-auto">Leaderboard</p>
            <p class="m-auto">Team</p>
        </div>
        <div class="my-auto flex-none flex">
            <p>2 (trophy icon)</p>
            <div class="flex">
                <div class="text-right">
                    <p>Polly Placeholder</p>
                    <p class="italic text-sm">@pollytheplayer</p>
                </div>
                <img class="w-12 h-12" src="${profile_pic}" alt="ok just pretend theres an amogus here">
            </div>
        </div>
    </div>
    `
}

