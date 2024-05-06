const date = new Date();
let hours = date.getHours();
let mins = date.getMinutes();
let seconds = date.getSeconds();
let meridian = hours - 12 < 0 ? "AM" : "PM";
hours = hours % 12 < 0 ? hours : hours % 12;
document.getElementsByClassName("hours")[0].innerHTML =
  hours?.toString().length === 1 ? "0" + hours : hours;
document.getElementsByClassName("mins")[0].innerHTML =
  mins?.toString().length === 1 ? "0" + mins : mins;
document.getElementsByClassName("seconds")[0].innerHTML =
  seconds?.toString()?.length == 1 ? "0" + seconds : seconds;
document.querySelector(".meridian").innerHTML = meridian;
setInterval(() => {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    mins++;
  }
  if (mins == 60) {
    mins = 0;
    hours++;
  }
  document.getElementsByClassName("seconds")[0].innerHTML =
    seconds?.toString()?.length == 1 ? "0" + seconds : seconds;
  document.getElementsByClassName("mins")[0].innerHTML =
    mins?.toString().length === 1 ? "0" + mins : mins;
  hours = hours % 12 < 0 ? hours : hours % 12;
  document.getElementsByClassName("hours")[0].innerHTML =
    hours.toString().length === 1 ? "0" + hours : hours;
  if ((hours === 12 || hours === 0) && meridian === "AM")
    document.querySelector(".meridian").innerHTML = "PM";
  if ((hours === 12 || hours === 0) && meridian === "PM")
    document.querySelector(".meridian").innerHTML = "AM";
}, 1000);
