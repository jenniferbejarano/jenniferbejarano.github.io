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
var dis = document.getElementsByClassName("accordion");
var i;
for(i = 0; i < dis.length; i++) {
dis[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if(panel.style.display == "block"){
            panel.style.display = "none";
        }
        else{
            panel.style.display = "block";
        }
    });
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

