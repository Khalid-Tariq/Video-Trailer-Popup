let videoBackground = document.querySelector(".video-container");
let video = document.querySelector("video");

let watchbtn = document.querySelector(".watchbtn");
let closebtn = document.querySelector(".closeBtn");

let show = () => {
  videoBackground.style.display = "flex";
  video.play();
};
let hide = () => {
  videoBackground.style.display = "none";
  video.pause();
  video.currentTime = 0;
};

watchbtn.addEventListener("click", show);
closebtn.addEventListener("click", hide);
