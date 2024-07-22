let hour_hand = document.querySelector(".hh")
let min_hand = document.querySelector(".mh")
let sec_hand = document.querySelector(".sh")
let dh=document.querySelector(".dh")
let dm=document.querySelector(".dm")
let ds=document.querySelector(".ds")
setInterval(() => {
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let hrotation = 30 * h + m / 2;  // Corrected formula for hour rotation
    let mrotation = 6 * m;
    let srotation = 6 * s;
    hour_hand.style.transform = `rotate(${hrotation}deg)`;
    min_hand.style.transform = `rotate(${mrotation}deg)`;
    sec_hand.style.transform = `rotate(${srotation}deg)`;
    dh.innerHTML=(h<10?'0'+h:h)>12?h-=12:h;
    dm.innerHTML=m<10?'0'+m:m;
    ds.innerHTML=s<10?'0'+s:s;
}, 1000);  // Added interval time of 1000ms


