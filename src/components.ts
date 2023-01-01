
import './style.css'
import icon from '/computer-team-icon.png'
import profile_pic from '/profile-pic.png'// TODO: The actual profile picture of the user should be moved in instead of the placeholder picture

interface ProfileInfo {
    display_name: string,
    handle: string,
    profile_picture_link: string,
}

// TODO: Replace with network request
let profile: ProfileInfo = {
    display_name: "Polly Placeholder",
    handle: "pollytheplayer",
    profile_picture_link: profile_pic
};

let profile_element = "" // ecmascript foundation pls if statements as expressions
if (profile == undefined) {
    profile_element = '<div class="absolute right-2 top-6 bg-accent w-fit px-4 py-2 font-bold rounded-lg mx-auto sm:mx-0">Join</div>'
} else {
    profile_element = `
    <div class="flex-none flex right-2 top-6 absolute md:space-x-2 cursor-default items-center md:items-start">
        <p>2 🏆</p>
        <div class="flex space-x-2 flex-none">
            <div class="text-right hidden md:inline">
                <p>${profile.display_name}</p>
                <p class="italic text-sm">@${profile.handle}</p>
            </div>
            <img class="w-12 h-12 rounded-full" src="${profile.profile_picture_link}" alt="ok just pretend theres an amogus here">
        </div>
    </div>
    `
}

let navbar_template = document.createElement('template')
navbar_template.innerHTML = `
<div class="sticky top-0 flex w-full h-24 bg-primary">
    <div class="flex-none flex space-x-3 left-2 top-6 absolute cursor-pointer" onclick="location.href='/'">
        <img src="${icon}" class="w-12 h-12 rounded-md" alt="opps looks like image doesn't exist">
        <p class="my-auto collapse md:visible">CTFalcon</p>
    </div>

    <div class="m-auto flex md:space-x-8 space-x-2">
        <p class="m-auto hover:bg-secondary p-2 rounded-md cursor-pointer" onclick="location.href='/challenges.html'">Challenges</p>
        <p class="m-auto hover:bg-secondary p-2 rounded-md cursor-pointer" onclick="location.href='/leaderboard.html'">Leaderboard</p>
        <p class="m-auto hover:bg-secondary p-2 rounded-md cursor-pointer" onclick="location.href='/team-info.html'">Team</p>
    </div>

    ${profile_element}
</div>
`
// create the navbar if it is requested 
// TODO Decide which icon to use for the navbar
let navbar_element = document.querySelector('#navbar');
if (navbar_element != undefined) {
    navbar_element.replaceWith(navbar_template.content)
}

