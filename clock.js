
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");
const ampmEl = document.getElementById("ampm");

function updateClock(){
    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let ampm = "AM";
    if(h > 12){
        h = h - 12;
        ampm = "PM";
    }
    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    hourEl.innerText = h;  
    minuteEl.innerText = m;  
    secondEl.innerText = s;  
    ampmEl.innerText = ampm;  
}

setInterval(updateClock, 1000);
