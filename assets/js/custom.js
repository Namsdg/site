// Add any custom javascript here.

// Mask the goals so that only goal 1,8,9 can show up on the landing page
let imgDelNumArr = [2,3,4,5,6,7,10,11,12,13,14,15,16,17];

let imgDelIdArr = imgDelNumArr.map(num => `goal-${num}`);

imgDelIdArr.forEach(ID => {
    currImg = document.getElementById(ID);
    currImg.style.display = 'none';
});

let row = document.getElementsByClassName("row g-2")[0]

let container1 = row.children[1]
let container2 = row.children[2]

let goal8 = document.getElementById("goal-8").parentElement;
let goal9 = document.getElementById("goal-9").parentElement;

container1.appendChild(goal8);
container2.appendChild(goal9);