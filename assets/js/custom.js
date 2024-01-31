// Add any custom javascript here.

let homePageUrl = "https://namsdg.github.io/site/";
let goalsPageUrl = "https://namsdg.github.io/site/goals/";
let reportingStatusPageUrl = "https://namsdg.github.io/site/reporting-status/";

// detect which page is currently open
let currUrl = window.location.href;

if (currUrl === homePageUrl || currUrl === goalsPageUrl){

    // Mask the goals so that only goal 1,8,9 can show up on the landing page
    let imgDelNumArr = [2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17];

    let imgDelIdArr = imgDelNumArr.map(num => `goal-${num}`);

    // remove all elements except for goal 1, 8, and 9.
    imgDelIdArr.forEach(ID => {
        currImg = document.getElementById(ID);
        currImg.style.display = 'none';
    });

    // fix the position of the goals so that the goal icons are right 
    // next to each other 
    let row = document.getElementsByClassName("row g-2")[0]

    let container1 = row.children[1];
    let container2 = row.children[2];

    let goal8 = document.getElementById("goal-8").parentElement;
    let goal9 = document.getElementById("goal-9").parentElement;

    container1.appendChild(goal8);
    container2.appendChild(goal9);
} else if (currUrl === reportingStatusPageUrl) {

    // remove "overall reporting status"
    let overallDiv = document.getElementsByClassName("goal goal-overall")[0];
    overallDiv.style.display = "none";

    // remove all goals except for goal 1, 8, and 9
    let statusDelIndexArr = 
        [1, 2, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16];
    let goalStatusLs =
        document.getElementsByClassName("goal reporting-status-item")
    statusDelIndexArr.forEach(idx => {
        currDiv = goalStatusLs[idx]
        currDiv.style.display = 'none';
    });
}
