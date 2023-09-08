// variables for the display name
const displayName = document.querySelector("#slackUserName");
const displayNameDiv = document.getElementById("showUserName");
//Variables for the display picture
const displayPicture = document.querySelector("#displayPicture");
const displayPicDiv = document.getElementById("slackDisplayImage");
//Variables for the day of the week display
const displayDayOfWeek = document.querySelector("#currentDayOfTheWeek");
const dayOfWeekDiv = document.getElementById("displaDayOfTheWeek");
//Variables for UTC currnet time
const displayCurrentUTCTime = document.querySelector("#currentUTCTime");
const currentTimeUTC = document.getElementById("dispalyUTCcurrentTime");
//Variables for display track
const displayTrack = document.querySelector("#myTrack");
const displayTrackDiv = document.getElementById("displayMyTrack");
//Variables for GithubUrl
const displayGithubUrl = document.querySelector("#githubURL");
const githubUrl = document.getElementById("displayGithubLink");

//Display Slack name
displayName.addEventListener("click", function(){
    displayNameDiv.innerHTML = "Ruffy Sani";
    setTimeout(function(){
        displayNameDiv.innerHTML = "";
    }, 3000);
});
// Display profile picture
displayPicture.addEventListener("click", displayImage);

//Display day of the week
displayDayOfWeek.addEventListener("click", function(){
    let getDay = new Date();
    dayOfWeekDiv.innerHTML = `Today is ${getDay.getDay()} day of the week.`;
    setTimeout(function(){
        dayOfWeekDiv.innerHTML = "";
    }, 3000);
})
//Get current UTC Time
displayCurrentUTCTime.addEventListener("click", function(){
    let getUTC = new Date();
    let currentUTCHour = getUTC.getUTCHours();
    let currentUTCMinutes = getUTC.getUTCMinutes();
    let currentUTCseconds = getUTC.getUTCSeconds();
    let currentTime = `The current time in UTC is: ${currentUTCHour}h:${currentUTCMinutes}m:${currentUTCseconds}s`
    currentTimeUTC.innerHTML  = currentTime;
    setTimeout(function(){
        currentTimeUTC.innerHTML = "";
    }, 3000);
})
//Display Track
displayTrack.addEventListener("click", function(){
    displayTrackDiv.innerHTML = "Frontend Track";
    setTimeout(function(){
        displayTrackDiv.innerHTML = "";
    }, 3000);
})
//Link To Github Url
displayGithubUrl.addEventListener("click", function(e){
    let newLine = document.createElement("p");
    let newTag = document.createElement("a");
    newTag.setAttribute("href", "https://github.com/Ruffysanni");
    
    githubUrl.innerHTML = newLine.appendChild(newTag);
    // setTimeout(function(){
    //     githubUrl.innerHTML = "";
    // }, 3000);
    
})
function showUrl(){
    
}
function displayImage(){
    
    let newContainer = document.createElement("div")
    let newPic = document.createElement("img");
    newPic.setAttribute("alt", "Ruffy Sani");
    newPic.src = "./images/ruffySoftware.jpg"
    newPic.className = "slackDisplayImage";
    newContainer.id = "slackDisplayImage";
    // let containerPic = document.querySelector("#slackDisplayImage");
    newContainer.appendChild(newPic)
    displayPicDiv.appendChild(newContainer);
    // displayPicture.disabled = true;
    // displayPicture.removeEventListener("click", removeClick);
    setTimeout(function(){
        displayPicDiv.innerHTML = "";
    }, 3000);
    // displayPicture.disabled = false;

}
function removeClick(){
    this.displayPicture
}
