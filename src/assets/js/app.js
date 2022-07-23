import gsap from "gsap";
const bar = document.querySelector(".loading__bar--inner");
const loadingPercents = document.querySelector(".loading__counter--number")
let counter = 0;

let barInterval = setInterval(() => {
  bar.style.width = counter + "%";
  loadingPercents.innerHTML = `${counter}%`
  counter++;
  if (counter > 100) {
    clearInterval(barInterval)
    gsap.to(".loading__bar", {
        duration: 5,
        rotate: "90deg",
        left: "1000%",
    })
    gsap.to(".loading__text,.loading__counter", {
        duration: 1,
        opacity: 0,
    })
    gsap.to(".loading__box", {
        duration: 1,
        height: "500px",
        borderRadius: "50%"
    })
    gsap.to(".loading__svg", {
        duration: 10,
        opacity: 1,
        rotate: "360deg"
    })
    gsap.to(".loading__box", {
        duration: 1,
        delay: 2,
        border: "none"
    })
    gsap.to(".loading", {
        duration: 1,
        delay: 2,
        opacity: 0.5,
        background: "transparent"
    })
    gsap.to(".loading__svg", {
        duration: 100,
        delay: 2,
        rotate: "360deg"
    })
}
}, 20);

