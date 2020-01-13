//javascript for webpage

//Add current date to page
function myDate(){

    var d = new Date();
    var dd= d.getDate();
    var mm=d.getMonth()+1;
    var yyyy = d.getFullYear();
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    day = "The current date is "+(mm+"/"+dd+"/"+yyyy);

    document.getElementById("time").innerHTML = day;
}
myDate();

//Display Resume Sections
//Display contact information
document.getElementById("info").onclick = function() {clickInfo()};
function clickInfo() {
    document.getElementById("info").innerHTML;
    var subInfo = document.getElementById("subInfo");
    if (subInfo.style.display === "block") {
        subInfo.style.display = "none";
    } else {
        subInfo.style.display = "block";
    }
}

//Display work experience
document.getElementById("work").onclick = function() {clickWork()};
function clickWork() {
    document.getElementById("work").innerHTML;
    var subWork = document.getElementById("subWork");
    if (subWork.style.display === "block") {
        subWork.style.display = "none";
    } else {
        subWork.style.display = "block";
    }
}

//Display Education
document.getElementById("edu").onclick = function() {clickEdu()};
function clickEdu() {
    document.getElementById("edu").innerHTML;
    var subEdu = document.getElementById("subEdu");
    if (subEdu.style.display === "block") {
        subEdu.style.display = "none";
    } else {
        subEdu.style.display = "block";
    }
}

//Display skills
document.getElementById("skill").onclick = function() {clickSkill()};
function clickSkill() {
    document.getElementById("skill").innerHTML;
    var subSkill = document.getElementById("subSkill");
    if (subSkill.style.display === "block") {
        subSkill.style.display = "none";
    } else {
        subSkill.style.display = "block";
    }
}

function changeRed() {
        document.body.style.backgroundColor = "red"
}
function changeBlue() {
    document.body.style.backgroundColor = "blue"
}
function changeGreen() {
    document.body.style.backgroundColor = "green"
}
function changeClear() {
    document.body.style.backgroundColor = "transparent"
}
function smallText() {
    document.body.style.fontSize = "10px"
}
function medText() {
    document.body.style.fontSize = "20px"
}
function largeText() {
    document.body.style.fontSize = "30px"
}
